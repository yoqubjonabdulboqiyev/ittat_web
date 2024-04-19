// prettier-ignore
export const services = {
     design: ["DES_UI_UX", "DES_WEB", "DES_MOB"],
     mobile: ["MOB_IOS", "MOB_AND", "MOB_FLUT"],
     development: ["DEV_FRONT", "DEV_BACK", "DEV_SOLUTION"],
};

export const works = [
     {
          title: "Arava",
          p: "AR_T",
          desc: `AR_D`,
          aboutApp: "AR_DEV_TYPE",
          linkToWork: "https://play.google.com/store/apps/details?id=com.arava.aravagent",
          gradientColors: ["#ffd78a", "#f4762d"],
     },
     // {
     //      title: "Arava",
     //      p: "Marketplace for everyone.",
     //      desc: `A marketplace through which you can register your shop and sell products.`,
     //      aboutApp: "CRM development, Mobile app development",
     //      linkToWork: "https://play.google.com/store/apps/details?id=com.arava.aravagent",
     //      gradientColors: ["#9bf8f4", "#6f7bf7"],
     // },
     {
          title: "Asaxiy books",
          p: "AS_T",
          desc: "AS_D",
          aboutApp: "AS_DEV_TYPE",
          linkToWork: "https://play.google.com/store/apps/details?id=uz.asaxiy.asaxiybooks",
          gradientColors: ["#07c8f9", "#0d41e1"],
     },
     {
          title: "Birzoom",
          p: "BZ_T",
          desc: `BZ_D`,
          aboutApp: "BZ_DEV_TYPE",
          linkToWork: "https://play.google.com/store/apps/details?id=uz.rounded.birzoomfinal",
          gradientColors: ["#60efff", "#0061ff"],
     },
];

export type workType = {
     title: string;
     p: string;
     desc: string;
     aboutApp: string;
     linkToWork: string;
     gradientColors: string[];
};

export type worksType = workType[];
