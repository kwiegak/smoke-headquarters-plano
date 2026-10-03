export interface NavigationItem {
    title: string;
    to?: string;
    children?: {
        label: string;
        to: string;
    }[];
}

export const mockNavigationItems: NavigationItem[] = [

    {
        title: "10% OFF DISPOSABLES",
        to: "/catalog?promotion=10-off-disposables"
    },

    {
        title: "20% OFF OVERSTOCK",
        to: "/catalog?promotion=20-off-overstock"
    },

    {
        title: "Deals",
        to: "/deals"
    },

    {
        title: "New Arrivals",
        to: "/catalog?filter=new-arrivals"
    },

    {
        title: "Nicotine Pouches",
        to: "/catalog?category=nicotine-pouches"
    },

    {
        title: "Texas Compliant",
        to: "/catalog?filter=texas-compliant"
    },

    {
        title: "Disposables",
        children: [
            {
                label: "All Disposables",
                to: "/catalog?category=disposables"
            },
            {
                label: "Popular Vapes",
                to: "/catalog?category=disposables&filter=popular"
            },
            {
                label: "New Disposables",
                to: "/catalog?category=disposables&filter=new"
            }
        ]
    },

    {
        title: "Tobacco-Free (TFN)",
        to: "/catalog?category=tfn"
    },

    {
        title: "Premium E-Liquids",
        to: "/catalog?category=premium-e-liquids"
    },

    {
        title: "Vapor Products",
        children: [
            {
                label: "Pod Systems",
                to: "/catalog?category=pod-systems"
            },
            {
                label: "Vape Kits",
                to: "/catalog?category=vape-kits"
            },
            {
                label: "Replacement Coils",
                to: "/catalog?category=coils"
            }
        ]
    },

    {
        title: "Alternative Devices",
        to: "/catalog?category=alternative-devices"
    },

    {
        title: "Bulk E-Liquid (Ready To Vape)",
        to: "/catalog?category=bulk-e-liquid"
    },

    {
        title: "E-Liquid Flavor Concentrate Wholesale",
        to: "/catalog?category=flavor-concentrate"
    },

    {
        title: "Nixodine-S",
        to: "/catalog?category=nixodine-s"
    },

    {
        title: "Unflavored Nicotine",
        to: "/catalog?category=unflavored-nicotine"
    },

    {
        title: "DIY",
        to: "/catalog?category=diy"
    },

    {
        title: "Popular Vapes",
        to: "/catalog?filter=popular-vapes"
    }

];  