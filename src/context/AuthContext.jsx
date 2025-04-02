import { createContext, useState, useEffect, useMemo, useCallback } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usersDB, setUsersDB] = useState(() => {
    const storedUsers = localStorage.getItem("kenyafarmers-users");
    return storedUsers ? JSON.parse(storedUsers) : [
      {
        id: 1,
        name: "Demo User",
        email: "user@example.com",
        phone: "+254700000001",
        password: "password",
        createdAt: new Date().toISOString(),
        profile: { bio: "Sample bio", location: "Nairobi", avatar: "/images/avatar.jpg" },
        preferences: { theme: "light", notifications: true },
      },
    ];
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("kenyafarmers-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("kenyafarmers-users", JSON.stringify(usersDB));
  }, [usersDB]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("kenyafarmers-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("kenyafarmers-user");
    }
  }, [user]);

  const register = useCallback(async (userData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (usersDB.some((u) => u.email === userData.email)) {
      throw new Error("Email already registered");
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString(),
      profile: { bio: "", location: "", avatar: "" },
      preferences: { theme: "light", notifications: true },
    };

    setUsersDB((prevUsers) => [...prevUsers, newUser]);
    return newUser;
  }, [usersDB]);

  const login = useCallback(async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = usersDB.find((u) => u.email === email && u.password === password);
    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    setUser(foundUser);
    return foundUser;
  }, [usersDB]);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const updateProfile = useCallback(async (updatedData) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    setUser((prevUser) => {
      if (!prevUser) return prevUser;

      const updatedUser = {
        ...prevUser,
        ...updatedData,
        profile: { ...prevUser.profile, ...updatedData.profile },
      };

      setUsersDB((prevUsers) =>
        prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );

      return updatedUser;
    });
  }, []);

  const updatePreferences = useCallback(async (preferences) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    setUser((prevUser) => {
      if (!prevUser) return prevUser;

      const updatedUser = {
        ...prevUser,
        preferences: { ...prevUser.preferences, ...preferences },
      };

      setUsersDB((prevUsers) =>
        prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );

      return updatedUser;
    });
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    usersDB,
    register,
    login,
    logout,
    updateProfile,
    updatePreferences,
  }), [user, loading, usersDB, register, login, logout, updateProfile, updatePreferences]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
