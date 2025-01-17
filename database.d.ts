// This file contains types for the database layer.

interface DUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  confirmationTokenHash: string | null;
  forgotPasswordTokenHash: string | null;
  forgotPasswordExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// This file contains types for the database layer.
interface DCommunity {
  id: string;
  title: string;
  callsign: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DPost {
  id: string;
  authorId: string;
  communityId: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DCommunitiesUsers {
  userId: string;
  communityId: string;
  createdAt: Date;
  updatedAt: Date;
}
