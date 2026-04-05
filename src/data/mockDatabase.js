import { saveData, getData } from "../utils/storage";

const mockDatabase = {
  users: [
    {
      id: "u-1",
      name: "Ghaluh Wizard",
      email: "ghaluhwizz@gmail.com",
      phone: "6282116304337",
      password: "password123",
      pin: "123456",
      balance: 120000,
      isVerified: true,
      profilePicture:
        "https://ui-avatars.com/api/?name=Ghaluh+Wizard&background=random",
    },
    {
      id: "u-2",
      name: "Robert Fox",
      email: "robert.fox@example.com",
      phone: "2395550108",
      password: "password123",
      pin: "111111",
      balance: 500000,
      isVerified: true,
      profilePicture: "https://i.pravatar.cc/150?u=u2",
    },
    {
      id: "u-3",
      name: "Ali Mustadji",
      email: "limustadji@example.com",
      phone: "6285156534946",
      password: "password123",
      pin: "777777",
      balance: 1000000,
      isVerified: true,
      profilePicture: "https://i.pravatar.cc/150?u=u2",
    },
  ],

  paymentMethods: [
    {
      id: "pm-1",
      name: "Bank Rakyat Indonesia",
      type: "BANK",
      imageUrl: "/assets/images/bri.png",
      isActive: true,
      fee: 1000,
    },
    {
      id: "pm-2",
      name: "Bank Central Asia",
      type: "BANK",
      imageUrl: "/assets/images/bca.png",
      isActive: true,
      fee: 0,
    },
  ],

  transactions: [
    {
      id: "tx-1",
      senderId: "u-2",
      receiverId: "u-1",
      amount: 50000,
      fee: 0,
      total: 50000,
      transactionType: "TRANSFER",
      status: "SUCCESS",
      timestamp: "2026-04-01T10:00:00Z",
      receiverNameSnapshot: "Ghaluh Wizard",
      receiverPhoneSnapshot: "6282116304337",
      notes: "Bayar uang kopi",
    },
  ],

  contacts: [
    {
      id: "c-1",
      ownerId: "u-1",
      contactUserId: "u-2",
      isFavorite: true,
      nameSnapshot: "Robert Fox",
      phoneSnapshot: "2395550108",
    },
  ],
  reviews: [
    {
      id: "rv-1",
      reviewerName: "Sherina Chaw",
      rating: 5,
      comment:
        "I use this app since 2 years ago and this is the best app that I've ever use in my entire life",
      profilePicture: "https://i.pravatar.cc/150?u=sherina",
    },
  ],
};

export const initializeDB = () => {
  if (!getData()) {
    saveData(mockDatabase);
    console.log("Mock Database Initialized!");
  }
};
