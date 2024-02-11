export interface Chef {
    id: number;
    name: string;
    private: string;
    image: string;
    description: string;
    restaurants: Restaurant[];
  }
  
export interface Restaurant {
    name: string;
    image: string;
  }
  