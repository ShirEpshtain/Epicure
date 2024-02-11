export interface Restaurant {
    id: number;
    name: string;
    image: string;
    chef: string;
    openingHours: ({ day: number; open: string | null; close: string | null } | null)[];
    openingDay: string;
    dishes: {
      breakfast: never[];
      launch: never[];
      dinner: never[];
    };
    rating: number;
    address: string | { address: string; branch: string }[];
  }
  
