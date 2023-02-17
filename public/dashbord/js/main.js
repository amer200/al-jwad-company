const cities = [
    {
        "city_id": 1,
        "region_id": 7,
        "name_ar": "تبوك",
        "name_en": "Tabuk",
        "center": [
            28.41463997,
            36.53387003
        ]
    },
    {
        "city_id": 2,
        "region_id": 7,
        "name_ar": "نعمي",
        "name_en": "Na'mi",
        "center": [
            28.30507995,
            35.74931003
        ]
    },
    {
        "city_id": 3,
        "region_id": 1,
        "name_ar": "الرياض",
        "name_en": "Riyadh",
        "center": [
            24.69999996,
            46.73333003
        ]
    },
    {
        "city_id": 4,
        "region_id": 7,
        "name_ar": "حميط",
        "name_en": "Humayt",
        "center": [
            28.65152001,
            35.38013
        ]
    },
    {
        "city_id": 5,
        "region_id": 2,
        "name_ar": "الطائف",
        "name_en": "At Taif",
        "center": [
            21.26848005,
            40.41667003
        ]
    },
    {
        "city_id": 6,
        "region_id": 2,
        "name_ar": "مكة المكرمة",
        "name_en": "Makkah",
        "center": [
            21.42717994,
            39.84349001
        ]
    },
    {
        "city_id": 7,
        "region_id": 7,
        "name_ar": "رجم الطيارة",
        "name_en": "Rajm At Tayarah",
        "center": [
            29.60751999,
            37.23556001
        ]
    },
    {
        "city_id": 8,
        "region_id": 7,
        "name_ar": "الثميد",
        "name_en": "Ath Thumayd",
        "center": [
            29.93183995,
            37.16726002
        ]
    },
    {
        "city_id": 9,
        "region_id": 7,
        "name_ar": "عسيلة",
        "name_en": "'Usaylah",
        "center": [
            29.89939006,
            36.98046006
        ]
    },
    {
        "city_id": 10,
        "region_id": 8,
        "name_ar": "حائل",
        "name_en": "Hail",
        "center": [
            27.53054999,
            41.69733002
        ]
    },
    {
        "city_id": 11,
        "region_id": 4,
        "name_ar": "بريدة",
        "name_en": "Buraidah",
        "center": [
            26.33033999,
            43.97435997
        ]
    },
    {
        "city_id": 12,
        "region_id": 5,
        "name_ar": "الهفوف",
        "name_en": "Al Hafuf",
        "center": [
            25.36655003,
            49.60435986
        ]
    },
    {
        "city_id": 13,
        "region_id": 5,
        "name_ar": "الدمام",
        "name_en": "Dammam",
        "center": [
            26.44199002,
            50.10919981
        ]
    },
    {
        "city_id": 14,
        "region_id": 3,
        "name_ar": "المدينة المنورة",
        "name_en": "Madinah",
        "center": [
            24.47057996,
            39.60781006
        ]
    },
    {
        "city_id": 15,
        "region_id": 6,
        "name_ar": "ابها",
        "name_en": "Abha",
        "center": [
            18.21667,
            42.50000002
        ]
    },
    {
        "city_id": 16,
        "region_id": 7,
        "name_ar": "حالة عمار",
        "name_en": "Halat Ammar",
        "center": [
            29.16381002,
            36.07205999
        ]
    },
    {
        "city_id": 17,
        "region_id": 10,
        "name_ar": "جازان",
        "name_en": "Jazan",
        "center": [
            16.89671995,
            42.55360001
        ]
    },
    {
        "city_id": 18,
        "region_id": 2,
        "name_ar": "جدة",
        "name_en": "Jeddah",
        "center": [
            21.48817996,
            39.18094995
        ]
    },
    {
        "city_id": 19,
        "region_id": 7,
        "name_ar": "الشايب",
        "name_en": "Ash Shayib",
        "center": [
            29.06630999,
            36.68010006
        ]
    },
    {
        "city_id": 20,
        "region_id": 7,
        "name_ar": "الفوهة",
        "name_en": "Al Fawhah",
        "center": [
            28.27168004,
            36.21439994
        ]
    },
    {
        "city_id": 21,
        "region_id": 7,
        "name_ar": "اللوز",
        "name_en": "Al Lawz",
        "center": [
            28.43635995,
            35.52820998
        ]
    },
    {
        "city_id": 22,
        "region_id": 7,
        "name_ar": "عين الأخضر",
        "name_en": "'Ayn Al Akhdar",
        "center": [
            27.55677998,
            36.75101002
        ]
    },
    {
        "city_id": 23,
        "region_id": 7,
        "name_ar": "ذات الحاج",
        "name_en": "Dhat Al Hajj",
        "center": [
            29.05491001,
            36.16480001
        ]
    },
    {
        "city_id": 24,
        "region_id": 1,
        "name_ar": "المجمعة",
        "name_en": "Al Majma'ah",
        "center": [
            25.90742996,
            45.33901994
        ]
    },
    {
        "city_id": 25,
        "region_id": 7,
        "name_ar": "قيال",
        "name_en": "Qiyal",
        "center": [
            28.15173996,
            35.03499001
        ]
    },
    {
        "city_id": 26,
        "region_id": 7,
        "name_ar": "الاخضر",
        "name_en": "Al Akhdar",
        "center": [
            28.10812997,
            37.08190995
        ]
    },
    {
        "city_id": 27,
        "region_id": 7,
        "name_ar": "البديعة",
        "name_en": "Al Badi'ah",
        "center": [
            27.80688002,
            36.52946006
        ]
    },
    {
        "city_id": 28,
        "region_id": 7,
        "name_ar": "مغيرة",
        "name_en": "Mughayrah",
        "center": [
            29.29676999,
            37.66740996
        ]
    },
    {
        "city_id": 29,
        "region_id": 7,
        "name_ar": "الهوجاء",
        "name_en": "Al Hawja'",
        "center": [
            28.98485006,
            38.56971998
        ]
    },
    {
        "city_id": 30,
        "region_id": 7,
        "name_ar": "البديع",
        "name_en": "Al Badi'",
        "center": [
            29.11108995,
            36.00439997
        ]
    },
    {
        "city_id": 31,
        "region_id": 5,
        "name_ar": "الخبر",
        "name_en": "Al Khobar",
        "center": [
            26.31090997,
            50.21074975
        ]
    },
    {
        "city_id": 32,
        "region_id": 7,
        "name_ar": "ابار قنا",
        "name_en": "Abar Qana",
        "center": [
            27.94455999,
            36.35010002
        ]
    },
    {
        "city_id": 33,
        "region_id": 7,
        "name_ar": "الجبعاوية",
        "name_en": "Al Jab'awiyah",
        "center": [
            28.28974995,
            38.65139005
        ]
    },
    {
        "city_id": 34,
        "region_id": 7,
        "name_ar": "الحميضة",
        "name_en": "Al Humaydah",
        "center": [
            29.23575,
            34.93879002
        ]
    },
    {
        "city_id": 35,
        "region_id": 7,
        "name_ar": "البيانة",
        "name_en": "Al Bayyanah",
        "center": [
            29.13392997,
            35.38569995
        ]
    },
    {
        "city_id": 36,
        "region_id": 7,
        "name_ar": "حقل",
        "name_en": "Haql",
        "center": [
            29.30102998,
            34.94863003
        ]
    },
    {
        "city_id": 37,
        "region_id": 7,
        "name_ar": "الدرة",
        "name_en": "Ad Durrah",
        "center": [
            29.35414,
            34.96193
        ]
    },
    {
        "city_id": 38,
        "region_id": 7,
        "name_ar": "الزيتة",
        "name_en": "Az Zaytah",
        "center": [
            28.87198799,
            35.51700285
        ]
    },
    {
        "city_id": 39,
        "region_id": 7,
        "name_ar": "علقان",
        "name_en": "'Alaqan",
        "center": [
            29.05222997,
            35.42471004
        ]
    },
    {
        "city_id": 40,
        "region_id": 7,
        "name_ar": "الوادي الجديد",
        "name_en": "Al Wadi Al Jadid",
        "center": [
            29.15739001,
            35.03154999
        ]
    },
    {
        "city_id": 41,
        "region_id": 7,
        "name_ar": "مليح",
        "name_en": "Mulayh",
        "center": [
            29.16804999,
            35.40096995
        ]
    },
    {
        "city_id": 42,
        "region_id": 7,
        "name_ar": "ابو الحنشان",
        "name_en": "Abu Al Hinshan",
        "center": [
            29.20217996,
            35.19598002
        ]
    },
    {
        "city_id": 43,
        "region_id": 7,
        "name_ar": "مقنا",
        "name_en": "Maqna",
        "center": [
            28.40485995,
            34.73639996
        ]
    },
    {
        "city_id": 44,
        "region_id": 5,
        "name_ar": "ابو قعر",
        "name_en": "Abu Qa'ar",
        "center": [
            28.37527004,
            45.96298004
        ]
    },
    {
        "city_id": 45,
        "region_id": 5,
        "name_ar": "مركز العوجاء",
        "name_en": "Markaz Al 'Awja",
        "center": [
            29.02743004,
            46.43006007
        ]
    },
    {
        "city_id": 46,
        "region_id": 5,
        "name_ar": "مركز العليمة",
        "name_en": "Markaz Al 'Ulayyimah",
        "center": [
            29.07298004,
            46.24333999
        ]
    },
    {
        "city_id": 47,
        "region_id": 5,
        "name_ar": "حفر الباطن",
        "name_en": "Hafar Al Batin",
        "center": [
            28.43750001,
            45.98046997
        ]
    },
    {
        "city_id": 48,
        "region_id": 5,
        "name_ar": "القلت",
        "name_en": "Al Qalt",
        "center": [
            28.55181997,
            45.54736003
        ]
    },
    {
        "city_id": 49,
        "region_id": 5,
        "name_ar": "النظيم",
        "name_en": "An Nadhim",
        "center": [
            28.67294999,
            45.23121003
        ]
    },
    {
        "city_id": 50,
        "region_id": 5,
        "name_ar": "ابن طوالة",
        "name_en": "Ibn Tuwalah",
        "center": [
            28.61736004,
            45.35671001
        ]
    },
    {
        "city_id": 51,
        "region_id": 5,
        "name_ar": "الصداوي",
        "name_en": "As Sidawi",
        "center": [
            28.10972,
            46.7247
        ]
    },
    {
        "city_id": 52,
        "region_id": 5,
        "name_ar": "ام قليب",
        "name_en": "Umm Qulaib",
        "center": [
            27.83416994,
            45.97311998
        ]
    },
    {
        "city_id": 53,
        "region_id": 5,
        "name_ar": "عريفج",
        "name_en": "Urayfij",
        "center": [
            27.81619997,
            45.55191005
        ]
    },
    {
        "city_id": 54,
        "region_id": 5,
        "name_ar": "ابن شرار",
        "name_en": "Ibn Sharar",
        "center": [
            27.83570005,
            46.42083002
        ]
    },
    {
        "city_id": 55,
        "region_id": 5,
        "name_ar": "القيصومة",
        "name_en": "Al Qaysumah",
        "center": [
            28.32198001,
            46.12942998
        ]
    },
    {
        "city_id": 56,
        "region_id": 5,
        "name_ar": "الرقعي الجديدة",
        "name_en": "Ar Ruq'i Al Jadidah",
        "center": [
            28.98338333,
            46.57391667
        ]
    },
    {
        "city_id": 57,
        "region_id": 5,
        "name_ar": "ذبحة",
        "name_en": "Dhabhah",
        "center": [
            27.94057003,
            45.38029995
        ]
    },
    {
        "city_id": 58,
        "region_id": 5,
        "name_ar": "الصفيري",
        "name_en": "As Sufairy",
        "center": [
            28.53147002,
            45.80909006
        ]
    },
    {
        "city_id": 59,
        "region_id": 5,
        "name_ar": "الوايلية",
        "name_en": "Al Wayliyah",
        "center": [
            28.44200002,
            45.79369
        ]
    },
    {
        "city_id": 60,
        "region_id": 5,
        "name_ar": "الفيوان",
        "name_en": "Al Fiwan",
        "center": [
            28.23975,
            45.80167004
        ]
    },
    {
        "city_id": 61,
        "region_id": 5,
        "name_ar": "الحماطيات",
        "name_en": "Al Hamatiyat",
        "center": [
            28.89257998,
            47.53099993
        ]
    },
    {
        "city_id": 62,
        "region_id": 6,
        "name_ar": "خميس مشيط",
        "name_en": "Khamis Mushayt",
        "center": [
            18.30613002,
            42.72976998
        ]
    },
    {
        "city_id": 63,
        "region_id": 5,
        "name_ar": "الجبو",
        "name_en": "Al Jabu",
        "center": [
            28.96981996,
            47.38223997
        ]
    },
    {
        "city_id": 64,
        "region_id": 5,
        "name_ar": "المسناة",
        "name_en": "Al Masnah",
        "center": [
            28.97782005,
            47.14768002
        ]
    },
    {
        "city_id": 65,
        "region_id": 6,
        "name_ar": "احد رفيده",
        "name_en": "Ahad Rifaydah",
        "center": [
            18.17358001,
            42.83663
        ]
    },
    {
        "city_id": 66,
        "region_id": 5,
        "name_ar": "ام عشر الشرقية",
        "name_en": "Umm Ishar Ash Sharqiyyah",
        "center": [
            27.72695001,
            45.06599
        ]
    },
    {
        "city_id": 67,
        "region_id": 5,
        "name_ar": "القطيف",
        "name_en": "Al Qatif",
        "center": [
            26.56387002,
            50.00120987
        ]
    },
    {
        "city_id": 68,
        "region_id": 7,
        "name_ar": "بوهان",
        "name_en": "Buhan",
        "center": [
            27.73134003,
            38.67754006
        ]
    },
    {
        "city_id": 69,
        "region_id": 7,
        "name_ar": "السنانيات",
        "name_en": "As Sananiyat",
        "center": [
            27.34904001,
            38.68147003
        ]
    },
    {
        "city_id": 70,
        "region_id": 7,
        "name_ar": "حزايا",
        "name_en": "Hazaya",
        "center": [
            27.19260998,
            39.53592997
        ]
    },
    {
        "city_id": 71,
        "region_id": 7,
        "name_ar": "أكباد",
        "name_en": "Akbad",
        "center": [
            27.23691995,
            39.25667003
        ]
    },
    {
        "city_id": 72,
        "region_id": 7,
        "name_ar": "بئر الحيز",
        "name_en": "Bir Al Hayz",
        "center": [
            27.50948995,
            39.29335
        ]
    },
    {
        "city_id": 73,
        "region_id": 7,
        "name_ar": "جريداء",
        "name_en": "Jurayda",
        "center": [
            27.69618999,
            38.13729996
        ]
    },
    {
        "city_id": 74,
        "region_id": 7,
        "name_ar": "تيماء",
        "name_en": "Tayma'",
        "center": [
            27.63502,
            38.55060002
        ]
    },
    {
        "city_id": 75,
        "region_id": 7,
        "name_ar": "العسافية",
        "name_en": "Al Assafiyah",
        "center": [
            28.27779001,
            38.97937005
        ]
    },
    {
        "city_id": 76,
        "region_id": 3,
        "name_ar": "عردة",
        "name_en": "'Ardah",
        "center": [
            26.98273003,
            38.37073
        ]
    },
    {
        "city_id": 77,
        "region_id": 7,
        "name_ar": "الكتيب",
        "name_en": "Al Kutaib",
        "center": [
            27.52023997,
            38.85158
        ]
    },
    {
        "city_id": 78,
        "region_id": 7,
        "name_ar": "بئر فجر",
        "name_en": "Bi'r Fajr",
        "center": [
            28.82116003,
            37.86915
        ]
    },
    {
        "city_id": 79,
        "region_id": 7,
        "name_ar": "القليبة",
        "name_en": "Al Qalibah",
        "center": [
            28.37872001,
            37.69301007
        ]
    },
    {
        "city_id": 80,
        "region_id": 4,
        "name_ar": "عنيزة",
        "name_en": "Unayzah",
        "center": [
            26.09155002,
            43.98767004
        ]
    },
    {
        "city_id": 81,
        "region_id": 5,
        "name_ar": "الرافعية",
        "name_en": "Ar Raf'iyah",
        "center": [
            28.50715001,
            48.35748998
        ]
    },
    {
        "city_id": 82,
        "region_id": 5,
        "name_ar": "الكبريت",
        "name_en": "Al Kabarit",
        "center": [
            28.11393004,
            47.88718
        ]
    },
    {
        "city_id": 83,
        "region_id": 5,
        "name_ar": "رغوة",
        "name_en": "Raghwah",
        "center": [
            28.49882,
            48.20407998
        ]
    },
    {
        "city_id": 84,
        "region_id": 5,
        "name_ar": "حمى",
        "name_en": "Hima",
        "center": [
            28.49789999,
            47.87939997
        ]
    },
    {
        "city_id": 85,
        "region_id": 5,
        "name_ar": "الزبر",
        "name_en": "Az Zabr",
        "center": [
            28.56035005,
            47.68656004
        ]
    },
    {
        "city_id": 86,
        "region_id": 5,
        "name_ar": "السفانية",
        "name_en": "As Saffaniyah",
        "center": [
            27.97736997,
            48.74034992
        ]
    },
    {
        "city_id": 87,
        "region_id": 5,
        "name_ar": "المحوى",
        "name_en": "Al Mahawa",
        "center": [
            27.58394001,
            47.20781996
        ]
    },
    {
        "city_id": 88,
        "region_id": 5,
        "name_ar": "أم غور",
        "name_en": "Umm Ghawr",
        "center": [
            27.07205005,
            47.10267999
        ]
    },
    {
        "city_id": 89,
        "region_id": 5,
        "name_ar": "قرية العليا",
        "name_en": "Qaryat Al 'Ulya",
        "center": [
            27.56297,
            47.70039992
        ]
    },
    {
        "city_id": 90,
        "region_id": 5,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            27.02027003,
            47.05991003
        ]
    },
    {
        "city_id": 91,
        "region_id": 5,
        "name_ar": "جرارة",
        "name_en": "Jarrarah",
        "center": [
            27.02106996,
            47.06168006
        ]
    },
    {
        "city_id": 92,
        "region_id": 5,
        "name_ar": "قرية",
        "name_en": "Qurayyah",
        "center": [
            27.49244004,
            47.86960994
        ]
    },
    {
        "city_id": 93,
        "region_id": 5,
        "name_ar": "البويبيات",
        "name_en": "Al Buwaybiyat",
        "center": [
            26.87647003,
            47.11905004
        ]
    },
    {
        "city_id": 94,
        "region_id": 5,
        "name_ar": "السعيرة",
        "name_en": "As Su'ayyirah",
        "center": [
            27.82641004,
            47.51989003
        ]
    },
    {
        "city_id": 95,
        "region_id": 5,
        "name_ar": "مناخ",
        "name_en": "Manakh",
        "center": [
            27.60841995,
            46.31459006
        ]
    },
    {
        "city_id": 96,
        "region_id": 5,
        "name_ar": "الحيرا",
        "name_en": "Al Hayra",
        "center": [
            27.70068001,
            46.63575006
        ]
    },
    {
        "city_id": 97,
        "region_id": 5,
        "name_ar": "ام الشفلح",
        "name_en": "Umm Ash Shifallah",
        "center": [
            27.60863004,
            47.01677996
        ]
    },
    {
        "city_id": 98,
        "region_id": 5,
        "name_ar": "اللهابة",
        "name_en": "Al Lahabah",
        "center": [
            27.25212004,
            46.97898004
        ]
    },
    {
        "city_id": 99,
        "region_id": 5,
        "name_ar": "الفريدة",
        "name_en": "Al Farridah",
        "center": [
            27.18380005,
            46.98244006
        ]
    },
    {
        "city_id": 100,
        "region_id": 5,
        "name_ar": "الشامية",
        "name_en": "Ash Shamiyah",
        "center": [
            27.12077998,
            47.00155001
        ]
    },
    {
        "city_id": 101,
        "region_id": 1,
        "name_ar": "العيطلية",
        "name_en": "Al 'Aytaliyah",
        "center": [
            26.57024005,
            47.08091993
        ]
    },
    {
        "city_id": 102,
        "region_id": 5,
        "name_ar": "سحمة",
        "name_en": "Sihmah",
        "center": [
            26.39243001,
            47.83330998
        ]
    },
    {
        "city_id": 103,
        "region_id": 5,
        "name_ar": "الشملول / ام عقلا",
        "name_en": "Ash Shamlul (Umm Aqla)",
        "center": [
            26.51930995,
            47.33969994
        ]
    },
    {
        "city_id": 104,
        "region_id": 5,
        "name_ar": "ام الهوشات",
        "name_en": "Umm Al Hawshat",
        "center": [
            26.99945,
            47.23080999
        ]
    },
    {
        "city_id": 105,
        "region_id": 5,
        "name_ar": "الشيط",
        "name_en": "Ash Shayyit",
        "center": [
            27.55494997,
            47.27886006
        ]
    },
    {
        "city_id": 106,
        "region_id": 5,
        "name_ar": "العاذرية",
        "name_en": "Al 'Adhiriyah",
        "center": [
            27.05265997,
            47.04075004
        ]
    },
    {
        "city_id": 107,
        "region_id": 5,
        "name_ar": "الشيحية",
        "name_en": "Ash Shihiyah",
        "center": [
            27.07845994,
            47.01776001
        ]
    },
    {
        "city_id": 108,
        "region_id": 1,
        "name_ar": "حزوة / العمانية",
        "name_en": "Hizwah (Al Umaniyah)",
        "center": [
            26.37749004,
            47.32533993
        ]
    },
    {
        "city_id": 109,
        "region_id": 5,
        "name_ar": "القرعاء",
        "name_en": "Al Qar'a",
        "center": [
            27.46099994,
            46.86235001
        ]
    },
    {
        "city_id": 110,
        "region_id": 5,
        "name_ar": "اللصافة",
        "name_en": "Al Lisafah",
        "center": [
            27.62415995,
            46.87004998
        ]
    },
    {
        "city_id": 111,
        "region_id": 5,
        "name_ar": "النقيرة",
        "name_en": "An Nuqayrah",
        "center": [
            27.86851651,
            48.26292494
        ]
    },
    {
        "city_id": 112,
        "region_id": 5,
        "name_ar": "هجرة أولاد حثلين",
        "name_en": "Hijrat Awlad Hithlin",
        "center": [
            27.66292999,
            48.30616993
        ]
    },
    {
        "city_id": 113,
        "region_id": 5,
        "name_ar": "الجبيل",
        "name_en": "Al Jubail",
        "center": [
            26.99921004,
            49.67046985
        ]
    },
    {
        "city_id": 114,
        "region_id": 5,
        "name_ar": "فرزان",
        "name_en": "Farzan",
        "center": [
            26.17769002,
            49.19211994
        ]
    },
    {
        "city_id": 115,
        "region_id": 5,
        "name_ar": "النعيرية",
        "name_en": "An Nu'ayriyah",
        "center": [
            27.47569997,
            48.47742996
        ]
    },
    {
        "city_id": 116,
        "region_id": 5,
        "name_ar": "ام ضليع",
        "name_en": "Umm Dulay'",
        "center": [
            27.08662005,
            48.40824001
        ]
    },
    {
        "city_id": 117,
        "region_id": 5,
        "name_ar": "مليجة",
        "name_en": "Mulayjah",
        "center": [
            27.27414002,
            48.42645992
        ]
    },
    {
        "city_id": 118,
        "region_id": 5,
        "name_ar": "الصرار",
        "name_en": "As Sarrar",
        "center": [
            26.99419995,
            48.39344992
        ]
    },
    {
        "city_id": 119,
        "region_id": 5,
        "name_ar": "حنيذ",
        "name_en": "Hanidh",
        "center": [
            26.58137003,
            48.63376992
        ]
    },
    {
        "city_id": 120,
        "region_id": 5,
        "name_ar": "مغطي",
        "name_en": "Mughati",
        "center": [
            26.67212002,
            48.63705994
        ]
    },
    {
        "city_id": 121,
        "region_id": 5,
        "name_ar": "شفية",
        "name_en": "Shifiyah",
        "center": [
            26.39970003,
            48.74898
        ]
    },
    {
        "city_id": 122,
        "region_id": 5,
        "name_ar": "عتيق",
        "name_en": "Utayyiq",
        "center": [
            27.17280003,
            48.60460998
        ]
    },
    {
        "city_id": 123,
        "region_id": 5,
        "name_ar": "الحسي",
        "name_en": "Al Husayy",
        "center": [
            27.10895996,
            48.52134992
        ]
    },
    {
        "city_id": 124,
        "region_id": 5,
        "name_ar": "ثاج",
        "name_en": "Thaj",
        "center": [
            26.87541997,
            48.71989
        ]
    },
    {
        "city_id": 125,
        "region_id": 5,
        "name_ar": "الحناة",
        "name_en": "Al Hinnah",
        "center": [
            26.93391005,
            48.75039991
        ]
    },
    {
        "city_id": 126,
        "region_id": 5,
        "name_ar": "الكهفة",
        "name_en": "Al Kahafah",
        "center": [
            27.38165997,
            48.33717993
        ]
    },
    {
        "city_id": 127,
        "region_id": 5,
        "name_ar": "الصحاف",
        "name_en": "As Sahaf",
        "center": [
            26.93735997,
            48.58532002
        ]
    },
    {
        "city_id": 128,
        "region_id": 5,
        "name_ar": "العيينة",
        "name_en": "Al Uyainah",
        "center": [
            26.81173997,
            48.34168999
        ]
    },
    {
        "city_id": 129,
        "region_id": 5,
        "name_ar": "القليب",
        "name_en": "Al Qulayyib",
        "center": [
            26.76131998,
            48.28211993
        ]
    },
    {
        "city_id": 130,
        "region_id": 5,
        "name_ar": "الونان",
        "name_en": "Al Wannan",
        "center": [
            26.91900998,
            48.42432993
        ]
    },
    {
        "city_id": 131,
        "region_id": 5,
        "name_ar": "غنوى",
        "name_en": "Ghanwa",
        "center": [
            27.01919004,
            48.46730002
        ]
    },
    {
        "city_id": 132,
        "region_id": 5,
        "name_ar": "الزغين",
        "name_en": "Az Zughayn",
        "center": [
            26.97966004,
            48.42930001
        ]
    },
    {
        "city_id": 133,
        "region_id": 5,
        "name_ar": "نطاع",
        "name_en": "Nita'",
        "center": [
            27.21709996,
            48.42015999
        ]
    },
    {
        "city_id": 134,
        "region_id": 5,
        "name_ar": "ام الحمام",
        "name_en": "Umm Al Hamam",
        "center": [
            26.00530001,
            48.82015998
        ]
    },
    {
        "city_id": 135,
        "region_id": 5,
        "name_ar": "ام ربيعة",
        "name_en": "Umm Rubay'ah",
        "center": [
            26.03492995,
            48.85324991
        ]
    },
    {
        "city_id": 136,
        "region_id": 5,
        "name_ar": "ابو حدرية",
        "name_en": "Abu Hadriyah",
        "center": [
            27.30471999,
            48.98758986
        ]
    },
    {
        "city_id": 137,
        "region_id": 5,
        "name_ar": "منيفة",
        "name_en": "Munifah",
        "center": [
            27.61518003,
            48.99003989
        ]
    },
    {
        "city_id": 138,
        "region_id": 1,
        "name_ar": "الافلاج",
        "name_en": "Al Aflaj",
        "center": [
            22.306935,
            47.16373416
        ]
    },
    {
        "city_id": 139,
        "region_id": 4,
        "name_ar": "خيطان",
        "name_en": "Khaitan",
        "center": [
            25.5898969,
            42.91614033
        ]
    },
    {
        "city_id": 140,
        "region_id": 1,
        "name_ar": "الوسيعة",
        "name_en": "Al Wasi'ah",
        "center": [
            25.73025998,
            45.84914995
        ]
    },
    {
        "city_id": 141,
        "region_id": 1,
        "name_ar": "تمرية",
        "name_en": "Tamriyah",
        "center": [
            25.66715999,
            45.93998005
        ]
    },
    {
        "city_id": 142,
        "region_id": 1,
        "name_ar": "ابو خسيفاء",
        "name_en": "Abu Khusayfa",
        "center": [
            25.76873006,
            45.85416998
        ]
    },
    {
        "city_id": 143,
        "region_id": 1,
        "name_ar": "النخيل",
        "name_en": "An Nakhil",
        "center": [
            26.54017997,
            45.19484006
        ]
    },
    {
        "city_id": 144,
        "region_id": 1,
        "name_ar": "السحيمي",
        "name_en": "As Suhaymi",
        "center": [
            26.64133997,
            45.26953998
        ]
    },
    {
        "city_id": 145,
        "region_id": 1,
        "name_ar": "مصدة",
        "name_en": "Masadah",
        "center": [
            26.64405006,
            45.25225
        ]
    },
    {
        "city_id": 146,
        "region_id": 1,
        "name_ar": "أم سديرة",
        "name_en": "Umm Sudayrah",
        "center": [
            26.86913001,
            45.24192004
        ]
    },
    {
        "city_id": 147,
        "region_id": 1,
        "name_ar": "التنهاة",
        "name_en": "At Tanhah",
        "center": [
            26.09030998,
            46.49696
        ]
    },
    {
        "city_id": 148,
        "region_id": 1,
        "name_ar": "قري التويم",
        "name_en": "Qura At Tuwaym",
        "center": [
            25.68651001,
            45.50802995
        ]
    },
    {
        "city_id": 149,
        "region_id": 1,
        "name_ar": "الشحمة",
        "name_en": "Ash Shahmah",
        "center": [
            26.11493,
            45.80473995
        ]
    },
    {
        "city_id": 150,
        "region_id": 1,
        "name_ar": "الودي",
        "name_en": "Al Wuday",
        "center": [
            25.58780998,
            45.74580005
        ]
    },
    {
        "city_id": 151,
        "region_id": 1,
        "name_ar": "جوي",
        "name_en": "Juwayy",
        "center": [
            25.82042999,
            45.40838005
        ]
    },
    {
        "city_id": 152,
        "region_id": 1,
        "name_ar": "مقبلة",
        "name_en": "Muqbilah",
        "center": [
            25.58579995,
            45.62961998
        ]
    },
    {
        "city_id": 153,
        "region_id": 1,
        "name_ar": "حرمة",
        "name_en": "Harmah",
        "center": [
            25.92815003,
            45.33966995
        ]
    },
    {
        "city_id": 154,
        "region_id": 7,
        "name_ar": "المعظم",
        "name_en": "Al Ma'dham",
        "center": [
            27.75300002,
            37.50671002
        ]
    },
    {
        "city_id": 155,
        "region_id": 1,
        "name_ar": "جراب",
        "name_en": "Jirab",
        "center": [
            26.77443003,
            44.99074
        ]
    },
    {
        "city_id": 156,
        "region_id": 1,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            26.44051995,
            45.36360001
        ]
    },
    {
        "city_id": 157,
        "region_id": 1,
        "name_ar": "النغيق",
        "name_en": "An Nughayq",
        "center": [
            26.58567005,
            45.26366005
        ]
    },
    {
        "city_id": 158,
        "region_id": 1,
        "name_ar": "حويمضة",
        "name_en": "Huwaimidah",
        "center": [
            26.47432996,
            45.16722995
        ]
    },
    {
        "city_id": 159,
        "region_id": 1,
        "name_ar": "البتيراء",
        "name_en": "Al Butaira'",
        "center": [
            26.42078005,
            45.33515003
        ]
    },
    {
        "city_id": 160,
        "region_id": 1,
        "name_ar": "المشاش",
        "name_en": "Al Mishash",
        "center": [
            26.42088999,
            45.16640005
        ]
    },
    {
        "city_id": 161,
        "region_id": 1,
        "name_ar": "الفروثي",
        "name_en": "Al Furuthi",
        "center": [
            25.77452005,
            45.15983
        ]
    },
    {
        "city_id": 162,
        "region_id": 1,
        "name_ar": "جلاجل",
        "name_en": "Jalajil",
        "center": [
            25.68160004,
            45.45567002
        ]
    },
    {
        "city_id": 163,
        "region_id": 1,
        "name_ar": "الدخيلة",
        "name_en": "Ad Dakhilah",
        "center": [
            25.63157996,
            45.56078003
        ]
    },
    {
        "city_id": 164,
        "region_id": 1,
        "name_ar": "الحصون",
        "name_en": "Al Husun",
        "center": [
            25.60801002,
            45.59939999
        ]
    },
    {
        "city_id": 165,
        "region_id": 1,
        "name_ar": "حوطة سدير",
        "name_en": "Hawtat Sudair",
        "center": [
            25.59691998,
            45.61963003
        ]
    },
    {
        "city_id": 166,
        "region_id": 1,
        "name_ar": "روضة سدير",
        "name_en": "Rawdat Sudair",
        "center": [
            25.61756004,
            45.55758002
        ]
    },
    {
        "city_id": 167,
        "region_id": 1,
        "name_ar": "تمير",
        "name_en": "Tumair",
        "center": [
            25.70913996,
            45.86926994
        ]
    },
    {
        "city_id": 168,
        "region_id": 1,
        "name_ar": "الارطاوية",
        "name_en": "Al Artawiyah",
        "center": [
            26.51466999,
            45.34978007
        ]
    },
    {
        "city_id": 169,
        "region_id": 1,
        "name_ar": "العمار",
        "name_en": "Al 'Amar",
        "center": [
            25.83834001,
            45.12781003
        ]
    },
    {
        "city_id": 170,
        "region_id": 1,
        "name_ar": "الخيس",
        "name_en": "Al Khis",
        "center": [
            25.87509996,
            45.11238998
        ]
    },
    {
        "city_id": 171,
        "region_id": 1,
        "name_ar": "المعشبة",
        "name_en": "Al Ma'ashbah",
        "center": [
            25.56682002,
            45.39208996
        ]
    },
    {
        "city_id": 172,
        "region_id": 1,
        "name_ar": "التويم",
        "name_en": "At Tuwaym",
        "center": [
            25.66192995,
            45.54133997
        ]
    },
    {
        "city_id": 173,
        "region_id": 1,
        "name_ar": "الخطامة",
        "name_en": "Al Khutamah",
        "center": [
            25.62114,
            45.69283994
        ]
    },
    {
        "city_id": 174,
        "region_id": 1,
        "name_ar": "رويضة بوضاء",
        "name_en": "Ruwaydah Buwadaa",
        "center": [
            25.83690264,
            45.66253139
        ]
    },
    {
        "city_id": 175,
        "region_id": 1,
        "name_ar": "الشعب",
        "name_en": "Ash Shi'b",
        "center": [
            25.91891005,
            45.90355998
        ]
    },
    {
        "city_id": 176,
        "region_id": 1,
        "name_ar": "عشيرة سدير",
        "name_en": "Asharat Sudair",
        "center": [
            25.59023996,
            45.77008998
        ]
    },
    {
        "city_id": 177,
        "region_id": 1,
        "name_ar": "الجنيفي",
        "name_en": "Al Junayfi",
        "center": [
            25.57098003,
            45.64539997
        ]
    },
    {
        "city_id": 178,
        "region_id": 1,
        "name_ar": "العطار",
        "name_en": "Al 'Attar",
        "center": [
            25.56200995,
            45.64020003
        ]
    },
    {
        "city_id": 179,
        "region_id": 1,
        "name_ar": "ام الجماجم",
        "name_en": "Umm Al Jamajim",
        "center": [
            26.89445997,
            45.32275003
        ]
    },
    {
        "city_id": 180,
        "region_id": 1,
        "name_ar": "مشلح",
        "name_en": "Mishlah",
        "center": [
            26.83923998,
            45.22719004
        ]
    },
    {
        "city_id": 181,
        "region_id": 1,
        "name_ar": "ام رجوم",
        "name_en": "Umm Rujum",
        "center": [
            26.15485,
            46.15951995
        ]
    },
    {
        "city_id": 182,
        "region_id": 1,
        "name_ar": "الرويضة",
        "name_en": "Ar Ruwaydah",
        "center": [
            25.87720999,
            45.15294999
        ]
    },
    {
        "city_id": 183,
        "region_id": 1,
        "name_ar": "الفيصلية",
        "name_en": "Al Faysaliyah",
        "center": [
            25.65386998,
            45.55145002
        ]
    },
    {
        "city_id": 184,
        "region_id": 1,
        "name_ar": "بوضاء",
        "name_en": "Bawda'",
        "center": [
            25.83080998,
            45.69030995
        ]
    },
    {
        "city_id": 185,
        "region_id": 1,
        "name_ar": "الحائر",
        "name_en": "Al Hair",
        "center": [
            25.79555005,
            45.38180994
        ]
    },
    {
        "city_id": 186,
        "region_id": 1,
        "name_ar": "وشي",
        "name_en": "Wushayy",
        "center": [
            25.80537995,
            45.26833002
        ]
    },
    {
        "city_id": 187,
        "region_id": 1,
        "name_ar": "عودة سدير",
        "name_en": "'Awdat Sudayr",
        "center": [
            25.55358004,
            45.67931999
        ]
    },
    {
        "city_id": 188,
        "region_id": 1,
        "name_ar": "مبايض",
        "name_en": "Mubayid",
        "center": [
            25.83234998,
            45.80760001
        ]
    },
    {
        "city_id": 189,
        "region_id": 1,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            26.42927003,
            45.58252995
        ]
    },
    {
        "city_id": 190,
        "region_id": 3,
        "name_ar": "دبدبة فضلاء",
        "name_en": "Dibdibbat Fudala",
        "center": [
            26.38879002,
            37.85086006
        ]
    },
    {
        "city_id": 191,
        "region_id": 7,
        "name_ar": "الحجب",
        "name_en": "Al Hajab",
        "center": [
            27.33841002,
            36.93359
        ]
    },
    {
        "city_id": 192,
        "region_id": 7,
        "name_ar": "الضلفة",
        "name_en": "Adh Dhalfah",
        "center": [
            27.31663001,
            36.98417999
        ]
    },
    {
        "city_id": 193,
        "region_id": 3,
        "name_ar": "أبو طاقة",
        "name_en": "Abu Taqah",
        "center": [
            26.99849001,
            37.84000002
        ]
    },
    {
        "city_id": 194,
        "region_id": 3,
        "name_ar": "العين الجديدة",
        "name_en": "Al 'Ayn Al Jadidah",
        "center": [
            25.86977005,
            38.21434002
        ]
    },
    {
        "city_id": 195,
        "region_id": 3,
        "name_ar": "قعرة الدومة",
        "name_en": "Qa'arah Al Daumah",
        "center": [
            25.60649001,
            38.45950997
        ]
    },
    {
        "city_id": 196,
        "region_id": 3,
        "name_ar": "أم زرب",
        "name_en": "Umm Zarb",
        "center": [
            25.63649006,
            38.44954004
        ]
    },
    {
        "city_id": 197,
        "region_id": 3,
        "name_ar": "هدية",
        "name_en": "Hadiyah",
        "center": [
            25.53953005,
            38.74286001
        ]
    },
    {
        "city_id": 198,
        "region_id": 3,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            25.67046002,
            38.15320003
        ]
    },
    {
        "city_id": 199,
        "region_id": 3,
        "name_ar": "العلا",
        "name_en": "Al Ula",
        "center": [
            26.63478003,
            37.90992002
        ]
    },
    {
        "city_id": 200,
        "region_id": 7,
        "name_ar": "الجهراء",
        "name_en": "Al Jahara",
        "center": [
            26.86859002,
            38.88936994
        ]
    },
    {
        "city_id": 201,
        "region_id": 7,
        "name_ar": "رحيب",
        "name_en": "Ruhayb",
        "center": [
            27.37999003,
            36.96832995
        ]
    },
    {
        "city_id": 202,
        "region_id": 3,
        "name_ar": "شلال",
        "name_en": "Shalal",
        "center": [
            26.78664,
            37.79625996
        ]
    },
    {
        "city_id": 203,
        "region_id": 3,
        "name_ar": "ضاعا",
        "name_en": "Da'a",
        "center": [
            26.13278004,
            38.49138999
        ]
    },
    {
        "city_id": 204,
        "region_id": 3,
        "name_ar": "جيدة",
        "name_en": "Jaydah",
        "center": [
            26.14861001,
            37.44201996
        ]
    },
    {
        "city_id": 205,
        "region_id": 3,
        "name_ar": "قلبان عشرة",
        "name_en": "Qulban 'Isharah",
        "center": [
            26.08242998,
            38.85371994
        ]
    },
    {
        "city_id": 206,
        "region_id": 7,
        "name_ar": "النجيل",
        "name_en": "An Najil",
        "center": [
            26.80595005,
            37.36859999
        ]
    },
    {
        "city_id": 207,
        "region_id": 3,
        "name_ar": "الرزيقية",
        "name_en": "Ar Ruzayqiyah",
        "center": [
            26.60867999,
            37.92323005
        ]
    },
    {
        "city_id": 208,
        "region_id": 3,
        "name_ar": "الحميدية",
        "name_en": "Al Hamidiyah",
        "center": [
            26.59329996,
            37.93558002
        ]
    },
    {
        "city_id": 209,
        "region_id": 3,
        "name_ar": "صدر",
        "name_en": "Sadr",
        "center": [
            26.57358995,
            37.92593001
        ]
    },
    {
        "city_id": 210,
        "region_id": 3,
        "name_ar": "مغيراء",
        "name_en": "Mughayra'",
        "center": [
            26.46541998,
            38.07779005
        ]
    },
    {
        "city_id": 211,
        "region_id": 3,
        "name_ar": "قصيب ابو سيال",
        "name_en": "Qusayb Abu Siyal",
        "center": [
            26.33720998,
            37.92682994
        ]
    },
    {
        "city_id": 212,
        "region_id": 7,
        "name_ar": "ابو اراكة",
        "name_en": "Abu Arakah",
        "center": [
            27.10459995,
            37.18591001
        ]
    },
    {
        "city_id": 213,
        "region_id": 3,
        "name_ar": "مدائن الصالح",
        "name_en": "Madain As Salih",
        "center": [
            26.81130995,
            37.94236004
        ]
    },
    {
        "city_id": 214,
        "region_id": 3,
        "name_ar": "عورش",
        "name_en": "Awarsh",
        "center": [
            26.70110004,
            37.64757994
        ]
    },
    {
        "city_id": 215,
        "region_id": 7,
        "name_ar": "النشيفة",
        "name_en": "An Nushayfah",
        "center": [
            27.02223999,
            37.29336003
        ]
    },
    {
        "city_id": 216,
        "region_id": 3,
        "name_ar": "الزباير",
        "name_en": "Az Zubayir",
        "center": [
            25.63371004,
            38.32117999
        ]
    },
    {
        "city_id": 217,
        "region_id": 3,
        "name_ar": "الضليعة",
        "name_en": "Ad Dulay'ah",
        "center": [
            25.67305997,
            38.32757994
        ]
    },
    {
        "city_id": 218,
        "region_id": 3,
        "name_ar": "متان العريقة",
        "name_en": "Mitan Al 'Urayqah",
        "center": [
            25.72064004,
            38.37003004
        ]
    },
    {
        "city_id": 219,
        "region_id": 3,
        "name_ar": "الابرق",
        "name_en": "Al Abraq",
        "center": [
            25.58886995,
            38.62527997
        ]
    },
    {
        "city_id": 220,
        "region_id": 3,
        "name_ar": "اميرة",
        "name_en": "Amirah",
        "center": [
            25.61915005,
            38.10606994
        ]
    },
    {
        "city_id": 221,
        "region_id": 3,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            25.83177998,
            38.1778
        ]
    },
    {
        "city_id": 222,
        "region_id": 3,
        "name_ar": "كتيفة مصادر",
        "name_en": "Kutayfat Masadir",
        "center": [
            26.07622002,
            38.06934995
        ]
    },
    {
        "city_id": 223,
        "region_id": 7,
        "name_ar": "الراس",
        "name_en": "Ar Ras",
        "center": [
            26.38186001,
            36.41916003
        ]
    },
    {
        "city_id": 224,
        "region_id": 7,
        "name_ar": "البيت",
        "name_en": "Al Bayt",
        "center": [
            26.24005995,
            36.57170003
        ]
    },
    {
        "city_id": 225,
        "region_id": 7,
        "name_ar": "بئر بحار",
        "name_en": "Bir Bahar",
        "center": [
            27.06543999,
            36.87280997
        ]
    },
    {
        "city_id": 226,
        "region_id": 7,
        "name_ar": "سبحان",
        "name_en": "Sabhan",
        "center": [
            26.49028005,
            37.02686
        ]
    },
    {
        "city_id": 227,
        "region_id": 5,
        "name_ar": "الظهران",
        "name_en": "Dhahran",
        "center": [
            26.30357996,
            50.12261974
        ]
    },
    {
        "city_id": 228,
        "region_id": 7,
        "name_ar": "أم الريح",
        "name_en": "Umm Ar Rih",
        "center": [
            26.26950996,
            36.79774999
        ]
    },
    {
        "city_id": 229,
        "region_id": 7,
        "name_ar": "حرم",
        "name_en": "Haram",
        "center": [
            26.47271001,
            36.36253997
        ]
    },
    {
        "city_id": 230,
        "region_id": 7,
        "name_ar": "عكوز",
        "name_en": "'Akuz",
        "center": [
            26.60582999,
            36.38037994
        ]
    },
    {
        "city_id": 231,
        "region_id": 7,
        "name_ar": "السديد",
        "name_en": "As Sudayd",
        "center": [
            26.30278,
            37.24328006
        ]
    },
    {
        "city_id": 232,
        "region_id": 7,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            26.56325001,
            36.83499996
        ]
    },
    {
        "city_id": 233,
        "region_id": 7,
        "name_ar": "الوجه",
        "name_en": "Al Wajh",
        "center": [
            26.24021994,
            36.47300001
        ]
    },
    {
        "city_id": 234,
        "region_id": 7,
        "name_ar": "النابع",
        "name_en": "An Nabi'",
        "center": [
            26.39175002,
            36.9752
        ]
    },
    {
        "city_id": 235,
        "region_id": 7,
        "name_ar": "عنتر",
        "name_en": "'Antar",
        "center": [
            26.62850006,
            36.28452998
        ]
    },
    {
        "city_id": 236,
        "region_id": 7,
        "name_ar": "المنجور",
        "name_en": "Al Manjur",
        "center": [
            25.95002002,
            37.21525005
        ]
    },
    {
        "city_id": 237,
        "region_id": 7,
        "name_ar": "ابا القزاز",
        "name_en": "Aba Al Qizaz",
        "center": [
            26.77393005,
            36.68633006
        ]
    },
    {
        "city_id": 238,
        "region_id": 7,
        "name_ar": "بداء",
        "name_en": "Bada'",
        "center": [
            26.84101,
            36.91113996
        ]
    },
    {
        "city_id": 239,
        "region_id": 7,
        "name_ar": "خرباء",
        "name_en": "Khurba'",
        "center": [
            26.15132998,
            37.30372006
        ]
    },
    {
        "city_id": 240,
        "region_id": 7,
        "name_ar": "الكر",
        "name_en": "Al Kurr",
        "center": [
            26.61113006,
            36.88648002
        ]
    },
    {
        "city_id": 241,
        "region_id": 5,
        "name_ar": "برق الأسيدية",
        "name_en": "Burq Al Usaydiyah",
        "center": [
            26.04407,
            49.48055994
        ]
    },
    {
        "city_id": 242,
        "region_id": 5,
        "name_ar": "الفاضلي",
        "name_en": "Al Fadili",
        "center": [
            26.98663006,
            49.19429986
        ]
    },
    {
        "city_id": 243,
        "region_id": 5,
        "name_ar": "بقيق",
        "name_en": "Buqayq",
        "center": [
            25.94465995,
            49.68411985
        ]
    },
    {
        "city_id": 244,
        "region_id": 5,
        "name_ar": "قرية",
        "name_en": "Qurayyah",
        "center": [
            25.93669,
            50.12007974
        ]
    },
    {
        "city_id": 245,
        "region_id": 5,
        "name_ar": "ظلوم",
        "name_en": "Dhulum",
        "center": [
            25.89678001,
            50.1056498
        ]
    },
    {
        "city_id": 246,
        "region_id": 5,
        "name_ar": "عين دار الجديده",
        "name_en": "New 'Ayn  Dar",
        "center": [
            25.94276667,
            49.42911667
        ]
    },
    {
        "city_id": 247,
        "region_id": 5,
        "name_ar": "عين دار القديمة",
        "name_en": "Old 'Ayn  Dar",
        "center": [
            25.99294997,
            49.39361996
        ]
    },
    {
        "city_id": 248,
        "region_id": 5,
        "name_ar": "علاة",
        "name_en": "Allat",
        "center": [
            26.49086001,
            49.82298988
        ]
    },
    {
        "city_id": 249,
        "region_id": 5,
        "name_ar": "فودة",
        "name_en": "Fudah",
        "center": [
            25.94468953,
            49.49754315
        ]
    },
    {
        "city_id": 250,
        "region_id": 5,
        "name_ar": "الكدادية",
        "name_en": "Al Kadadiyah",
        "center": [
            25.96327005,
            49.49497988
        ]
    },
    {
        "city_id": 251,
        "region_id": 5,
        "name_ar": "يكرب",
        "name_en": "Yakrub",
        "center": [
            25.98981995,
            49.47802995
        ]
    },
    {
        "city_id": 252,
        "region_id": 5,
        "name_ar": "الجابرية",
        "name_en": "Al Jabiriyah",
        "center": [
            26.02133005,
            49.4646199
        ]
    },
    {
        "city_id": 253,
        "region_id": 5,
        "name_ar": "صلاصل",
        "name_en": "Salasil",
        "center": [
            26.07993,
            49.44913988
        ]
    },
    {
        "city_id": 254,
        "region_id": 5,
        "name_ar": "شهيلاء",
        "name_en": "Shuhayla'",
        "center": [
            26.06303998,
            49.42412983
        ]
    },
    {
        "city_id": 255,
        "region_id": 5,
        "name_ar": "عصيفرات",
        "name_en": "Usayfirat",
        "center": [
            26.11534995,
            49.43908993
        ]
    },
    {
        "city_id": 256,
        "region_id": 6,
        "name_ar": "طريب",
        "name_en": "Tarib",
        "center": [
            18.5667607,
            43.20690401
        ]
    },
    {
        "city_id": 257,
        "region_id": 5,
        "name_ar": "الدغيمية",
        "name_en": "Ad Dughaymiyah",
        "center": [
            25.86236667,
            49.5961
        ]
    },
    {
        "city_id": 258,
        "region_id": 1,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            26.27595005,
            44.81770003
        ]
    },
    {
        "city_id": 259,
        "region_id": 1,
        "name_ar": "المنسف",
        "name_en": "Al Mansaf",
        "center": [
            26.53583333,
            44.6734
        ]
    },
    {
        "city_id": 260,
        "region_id": 1,
        "name_ar": "منسية الغربية",
        "name_en": "Mansiyah Al Gharbiyah",
        "center": [
            26.52645998,
            44.65896996
        ]
    },
    {
        "city_id": 261,
        "region_id": 1,
        "name_ar": "عشيرة",
        "name_en": "'Ushayrah",
        "center": [
            26.56788997,
            44.61678003
        ]
    },
    {
        "city_id": 262,
        "region_id": 1,
        "name_ar": "الفيصلية",
        "name_en": "Al Faysaliyah",
        "center": [
            26.58421005,
            44.62550005
        ]
    },
    {
        "city_id": 263,
        "region_id": 1,
        "name_ar": "الثوير",
        "name_en": "Ath Thuwayr",
        "center": [
            26.60053333,
            44.63663333
        ]
    },
    {
        "city_id": 264,
        "region_id": 1,
        "name_ar": "زليغف",
        "name_en": "Zulayghif",
        "center": [
            26.30100004,
            44.76191
        ]
    },
    {
        "city_id": 265,
        "region_id": 1,
        "name_ar": "مزارع الاثلة",
        "name_en": "Mazari' Al Athlah",
        "center": [
            26.30650994,
            44.71492996
        ]
    },
    {
        "city_id": 266,
        "region_id": 1,
        "name_ar": "مزارع الرحية",
        "name_en": "Mazari' Ar Ruhayyah",
        "center": [
            26.34746004,
            44.71174995
        ]
    },
    {
        "city_id": 267,
        "region_id": 1,
        "name_ar": "قصيباء",
        "name_en": "Qusayba",
        "center": [
            26.37950998,
            44.68017005
        ]
    },
    {
        "city_id": 268,
        "region_id": 1,
        "name_ar": "مزرعة بيضاء نثيل",
        "name_en": "Mazra'at Bayda Nuthayl",
        "center": [
            26.43679003,
            44.70068999
        ]
    },
    {
        "city_id": 269,
        "region_id": 1,
        "name_ar": "امارة المستوي",
        "name_en": "Imarat Al Mistawi",
        "center": [
            26.21608002,
            44.57902999
        ]
    },
    {
        "city_id": 270,
        "region_id": 1,
        "name_ar": "الزلفي",
        "name_en": "Az Zulfi",
        "center": [
            26.29711002,
            44.80577002
        ]
    },
    {
        "city_id": 271,
        "region_id": 1,
        "name_ar": "سمنان",
        "name_en": "Samnan",
        "center": [
            26.28440998,
            44.86098994
        ]
    },
    {
        "city_id": 272,
        "region_id": 1,
        "name_ar": "علقة",
        "name_en": "'Iliqah",
        "center": [
            26.33916997,
            44.78377995
        ]
    },
    {
        "city_id": 273,
        "region_id": 3,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            25.88811004,
            39.32945997
        ]
    },
    {
        "city_id": 274,
        "region_id": 3,
        "name_ar": "المضاويح",
        "name_en": "Al Mudhawih",
        "center": [
            25.86355003,
            39.30057002
        ]
    },
    {
        "city_id": 275,
        "region_id": 3,
        "name_ar": "ابا البقر",
        "name_en": "Aba Al Baqar",
        "center": [
            25.81617002,
            39.26416
        ]
    },
    {
        "city_id": 276,
        "region_id": 3,
        "name_ar": "الحرضة",
        "name_en": "Al Hardhah",
        "center": [
            25.77540004,
            39.27776996
        ]
    },
    {
        "city_id": 277,
        "region_id": 3,
        "name_ar": "الضرس",
        "name_en": "Adh Dhars",
        "center": [
            25.62951,
            39.26406999
        ]
    },
    {
        "city_id": 278,
        "region_id": 3,
        "name_ar": "الخريبة",
        "name_en": "Al Khuraybah",
        "center": [
            25.61798006,
            39.19373998
        ]
    },
    {
        "city_id": 279,
        "region_id": 3,
        "name_ar": "العرائد",
        "name_en": "Al 'Araid",
        "center": [
            26.0437,
            39.46546667
        ]
    },
    {
        "city_id": 280,
        "region_id": 3,
        "name_ar": "غمرة",
        "name_en": "Ghamrah",
        "center": [
            25.97486004,
            39.38987998
        ]
    },
    {
        "city_id": 281,
        "region_id": 3,
        "name_ar": "العقيلة",
        "name_en": "Al 'Uqaylah",
        "center": [
            25.93371005,
            39.36921003
        ]
    },
    {
        "city_id": 282,
        "region_id": 3,
        "name_ar": "العدلة",
        "name_en": "Al 'Adlah",
        "center": [
            25.54865001,
            39.34526003
        ]
    },
    {
        "city_id": 283,
        "region_id": 3,
        "name_ar": "الديسة",
        "name_en": "Ad Disah",
        "center": [
            25.58064994,
            39.34805994
        ]
    },
    {
        "city_id": 284,
        "region_id": 3,
        "name_ar": "السليمي",
        "name_en": "As Sulaymi",
        "center": [
            25.5567,
            39.22098994
        ]
    },
    {
        "city_id": 285,
        "region_id": 3,
        "name_ar": "الجرف",
        "name_en": "Al Jarf",
        "center": [
            26.19354005,
            39.56484004
        ]
    },
    {
        "city_id": 286,
        "region_id": 3,
        "name_ar": "الهذلولي",
        "name_en": "Al Hadhluli",
        "center": [
            26.31609002,
            39.66580997
        ]
    },
    {
        "city_id": 287,
        "region_id": 3,
        "name_ar": "جدعاء",
        "name_en": "Jad'a",
        "center": [
            26.28639997,
            39.67671997
        ]
    },
    {
        "city_id": 288,
        "region_id": 3,
        "name_ar": "خيبر",
        "name_en": "Khaybar",
        "center": [
            25.71837,
            39.27875995
        ]
    },
    {
        "city_id": 289,
        "region_id": 3,
        "name_ar": "اللحن",
        "name_en": "Al Lihin",
        "center": [
            25.15117001,
            39.31052997
        ]
    },
    {
        "city_id": 290,
        "region_id": 3,
        "name_ar": "العشاش",
        "name_en": "Al 'Ishash",
        "center": [
            26.06598997,
            39.38638004
        ]
    },
    {
        "city_id": 291,
        "region_id": 3,
        "name_ar": "الصلصلة",
        "name_en": "As Silsilah",
        "center": [
            25.26970994,
            39.32937001
        ]
    },
    {
        "city_id": 292,
        "region_id": 3,
        "name_ar": "الثمد",
        "name_en": "Al Thamad",
        "center": [
            25.54219997,
            39.33388002
        ]
    },
    {
        "city_id": 293,
        "region_id": 3,
        "name_ar": "العينية",
        "name_en": "Al Uyaynah",
        "center": [
            25.84858995,
            38.96682002
        ]
    },
    {
        "city_id": 294,
        "region_id": 1,
        "name_ar": "رماح",
        "name_en": "Rumah",
        "center": [
            25.57687997,
            47.16100003
        ]
    },
    {
        "city_id": 295,
        "region_id": 1,
        "name_ar": "حفر العتك",
        "name_en": "Hafar Al Atk",
        "center": [
            25.95733,
            46.49867995
        ]
    },
    {
        "city_id": 296,
        "region_id": 1,
        "name_ar": "المزيرع",
        "name_en": "Al Muzayri'",
        "center": [
            25.58688997,
            47.21446995
        ]
    },
    {
        "city_id": 297,
        "region_id": 1,
        "name_ar": "شوية",
        "name_en": "Shawyah",
        "center": [
            26.37556999,
            47.24551995
        ]
    },
    {
        "city_id": 298,
        "region_id": 1,
        "name_ar": "الحفنة",
        "name_en": "Al Hifnah",
        "center": [
            25.69724003,
            46.54475001
        ]
    },
    {
        "city_id": 299,
        "region_id": 1,
        "name_ar": "الغيلانة",
        "name_en": "Al Ghaylanah",
        "center": [
            25.41032998,
            47.20987995
        ]
    },
    {
        "city_id": 300,
        "region_id": 1,
        "name_ar": "الرمحية",
        "name_en": "Ar Rumhiyah",
        "center": [
            25.57817996,
            46.98038005
        ]
    },
    {
        "city_id": 301,
        "region_id": 5,
        "name_ar": "الراكة",
        "name_en": "Ar Rakah",
        "center": [
            26.38024998,
            50.19540974
        ]
    },
    {
        "city_id": 302,
        "region_id": 7,
        "name_ar": "الخريطة",
        "name_en": "Al Khuraytah",
        "center": [
            27.77886997,
            35.98246003
        ]
    },
    {
        "city_id": 303,
        "region_id": 5,
        "name_ar": "الثقبة",
        "name_en": "Ath Thuqbah",
        "center": [
            26.25940996,
            50.21558977
        ]
    },
    {
        "city_id": 304,
        "region_id": 5,
        "name_ar": "العزيزية",
        "name_en": "Al 'Aziziyah",
        "center": [
            26.18424005,
            50.19631982
        ]
    },
    {
        "city_id": 305,
        "region_id": 7,
        "name_ar": "شدوا",
        "name_en": "Shadwa",
        "center": [
            26.44887997,
            37.02106999
        ]
    },
    {
        "city_id": 306,
        "region_id": 1,
        "name_ar": "الغاط",
        "name_en": "Al Ghat",
        "center": [
            26.04074997,
            44.95036003
        ]
    },
    {
        "city_id": 307,
        "region_id": 1,
        "name_ar": "مليح",
        "name_en": "Mulayh",
        "center": [
            26.14492,
            44.92109006
        ]
    },
    {
        "city_id": 308,
        "region_id": 7,
        "name_ar": "الشبعان",
        "name_en": "Ash Shaban",
        "center": [
            24.77486999,
            37.23097994
        ]
    },
    {
        "city_id": 309,
        "region_id": 7,
        "name_ar": "الدقم",
        "name_en": "Ad Duqum",
        "center": [
            25.08104996,
            37.25751004
        ]
    },
    {
        "city_id": 310,
        "region_id": 7,
        "name_ar": "القرص",
        "name_en": "Al Qars",
        "center": [
            25.13338005,
            37.26444002
        ]
    },
    {
        "city_id": 311,
        "region_id": 7,
        "name_ar": "حراض",
        "name_en": "Hirad",
        "center": [
            24.85148003,
            37.85608997
        ]
    },
    {
        "city_id": 312,
        "region_id": 7,
        "name_ar": "الشبحة",
        "name_en": "Ash Shibahah",
        "center": [
            24.81017003,
            37.72668996
        ]
    },
    {
        "city_id": 313,
        "region_id": 7,
        "name_ar": "روضة الاغيدرات",
        "name_en": "Rawdat Al Aghaydirat",
        "center": [
            24.85628997,
            37.75116996
        ]
    },
    {
        "city_id": 314,
        "region_id": 7,
        "name_ar": "الخضراء الجديدة",
        "name_en": "Al Khadra Al Jadidah",
        "center": [
            25.02321998,
            37.80395
        ]
    },
    {
        "city_id": 315,
        "region_id": 7,
        "name_ar": "سمور",
        "name_en": "Samur",
        "center": [
            24.92361998,
            37.74632004
        ]
    },
    {
        "city_id": 316,
        "region_id": 7,
        "name_ar": "الرويضات",
        "name_en": "Al Ruwaydat",
        "center": [
            25.01200995,
            37.63716004
        ]
    },
    {
        "city_id": 317,
        "region_id": 7,
        "name_ar": "المهدرة",
        "name_en": "Al Mahadrah",
        "center": [
            25.02559,
            37.59521996
        ]
    },
    {
        "city_id": 318,
        "region_id": 7,
        "name_ar": "بقيلة",
        "name_en": "Buqaylah",
        "center": [
            25.31910002,
            37.47718004
        ]
    },
    {
        "city_id": 319,
        "region_id": 7,
        "name_ar": "النعيلة",
        "name_en": "An Nu'aylah",
        "center": [
            25.38534005,
            37.18093998
        ]
    },
    {
        "city_id": 320,
        "region_id": 7,
        "name_ar": "الزغلية",
        "name_en": "Az Zaghliyah",
        "center": [
            24.75018005,
            37.53013
        ]
    },
    {
        "city_id": 321,
        "region_id": 7,
        "name_ar": "توله",
        "name_en": "Tuwalah",
        "center": [
            25.52247999,
            37.32519998
        ]
    },
    {
        "city_id": 322,
        "region_id": 7,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            25.65040002,
            37.60537006
        ]
    },
    {
        "city_id": 323,
        "region_id": 7,
        "name_ar": "املج",
        "name_en": "Umluj",
        "center": [
            25.03865002,
            37.25937997
        ]
    },
    {
        "city_id": 324,
        "region_id": 7,
        "name_ar": "فم شثاث",
        "name_en": "Famm Shithath",
        "center": [
            24.88487996,
            37.70416997
        ]
    },
    {
        "city_id": 325,
        "region_id": 7,
        "name_ar": "الحرة",
        "name_en": "Al Harrah",
        "center": [
            25.24785003,
            37.24011004
        ]
    },
    {
        "city_id": 326,
        "region_id": 7,
        "name_ar": "العمبجة",
        "name_en": "Al 'Ambijah",
        "center": [
            25.66824004,
            37.53016994
        ]
    },
    {
        "city_id": 327,
        "region_id": 7,
        "name_ar": "الشدخ",
        "name_en": "Ash Shidakh",
        "center": [
            24.71674003,
            37.60968996
        ]
    },
    {
        "city_id": 328,
        "region_id": 3,
        "name_ar": "المرامية",
        "name_en": "Al Maramiyah",
        "center": [
            25.63689005,
            37.86717994
        ]
    },
    {
        "city_id": 329,
        "region_id": 1,
        "name_ar": "مزارع البدائع",
        "name_en": "Mazari' Al Badai'",
        "center": [
            25.20083997,
            45.72797003
        ]
    },
    {
        "city_id": 330,
        "region_id": 1,
        "name_ar": "الخاتلة",
        "name_en": "Al Khatilah",
        "center": [
            25.49530999,
            46.18761996
        ]
    },
    {
        "city_id": 331,
        "region_id": 1,
        "name_ar": "البلاد الوسطى",
        "name_en": "Al Bilad Al Wusta",
        "center": [
            25.30651002,
            46.03316001
        ]
    },
    {
        "city_id": 332,
        "region_id": 1,
        "name_ar": "العليا",
        "name_en": "Al 'Ulayya",
        "center": [
            25.27913,
            46.02448996
        ]
    },
    {
        "city_id": 333,
        "region_id": 1,
        "name_ar": "الحسيان",
        "name_en": "Al Hisyan",
        "center": [
            25.33516996,
            46.01769005
        ]
    },
    {
        "city_id": 334,
        "region_id": 1,
        "name_ar": "الضلعي",
        "name_en": "Ad Dul 'Ayi",
        "center": [
            23.81478998,
            42.87521
        ]
    },
    {
        "city_id": 335,
        "region_id": 1,
        "name_ar": "تنيبيكة",
        "name_en": "Tunaibikah",
        "center": [
            23.79726998,
            42.86519
        ]
    },
    {
        "city_id": 336,
        "region_id": 1,
        "name_ar": "عبلة",
        "name_en": "'Ablah",
        "center": [
            23.75588999,
            42.84528006
        ]
    },
    {
        "city_id": 337,
        "region_id": 1,
        "name_ar": "عبلية",
        "name_en": "'Abliyah",
        "center": [
            23.80359995,
            42.81013996
        ]
    },
    {
        "city_id": 338,
        "region_id": 1,
        "name_ar": "هجرة السلات",
        "name_en": "Hijrat As Silat",
        "center": [
            23.83753995,
            42.75286996
        ]
    },
    {
        "city_id": 339,
        "region_id": 1,
        "name_ar": "ام طلحة",
        "name_en": "Umm Talhah",
        "center": [
            23.87286996,
            42.84589999
        ]
    },
    {
        "city_id": 340,
        "region_id": 1,
        "name_ar": "معرج قليشة",
        "name_en": "Mua'rij Qulaishah",
        "center": [
            23.99706996,
            42.80535004
        ]
    },
    {
        "city_id": 341,
        "region_id": 1,
        "name_ar": "داغان",
        "name_en": "Daghan",
        "center": [
            23.94201006,
            42.82346994
        ]
    },
    {
        "city_id": 342,
        "region_id": 1,
        "name_ar": "الجرفية",
        "name_en": "Al Jurfiyah",
        "center": [
            23.84582002,
            43.02693997
        ]
    },
    {
        "city_id": 343,
        "region_id": 1,
        "name_ar": "حشاشة",
        "name_en": "Hashashah",
        "center": [
            23.94645,
            42.74126667
        ]
    },
    {
        "city_id": 344,
        "region_id": 1,
        "name_ar": "المردمة",
        "name_en": "Al Mardamah",
        "center": [
            23.67269749,
            43.13022278
        ]
    },
    {
        "city_id": 345,
        "region_id": 1,
        "name_ar": "لهدة الصياهد",
        "name_en": "Lahdat As Sayahid",
        "center": [
            23.65304,
            43.15807994
        ]
    },
    {
        "city_id": 346,
        "region_id": 1,
        "name_ar": "البرزاء",
        "name_en": "Al Barza",
        "center": [
            23.74122001,
            42.89894
        ]
    },
    {
        "city_id": 347,
        "region_id": 1,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            23.91599,
            42.84397002
        ]
    },
    {
        "city_id": 348,
        "region_id": 1,
        "name_ar": "الخالدية",
        "name_en": "Al Khalidiyah",
        "center": [
            23.92885997,
            42.76770005
        ]
    },
    {
        "city_id": 349,
        "region_id": 1,
        "name_ar": "الحمادة",
        "name_en": "Al Hamadah",
        "center": [
            24.28500001,
            42.87817003
        ]
    },
    {
        "city_id": 350,
        "region_id": 1,
        "name_ar": "الداهمية",
        "name_en": "Al Dahimaiyyah",
        "center": [
            23.63427939,
            45.34898777
        ]
    },
    {
        "city_id": 351,
        "region_id": 3,
        "name_ar": "الحمنة",
        "name_en": "Al Hamnah",
        "center": [
            23.01689999,
            39.89175994
        ]
    },
    {
        "city_id": 352,
        "region_id": 3,
        "name_ar": "أم الغيران",
        "name_en": "Umm Al Ghiran",
        "center": [
            22.86716,
            40.82299002
        ]
    },
    {
        "city_id": 353,
        "region_id": 3,
        "name_ar": "المندسة",
        "name_en": "Al Mundassah",
        "center": [
            24.04918004,
            41.13844
        ]
    },
    {
        "city_id": 354,
        "region_id": 3,
        "name_ar": "السليمية",
        "name_en": "As Sulaymiyah",
        "center": [
            23.46028,
            40.29779004
        ]
    },
    {
        "city_id": 355,
        "region_id": 3,
        "name_ar": "البراقية",
        "name_en": "Al Barraqiyah",
        "center": [
            22.83432001,
            40.42916003
        ]
    },
    {
        "city_id": 356,
        "region_id": 3,
        "name_ar": "السراقي",
        "name_en": "As Siraqi",
        "center": [
            22.69659995,
            40.43302002
        ]
    },
    {
        "city_id": 357,
        "region_id": 3,
        "name_ar": "آبار دحمولة",
        "name_en": "Abar Dahmulah",
        "center": [
            24.39296998,
            41.99790994
        ]
    },
    {
        "city_id": 358,
        "region_id": 3,
        "name_ar": "القويعية",
        "name_en": "Al Quway'iyah",
        "center": [
            23.40474001,
            41.25960001
        ]
    },
    {
        "city_id": 359,
        "region_id": 3,
        "name_ar": "بدائع الهراسين",
        "name_en": "Badai' Al Harasin",
        "center": [
            24.00722006,
            41.33234006
        ]
    },
    {
        "city_id": 360,
        "region_id": 3,
        "name_ar": "مهد الذهب",
        "name_en": "Mahd Adh Dhahab",
        "center": [
            23.50622995,
            40.89206994
        ]
    },
    {
        "city_id": 361,
        "region_id": 3,
        "name_ar": "صفينة",
        "name_en": "Sufaynah",
        "center": [
            23.13412005,
            40.55798
        ]
    },
    {
        "city_id": 362,
        "region_id": 3,
        "name_ar": "الرقابية",
        "name_en": "Ar Riqabiyah",
        "center": [
            23.14948806,
            40.97974765
        ]
    },
    {
        "city_id": 363,
        "region_id": 3,
        "name_ar": "الصلحانية",
        "name_en": "As Sulhaniyah",
        "center": [
            22.88263998,
            40.48461004
        ]
    },
    {
        "city_id": 364,
        "region_id": 3,
        "name_ar": "الغاشية",
        "name_en": "Al Ghashiyah",
        "center": [
            22.66831995,
            40.29321998
        ]
    },
    {
        "city_id": 365,
        "region_id": 3,
        "name_ar": "الاصيحر",
        "name_en": "Al Asayhir",
        "center": [
            22.62347999,
            40.39023
        ]
    },
    {
        "city_id": 366,
        "region_id": 3,
        "name_ar": "السويرقية",
        "name_en": "As Suwayriqiyah",
        "center": [
            23.32572998,
            40.30102997
        ]
    },
    {
        "city_id": 367,
        "region_id": 3,
        "name_ar": "ثرب",
        "name_en": "Tharb",
        "center": [
            24.23354,
            41.73470005
        ]
    },
    {
        "city_id": 368,
        "region_id": 3,
        "name_ar": "حاذة",
        "name_en": "Hadhah",
        "center": [
            22.59219005,
            40.58823006
        ]
    },
    {
        "city_id": 369,
        "region_id": 3,
        "name_ar": "العمق",
        "name_en": "Al Umaq",
        "center": [
            23.94755003,
            40.97328996
        ]
    },
    {
        "city_id": 370,
        "region_id": 3,
        "name_ar": "الصعبية",
        "name_en": "As Sa'biyah",
        "center": [
            23.50505999,
            40.31326002
        ]
    },
    {
        "city_id": 371,
        "region_id": 2,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            22.79191997,
            39.01247
        ]
    },
    {
        "city_id": 372,
        "region_id": 2,
        "name_ar": "الجحفة",
        "name_en": "Al Juhfah",
        "center": [
            22.71259996,
            39.14413006
        ]
    },
    {
        "city_id": 373,
        "region_id": 3,
        "name_ar": "راين",
        "name_en": "Rayin",
        "center": [
            23.08228006,
            39.71523003
        ]
    },
    {
        "city_id": 374,
        "region_id": 2,
        "name_ar": "الزويراء",
        "name_en": "Az Zuwayra",
        "center": [
            23.03765995,
            39.73384006
        ]
    },
    {
        "city_id": 375,
        "region_id": 2,
        "name_ar": "النويبع",
        "name_en": "Al Nuwaybi'",
        "center": [
            22.87378,
            39.24723005
        ]
    },
    {
        "city_id": 376,
        "region_id": 2,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            22.83296995,
            39.47822995
        ]
    },
    {
        "city_id": 377,
        "region_id": 2,
        "name_ar": "رابغ",
        "name_en": "Rabigh",
        "center": [
            22.79374001,
            39.03445994
        ]
    },
    {
        "city_id": 378,
        "region_id": 2,
        "name_ar": "مستورة",
        "name_en": "Masturah",
        "center": [
            23.11464003,
            38.84475006
        ]
    },
    {
        "city_id": 379,
        "region_id": 2,
        "name_ar": "الابواء",
        "name_en": "Al Abwa'",
        "center": [
            23.10759997,
            39.09712001
        ]
    },
    {
        "city_id": 380,
        "region_id": 2,
        "name_ar": "شلوة",
        "name_en": "Shuluwah",
        "center": [
            22.57859006,
            39.38146006
        ]
    },
    {
        "city_id": 381,
        "region_id": 2,
        "name_ar": "كلية",
        "name_en": "Kilayyah",
        "center": [
            22.54293998,
            39.33088005
        ]
    },
    {
        "city_id": 382,
        "region_id": 2,
        "name_ar": "حجر",
        "name_en": "Hajur",
        "center": [
            23.01741006,
            39.72588994
        ]
    },
    {
        "city_id": 383,
        "region_id": 2,
        "name_ar": "صعبر",
        "name_en": "Sa'bar",
        "center": [
            22.44819006,
            39.18831995
        ]
    },
    {
        "city_id": 384,
        "region_id": 2,
        "name_ar": "التنضبية",
        "name_en": "At Tandabiyah",
        "center": [
            23.10660999,
            39.06683
        ]
    },
    {
        "city_id": 385,
        "region_id": 2,
        "name_ar": "قويزة",
        "name_en": "Quwayzah",
        "center": [
            23.15475002,
            39.13295006
        ]
    },
    {
        "city_id": 386,
        "region_id": 2,
        "name_ar": "النزة",
        "name_en": "An Nazzah",
        "center": [
            22.17345003,
            39.53582995
        ]
    },
    {
        "city_id": 387,
        "region_id": 2,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            22.16818997,
            39.54702001
        ]
    },
    {
        "city_id": 388,
        "region_id": 2,
        "name_ar": "الصدر",
        "name_en": "As Sadr",
        "center": [
            22.1499297,
            39.4026257
        ]
    },
    {
        "city_id": 389,
        "region_id": 2,
        "name_ar": "المغاربة",
        "name_en": "Al Magharibah",
        "center": [
            22.14224409,
            39.34143518
        ]
    },
    {
        "city_id": 390,
        "region_id": 2,
        "name_ar": "الكويسية",
        "name_en": "Al Kuwaysiyah",
        "center": [
            22.11104005,
            39.34428995
        ]
    },
    {
        "city_id": 391,
        "region_id": 2,
        "name_ar": "ابو حليفاء",
        "name_en": "Abu Hulayfa",
        "center": [
            22.10968996,
            39.48539999
        ]
    },
    {
        "city_id": 392,
        "region_id": 2,
        "name_ar": "محجوبة",
        "name_en": "Mahjubah",
        "center": [
            22.18377002,
            39.54048997
        ]
    },
    {
        "city_id": 393,
        "region_id": 1,
        "name_ar": "بئر الفيضة",
        "name_en": "Bir Al Faydah",
        "center": [
            24.27575004,
            42.84929006
        ]
    },
    {
        "city_id": 394,
        "region_id": 1,
        "name_ar": "الهميج",
        "name_en": "Al Humayj",
        "center": [
            24.23346999,
            42.90056994
        ]
    },
    {
        "city_id": 395,
        "region_id": 1,
        "name_ar": "الذيبية",
        "name_en": "Adh Dhibiyah",
        "center": [
            24.21573002,
            42.82410005
        ]
    },
    {
        "city_id": 396,
        "region_id": 1,
        "name_ar": "خضراء",
        "name_en": "Khadra",
        "center": [
            24.20792004,
            42.86926003
        ]
    },
    {
        "city_id": 397,
        "region_id": 1,
        "name_ar": "البدايع",
        "name_en": "Al Badayi'",
        "center": [
            24.14300999,
            42.91875002
        ]
    },
    {
        "city_id": 398,
        "region_id": 1,
        "name_ar": "بطاحة",
        "name_en": "Battahah",
        "center": [
            24.11361998,
            42.92132997
        ]
    },
    {
        "city_id": 399,
        "region_id": 1,
        "name_ar": "الصقرة",
        "name_en": "As Saqrah",
        "center": [
            24.22849995,
            42.70771006
        ]
    },
    {
        "city_id": 400,
        "region_id": 1,
        "name_ar": "وبرة",
        "name_en": "Wabrah",
        "center": [
            24.11777997,
            43.27138997
        ]
    },
    {
        "city_id": 401,
        "region_id": 1,
        "name_ar": "أبو عشرة",
        "name_en": "Abu 'Isharah",
        "center": [
            24.12489998,
            43.29269996
        ]
    },
    {
        "city_id": 402,
        "region_id": 1,
        "name_ar": "المعلق",
        "name_en": "Al Mu'allaq",
        "center": [
            24.19362996,
            43.23946005
        ]
    },
    {
        "city_id": 403,
        "region_id": 1,
        "name_ar": "الرميثي",
        "name_en": "Ar Rumaythi",
        "center": [
            24.19432005,
            43.30977996
        ]
    },
    {
        "city_id": 404,
        "region_id": 1,
        "name_ar": "الهرانية",
        "name_en": "Al Hiraniyah",
        "center": [
            23.81447001,
            43.15071006
        ]
    },
    {
        "city_id": 405,
        "region_id": 4,
        "name_ar": "الرضم",
        "name_en": "Ar Radum",
        "center": [
            24.83171996,
            42.19376002
        ]
    },
    {
        "city_id": 406,
        "region_id": 1,
        "name_ar": "الثعل",
        "name_en": "Ath Tha'al",
        "center": [
            23.64603997,
            42.68263996
        ]
    },
    {
        "city_id": 407,
        "region_id": 1,
        "name_ar": "الانسيات",
        "name_en": "Al Unsiyat",
        "center": [
            23.67081002,
            42.53499996
        ]
    },
    {
        "city_id": 408,
        "region_id": 1,
        "name_ar": "فرعة الرميثي",
        "name_en": "Far'at Ar Rumaythi",
        "center": [
            24.14995001,
            43.37634001
        ]
    },
    {
        "city_id": 409,
        "region_id": 1,
        "name_ar": "البطين",
        "name_en": "Al Butayn",
        "center": [
            24.22880998,
            43.36090997
        ]
    },
    {
        "city_id": 410,
        "region_id": 1,
        "name_ar": "مشرفة",
        "name_en": "Mushrifah",
        "center": [
            24.41033996,
            43.22244995
        ]
    },
    {
        "city_id": 411,
        "region_id": 1,
        "name_ar": "بديدة",
        "name_en": "Bidaydah",
        "center": [
            24.40591003,
            43.24490996
        ]
    },
    {
        "city_id": 412,
        "region_id": 1,
        "name_ar": "المجهلية",
        "name_en": "Al Mijhiliyah",
        "center": [
            24.40279003,
            43.25838999
        ]
    },
    {
        "city_id": 413,
        "region_id": 1,
        "name_ar": "البحرة",
        "name_en": "Al Baharah",
        "center": [
            24.63646003,
            42.20871999
        ]
    },
    {
        "city_id": 414,
        "region_id": 1,
        "name_ar": "بديعة",
        "name_en": "Buday'ah",
        "center": [
            22.99875004,
            43.50698995
        ]
    },
    {
        "city_id": 415,
        "region_id": 1,
        "name_ar": "الجثوم",
        "name_en": "Al Juthum",
        "center": [
            24.36912999,
            42.39601003
        ]
    },
    {
        "city_id": 416,
        "region_id": 1,
        "name_ar": "الشويطن",
        "name_en": "Ash Shuwaytin",
        "center": [
            24.39531997,
            42.14471994
        ]
    },
    {
        "city_id": 417,
        "region_id": 1,
        "name_ar": "المحامة",
        "name_en": "Al Mahamah",
        "center": [
            24.20469999,
            42.19225994
        ]
    },
    {
        "city_id": 418,
        "region_id": 1,
        "name_ar": "عفيف",
        "name_en": "Afif",
        "center": [
            23.90952998,
            42.92142996
        ]
    },
    {
        "city_id": 419,
        "region_id": 1,
        "name_ar": "ابرقية",
        "name_en": "Abraqiyah",
        "center": [
            24.16309998,
            42.88686994
        ]
    },
    {
        "city_id": 420,
        "region_id": 1,
        "name_ar": "الجمانية",
        "name_en": "Al Jammaniyah",
        "center": [
            24.12178996,
            43.25744005
        ]
    },
    {
        "city_id": 421,
        "region_id": 1,
        "name_ar": "الاشعرية",
        "name_en": "Al Ashariyah",
        "center": [
            24.35474005,
            43.00399996
        ]
    },
    {
        "city_id": 422,
        "region_id": 1,
        "name_ar": "الخضارة",
        "name_en": "Al Khadarah",
        "center": [
            23.60485004,
            42.39956004
        ]
    },
    {
        "city_id": 423,
        "region_id": 1,
        "name_ar": "الصالحية",
        "name_en": "As Salhiyah",
        "center": [
            24.41639999,
            43.28270999
        ]
    },
    {
        "city_id": 424,
        "region_id": 1,
        "name_ar": "بدائع العضيان",
        "name_en": "Badai' Al Idyan",
        "center": [
            24.35682002,
            43.27279006
        ]
    },
    {
        "city_id": 425,
        "region_id": 1,
        "name_ar": "أم أرطى",
        "name_en": "Umm Arta",
        "center": [
            24.65465001,
            42.27078998
        ]
    },
    {
        "city_id": 426,
        "region_id": 1,
        "name_ar": "المكلاة",
        "name_en": "Al Maklah",
        "center": [
            24.53499996,
            42.49449001
        ]
    },
    {
        "city_id": 427,
        "region_id": 1,
        "name_ar": "عشيران",
        "name_en": "'Ushayran",
        "center": [
            24.17216,
            45.30934994
        ]
    },
    {
        "city_id": 428,
        "region_id": 1,
        "name_ar": "بعيثران",
        "name_en": "Bu'aythiran",
        "center": [
            23.98754004,
            45.35667995
        ]
    },
    {
        "city_id": 429,
        "region_id": 1,
        "name_ar": "أم قصور",
        "name_en": "Umm Qusur",
        "center": [
            23.42405005,
            44.21762004
        ]
    },
    {
        "city_id": 430,
        "region_id": 1,
        "name_ar": "عبدة",
        "name_en": "'Abdah",
        "center": [
            23.69220001,
            44.78131996
        ]
    },
    {
        "city_id": 431,
        "region_id": 1,
        "name_ar": "خريصة",
        "name_en": "Khuraysah",
        "center": [
            23.59493003,
            44.68842004
        ]
    },
    {
        "city_id": 432,
        "region_id": 1,
        "name_ar": "عجابة",
        "name_en": "'Ajabah",
        "center": [
            23.68864002,
            44.75650998
        ]
    },
    {
        "city_id": 433,
        "region_id": 1,
        "name_ar": "المديفع",
        "name_en": "Al Mudayfi'",
        "center": [
            23.83923995,
            44.78853996
        ]
    },
    {
        "city_id": 434,
        "region_id": 1,
        "name_ar": "القدراوية",
        "name_en": "Al Qidrawiyah",
        "center": [
            24.16978998,
            45.14273004
        ]
    },
    {
        "city_id": 435,
        "region_id": 8,
        "name_ar": "أوبيرة",
        "name_en": "Ubayrah",
        "center": [
            27.70325,
            41.61531667
        ]
    },
    {
        "city_id": 436,
        "region_id": 1,
        "name_ar": "أم أثلة",
        "name_en": "Umm Athlah",
        "center": [
            24.24799001,
            45.12849006
        ]
    },
    {
        "city_id": 437,
        "region_id": 1,
        "name_ar": "الأخضر",
        "name_en": "Al Akhdar",
        "center": [
            24.22195002,
            45.11250003
        ]
    },
    {
        "city_id": 438,
        "region_id": 1,
        "name_ar": "مطيعة",
        "name_en": "Muti'ah",
        "center": [
            24.21502004,
            45.08287999
        ]
    },
    {
        "city_id": 439,
        "region_id": 1,
        "name_ar": "المدارة",
        "name_en": "Al Madarah",
        "center": [
            24.21329005,
            45.04513002
        ]
    },
    {
        "city_id": 440,
        "region_id": 1,
        "name_ar": "عسيلة",
        "name_en": "'Usaylah",
        "center": [
            23.65619996,
            45.36645997
        ]
    },
    {
        "city_id": 441,
        "region_id": 1,
        "name_ar": "الحلوة",
        "name_en": "Al Hilwah",
        "center": [
            23.65548256,
            45.39365411
        ]
    },
    {
        "city_id": 442,
        "region_id": 1,
        "name_ar": "الدبيجة",
        "name_en": "Ad Dubayjah",
        "center": [
            24.95631001,
            45.77505001
        ]
    },
    {
        "city_id": 443,
        "region_id": 1,
        "name_ar": "ثادق",
        "name_en": "Thadiq",
        "center": [
            25.29714995,
            45.86178998
        ]
    },
    {
        "city_id": 444,
        "region_id": 1,
        "name_ar": "الروبضة / رغبة",
        "name_en": "Ar Rawbidah / Raghabah",
        "center": [
            25.16323001,
            45.79873002
        ]
    },
    {
        "city_id": 445,
        "region_id": 1,
        "name_ar": "رويضة السهول",
        "name_en": "Ruwaydat As Suhul",
        "center": [
            25.19907005,
            45.85772003
        ]
    },
    {
        "city_id": 446,
        "region_id": 1,
        "name_ar": "مشاش السهول",
        "name_en": "Mishash As Suhul",
        "center": [
            25.29153997,
            45.78253
        ]
    },
    {
        "city_id": 447,
        "region_id": 1,
        "name_ar": "الحسي",
        "name_en": "Al Husayy",
        "center": [
            25.42026003,
            46.09933997
        ]
    },
    {
        "city_id": 448,
        "region_id": 1,
        "name_ar": "الصفرات",
        "name_en": "As Sufarat",
        "center": [
            25.32299995,
            46.03209005
        ]
    },
    {
        "city_id": 449,
        "region_id": 1,
        "name_ar": "البير",
        "name_en": "Al Bir",
        "center": [
            25.28890999,
            45.95610003
        ]
    },
    {
        "city_id": 450,
        "region_id": 1,
        "name_ar": "رويغب",
        "name_en": "Ruwayghib",
        "center": [
            25.67954995,
            46.38441
        ]
    },
    {
        "city_id": 451,
        "region_id": 3,
        "name_ar": "النجف",
        "name_en": "An Najf",
        "center": [
            24.48461999,
            38.0451
        ]
    },
    {
        "city_id": 452,
        "region_id": 3,
        "name_ar": "السطيح",
        "name_en": "As Sutayh",
        "center": [
            24.19905999,
            37.81997004
        ]
    },
    {
        "city_id": 453,
        "region_id": 3,
        "name_ar": "الخيمة",
        "name_en": "Al Khaymah",
        "center": [
            24.16506001,
            37.96997004
        ]
    },
    {
        "city_id": 454,
        "region_id": 5,
        "name_ar": "سيهات",
        "name_en": "Sayhat",
        "center": [
            26.48341001,
            50.04679975
        ]
    },
    {
        "city_id": 455,
        "region_id": 3,
        "name_ar": "تفيدة",
        "name_en": "Tafidah",
        "center": [
            24.22207004,
            38.08057003
        ]
    },
    {
        "city_id": 456,
        "region_id": 5,
        "name_ar": "تاروت",
        "name_en": "Tarut",
        "center": [
            26.57110001,
            50.07269982
        ]
    },
    {
        "city_id": 457,
        "region_id": 3,
        "name_ar": "ندياء",
        "name_en": "Nadya",
        "center": [
            24.30867001,
            38.07377997
        ]
    },
    {
        "city_id": 458,
        "region_id": 3,
        "name_ar": "مشرفة",
        "name_en": "Mushrifah",
        "center": [
            24.01493004,
            38.29995003
        ]
    },
    {
        "city_id": 459,
        "region_id": 3,
        "name_ar": "دوينه",
        "name_en": "Duwayyinah",
        "center": [
            24.74161002,
            37.89670993
        ]
    },
    {
        "city_id": 460,
        "region_id": 3,
        "name_ar": "عدن",
        "name_en": "'Adan",
        "center": [
            24.77565999,
            37.93169003
        ]
    },
    {
        "city_id": 461,
        "region_id": 3,
        "name_ar": "الأحمر",
        "name_en": "Al Ahmar",
        "center": [
            24.67471,
            38.08111
        ]
    },
    {
        "city_id": 462,
        "region_id": 3,
        "name_ar": "المثلث",
        "name_en": "Al Muthallath",
        "center": [
            24.79809543,
            38.33913818
        ]
    },
    {
        "city_id": 463,
        "region_id": 3,
        "name_ar": "الفرع",
        "name_en": "Al Far'",
        "center": [
            24.97251995,
            38.05867001
        ]
    },
    {
        "city_id": 464,
        "region_id": 3,
        "name_ar": "البقاع",
        "name_en": "Al Biqa'",
        "center": [
            24.39361004,
            38.59863002
        ]
    },
    {
        "city_id": 465,
        "region_id": 3,
        "name_ar": "النجيل",
        "name_en": "An Najil",
        "center": [
            24.31887004,
            38.48494004
        ]
    },
    {
        "city_id": 466,
        "region_id": 3,
        "name_ar": "البثنة",
        "name_en": "Al Bathnah",
        "center": [
            24.39625997,
            38.48004997
        ]
    },
    {
        "city_id": 467,
        "region_id": 3,
        "name_ar": "خيف حسين",
        "name_en": "Khayf Husayn",
        "center": [
            24.41598999,
            38.49026006
        ]
    },
    {
        "city_id": 468,
        "region_id": 3,
        "name_ar": "البقارية",
        "name_en": "Al Baqqariyah",
        "center": [
            24.48107002,
            38.49504001
        ]
    },
    {
        "city_id": 469,
        "region_id": 3,
        "name_ar": "الفقعلي",
        "name_en": "Al Fuq'ali",
        "center": [
            24.67535,
            38.40621
        ]
    },
    {
        "city_id": 470,
        "region_id": 3,
        "name_ar": "المشريف",
        "name_en": "Al Mushayrif",
        "center": [
            24.24779005,
            38.32332006
        ]
    },
    {
        "city_id": 471,
        "region_id": 3,
        "name_ar": "أم المسن",
        "name_en": "Umm Al Misin",
        "center": [
            24.61244,
            38.54310006
        ]
    },
    {
        "city_id": 472,
        "region_id": 3,
        "name_ar": "البديع",
        "name_en": "Al Badi'",
        "center": [
            25.33449997,
            38.16951
        ]
    },
    {
        "city_id": 473,
        "region_id": 3,
        "name_ar": "الدارة",
        "name_en": "Ad Darah",
        "center": [
            25.21663999,
            38.44746994
        ]
    },
    {
        "city_id": 474,
        "region_id": 3,
        "name_ar": "القري",
        "name_en": "Al Quray",
        "center": [
            23.85645002,
            38.44093997
        ]
    },
    {
        "city_id": 475,
        "region_id": 3,
        "name_ar": "السليم",
        "name_en": "As Sulaym",
        "center": [
            23.74596996,
            38.54191994
        ]
    },
    {
        "city_id": 476,
        "region_id": 3,
        "name_ar": "اللثامة",
        "name_en": "Al Luthamah",
        "center": [
            24.78498998,
            38.66867997
        ]
    },
    {
        "city_id": 477,
        "region_id": 3,
        "name_ar": "المقنع",
        "name_en": "Al Muqanna'",
        "center": [
            24.76388005,
            38.70996003
        ]
    },
    {
        "city_id": 478,
        "region_id": 3,
        "name_ar": "ضفيان",
        "name_en": "Dufyan",
        "center": [
            24.75979,
            38.77612998
        ]
    },
    {
        "city_id": 479,
        "region_id": 3,
        "name_ar": "عضاد",
        "name_en": "'Adad",
        "center": [
            24.68993996,
            38.66250995
        ]
    },
    {
        "city_id": 480,
        "region_id": 3,
        "name_ar": "العدوة",
        "name_en": "Al 'Idwah",
        "center": [
            24.63837006,
            37.51690006
        ]
    },
    {
        "city_id": 481,
        "region_id": 3,
        "name_ar": "النباة",
        "name_en": "An Nabah",
        "center": [
            24.41389996,
            37.47862003
        ]
    },
    {
        "city_id": 482,
        "region_id": 3,
        "name_ar": "البريدي",
        "name_en": "Al Baridi",
        "center": [
            24.27603999,
            37.55173002
        ]
    },
    {
        "city_id": 483,
        "region_id": 3,
        "name_ar": "ينبع",
        "name_en": "Yanbu",
        "center": [
            24.09391997,
            38.06336005
        ]
    },
    {
        "city_id": 484,
        "region_id": 3,
        "name_ar": "القراصة",
        "name_en": "Al Qarrasah",
        "center": [
            25.16388996,
            38.16818999
        ]
    },
    {
        "city_id": 485,
        "region_id": 3,
        "name_ar": "العيص",
        "name_en": "Al 'Is",
        "center": [
            25.05988005,
            38.11634994
        ]
    },
    {
        "city_id": 486,
        "region_id": 3,
        "name_ar": "الجابرية",
        "name_en": "Al Jabiriyah",
        "center": [
            24.31553996,
            38.41903995
        ]
    },
    {
        "city_id": 487,
        "region_id": 3,
        "name_ar": "ينبع النخل",
        "name_en": "Yanbu An Nakhil",
        "center": [
            24.38096995,
            38.44993994
        ]
    },
    {
        "city_id": 488,
        "region_id": 3,
        "name_ar": "جراجر",
        "name_en": "Jarajir",
        "center": [
            24.95846996,
            38.69329997
        ]
    },
    {
        "city_id": 489,
        "region_id": 3,
        "name_ar": "ترعة",
        "name_en": "Tir'ah",
        "center": [
            25.18527002,
            38.44204998
        ]
    },
    {
        "city_id": 490,
        "region_id": 3,
        "name_ar": "المربع",
        "name_en": "Al Murabba'",
        "center": [
            25.38691997,
            38.35068007
        ]
    },
    {
        "city_id": 491,
        "region_id": 3,
        "name_ar": "نبط",
        "name_en": "Nabt",
        "center": [
            24.66828,
            37.54832996
        ]
    },
    {
        "city_id": 492,
        "region_id": 3,
        "name_ar": "السليلة",
        "name_en": "As Salilah",
        "center": [
            25.54842714,
            38.5103956
        ]
    },
    {
        "city_id": 493,
        "region_id": 1,
        "name_ar": "القرائن",
        "name_en": "Al Qarain",
        "center": [
            25.22611001,
            45.26694998
        ]
    },
    {
        "city_id": 494,
        "region_id": 1,
        "name_ar": "الشكيرة",
        "name_en": "Ash Shukayyrah",
        "center": [
            25.32600005,
            45.24805006
        ]
    },
    {
        "city_id": 495,
        "region_id": 1,
        "name_ar": "هجرة المغر",
        "name_en": "Hijrat Al Mughur",
        "center": [
            24.98823999,
            45.12815003
        ]
    },
    {
        "city_id": 496,
        "region_id": 1,
        "name_ar": "مزارع المحتجبة",
        "name_en": "Mazari' Al Muhtajibah",
        "center": [
            25.42566,
            45.26971996
        ]
    },
    {
        "city_id": 497,
        "region_id": 1,
        "name_ar": "الغرابة",
        "name_en": "Al Ghurabah",
        "center": [
            25.47024,
            44.99688998
        ]
    },
    {
        "city_id": 498,
        "region_id": 1,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            25.23381001,
            45.35100003
        ]
    },
    {
        "city_id": 499,
        "region_id": 1,
        "name_ar": "غسلة",
        "name_en": "Ghuslah",
        "center": [
            25.22308002,
            45.28712007
        ]
    },
    {
        "city_id": 500,
        "region_id": 1,
        "name_ar": "شقراء",
        "name_en": "Shaqra'",
        "center": [
            25.24146004,
            45.25506007
        ]
    },
    {
        "city_id": 501,
        "region_id": 1,
        "name_ar": "الهفوف",
        "name_en": "Al Hafuf",
        "center": [
            23.56236004,
            45.56202001
        ]
    },
    {
        "city_id": 502,
        "region_id": 1,
        "name_ar": "حلوان",
        "name_en": "Halwan",
        "center": [
            23.57147998,
            45.62944999
        ]
    },
    {
        "city_id": 503,
        "region_id": 1,
        "name_ar": "حصرة",
        "name_en": "Hasarah",
        "center": [
            23.51867002,
            43.77054998
        ]
    },
    {
        "city_id": 504,
        "region_id": 1,
        "name_ar": "الثمامية",
        "name_en": "Ath Thumamiyah",
        "center": [
            23.59809003,
            43.52817005
        ]
    },
    {
        "city_id": 505,
        "region_id": 1,
        "name_ar": "لبيدة",
        "name_en": "Lubaydah",
        "center": [
            23.56506004,
            43.60540006
        ]
    },
    {
        "city_id": 506,
        "region_id": 1,
        "name_ar": "العضيانية",
        "name_en": "Al 'Idayyaniyah",
        "center": [
            23.69231995,
            43.89301999
        ]
    },
    {
        "city_id": 507,
        "region_id": 1,
        "name_ar": "عجلة",
        "name_en": "'Ajlah",
        "center": [
            23.72816,
            43.90108
        ]
    },
    {
        "city_id": 508,
        "region_id": 1,
        "name_ar": "سعدة",
        "name_en": "Sa'dah",
        "center": [
            23.66908003,
            43.94417996
        ]
    },
    {
        "city_id": 509,
        "region_id": 1,
        "name_ar": "جفن ضب",
        "name_en": "Jafn Dabb",
        "center": [
            24.25052,
            45.67656004
        ]
    },
    {
        "city_id": 510,
        "region_id": 1,
        "name_ar": "دلقان",
        "name_en": "Dalqan",
        "center": [
            24.27134003,
            45.61026007
        ]
    },
    {
        "city_id": 511,
        "region_id": 1,
        "name_ar": "أم السباع",
        "name_en": "Umm As Siba'",
        "center": [
            24.28461002,
            45.59558003
        ]
    },
    {
        "city_id": 512,
        "region_id": 1,
        "name_ar": "الجله الأعلى",
        "name_en": "Al Jilh Al A'la",
        "center": [
            24.24741997,
            45.75435997
        ]
    },
    {
        "city_id": 513,
        "region_id": 1,
        "name_ar": "الخفق الجنوبي",
        "name_en": "Al Khafaq Al Janubi",
        "center": [
            24.19645005,
            45.79660005
        ]
    },
    {
        "city_id": 514,
        "region_id": 1,
        "name_ar": "الدحوة",
        "name_en": "Ad Dihwah",
        "center": [
            24.17738995,
            45.89298998
        ]
    },
    {
        "city_id": 515,
        "region_id": 1,
        "name_ar": "الخفق القديم",
        "name_en": "Al Khafaq Al Qadim",
        "center": [
            24.24811994,
            45.81104999
        ]
    },
    {
        "city_id": 516,
        "region_id": 1,
        "name_ar": "الشرمية",
        "name_en": "Ash Sharmiyah",
        "center": [
            23.81078995,
            44.87955001
        ]
    },
    {
        "city_id": 517,
        "region_id": 1,
        "name_ar": "مراغان",
        "name_en": "Maraghan",
        "center": [
            23.77615006,
            44.92914997
        ]
    },
    {
        "city_id": 518,
        "region_id": 1,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            23.72465198,
            44.82285995
        ]
    },
    {
        "city_id": 519,
        "region_id": 1,
        "name_ar": "الجروية",
        "name_en": "Al Jarwiyah",
        "center": [
            23.69878006,
            45.04960999
        ]
    },
    {
        "city_id": 520,
        "region_id": 1,
        "name_ar": "العوشزية",
        "name_en": "Al Awshaziyah",
        "center": [
            24.00818998,
            45.02040999
        ]
    },
    {
        "city_id": 521,
        "region_id": 1,
        "name_ar": "أبو رجوم",
        "name_en": "Abu Rijum",
        "center": [
            24.06501003,
            45.03906996
        ]
    },
    {
        "city_id": 522,
        "region_id": 1,
        "name_ar": "القلتة",
        "name_en": "Al Qaltah",
        "center": [
            24.08336995,
            45.02926004
        ]
    },
    {
        "city_id": 523,
        "region_id": 1,
        "name_ar": "لعلع",
        "name_en": "Li'li'",
        "center": [
            24.07726002,
            45.00767001
        ]
    },
    {
        "city_id": 524,
        "region_id": 1,
        "name_ar": "الغريري",
        "name_en": "Al Ghurayri",
        "center": [
            24.08464995,
            45.00566003
        ]
    },
    {
        "city_id": 525,
        "region_id": 1,
        "name_ar": "الخنقة",
        "name_en": "Al Khunqah",
        "center": [
            24.00924999,
            44.97498997
        ]
    },
    {
        "city_id": 526,
        "region_id": 1,
        "name_ar": "النسق القديم",
        "name_en": "An Nasaq Al Qadim",
        "center": [
            23.96012005,
            45.00166994
        ]
    },
    {
        "city_id": 527,
        "region_id": 1,
        "name_ar": "وثيلان",
        "name_en": "Wuthaylan",
        "center": [
            23.96363005,
            44.81027994
        ]
    },
    {
        "city_id": 528,
        "region_id": 1,
        "name_ar": "بيضاء نثيل",
        "name_en": "Bayda' Nathil",
        "center": [
            23.83475997,
            45.06808995
        ]
    },
    {
        "city_id": 529,
        "region_id": 1,
        "name_ar": "أم الدباء",
        "name_en": "Umm Ad Diba",
        "center": [
            23.80836002,
            45.06941998
        ]
    },
    {
        "city_id": 530,
        "region_id": 1,
        "name_ar": "الأمار",
        "name_en": "Al Amar",
        "center": [
            23.77248996,
            45.0902
        ]
    },
    {
        "city_id": 531,
        "region_id": 1,
        "name_ar": "عسيلان",
        "name_en": "'Usaylan",
        "center": [
            23.68639004,
            45.35954005
        ]
    },
    {
        "city_id": 532,
        "region_id": 1,
        "name_ar": "السدرية",
        "name_en": "As Sidriyah",
        "center": [
            23.74385,
            45.16906005
        ]
    },
    {
        "city_id": 533,
        "region_id": 1,
        "name_ar": "أم الشبرم",
        "name_en": "Umm Ash Shubrum",
        "center": [
            23.63556003,
            45.16855004
        ]
    },
    {
        "city_id": 534,
        "region_id": 1,
        "name_ar": "الحجاجي",
        "name_en": "Al Hijjaji",
        "center": [
            23.67192006,
            45.20858994
        ]
    },
    {
        "city_id": 535,
        "region_id": 1,
        "name_ar": "الغبياء",
        "name_en": "Al Ghubayya",
        "center": [
            23.75278997,
            45.27737006
        ]
    },
    {
        "city_id": 536,
        "region_id": 1,
        "name_ar": "فيضة بن سعيدان",
        "name_en": "Faydah Bin Saeedan",
        "center": [
            23.79646555,
            45.32987779
        ]
    },
    {
        "city_id": 537,
        "region_id": 1,
        "name_ar": "أبو حميض",
        "name_en": "Abu Humayd",
        "center": [
            23.91375004,
            45.34604999
        ]
    },
    {
        "city_id": 538,
        "region_id": 1,
        "name_ar": "النبيبيع",
        "name_en": "An Nubaybi'",
        "center": [
            23.87065998,
            45.27967002
        ]
    },
    {
        "city_id": 539,
        "region_id": 1,
        "name_ar": "النباع",
        "name_en": "An Naba'",
        "center": [
            23.85297004,
            45.33600996
        ]
    },
    {
        "city_id": 540,
        "region_id": 1,
        "name_ar": "الملقى",
        "name_en": "Al Malqa",
        "center": [
            23.87836997,
            45.38654001
        ]
    },
    {
        "city_id": 541,
        "region_id": 1,
        "name_ar": "حجيلاء",
        "name_en": "Hujayla",
        "center": [
            23.86173002,
            45.43534005
        ]
    },
    {
        "city_id": 542,
        "region_id": 1,
        "name_ar": "العبد",
        "name_en": "Al 'Abd",
        "center": [
            23.59439997,
            44.78896006
        ]
    },
    {
        "city_id": 543,
        "region_id": 1,
        "name_ar": "أم الجثجاث",
        "name_en": "Umm Al Jithjath",
        "center": [
            23.65405002,
            45.02008999
        ]
    },
    {
        "city_id": 544,
        "region_id": 1,
        "name_ar": "أم جفر",
        "name_en": "Umm Jafr",
        "center": [
            23.60858999,
            45.10269006
        ]
    },
    {
        "city_id": 545,
        "region_id": 1,
        "name_ar": "الخلفية",
        "name_en": "Al Khalfiyah",
        "center": [
            23.62062999,
            44.83339998
        ]
    },
    {
        "city_id": 546,
        "region_id": 2,
        "name_ar": "الجدعان",
        "name_en": "Al Jidh'an",
        "center": [
            22.83059003,
            41.12105996
        ]
    },
    {
        "city_id": 547,
        "region_id": 2,
        "name_ar": "زنقاحة",
        "name_en": "Zinqahah",
        "center": [
            22.37363,
            41.44394996
        ]
    },
    {
        "city_id": 548,
        "region_id": 2,
        "name_ar": "العمشان",
        "name_en": "Al 'Umshan",
        "center": [
            20.55400004,
            41.04535998
        ]
    },
    {
        "city_id": 549,
        "region_id": 2,
        "name_ar": "الجذية",
        "name_en": "Al Judhayyah",
        "center": [
            20.54613995,
            41.11436005
        ]
    },
    {
        "city_id": 550,
        "region_id": 2,
        "name_ar": "العقدة",
        "name_en": "Al 'Uqdah",
        "center": [
            20.62264997,
            41.05428999
        ]
    },
    {
        "city_id": 551,
        "region_id": 2,
        "name_ar": "القرا",
        "name_en": "Al Qara",
        "center": [
            20.63445004,
            41.02258997
        ]
    },
    {
        "city_id": 552,
        "region_id": 2,
        "name_ar": "الفطيمة",
        "name_en": "Al Futaymah",
        "center": [
            20.60247999,
            41.00889997
        ]
    },
    {
        "city_id": 553,
        "region_id": 2,
        "name_ar": "المحارزة",
        "name_en": "Al Maharizah",
        "center": [
            20.58488995,
            40.99109994
        ]
    },
    {
        "city_id": 554,
        "region_id": 2,
        "name_ar": "الحمة",
        "name_en": "Al Himah",
        "center": [
            20.67233994,
            41.04914001
        ]
    },
    {
        "city_id": 555,
        "region_id": 2,
        "name_ar": "صيادة",
        "name_en": "Sayyadah",
        "center": [
            20.65224004,
            40.99231997
        ]
    },
    {
        "city_id": 556,
        "region_id": 2,
        "name_ar": "الدفينة",
        "name_en": "Al Dufaynah",
        "center": [
            23.30532005,
            41.99265995
        ]
    },
    {
        "city_id": 557,
        "region_id": 2,
        "name_ar": "الوهط",
        "name_en": "Al Wahat",
        "center": [
            21.19675004,
            40.34839996
        ]
    },
    {
        "city_id": 558,
        "region_id": 2,
        "name_ar": "الغنم",
        "name_en": "Al Ghunnam",
        "center": [
            21.21864997,
            40.47847998
        ]
    },
    {
        "city_id": 559,
        "region_id": 2,
        "name_ar": "ابو غيل",
        "name_en": "Abu Ghayl",
        "center": [
            21.19812004,
            40.48108997
        ]
    },
    {
        "city_id": 560,
        "region_id": 2,
        "name_ar": "ام البكار",
        "name_en": "Umm Al Bikar",
        "center": [
            21.11385998,
            40.58407998
        ]
    },
    {
        "city_id": 561,
        "region_id": 2,
        "name_ar": "الفعور",
        "name_en": "Al Fu'ur",
        "center": [
            21.21574998,
            40.52805001
        ]
    },
    {
        "city_id": 562,
        "region_id": 2,
        "name_ar": "الصخيرة",
        "name_en": "As Sukhayrah",
        "center": [
            21.19600997,
            40.53213999
        ]
    },
    {
        "city_id": 563,
        "region_id": 2,
        "name_ar": "السريح",
        "name_en": "As Sirayh",
        "center": [
            21.20059004,
            40.59604998
        ]
    },
    {
        "city_id": 564,
        "region_id": 2,
        "name_ar": "الملعب",
        "name_en": "Al Mal'ab",
        "center": [
            21.19832002,
            40.62872
        ]
    },
    {
        "city_id": 565,
        "region_id": 2,
        "name_ar": "الغمير",
        "name_en": "Al Ghimayr",
        "center": [
            21.20780005,
            40.62269004
        ]
    },
    {
        "city_id": 566,
        "region_id": 2,
        "name_ar": "الوزير",
        "name_en": "Al Wazir",
        "center": [
            21.23876995,
            40.54442998
        ]
    },
    {
        "city_id": 567,
        "region_id": 2,
        "name_ar": "ثمالة",
        "name_en": "Thumalah",
        "center": [
            21.15680999,
            40.51287995
        ]
    },
    {
        "city_id": 568,
        "region_id": 2,
        "name_ar": "النصبة",
        "name_en": "An Nusbah",
        "center": [
            21.18137005,
            40.49088998
        ]
    },
    {
        "city_id": 569,
        "region_id": 2,
        "name_ar": "عباسة",
        "name_en": "'Abbasah",
        "center": [
            21.13604998,
            40.57247994
        ]
    },
    {
        "city_id": 570,
        "region_id": 2,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            21.11483155,
            40.60234364
        ]
    },
    {
        "city_id": 571,
        "region_id": 2,
        "name_ar": "غرابة",
        "name_en": "Ghirabah",
        "center": [
            21.15871006,
            40.59515001
        ]
    },
    {
        "city_id": 572,
        "region_id": 2,
        "name_ar": "الحلقة",
        "name_en": "Al Halqah",
        "center": [
            21.25755,
            40.53691999
        ]
    },
    {
        "city_id": 573,
        "region_id": 2,
        "name_ar": "الرخيلة",
        "name_en": "Ar Rikhaylah",
        "center": [
            21.28876996,
            40.54044004
        ]
    },
    {
        "city_id": 574,
        "region_id": 1,
        "name_ar": "القصب",
        "name_en": "Al Qasab",
        "center": [
            25.29603005,
            45.50989999
        ]
    },
    {
        "city_id": 575,
        "region_id": 1,
        "name_ar": "المشاش",
        "name_en": "Al Mishash",
        "center": [
            25.27780999,
            45.44002001
        ]
    },
    {
        "city_id": 576,
        "region_id": 1,
        "name_ar": "الصوح",
        "name_en": "As Suh",
        "center": [
            25.50458004,
            45.34335996
        ]
    },
    {
        "city_id": 577,
        "region_id": 1,
        "name_ar": "اشيقر",
        "name_en": "Ushayqir",
        "center": [
            25.34415999,
            45.19179005
        ]
    },
    {
        "city_id": 578,
        "region_id": 1,
        "name_ar": "ام طليحة",
        "name_en": "Umm Tulayhah",
        "center": [
            25.42562995,
            45.27132994
        ]
    },
    {
        "city_id": 579,
        "region_id": 1,
        "name_ar": "الداهنة",
        "name_en": "Ad Dahinah",
        "center": [
            25.58148995,
            45.28314003
        ]
    },
    {
        "city_id": 580,
        "region_id": 1,
        "name_ar": "الحريق",
        "name_en": "Al Hariq",
        "center": [
            25.45085999,
            45.40127001
        ]
    },
    {
        "city_id": 581,
        "region_id": 1,
        "name_ar": "الجريفة",
        "name_en": "Al Juraifah",
        "center": [
            25.53931005,
            45.26308006
        ]
    },
    {
        "city_id": 582,
        "region_id": 1,
        "name_ar": "الوقف",
        "name_en": "Al Waqf",
        "center": [
            25.22639006,
            45.37498003
        ]
    },
    {
        "city_id": 583,
        "region_id": 1,
        "name_ar": "العلوة",
        "name_en": "Al 'Uluwah",
        "center": [
            24.46644997,
            44.34749996
        ]
    },
    {
        "city_id": 584,
        "region_id": 1,
        "name_ar": "فرحة",
        "name_en": "Farhah",
        "center": [
            24.07631002,
            44.44158001
        ]
    },
    {
        "city_id": 585,
        "region_id": 1,
        "name_ar": "عروى",
        "name_en": "'Arawa",
        "center": [
            23.90283006,
            44.61579003
        ]
    },
    {
        "city_id": 586,
        "region_id": 1,
        "name_ar": "فردة",
        "name_en": "Fardah",
        "center": [
            23.91569005,
            44.58698002
        ]
    },
    {
        "city_id": 587,
        "region_id": 1,
        "name_ar": "مويسل",
        "name_en": "Muwaysil",
        "center": [
            23.91025002,
            44.68306995
        ]
    },
    {
        "city_id": 588,
        "region_id": 1,
        "name_ar": "الشاة",
        "name_en": "Ash Shat",
        "center": [
            23.88579001,
            44.41008004
        ]
    },
    {
        "city_id": 589,
        "region_id": 1,
        "name_ar": "السر",
        "name_en": "Al Sirr",
        "center": [
            25.33602377,
            44.46685248
        ]
    },
    {
        "city_id": 590,
        "region_id": 1,
        "name_ar": "مشرف",
        "name_en": "Mushrif",
        "center": [
            25.40985997,
            44.45218995
        ]
    },
    {
        "city_id": 591,
        "region_id": 1,
        "name_ar": "بدائع سويقة",
        "name_en": "Badai' Suwayqah",
        "center": [
            24.70951999,
            43.33360003
        ]
    },
    {
        "city_id": 592,
        "region_id": 1,
        "name_ar": "الصلبية",
        "name_en": "As Sulubiyah",
        "center": [
            24.90151994,
            43.28775994
        ]
    },
    {
        "city_id": 593,
        "region_id": 1,
        "name_ar": "حدة (مشرفة)",
        "name_en": "Heddah(Mushrifah)",
        "center": [
            24.88372244,
            43.22621033
        ]
    },
    {
        "city_id": 594,
        "region_id": 1,
        "name_ar": "مزارع الروضة",
        "name_en": "Mazari' Ar Rawdah",
        "center": [
            24.78929998,
            43.26456005
        ]
    },
    {
        "city_id": 595,
        "region_id": 4,
        "name_ar": "هرمولة",
        "name_en": "Hurmulah",
        "center": [
            24.87373002,
            43.09040996
        ]
    },
    {
        "city_id": 596,
        "region_id": 4,
        "name_ar": "فيضة ابان الاحمر",
        "name_en": "Faydat Aban Alahmar",
        "center": [
            25.44628989,
            42.85564395
        ]
    },
    {
        "city_id": 597,
        "region_id": 4,
        "name_ar": "الدارة",
        "name_en": "Ad Darah",
        "center": [
            24.83576,
            43.11766001
        ]
    },
    {
        "city_id": 598,
        "region_id": 1,
        "name_ar": "مطربة",
        "name_en": "Mutribah",
        "center": [
            24.66635318,
            43.70940916
        ]
    },
    {
        "city_id": 599,
        "region_id": 1,
        "name_ar": "رغلة",
        "name_en": "Raghlah",
        "center": [
            25.14327001,
            44.59965004
        ]
    },
    {
        "city_id": 600,
        "region_id": 1,
        "name_ar": "مشرفة",
        "name_en": "Mushrifah",
        "center": [
            25.15605,
            44.64175994
        ]
    },
    {
        "city_id": 601,
        "region_id": 1,
        "name_ar": "ضبة",
        "name_en": "Dabbah",
        "center": [
            25.12545001,
            43.65551004
        ]
    },
    {
        "city_id": 602,
        "region_id": 1,
        "name_ar": "العطاوي",
        "name_en": "Al 'Atawi",
        "center": [
            24.95914997,
            44.70676005
        ]
    },
    {
        "city_id": 603,
        "region_id": 1,
        "name_ar": "الحفائر",
        "name_en": "Al Hafair",
        "center": [
            24.50288003,
            44.61741002
        ]
    },
    {
        "city_id": 604,
        "region_id": 1,
        "name_ar": "مزارع طينان",
        "name_en": "Mazari' Tinan",
        "center": [
            24.27545995,
            43.61941996
        ]
    },
    {
        "city_id": 605,
        "region_id": 1,
        "name_ar": "منيفة",
        "name_en": "Munifah",
        "center": [
            24.28691005,
            43.41903999
        ]
    },
    {
        "city_id": 606,
        "region_id": 1,
        "name_ar": "قويعان",
        "name_en": "Quway'an",
        "center": [
            24.29056995,
            43.49737001
        ]
    },
    {
        "city_id": 607,
        "region_id": 1,
        "name_ar": "الحنابج",
        "name_en": "Al Hanabij",
        "center": [
            23.96857001,
            43.33308997
        ]
    },
    {
        "city_id": 608,
        "region_id": 1,
        "name_ar": "الشفلحية",
        "name_en": "Ash Shifallahiyah",
        "center": [
            25.54403005,
            44.45293006
        ]
    },
    {
        "city_id": 609,
        "region_id": 1,
        "name_ar": "روضة وثيلان",
        "name_en": "Rawdat Wuthaylan",
        "center": [
            25.52459002,
            44.45285006
        ]
    },
    {
        "city_id": 610,
        "region_id": 1,
        "name_ar": "ابو ركب",
        "name_en": "Abu Rukab",
        "center": [
            25.11148996,
            43.45833994
        ]
    },
    {
        "city_id": 611,
        "region_id": 1,
        "name_ar": "الخالدية",
        "name_en": "Al Khalidiyah",
        "center": [
            25.39414995,
            44.14928995
        ]
    },
    {
        "city_id": 612,
        "region_id": 1,
        "name_ar": "الحفنة",
        "name_en": "Al Hifnah",
        "center": [
            24.08408004,
            43.47751996
        ]
    },
    {
        "city_id": 613,
        "region_id": 1,
        "name_ar": "أبو عرينة",
        "name_en": "Abu Uraynah",
        "center": [
            24.03569005,
            43.45536001
        ]
    },
    {
        "city_id": 614,
        "region_id": 1,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            24.03216995,
            43.44528002
        ]
    },
    {
        "city_id": 615,
        "region_id": 1,
        "name_ar": "بحار الجديد",
        "name_en": "Bihar Al Jadid",
        "center": [
            24.14562996,
            43.62008004
        ]
    },
    {
        "city_id": 616,
        "region_id": 1,
        "name_ar": "حميان",
        "name_en": "Hamayyan",
        "center": [
            23.8053,
            43.44513333
        ]
    },
    {
        "city_id": 617,
        "region_id": 6,
        "name_ar": "الجربوعية",
        "name_en": "Al Jarboeyyah",
        "center": [
            19.64621269,
            43.49444195
        ]
    },
    {
        "city_id": 618,
        "region_id": 1,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            23.93884006,
            43.54643004
        ]
    },
    {
        "city_id": 619,
        "region_id": 1,
        "name_ar": "نميلين",
        "name_en": "Numaileen",
        "center": [
            24.01016667,
            43.61696667
        ]
    },
    {
        "city_id": 620,
        "region_id": 1,
        "name_ar": "الدهاسية",
        "name_en": "Ad Dahasiyah",
        "center": [
            23.90504999,
            43.54677996
        ]
    },
    {
        "city_id": 621,
        "region_id": 1,
        "name_ar": "المصلوم",
        "name_en": "Al Maslum",
        "center": [
            23.94719998,
            43.69570995
        ]
    },
    {
        "city_id": 622,
        "region_id": 1,
        "name_ar": "سعدة",
        "name_en": "Sa'dah",
        "center": [
            23.74434995,
            44.03519001
        ]
    },
    {
        "city_id": 623,
        "region_id": 1,
        "name_ar": "أم رضمة",
        "name_en": "Umm Radmah",
        "center": [
            23.71528003,
            44.23738002
        ]
    },
    {
        "city_id": 624,
        "region_id": 1,
        "name_ar": "السنارية",
        "name_en": "As Sinnariyah",
        "center": [
            25.28150997,
            44.15240921
        ]
    },
    {
        "city_id": 625,
        "region_id": 1,
        "name_ar": "الديرية",
        "name_en": "Ad Dirirah",
        "center": [
            25.21580997,
            44.21536003
        ]
    },
    {
        "city_id": 626,
        "region_id": 1,
        "name_ar": "المغزل",
        "name_en": "Al Mighzal",
        "center": [
            25.18471998,
            44.22065003
        ]
    },
    {
        "city_id": 627,
        "region_id": 1,
        "name_ar": "جوباح",
        "name_en": "Jubah",
        "center": [
            24.53769995,
            45.06459006
        ]
    },
    {
        "city_id": 628,
        "region_id": 1,
        "name_ar": "القرنة",
        "name_en": "Al Qarnah",
        "center": [
            24.68621996,
            44.98971
        ]
    },
    {
        "city_id": 629,
        "region_id": 1,
        "name_ar": "وثيلان",
        "name_en": "Wuthaylan",
        "center": [
            25.49828995,
            44.41304995
        ]
    },
    {
        "city_id": 630,
        "region_id": 1,
        "name_ar": "عين الصوينع",
        "name_en": "'Ayn As Suwayni'",
        "center": [
            25.45196005,
            44.42460006
        ]
    },
    {
        "city_id": 631,
        "region_id": 1,
        "name_ar": "الأرطاوي",
        "name_en": "Al Artawi",
        "center": [
            25.37893003,
            44.49769995
        ]
    },
    {
        "city_id": 632,
        "region_id": 1,
        "name_ar": "الثندوة",
        "name_en": "Ath Thiduwah",
        "center": [
            24.98673002,
            44.34188006
        ]
    },
    {
        "city_id": 633,
        "region_id": 1,
        "name_ar": "أبو جلال",
        "name_en": "Abu Jilal",
        "center": [
            25.15136997,
            43.48136001
        ]
    },
    {
        "city_id": 634,
        "region_id": 1,
        "name_ar": "جنوب البرود",
        "name_en": "Janub Al Burud",
        "center": [
            24.99600004,
            44.62264006
        ]
    },
    {
        "city_id": 635,
        "region_id": 1,
        "name_ar": "غرب البرود",
        "name_en": "Gharb Al Burud",
        "center": [
            25.04315001,
            44.54588
        ]
    },
    {
        "city_id": 636,
        "region_id": 1,
        "name_ar": "الريشية",
        "name_en": "Ar Rishiyah",
        "center": [
            24.19580004,
            43.49756999
        ]
    },
    {
        "city_id": 637,
        "region_id": 1,
        "name_ar": "عبلة الرفايع",
        "name_en": "'Ablah Al Rafayia",
        "center": [
            24.58833307,
            43.76625076
        ]
    },
    {
        "city_id": 638,
        "region_id": 1,
        "name_ar": "مزرعة البيضة",
        "name_en": "Mazra'at Al Bidah",
        "center": [
            24.61143002,
            43.78955
        ]
    },
    {
        "city_id": 639,
        "region_id": 1,
        "name_ar": "السليسية",
        "name_en": "As Sulaysiyah",
        "center": [
            24.17838996,
            43.72007002
        ]
    },
    {
        "city_id": 640,
        "region_id": 1,
        "name_ar": "مزرعة سليسان",
        "name_en": "Mazra'at Sulaysan",
        "center": [
            24.37101003,
            43.66867006
        ]
    },
    {
        "city_id": 641,
        "region_id": 1,
        "name_ar": "العويجاء",
        "name_en": "Al 'Uwayja",
        "center": [
            24.17309003,
            43.80738999
        ]
    },
    {
        "city_id": 642,
        "region_id": 1,
        "name_ar": "العدوة",
        "name_en": "Al 'Idwah",
        "center": [
            24.20380004,
            43.84909006
        ]
    },
    {
        "city_id": 643,
        "region_id": 1,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            24.07644003,
            43.88986006
        ]
    },
    {
        "city_id": 644,
        "region_id": 1,
        "name_ar": "بدائع الهمجة",
        "name_en": "Badai' Al Hamjah",
        "center": [
            24.26239995,
            43.88928999
        ]
    },
    {
        "city_id": 645,
        "region_id": 1,
        "name_ar": "فيضة القوازين",
        "name_en": "Faydat Al Quwazin",
        "center": [
            24.33409999,
            43.76375004
        ]
    },
    {
        "city_id": 646,
        "region_id": 1,
        "name_ar": "مزارع مصيقرة",
        "name_en": "Mazari' Musayqirat",
        "center": [
            24.99734994,
            44.42643995
        ]
    },
    {
        "city_id": 647,
        "region_id": 1,
        "name_ar": "الفيحاء",
        "name_en": "Al Fayha",
        "center": [
            24.39941006,
            44.86477995
        ]
    },
    {
        "city_id": 648,
        "region_id": 1,
        "name_ar": "الدسمة",
        "name_en": "Ad Dasmah",
        "center": [
            24.46662001,
            44.51550998
        ]
    },
    {
        "city_id": 649,
        "region_id": 1,
        "name_ar": "صفاقة",
        "name_en": "Saffaqah",
        "center": [
            24.33488995,
            44.47178999
        ]
    },
    {
        "city_id": 650,
        "region_id": 1,
        "name_ar": "قبيعة",
        "name_en": "Qubay'ah",
        "center": [
            24.29360002,
            44.53869998
        ]
    },
    {
        "city_id": 651,
        "region_id": 1,
        "name_ar": "الشبرمية",
        "name_en": "Ash Shubrumiyah",
        "center": [
            24.26622997,
            44.18508995
        ]
    },
    {
        "city_id": 652,
        "region_id": 1,
        "name_ar": "كويكبة",
        "name_en": "Kuwaykibah",
        "center": [
            24.15957994,
            43.95126995
        ]
    },
    {
        "city_id": 653,
        "region_id": 8,
        "name_ar": "الرعيلة",
        "name_en": "Al Raeelah",
        "center": [
            27.69410073,
            41.59704866
        ]
    },
    {
        "city_id": 654,
        "region_id": 1,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            24.7669404,
            43.69815845
        ]
    },
    {
        "city_id": 655,
        "region_id": 1,
        "name_ar": "الرقيبة",
        "name_en": "Ar Raqibah",
        "center": [
            24.97875003,
            43.77278001
        ]
    },
    {
        "city_id": 656,
        "region_id": 1,
        "name_ar": "بدع الصعكي",
        "name_en": "Bid' As Si'aki",
        "center": [
            24.95118996,
            43.71930997
        ]
    },
    {
        "city_id": 657,
        "region_id": 1,
        "name_ar": "سلطانة",
        "name_en": "Sultanah",
        "center": [
            24.90557996,
            43.74914996
        ]
    },
    {
        "city_id": 658,
        "region_id": 1,
        "name_ar": "عبلة",
        "name_en": "'Ablah",
        "center": [
            24.98123002,
            43.66083001
        ]
    },
    {
        "city_id": 659,
        "region_id": 1,
        "name_ar": "الملينية",
        "name_en": "Al Milayyiniyah",
        "center": [
            24.49583998,
            44.11810995
        ]
    },
    {
        "city_id": 660,
        "region_id": 1,
        "name_ar": "البديعة",
        "name_en": "Al Badi'ah",
        "center": [
            24.55447001,
            43.90375996
        ]
    },
    {
        "city_id": 661,
        "region_id": 1,
        "name_ar": "روضة جهام",
        "name_en": "Rawdat Jaham",
        "center": [
            24.48406667,
            43.68251667
        ]
    },
    {
        "city_id": 662,
        "region_id": 1,
        "name_ar": "مزارع الجديدة",
        "name_en": "Mazari' Al Jadidah",
        "center": [
            24.55340002,
            43.72106001
        ]
    },
    {
        "city_id": 663,
        "region_id": 1,
        "name_ar": "منيفة المغايرة",
        "name_en": "Munifah Al Maghayirah",
        "center": [
            24.46311002,
            43.84227003
        ]
    },
    {
        "city_id": 664,
        "region_id": 1,
        "name_ar": "الدرعية",
        "name_en": "Ad Dir'iyah",
        "center": [
            24.64344003,
            43.4959
        ]
    },
    {
        "city_id": 665,
        "region_id": 1,
        "name_ar": "الرمحية",
        "name_en": "Ar Rumayhah",
        "center": [
            24.65887996,
            43.49570994
        ]
    },
    {
        "city_id": 666,
        "region_id": 1,
        "name_ar": "حسو الحيد",
        "name_en": "Hasu Al Hayd",
        "center": [
            24.84664996,
            43.68065002
        ]
    },
    {
        "city_id": 667,
        "region_id": 1,
        "name_ar": "حديجة",
        "name_en": "Hudayjah",
        "center": [
            24.80527946,
            43.59846552
        ]
    },
    {
        "city_id": 668,
        "region_id": 1,
        "name_ar": "الدارة",
        "name_en": "Ad Darah",
        "center": [
            24.96260005,
            43.51682994
        ]
    },
    {
        "city_id": 669,
        "region_id": 1,
        "name_ar": "الدوادمي",
        "name_en": "Ad Duwadimi",
        "center": [
            24.50127995,
            44.38113994
        ]
    },
    {
        "city_id": 670,
        "region_id": 1,
        "name_ar": "الدمثي",
        "name_en": "Ad Damthi",
        "center": [
            25.37418999,
            44.46656999
        ]
    },
    {
        "city_id": 671,
        "region_id": 1,
        "name_ar": "أوضاخ",
        "name_en": "Udakh",
        "center": [
            25.24645006,
            43.91625997
        ]
    },
    {
        "city_id": 672,
        "region_id": 1,
        "name_ar": "كبشان",
        "name_en": "Kabshan",
        "center": [
            24.53643996,
            43.30600003
        ]
    },
    {
        "city_id": 673,
        "region_id": 1,
        "name_ar": "حديجة",
        "name_en": "Hudayjah",
        "center": [
            24.56008002,
            43.23586994
        ]
    },
    {
        "city_id": 674,
        "region_id": 1,
        "name_ar": "القرارة",
        "name_en": "Al Qararah",
        "center": [
            24.88628998,
            43.29511996
        ]
    },
    {
        "city_id": 675,
        "region_id": 1,
        "name_ar": "العوشزية",
        "name_en": "Al Awshaziyah",
        "center": [
            24.86054999,
            43.18890002
        ]
    },
    {
        "city_id": 676,
        "region_id": 1,
        "name_ar": "الجمش",
        "name_en": "Al Jimsh",
        "center": [
            24.67564997,
            43.68714003
        ]
    },
    {
        "city_id": 677,
        "region_id": 1,
        "name_ar": "نجخ",
        "name_en": "Najkh",
        "center": [
            24.67562994,
            43.68642994
        ]
    },
    {
        "city_id": 678,
        "region_id": 1,
        "name_ar": "جريسة",
        "name_en": "Juraysah",
        "center": [
            24.43549001,
            44.25535006
        ]
    },
    {
        "city_id": 679,
        "region_id": 1,
        "name_ar": "ام العثاكل",
        "name_en": "Umm Al 'Athakil",
        "center": [
            24.49699001,
            44.25997995
        ]
    },
    {
        "city_id": 680,
        "region_id": 1,
        "name_ar": "عرجاء",
        "name_en": "Arja'",
        "center": [
            24.72281002,
            44.29585002
        ]
    },
    {
        "city_id": 681,
        "region_id": 1,
        "name_ar": "أم سليم",
        "name_en": "Umm Sulaym",
        "center": [
            25.17660999,
            44.58691994
        ]
    },
    {
        "city_id": 682,
        "region_id": 1,
        "name_ar": "ساجر",
        "name_en": "Sajir",
        "center": [
            25.18671999,
            44.60127997
        ]
    },
    {
        "city_id": 683,
        "region_id": 1,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            25.15467,
            44.58300004
        ]
    },
    {
        "city_id": 684,
        "region_id": 1,
        "name_ar": "نفي",
        "name_en": "Nifi",
        "center": [
            25.03456005,
            43.81251004
        ]
    },
    {
        "city_id": 685,
        "region_id": 1,
        "name_ar": "مصدة",
        "name_en": "Masadah",
        "center": [
            24.54259002,
            44.27640005
        ]
    },
    {
        "city_id": 686,
        "region_id": 1,
        "name_ar": "الخفيفية",
        "name_en": "Al Khufayfiyah",
        "center": [
            24.91026984,
            44.72223671
        ]
    },
    {
        "city_id": 687,
        "region_id": 1,
        "name_ar": "عسيلة الوسطي",
        "name_en": "'Usaylah Al Wusta",
        "center": [
            24.08078248,
            43.51338983
        ]
    },
    {
        "city_id": 688,
        "region_id": 1,
        "name_ar": "أرطاوي الرقاص",
        "name_en": "Artawi Ar Raqqas",
        "center": [
            25.06397002,
            44.70763003
        ]
    },
    {
        "city_id": 689,
        "region_id": 1,
        "name_ar": "عشيران",
        "name_en": "'Ushayran",
        "center": [
            25.51073003,
            44.40362998
        ]
    },
    {
        "city_id": 690,
        "region_id": 1,
        "name_ar": "مزرعة الخفيسة",
        "name_en": "Mazra'at Al Khufaysah",
        "center": [
            25.46633999,
            44.45207001
        ]
    },
    {
        "city_id": 691,
        "region_id": 1,
        "name_ar": "عين القنور",
        "name_en": "'Ayn Al Qannur",
        "center": [
            25.40597,
            44.49913994
        ]
    },
    {
        "city_id": 692,
        "region_id": 1,
        "name_ar": "التسرير",
        "name_en": "At Tasrir",
        "center": [
            25.08095,
            44.28547995
        ]
    },
    {
        "city_id": 693,
        "region_id": 1,
        "name_ar": "الاثلة",
        "name_en": "Al Athlah",
        "center": [
            25.29749997,
            43.88835999
        ]
    },
    {
        "city_id": 694,
        "region_id": 1,
        "name_ar": "عريفيجان",
        "name_en": "'Urayfijan",
        "center": [
            25.18194003,
            43.47204995
        ]
    },
    {
        "city_id": 695,
        "region_id": 1,
        "name_ar": "السكران",
        "name_en": "As Sakran",
        "center": [
            25.27043002,
            44.58441996
        ]
    },
    {
        "city_id": 696,
        "region_id": 1,
        "name_ar": "جفن",
        "name_en": "Jifin",
        "center": [
            25.29617006,
            44.57001005
        ]
    },
    {
        "city_id": 697,
        "region_id": 1,
        "name_ar": "البرود",
        "name_en": "Al Burud",
        "center": [
            25.08323004,
            44.61359006
        ]
    },
    {
        "city_id": 698,
        "region_id": 1,
        "name_ar": "جفنا",
        "name_en": "Jifana",
        "center": [
            24.18814,
            43.46232998
        ]
    },
    {
        "city_id": 699,
        "region_id": 1,
        "name_ar": "الصالحية (العرضان)",
        "name_en": "As Salhiyah(Al Ardan)",
        "center": [
            24.63654809,
            43.70837779
        ]
    },
    {
        "city_id": 700,
        "region_id": 1,
        "name_ar": "العاذرية",
        "name_en": "Al 'Adhiriyah",
        "center": [
            24.66564999,
            43.76535005
        ]
    },
    {
        "city_id": 701,
        "region_id": 1,
        "name_ar": "البجادية",
        "name_en": "Al Bijadiyah",
        "center": [
            24.30087001,
            43.73479
        ]
    },
    {
        "city_id": 702,
        "region_id": 1,
        "name_ar": "الرفائع",
        "name_en": "Ar Rafai'",
        "center": [
            24.21416002,
            44.23123003
        ]
    },
    {
        "city_id": 703,
        "region_id": 1,
        "name_ar": "جهام",
        "name_en": "Jaham",
        "center": [
            24.53662996,
            43.57989004
        ]
    },
    {
        "city_id": 705,
        "region_id": 1,
        "name_ar": "الحزيمية",
        "name_en": "Al Huzaymiyah",
        "center": [
            24.46033003,
            44.35887006
        ]
    },
    {
        "city_id": 706,
        "region_id": 1,
        "name_ar": "خف",
        "name_en": "Khuff",
        "center": [
            24.92689203,
            44.7102522
        ]
    },
    {
        "city_id": 707,
        "region_id": 1,
        "name_ar": "المحمدية",
        "name_en": "Al Muhammadiyah",
        "center": [
            24.79621001,
            44.81767002
        ]
    },
    {
        "city_id": 708,
        "region_id": 1,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            24.45005001,
            44.71343004
        ]
    },
    {
        "city_id": 709,
        "region_id": 1,
        "name_ar": "ماسل",
        "name_en": "Masal",
        "center": [
            24.24853005,
            44.67527995
        ]
    },
    {
        "city_id": 710,
        "region_id": 1,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            24.30006995,
            43.52260999
        ]
    },
    {
        "city_id": 711,
        "region_id": 1,
        "name_ar": "منيفة",
        "name_en": "Munifah",
        "center": [
            24.57656005,
            43.55357994
        ]
    },
    {
        "city_id": 712,
        "region_id": 1,
        "name_ar": "رضوى",
        "name_en": "Radwa",
        "center": [
            24.78725996,
            43.54868995
        ]
    },
    {
        "city_id": 713,
        "region_id": 1,
        "name_ar": "ارطاوي حليت",
        "name_en": "Artawi Hillit",
        "center": [
            24.80589996,
            43.52652001
        ]
    },
    {
        "city_id": 714,
        "region_id": 1,
        "name_ar": "عواضة",
        "name_en": "'Awwadah",
        "center": [
            24.57883995,
            43.62607997
        ]
    },
    {
        "city_id": 715,
        "region_id": 1,
        "name_ar": "شرارة",
        "name_en": "Shararah",
        "center": [
            24.26195002,
            43.74276006
        ]
    },
    {
        "city_id": 716,
        "region_id": 1,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            24.34333,
            43.86847006
        ]
    },
    {
        "city_id": 717,
        "region_id": 1,
        "name_ar": "صقرة",
        "name_en": "Saqrah",
        "center": [
            24.31259001,
            43.72882998
        ]
    },
    {
        "city_id": 718,
        "region_id": 1,
        "name_ar": "العقيشية",
        "name_en": "Al Uqayshiyah",
        "center": [
            24.31958997,
            43.72078998
        ]
    },
    {
        "city_id": 719,
        "region_id": 1,
        "name_ar": "القرين",
        "name_en": "Al Qurayn",
        "center": [
            24.74605003,
            43.78945998
        ]
    },
    {
        "city_id": 720,
        "region_id": 1,
        "name_ar": "عقلة الغويري",
        "name_en": "Uqlat Al Uwayri",
        "center": [
            24.72646,
            43.80029
        ]
    },
    {
        "city_id": 721,
        "region_id": 1,
        "name_ar": "ام زموع",
        "name_en": "Umm Zumu'",
        "center": [
            24.77192001,
            43.76523002
        ]
    },
    {
        "city_id": 722,
        "region_id": 1,
        "name_ar": "عين البراحة",
        "name_en": "'Ayn Al Barahah",
        "center": [
            24.75683333,
            43.775
        ]
    },
    {
        "city_id": 723,
        "region_id": 1,
        "name_ar": "مغيراء",
        "name_en": "Mughayra'",
        "center": [
            24.37618005,
            45.02202996
        ]
    },
    {
        "city_id": 724,
        "region_id": 1,
        "name_ar": "الضحوي",
        "name_en": "Ad Dahawi",
        "center": [
            24.45886998,
            44.95990001
        ]
    },
    {
        "city_id": 725,
        "region_id": 1,
        "name_ar": "عسيلة",
        "name_en": "'Usaylah",
        "center": [
            25.11065999,
            44.68227006
        ]
    },
    {
        "city_id": 726,
        "region_id": 1,
        "name_ar": "المغيب",
        "name_en": "Al Maghib",
        "center": [
            24.89188999,
            44.54820003
        ]
    },
    {
        "city_id": 727,
        "region_id": 1,
        "name_ar": "فيضة المفص",
        "name_en": "Faydat Al Mafass",
        "center": [
            24.35560997,
            44.80102002
        ]
    },
    {
        "city_id": 728,
        "region_id": 1,
        "name_ar": "عريدة",
        "name_en": "'Urayyidah",
        "center": [
            24.35801001,
            44.50108996
        ]
    },
    {
        "city_id": 729,
        "region_id": 1,
        "name_ar": "الشعراء",
        "name_en": "Ash Sha'ra'",
        "center": [
            24.26146004,
            44.18137996
        ]
    },
    {
        "city_id": 730,
        "region_id": 1,
        "name_ar": "العازمية",
        "name_en": "Al 'Azimiyah",
        "center": [
            24.51355995,
            43.58698003
        ]
    },
    {
        "city_id": 731,
        "region_id": 1,
        "name_ar": "المحوي",
        "name_en": "Al Mahawi",
        "center": [
            24.48958996,
            43.64114999
        ]
    },
    {
        "city_id": 732,
        "region_id": 1,
        "name_ar": "المدرع",
        "name_en": "Al Mudarri'",
        "center": [
            24.49670003,
            43.61595001
        ]
    },
    {
        "city_id": 733,
        "region_id": 1,
        "name_ar": "سرورة",
        "name_en": "Sururah",
        "center": [
            24.55546999,
            43.62064006
        ]
    },
    {
        "city_id": 734,
        "region_id": 1,
        "name_ar": "عصماء",
        "name_en": "Asma'",
        "center": [
            24.77281005,
            43.69356007
        ]
    },
    {
        "city_id": 735,
        "region_id": 1,
        "name_ar": "ام طليحة",
        "name_en": "Umm Tulayhah",
        "center": [
            24.76544995,
            43.71945996
        ]
    },
    {
        "city_id": 736,
        "region_id": 1,
        "name_ar": "مشرفة نفي",
        "name_en": "Mushrifah Nifi",
        "center": [
            24.92634878,
            43.78908903
        ]
    },
    {
        "city_id": 737,
        "region_id": 1,
        "name_ar": "مساوي",
        "name_en": "Musawi",
        "center": [
            24.94662999,
            43.83440994
        ]
    },
    {
        "city_id": 738,
        "region_id": 1,
        "name_ar": "النقعة",
        "name_en": "An Niq'ah",
        "center": [
            24.94788999,
            43.80427003
        ]
    },
    {
        "city_id": 739,
        "region_id": 1,
        "name_ar": "افقرا",
        "name_en": "Afqirah",
        "center": [
            24.57032002,
            44.05452999
        ]
    },
    {
        "city_id": 740,
        "region_id": 1,
        "name_ar": "الرفاع",
        "name_en": "Ar Rufa'",
        "center": [
            24.54380996,
            43.94905002
        ]
    },
    {
        "city_id": 741,
        "region_id": 1,
        "name_ar": "الفقارة",
        "name_en": "Al Fuqarah",
        "center": [
            24.55026,
            43.93001995
        ]
    },
    {
        "city_id": 742,
        "region_id": 1,
        "name_ar": "الودي",
        "name_en": "Al Wuday",
        "center": [
            24.58505995,
            43.93212998
        ]
    },
    {
        "city_id": 743,
        "region_id": 1,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            24.52861004,
            43.89814998
        ]
    },
    {
        "city_id": 744,
        "region_id": 1,
        "name_ar": "الخبة",
        "name_en": "Al Khubbah",
        "center": [
            24.49586995,
            43.89300003
        ]
    },
    {
        "city_id": 745,
        "region_id": 1,
        "name_ar": "النبوان",
        "name_en": "An Nabuwan",
        "center": [
            24.52506996,
            43.94904994
        ]
    },
    {
        "city_id": 746,
        "region_id": 1,
        "name_ar": "الرديفة",
        "name_en": "Ar Radifah",
        "center": [
            24.58497003,
            43.89917003
        ]
    },
    {
        "city_id": 747,
        "region_id": 1,
        "name_ar": "الرشاوية",
        "name_en": "Ar Rishawiyah",
        "center": [
            24.64723004,
            43.97079998
        ]
    },
    {
        "city_id": 748,
        "region_id": 1,
        "name_ar": "مطربة",
        "name_en": "Mutribah",
        "center": [
            24.4698249,
            43.86730488
        ]
    },
    {
        "city_id": 749,
        "region_id": 1,
        "name_ar": "المستجدة",
        "name_en": "Al Mustajiddah",
        "center": [
            24.51036002,
            43.78782007
        ]
    },
    {
        "city_id": 750,
        "region_id": 1,
        "name_ar": "العامرية",
        "name_en": "Al Amiriyah",
        "center": [
            24.61238,
            43.59474001
        ]
    },
    {
        "city_id": 751,
        "region_id": 1,
        "name_ar": "الحازمية (الرفيعة)",
        "name_en": "Al Hazimiyyah(Ar Rafi'ah)",
        "center": [
            24.63670333,
            43.51271362
        ]
    },
    {
        "city_id": 752,
        "region_id": 1,
        "name_ar": "الظلماوي",
        "name_en": "Adh Dhalmawi",
        "center": [
            24.65039005,
            43.57595995
        ]
    },
    {
        "city_id": 753,
        "region_id": 1,
        "name_ar": "شبيرمة",
        "name_en": "Shubayrimah",
        "center": [
            24.67935996,
            43.55056996
        ]
    },
    {
        "city_id": 754,
        "region_id": 1,
        "name_ar": "عصام",
        "name_en": "Isam",
        "center": [
            24.71982001,
            43.62186006
        ]
    },
    {
        "city_id": 755,
        "region_id": 1,
        "name_ar": "عبادة",
        "name_en": "Abbadah",
        "center": [
            24.71563003,
            43.61608996
        ]
    },
    {
        "city_id": 757,
        "region_id": 1,
        "name_ar": "العبل",
        "name_en": "Al 'Abal",
        "center": [
            24.83866004,
            43.65312995
        ]
    },
    {
        "city_id": 758,
        "region_id": 1,
        "name_ar": "ارطاوي الحماميد",
        "name_en": "Artawi Al Hamamid",
        "center": [
            24.85928995,
            43.51803
        ]
    },
    {
        "city_id": 759,
        "region_id": 1,
        "name_ar": "بدائع ابن نجم",
        "name_en": "Badai' Ibn Najim",
        "center": [
            24.90216002,
            43.52086
        ]
    },
    {
        "city_id": 760,
        "region_id": 3,
        "name_ar": "المرية",
        "name_en": "Al Marriyah",
        "center": [
            24.79927003,
            40.56824004
        ]
    },
    {
        "city_id": 761,
        "region_id": 3,
        "name_ar": "الشقران",
        "name_en": "Ash Shuqran",
        "center": [
            25.02382004,
            40.69559996
        ]
    },
    {
        "city_id": 762,
        "region_id": 3,
        "name_ar": "الكريزية",
        "name_en": "Al Kurayziyah",
        "center": [
            25.28536001,
            40.59362998
        ]
    },
    {
        "city_id": 763,
        "region_id": 3,
        "name_ar": "ذارة",
        "name_en": "Dharah",
        "center": [
            24.99118999,
            40.33887002
        ]
    },
    {
        "city_id": 764,
        "region_id": 3,
        "name_ar": "قصيباء",
        "name_en": "Qusayba",
        "center": [
            25.01223004,
            40.50833006
        ]
    },
    {
        "city_id": 765,
        "region_id": 3,
        "name_ar": "رحبة علوش",
        "name_en": "Rahbat 'Allush",
        "center": [
            25.05785998,
            40.24161997
        ]
    },
    {
        "city_id": 766,
        "region_id": 3,
        "name_ar": "المقرن",
        "name_en": "Al Muqrin",
        "center": [
            25.20948995,
            40.42895
        ]
    },
    {
        "city_id": 767,
        "region_id": 3,
        "name_ar": "الرفائع",
        "name_en": "Ar Rafai'",
        "center": [
            25.09571667,
            41.13656667
        ]
    },
    {
        "city_id": 768,
        "region_id": 3,
        "name_ar": "صبحا",
        "name_en": "Sabha",
        "center": [
            25.20232995,
            41.41969997
        ]
    },
    {
        "city_id": 769,
        "region_id": 3,
        "name_ar": "حزرة",
        "name_en": "Hazrah",
        "center": [
            24.08428997,
            40.47586002
        ]
    },
    {
        "city_id": 770,
        "region_id": 3,
        "name_ar": "غراب",
        "name_en": "Ghurab",
        "center": [
            24.14239004,
            40.15401002
        ]
    },
    {
        "city_id": 771,
        "region_id": 3,
        "name_ar": "الحجرية",
        "name_en": "Al Hijriyah",
        "center": [
            23.82367005,
            40.28087001
        ]
    },
    {
        "city_id": 772,
        "region_id": 3,
        "name_ar": "أبو مغير",
        "name_en": "Abu Mughayr",
        "center": [
            24.74502004,
            41.35885004
        ]
    },
    {
        "city_id": 773,
        "region_id": 3,
        "name_ar": "العد",
        "name_en": "Al 'Idd",
        "center": [
            23.74876005,
            40.29798003
        ]
    },
    {
        "city_id": 774,
        "region_id": 3,
        "name_ar": "الربثة",
        "name_en": "Ar Rabtah",
        "center": [
            24.63455004,
            41.28217998
        ]
    },
    {
        "city_id": 775,
        "region_id": 3,
        "name_ar": "البركة",
        "name_en": "Al Birkah",
        "center": [
            24.62993004,
            41.29375994
        ]
    },
    {
        "city_id": 776,
        "region_id": 3,
        "name_ar": "النفازي",
        "name_en": "An Nafazi",
        "center": [
            24.92414998,
            41.49142
        ]
    },
    {
        "city_id": 777,
        "region_id": 3,
        "name_ar": "الحناكية",
        "name_en": "Al Hinakiyah",
        "center": [
            24.86837001,
            40.49267002
        ]
    },
    {
        "city_id": 778,
        "region_id": 3,
        "name_ar": "المحفر",
        "name_en": "Al Mahaffar",
        "center": [
            24.93730006,
            40.51284003
        ]
    },
    {
        "city_id": 779,
        "region_id": 3,
        "name_ar": "النخيل",
        "name_en": "An Nakhil",
        "center": [
            25.09146001,
            40.48317998
        ]
    },
    {
        "city_id": 780,
        "region_id": 3,
        "name_ar": "الصمد",
        "name_en": "As Samad",
        "center": [
            25.05936998,
            40.48222998
        ]
    },
    {
        "city_id": 781,
        "region_id": 3,
        "name_ar": "الضميرية",
        "name_en": "Ad Dumayriyah",
        "center": [
            23.99050995,
            40.37132999
        ]
    },
    {
        "city_id": 782,
        "region_id": 3,
        "name_ar": "المحامة",
        "name_en": "Al Mahamah",
        "center": [
            24.76466001,
            41.60988997
        ]
    },
    {
        "city_id": 783,
        "region_id": 3,
        "name_ar": "الحسو",
        "name_en": "Al Hisu",
        "center": [
            24.60448004,
            41.61758
        ]
    },
    {
        "city_id": 784,
        "region_id": 3,
        "name_ar": "الهميج",
        "name_en": "Al Humayj",
        "center": [
            25.03882004,
            41.23086002
        ]
    },
    {
        "city_id": 785,
        "region_id": 3,
        "name_ar": "صخيبرة",
        "name_en": "Sukhaybirah",
        "center": [
            24.33247997,
            41.26703
        ]
    },
    {
        "city_id": 786,
        "region_id": 3,
        "name_ar": "هدبان",
        "name_en": "Hadban",
        "center": [
            24.79986004,
            41.69843999
        ]
    },
    {
        "city_id": 787,
        "region_id": 3,
        "name_ar": "بلغة",
        "name_en": "Bilghah",
        "center": [
            24.94691003,
            41.59488995
        ]
    },
    {
        "city_id": 788,
        "region_id": 3,
        "name_ar": "الماوية",
        "name_en": "Al Mawiyah",
        "center": [
            25.16201001,
            41.50467002
        ]
    },
    {
        "city_id": 789,
        "region_id": 3,
        "name_ar": "قصيرة",
        "name_en": "Qusayrah",
        "center": [
            25.33624004,
            41.39361001
        ]
    },
    {
        "city_id": 790,
        "region_id": 3,
        "name_ar": "العوشزي",
        "name_en": "Al Awshazi",
        "center": [
            24.94359005,
            40.55320994
        ]
    },
    {
        "city_id": 791,
        "region_id": 3,
        "name_ar": "عرجاء",
        "name_en": "Arja'",
        "center": [
            25.31697995,
            40.99951003
        ]
    },
    {
        "city_id": 792,
        "region_id": 3,
        "name_ar": "طلال",
        "name_en": "Talal",
        "center": [
            24.65886999,
            41.97170004
        ]
    },
    {
        "city_id": 793,
        "region_id": 1,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            25.11236,
            46.10928998
        ]
    },
    {
        "city_id": 794,
        "region_id": 1,
        "name_ar": "الطوقي",
        "name_en": "At Tawqi",
        "center": [
            25.47063996,
            46.59825996
        ]
    },
    {
        "city_id": 795,
        "region_id": 1,
        "name_ar": "حريملاء",
        "name_en": "Huraymila",
        "center": [
            25.13225998,
            46.12835005
        ]
    },
    {
        "city_id": 796,
        "region_id": 1,
        "name_ar": "ملهم",
        "name_en": "Malham",
        "center": [
            25.17056667,
            46.32656667
        ]
    },
    {
        "city_id": 797,
        "region_id": 1,
        "name_ar": "سدوس",
        "name_en": "Sudus",
        "center": [
            24.99248005,
            46.21198006
        ]
    },
    {
        "city_id": 798,
        "region_id": 1,
        "name_ar": "حزوى",
        "name_en": "Hizwa",
        "center": [
            24.99256999,
            46.23521996
        ]
    },
    {
        "city_id": 799,
        "region_id": 1,
        "name_ar": "دقلة",
        "name_en": "Diqalah",
        "center": [
            25.32609006,
            46.17476002
        ]
    },
    {
        "city_id": 800,
        "region_id": 1,
        "name_ar": "حليفة",
        "name_en": "Hulayfah",
        "center": [
            25.25326996,
            46.22121001
        ]
    },
    {
        "city_id": 801,
        "region_id": 1,
        "name_ar": "صلبوخ",
        "name_en": "Sulbukh",
        "center": [
            25.07788333,
            46.34606667
        ]
    },
    {
        "city_id": 802,
        "region_id": 1,
        "name_ar": "البرة",
        "name_en": "Al Barrah",
        "center": [
            24.91218995,
            45.86823005
        ]
    },
    {
        "city_id": 803,
        "region_id": 1,
        "name_ar": "العويند",
        "name_en": "Al Uwaynid",
        "center": [
            24.88415002,
            45.89613994
        ]
    },
    {
        "city_id": 804,
        "region_id": 1,
        "name_ar": "البويب",
        "name_en": "Al Buwayb",
        "center": [
            25.22847005,
            46.80943001
        ]
    },
    {
        "city_id": 805,
        "region_id": 7,
        "name_ar": "عيينة",
        "name_en": "Uyaynah",
        "center": [
            28.88840998,
            36.06978001
        ]
    },
    {
        "city_id": 806,
        "region_id": 1,
        "name_ar": "إبن غنام",
        "name_en": "Ibn Ghannam",
        "center": [
            24.46525994,
            46.81035002
        ]
    },
    {
        "city_id": 807,
        "region_id": 1,
        "name_ar": "الغنامية",
        "name_en": "Al Ghanamiyah",
        "center": [
            24.47787001,
            46.80724
        ]
    },
    {
        "city_id": 808,
        "region_id": 1,
        "name_ar": "العماج",
        "name_en": "Al 'Ammaj",
        "center": [
            24.43662998,
            46.98681996
        ]
    },
    {
        "city_id": 809,
        "region_id": 1,
        "name_ar": "هيت",
        "name_en": "Hit",
        "center": [
            24.46154997,
            47.01222002
        ]
    },
    {
        "city_id": 810,
        "region_id": 1,
        "name_ar": "الحائر",
        "name_en": "Al Hair",
        "center": [
            24.41292,
            46.82938995
        ]
    },
    {
        "city_id": 811,
        "region_id": 1,
        "name_ar": "كهف برمة",
        "name_en": "Kahf Barmah",
        "center": [
            24.96207994,
            46.96633005
        ]
    },
    {
        "city_id": 812,
        "region_id": 1,
        "name_ar": "بنبان",
        "name_en": "Banban",
        "center": [
            25.00587005,
            46.59192999
        ]
    },
    {
        "city_id": 813,
        "region_id": 1,
        "name_ar": "الثمامة",
        "name_en": "Ath Thumamah",
        "center": [
            25.22864,
            46.63552002
        ]
    },
    {
        "city_id": 814,
        "region_id": 1,
        "name_ar": "لبن",
        "name_en": "Laban",
        "center": [
            24.61596999,
            46.65745002
        ]
    },
    {
        "city_id": 815,
        "region_id": 1,
        "name_ar": "العريدية",
        "name_en": "Al 'Uraydiyah",
        "center": [
            24.43315996,
            45.44480004
        ]
    },
    {
        "city_id": 816,
        "region_id": 1,
        "name_ar": "العباسية",
        "name_en": "Al 'Abbasiyah",
        "center": [
            24.47423998,
            45.48194994
        ]
    },
    {
        "city_id": 817,
        "region_id": 1,
        "name_ar": "أم رضمة",
        "name_en": "Umm Radmah",
        "center": [
            24.61475002,
            45.40812995
        ]
    },
    {
        "city_id": 818,
        "region_id": 1,
        "name_ar": "أم سليم",
        "name_en": "Umm Sulaym",
        "center": [
            24.93789001,
            45.72587004
        ]
    },
    {
        "city_id": 819,
        "region_id": 1,
        "name_ar": "ثرمداء",
        "name_en": "Tharmada'",
        "center": [
            25.12076005,
            45.49260003
        ]
    },
    {
        "city_id": 820,
        "region_id": 1,
        "name_ar": "مرات",
        "name_en": "Marat",
        "center": [
            25.07316002,
            45.46437004
        ]
    },
    {
        "city_id": 821,
        "region_id": 1,
        "name_ar": "أثيثية",
        "name_en": "Uthaythiyah",
        "center": [
            25.16369001,
            45.39558001
        ]
    },
    {
        "city_id": 822,
        "region_id": 1,
        "name_ar": "لبخة",
        "name_en": "Labkhah",
        "center": [
            24.50503998,
            45.38069996
        ]
    },
    {
        "city_id": 823,
        "region_id": 1,
        "name_ar": "روضة الفرس",
        "name_en": "Rawdat Al Faras",
        "center": [
            24.63132996,
            45.36742997
        ]
    },
    {
        "city_id": 824,
        "region_id": 1,
        "name_ar": "ام طلحة",
        "name_en": "Umm Talhah",
        "center": [
            24.65820995,
            45.32362002
        ]
    },
    {
        "city_id": 825,
        "region_id": 1,
        "name_ar": "حويتة",
        "name_en": "Huwaytah",
        "center": [
            24.60839004,
            45.26412002
        ]
    },
    {
        "city_id": 826,
        "region_id": 1,
        "name_ar": "الطويلة",
        "name_en": "At Tawilah",
        "center": [
            24.67423999,
            45.20534998
        ]
    },
    {
        "city_id": 827,
        "region_id": 1,
        "name_ar": "أوبير",
        "name_en": "Ubayr",
        "center": [
            24.61933995,
            46.46978004
        ]
    },
    {
        "city_id": 828,
        "region_id": 1,
        "name_ar": "الدرعية",
        "name_en": "Ad Dir'iyah",
        "center": [
            24.74104999,
            46.58058993
        ]
    },
    {
        "city_id": 829,
        "region_id": 1,
        "name_ar": "عرقة",
        "name_en": "'Irqah",
        "center": [
            24.69069998,
            46.60965002
        ]
    },
    {
        "city_id": 830,
        "region_id": 1,
        "name_ar": "العيينة",
        "name_en": "Al Uyainah",
        "center": [
            24.90613,
            46.37658997
        ]
    },
    {
        "city_id": 831,
        "region_id": 1,
        "name_ar": "الوصيل",
        "name_en": "Al Wusayl",
        "center": [
            24.81401997,
            46.52699003
        ]
    },
    {
        "city_id": 832,
        "region_id": 1,
        "name_ar": "أبا الكباش",
        "name_en": "Aba Al Kibash",
        "center": [
            24.78705997,
            46.53126004
        ]
    },
    {
        "city_id": 833,
        "region_id": 1,
        "name_ar": "الجبيلة",
        "name_en": "Al Jubaylah",
        "center": [
            24.89796998,
            46.45175999
        ]
    },
    {
        "city_id": 834,
        "region_id": 1,
        "name_ar": "العمارية",
        "name_en": "Al 'Ammariyah",
        "center": [
            24.79017005,
            46.42766
        ]
    },
    {
        "city_id": 835,
        "region_id": 1,
        "name_ar": "بوضة",
        "name_en": "Bawdah",
        "center": [
            24.90364001,
            46.30528005
        ]
    },
    {
        "city_id": 836,
        "region_id": 1,
        "name_ar": "العليا",
        "name_en": "Al 'Ulayya",
        "center": [
            24.71273003,
            45.94549996
        ]
    },
    {
        "city_id": 837,
        "region_id": 1,
        "name_ar": "قصر القرينة",
        "name_en": "Qasr Al Quraynah",
        "center": [
            24.47487005,
            46.42176999
        ]
    },
    {
        "city_id": 838,
        "region_id": 1,
        "name_ar": "قصر فيهق",
        "name_en": "Qasr Fayhaq",
        "center": [
            24.48648996,
            46.38691995
        ]
    },
    {
        "city_id": 839,
        "region_id": 1,
        "name_ar": "ضرما",
        "name_en": "Duruma",
        "center": [
            24.60411001,
            46.13181995
        ]
    },
    {
        "city_id": 840,
        "region_id": 1,
        "name_ar": "قصور المقبل",
        "name_en": "Qusur Al Muqbil",
        "center": [
            24.50308996,
            46.36995
        ]
    },
    {
        "city_id": 841,
        "region_id": 1,
        "name_ar": "الغطغط",
        "name_en": "Al Ghutghut",
        "center": [
            24.49195,
            46.18317999
        ]
    },
    {
        "city_id": 842,
        "region_id": 1,
        "name_ar": "قصر ابن شهيل",
        "name_en": "Qasr Ibn Shuhayl",
        "center": [
            24.48123003,
            46.34836003
        ]
    },
    {
        "city_id": 843,
        "region_id": 1,
        "name_ar": "المغرفية",
        "name_en": "Al Maghrafiyah",
        "center": [
            24.46415998,
            46.45886
        ]
    },
    {
        "city_id": 844,
        "region_id": 1,
        "name_ar": "جو",
        "name_en": "Jaww",
        "center": [
            24.49700003,
            46.15764002
        ]
    },
    {
        "city_id": 845,
        "region_id": 1,
        "name_ar": "الغزيز",
        "name_en": "Al Ghuzayz",
        "center": [
            24.66820995,
            45.84943998
        ]
    },
    {
        "city_id": 846,
        "region_id": 1,
        "name_ar": "الثمامي",
        "name_en": "Ath Thumamy",
        "center": [
            23.72249999,
            43.06279006
        ]
    },
    {
        "city_id": 847,
        "region_id": 1,
        "name_ar": "وعلة",
        "name_en": "Wa'alah",
        "center": [
            23.80280005,
            43.03841003
        ]
    },
    {
        "city_id": 848,
        "region_id": 1,
        "name_ar": "الشامانية",
        "name_en": "Ash Shamaniyah",
        "center": [
            23.99220994,
            43.01748005
        ]
    },
    {
        "city_id": 849,
        "region_id": 1,
        "name_ar": "القصورية",
        "name_en": "Al Qusuriyah",
        "center": [
            23.73142998,
            44.61802996
        ]
    },
    {
        "city_id": 850,
        "region_id": 1,
        "name_ar": "مزلة",
        "name_en": "Mazallah",
        "center": [
            23.67768997,
            44.59832998
        ]
    },
    {
        "city_id": 851,
        "region_id": 1,
        "name_ar": "عصيلة",
        "name_en": "'Usaylah",
        "center": [
            23.70805994,
            44.54269994
        ]
    },
    {
        "city_id": 852,
        "region_id": 1,
        "name_ar": "الشواة",
        "name_en": "Ash Shawah",
        "center": [
            23.73759004,
            44.46996003
        ]
    },
    {
        "city_id": 853,
        "region_id": 1,
        "name_ar": "عليان",
        "name_en": "'Ilayyan",
        "center": [
            23.76526996,
            44.50622006
        ]
    },
    {
        "city_id": 854,
        "region_id": 1,
        "name_ar": "عيدان",
        "name_en": "Idan",
        "center": [
            23.61591005,
            44.48834999
        ]
    },
    {
        "city_id": 855,
        "region_id": 1,
        "name_ar": "سيح الدبول",
        "name_en": "Sayh Ad Dubul",
        "center": [
            23.64095002,
            45.78889
        ]
    },
    {
        "city_id": 856,
        "region_id": 1,
        "name_ar": "الهمجة",
        "name_en": "Al Hamjah",
        "center": [
            23.53154995,
            45.91477999
        ]
    },
    {
        "city_id": 857,
        "region_id": 4,
        "name_ar": "ابو سديرة",
        "name_en": "Abu Sudairah",
        "center": [
            25.47695496,
            42.82737806
        ]
    },
    {
        "city_id": 858,
        "region_id": 1,
        "name_ar": "الكدرة",
        "name_en": "Al Kadrah",
        "center": [
            23.79773002,
            45.93035997
        ]
    },
    {
        "city_id": 859,
        "region_id": 1,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            24.38786005,
            45.34158003
        ]
    },
    {
        "city_id": 860,
        "region_id": 1,
        "name_ar": "الخيس",
        "name_en": "Al Khis",
        "center": [
            24.26473003,
            45.03596003
        ]
    },
    {
        "city_id": 861,
        "region_id": 1,
        "name_ar": "الدويرة",
        "name_en": "Ad Duwayrah",
        "center": [
            24.17079994,
            44.98132005
        ]
    },
    {
        "city_id": 862,
        "region_id": 1,
        "name_ar": "أبو مروة",
        "name_en": "Abu Marwah",
        "center": [
            24.24141001,
            44.97918001
        ]
    },
    {
        "city_id": 863,
        "region_id": 1,
        "name_ar": "سماح",
        "name_en": "Samah",
        "center": [
            24.17911004,
            44.94818007
        ]
    },
    {
        "city_id": 864,
        "region_id": 1,
        "name_ar": "القرنة",
        "name_en": "Al Qarnah",
        "center": [
            24.31162997,
            45.07108006
        ]
    },
    {
        "city_id": 865,
        "region_id": 1,
        "name_ar": "داحس",
        "name_en": "Dahis",
        "center": [
            24.28829997,
            44.78304996
        ]
    },
    {
        "city_id": 866,
        "region_id": 1,
        "name_ar": "دسمان",
        "name_en": "Dasman",
        "center": [
            24.22627003,
            44.87469996
        ]
    },
    {
        "city_id": 867,
        "region_id": 1,
        "name_ar": "العويسية",
        "name_en": "Al 'Uwaysiyah",
        "center": [
            24.21900005,
            44.83400999
        ]
    },
    {
        "city_id": 868,
        "region_id": 1,
        "name_ar": "العلياء",
        "name_en": "Al 'Ulayya",
        "center": [
            24.40017995,
            45.78896995
        ]
    },
    {
        "city_id": 869,
        "region_id": 1,
        "name_ar": "مزرعة مزعلة",
        "name_en": "Mazra'at Miz'ilah",
        "center": [
            24.06799004,
            45.15585996
        ]
    },
    {
        "city_id": 870,
        "region_id": 1,
        "name_ar": "القوسة",
        "name_en": "Al Qawsah",
        "center": [
            24.02829005,
            45.06359003
        ]
    },
    {
        "city_id": 871,
        "region_id": 1,
        "name_ar": "الروغ",
        "name_en": "Ar Rawgh",
        "center": [
            24.07374994,
            45.05134998
        ]
    },
    {
        "city_id": 872,
        "region_id": 1,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            24.12520995,
            45.13097996
        ]
    },
    {
        "city_id": 873,
        "region_id": 1,
        "name_ar": "البعيثية",
        "name_en": "Al Bu'aythiyah",
        "center": [
            24.11626,
            45.09745994
        ]
    },
    {
        "city_id": 874,
        "region_id": 1,
        "name_ar": "الشتلانية",
        "name_en": "Ash Shatlaniyah",
        "center": [
            24.11624995,
            45.11156002
        ]
    },
    {
        "city_id": 875,
        "region_id": 1,
        "name_ar": "جدالة",
        "name_en": "Jaddalah",
        "center": [
            23.97469,
            45.07992006
        ]
    },
    {
        "city_id": 876,
        "region_id": 1,
        "name_ar": "قفرة",
        "name_en": "Qafarah",
        "center": [
            23.98899998,
            45.19897999
        ]
    },
    {
        "city_id": 877,
        "region_id": 1,
        "name_ar": "أجزالا",
        "name_en": "Ajzala",
        "center": [
            23.97840995,
            45.14162004
        ]
    },
    {
        "city_id": 878,
        "region_id": 1,
        "name_ar": "الجفارة",
        "name_en": "Al Jafarah",
        "center": [
            23.97075996,
            45.19904996
        ]
    },
    {
        "city_id": 879,
        "region_id": 1,
        "name_ar": "غودة",
        "name_en": "Ghawdah",
        "center": [
            23.00670004,
            44.35761999
        ]
    },
    {
        "city_id": 880,
        "region_id": 1,
        "name_ar": "القويعية",
        "name_en": "Al Quway'iyah",
        "center": [
            24.05067994,
            45.26571998
        ]
    },
    {
        "city_id": 881,
        "region_id": 1,
        "name_ar": "حلبان",
        "name_en": "Halaban",
        "center": [
            23.46292996,
            44.35619996
        ]
    },
    {
        "city_id": 882,
        "region_id": 1,
        "name_ar": "سنام",
        "name_en": "Sanam",
        "center": [
            23.65080171,
            44.73916478
        ]
    },
    {
        "city_id": 883,
        "region_id": 1,
        "name_ar": "الرجع",
        "name_en": "Ar Raj'",
        "center": [
            23.62027999,
            44.76267997
        ]
    },
    {
        "city_id": 884,
        "region_id": 1,
        "name_ar": "طحي",
        "name_en": "Tuhayy",
        "center": [
            23.71887996,
            44.70015999
        ]
    },
    {
        "city_id": 885,
        "region_id": 1,
        "name_ar": "الرويضة",
        "name_en": "Ar Ruwaydah",
        "center": [
            23.76291002,
            44.75864005
        ]
    },
    {
        "city_id": 886,
        "region_id": 1,
        "name_ar": "الخنيقية",
        "name_en": "Al Khunayqiyah",
        "center": [
            24.26881995,
            45.08955996
        ]
    },
    {
        "city_id": 887,
        "region_id": 1,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            23.59677997,
            45.43730997
        ]
    },
    {
        "city_id": 888,
        "region_id": 1,
        "name_ar": "المثناة",
        "name_en": "Al Mathnah",
        "center": [
            23.56572002,
            45.43866005
        ]
    },
    {
        "city_id": 889,
        "region_id": 1,
        "name_ar": "الجلة",
        "name_en": "Jellah",
        "center": [
            24.34316005,
            45.81337997
        ]
    },
    {
        "city_id": 890,
        "region_id": 1,
        "name_ar": "الربواء",
        "name_en": "Ar Rabwa",
        "center": [
            24.39719001,
            45.27286995
        ]
    },
    {
        "city_id": 891,
        "region_id": 1,
        "name_ar": "لجعة",
        "name_en": "Laj'ah",
        "center": [
            23.71711998,
            44.81589003
        ]
    },
    {
        "city_id": 892,
        "region_id": 1,
        "name_ar": "نخيلان",
        "name_en": "Nukhaylan",
        "center": [
            23.93251001,
            44.94077998
        ]
    },
    {
        "city_id": 893,
        "region_id": 1,
        "name_ar": "عنان",
        "name_en": "'Inan",
        "center": [
            23.82402996,
            45.41575003
        ]
    },
    {
        "city_id": 894,
        "region_id": 1,
        "name_ar": "البدع",
        "name_en": "Al Bada'",
        "center": [
            23.56380999,
            44.84888001
        ]
    },
    {
        "city_id": 895,
        "region_id": 1,
        "name_ar": "صبحاء",
        "name_en": "Sabha",
        "center": [
            23.73577995,
            44.65480996
        ]
    },
    {
        "city_id": 896,
        "region_id": 2,
        "name_ar": "القصر",
        "name_en": "Al Qasr",
        "center": [
            22.49735995,
            40.44252996
        ]
    },
    {
        "city_id": 897,
        "region_id": 2,
        "name_ar": "ترعة",
        "name_en": "Tir'ah",
        "center": [
            20.61482006,
            40.91501998
        ]
    },
    {
        "city_id": 898,
        "region_id": 2,
        "name_ar": "ظلم",
        "name_en": "Dhalam",
        "center": [
            22.72299997,
            42.17538998
        ]
    },
    {
        "city_id": 899,
        "region_id": 2,
        "name_ar": "الخفاشة",
        "name_en": "Al Khafashah",
        "center": [
            21.26901998,
            40.29519996
        ]
    },
    {
        "city_id": 900,
        "region_id": 2,
        "name_ar": "براش",
        "name_en": "Barash",
        "center": [
            21.23587003,
            40.26677
        ]
    },
    {
        "city_id": 901,
        "region_id": 2,
        "name_ar": "الشريف",
        "name_en": "Ash Sharif",
        "center": [
            21.46577003,
            40.24870996
        ]
    },
    {
        "city_id": 902,
        "region_id": 1,
        "name_ar": "الجلة وتبراك",
        "name_en": "Jellah And Tebrak",
        "center": [
            24.34261865,
            45.80427774
        ]
    },
    {
        "city_id": 903,
        "region_id": 2,
        "name_ar": "الفرع",
        "name_en": "Al Far'",
        "center": [
            21.08395001,
            40.29368
        ]
    },
    {
        "city_id": 904,
        "region_id": 2,
        "name_ar": "حرجل",
        "name_en": "Harjal",
        "center": [
            21.06122998,
            40.35508001
        ]
    },
    {
        "city_id": 905,
        "region_id": 2,
        "name_ar": "هديل",
        "name_en": "Hidayl",
        "center": [
            21.14824995,
            40.26656995
        ]
    },
    {
        "city_id": 906,
        "region_id": 2,
        "name_ar": "ام الحصن",
        "name_en": "Umm Al Hisn",
        "center": [
            21.01556004,
            40.44345999
        ]
    },
    {
        "city_id": 907,
        "region_id": 2,
        "name_ar": "اللحيان",
        "name_en": "Al Lahyan",
        "center": [
            21.06435004,
            40.47183004
        ]
    },
    {
        "city_id": 908,
        "region_id": 2,
        "name_ar": "الاسراب",
        "name_en": "Al Asrab",
        "center": [
            21.08842004,
            40.40898004
        ]
    },
    {
        "city_id": 909,
        "region_id": 2,
        "name_ar": "العثرية",
        "name_en": "Al Athriyah",
        "center": [
            21.12255002,
            40.45599999
        ]
    },
    {
        "city_id": 910,
        "region_id": 4,
        "name_ar": "الوطاة",
        "name_en": "Al Watah",
        "center": [
            26.50840006,
            43.92940998
        ]
    },
    {
        "city_id": 911,
        "region_id": 4,
        "name_ar": "غضي",
        "name_en": "Ghudayy",
        "center": [
            26.40974997,
            43.72367995
        ]
    },
    {
        "city_id": 912,
        "region_id": 4,
        "name_ar": "الحيطان",
        "name_en": "Al Haytan",
        "center": [
            26.41145001,
            43.76793003
        ]
    },
    {
        "city_id": 913,
        "region_id": 4,
        "name_ar": "الصريف",
        "name_en": "As Sarif",
        "center": [
            26.56133,
            44.19998998
        ]
    },
    {
        "city_id": 914,
        "region_id": 4,
        "name_ar": "الفايزية",
        "name_en": "Al Fayziyah",
        "center": [
            26.41338998,
            43.98237
        ]
    },
    {
        "city_id": 915,
        "region_id": 4,
        "name_ar": "الصعيبية",
        "name_en": "As Su'aybiyah",
        "center": [
            26.22726006,
            43.89303005
        ]
    },
    {
        "city_id": 916,
        "region_id": 4,
        "name_ar": "نقرة العمارين",
        "name_en": "Nuqrat Al 'Amarin",
        "center": [
            26.25086996,
            43.99545002
        ]
    },
    {
        "city_id": 917,
        "region_id": 4,
        "name_ar": "رغيلة",
        "name_en": "Rughaylah",
        "center": [
            26.26102996,
            43.80813994
        ]
    },
    {
        "city_id": 918,
        "region_id": 4,
        "name_ar": "مزارع الدغمانيات",
        "name_en": "Mazari' Ad Daghmaniyat",
        "center": [
            26.85800997,
            43.82977004
        ]
    },
    {
        "city_id": 919,
        "region_id": 4,
        "name_ar": "مزارع الراشد",
        "name_en": "Mazari' Ar Rashid",
        "center": [
            26.74295994,
            43.87643
        ]
    },
    {
        "city_id": 920,
        "region_id": 4,
        "name_ar": "العليا",
        "name_en": "Al 'Ulayya",
        "center": [
            26.36660999,
            43.88494005
        ]
    },
    {
        "city_id": 921,
        "region_id": 4,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            26.42203001,
            43.88284
        ]
    },
    {
        "city_id": 922,
        "region_id": 4,
        "name_ar": "أبلق",
        "name_en": "Ablaq",
        "center": [
            26.47841,
            43.83739997
        ]
    },
    {
        "city_id": 923,
        "region_id": 4,
        "name_ar": "ضراس",
        "name_en": "Diras",
        "center": [
            26.33241,
            43.86627007
        ]
    },
    {
        "city_id": 924,
        "region_id": 4,
        "name_ar": "أم مكرية",
        "name_en": "Umm Makriyah",
        "center": [
            26.86538001,
            43.57874999
        ]
    },
    {
        "city_id": 925,
        "region_id": 4,
        "name_ar": "الخناصة",
        "name_en": "Al Khinnasah",
        "center": [
            26.84737998,
            43.59352006
        ]
    },
    {
        "city_id": 926,
        "region_id": 4,
        "name_ar": "مزارع الصقيريات",
        "name_en": "Mazari' As Suqayriyat",
        "center": [
            26.89720996,
            43.60048995
        ]
    },
    {
        "city_id": 927,
        "region_id": 4,
        "name_ar": "رياض الرماح",
        "name_en": "Riyad Ar Rimah",
        "center": [
            26.92672999,
            43.55360007
        ]
    },
    {
        "city_id": 928,
        "region_id": 4,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            26.80456002,
            43.49174007
        ]
    },
    {
        "city_id": 929,
        "region_id": 4,
        "name_ar": "روض ابن كميان",
        "name_en": "Rawd Ibn Kumayyan",
        "center": [
            26.81406997,
            43.54738004
        ]
    },
    {
        "city_id": 930,
        "region_id": 4,
        "name_ar": "القرو",
        "name_en": "Al Qaru",
        "center": [
            27.47868998,
            43.72254001
        ]
    },
    {
        "city_id": 931,
        "region_id": 4,
        "name_ar": "الحديدية",
        "name_en": "Al Hadidiyah",
        "center": [
            26.90920006,
            43.35220001
        ]
    },
    {
        "city_id": 932,
        "region_id": 4,
        "name_ar": "البعيثة",
        "name_en": "Al Bi'ithah",
        "center": [
            27.60053006,
            44.07858994
        ]
    },
    {
        "city_id": 933,
        "region_id": 4,
        "name_ar": "الصغيرية",
        "name_en": "As Sughayriyah",
        "center": [
            27.21099997,
            43.65229995
        ]
    },
    {
        "city_id": 934,
        "region_id": 4,
        "name_ar": "حويلان",
        "name_en": "Huwaylan",
        "center": [
            26.30686999,
            43.94830996
        ]
    },
    {
        "city_id": 935,
        "region_id": 4,
        "name_ar": "الصباخ",
        "name_en": "As Subakh",
        "center": [
            26.30261996,
            43.98041001
        ]
    },
    {
        "city_id": 936,
        "region_id": 4,
        "name_ar": "اللسيب",
        "name_en": "Al Lusayb",
        "center": [
            26.26577,
            43.97583006
        ]
    },
    {
        "city_id": 937,
        "region_id": 4,
        "name_ar": "الدعيسة",
        "name_en": "Ad Da'isah",
        "center": [
            26.33893997,
            43.90128997
        ]
    },
    {
        "city_id": 938,
        "region_id": 4,
        "name_ar": "العاقول",
        "name_en": "Al 'Aqul",
        "center": [
            26.26509995,
            43.88087997
        ]
    },
    {
        "city_id": 939,
        "region_id": 4,
        "name_ar": "البصر",
        "name_en": "Al Busur",
        "center": [
            26.29642002,
            43.86880998
        ]
    },
    {
        "city_id": 940,
        "region_id": 13,
        "name_ar": "المريشدية",
        "name_en": "Al Murayshdiyah",
        "center": [
            29.97189006,
            37.38881998
        ]
    },
    {
        "city_id": 941,
        "region_id": 4,
        "name_ar": "الطرفية",
        "name_en": "At Turfiyah",
        "center": [
            26.54515998,
            44.02459996
        ]
    },
    {
        "city_id": 942,
        "region_id": 4,
        "name_ar": "القرعاء",
        "name_en": "Al Qar'a",
        "center": [
            26.40403997,
            43.76906006
        ]
    },
    {
        "city_id": 943,
        "region_id": 4,
        "name_ar": "المليداء",
        "name_en": "Al Mulayda'",
        "center": [
            26.31957998,
            43.77954006
        ]
    },
    {
        "city_id": 944,
        "region_id": 4,
        "name_ar": "البطين",
        "name_en": "Al Butayn",
        "center": [
            26.81051996,
            43.88050005
        ]
    },
    {
        "city_id": 945,
        "region_id": 4,
        "name_ar": "محير الترمس",
        "name_en": "Mihir At Turmus",
        "center": [
            27.37502996,
            43.61106996
        ]
    },
    {
        "city_id": 946,
        "region_id": 4,
        "name_ar": "شري",
        "name_en": "Shari",
        "center": [
            27.25835,
            43.40638006
        ]
    },
    {
        "city_id": 947,
        "region_id": 4,
        "name_ar": "الشقة العليا",
        "name_en": "Ash Shiqqah Al 'Ulya",
        "center": [
            26.43458997,
            43.83435004
        ]
    },
    {
        "city_id": 948,
        "region_id": 4,
        "name_ar": "الشقة السفلى",
        "name_en": "Ash Shiqqah As Suflah",
        "center": [
            26.40195999,
            43.85033998
        ]
    },
    {
        "city_id": 949,
        "region_id": 4,
        "name_ar": "الزبيرة",
        "name_en": "Az Zubayrah",
        "center": [
            27.46674005,
            43.71401002
        ]
    },
    {
        "city_id": 950,
        "region_id": 4,
        "name_ar": "قصيباء",
        "name_en": "Qusayba",
        "center": [
            26.88114996,
            43.61021994
        ]
    },
    {
        "city_id": 951,
        "region_id": 4,
        "name_ar": "القوارة",
        "name_en": "Al Quwarah",
        "center": [
            26.78048995,
            43.47392997
        ]
    },
    {
        "city_id": 952,
        "region_id": 4,
        "name_ar": "الهدية",
        "name_en": "Al Hudayyah",
        "center": [
            26.38440997,
            44.05667002
        ]
    },
    {
        "city_id": 953,
        "region_id": 4,
        "name_ar": "الغماس",
        "name_en": "Al Ghammas",
        "center": [
            26.24817998,
            43.92107999
        ]
    },
    {
        "city_id": 954,
        "region_id": 4,
        "name_ar": "مدرج",
        "name_en": "Mudarraj",
        "center": [
            27.22108002,
            43.71663996
        ]
    },
    {
        "city_id": 955,
        "region_id": 4,
        "name_ar": "قبة",
        "name_en": "Qibah",
        "center": [
            27.40646005,
            44.33120001
        ]
    },
    {
        "city_id": 956,
        "region_id": 1,
        "name_ar": "أم سريحة",
        "name_en": "Umm Surayhah",
        "center": [
            23.71929005,
            44.59393996
        ]
    },
    {
        "city_id": 957,
        "region_id": 1,
        "name_ar": "الخروعية",
        "name_en": "Al Kharwa'iyah",
        "center": [
            23.83123997,
            45.64785005
        ]
    },
    {
        "city_id": 958,
        "region_id": 1,
        "name_ar": "المجذمية",
        "name_en": "Al Majdhamiyah",
        "center": [
            23.64918999,
            45.90820004
        ]
    },
    {
        "city_id": 959,
        "region_id": 1,
        "name_ar": "الحصاة",
        "name_en": "Alhasat",
        "center": [
            22.83512006,
            44.94919999
        ]
    },
    {
        "city_id": 960,
        "region_id": 1,
        "name_ar": "الحرملية",
        "name_en": "Al Harmaliyah",
        "center": [
            24.27648001,
            45.16851003
        ]
    },
    {
        "city_id": 961,
        "region_id": 1,
        "name_ar": "خبراء الثوير",
        "name_en": "Khabra Ath Thawir",
        "center": [
            23.65973001,
            45.53376003
        ]
    },
    {
        "city_id": 962,
        "region_id": 1,
        "name_ar": "الرين",
        "name_en": "Ar Rayn",
        "center": [
            23.54508005,
            45.49968006
        ]
    },
    {
        "city_id": 963,
        "region_id": 1,
        "name_ar": "محيرقة",
        "name_en": "Muhairiqah",
        "center": [
            23.99501998,
            45.06957997
        ]
    },
    {
        "city_id": 964,
        "region_id": 1,
        "name_ar": "مرقان",
        "name_en": "Marqan",
        "center": [
            24.06468994,
            44.93351001
        ]
    },
    {
        "city_id": 965,
        "region_id": 1,
        "name_ar": "ام نخيلة",
        "name_en": "Umm Nakhilah",
        "center": [
            23.80691998,
            45.28924006
        ]
    },
    {
        "city_id": 966,
        "region_id": 1,
        "name_ar": "ام الدبي",
        "name_en": "Umm Ad Dibay",
        "center": [
            23.82220003,
            45.27675004
        ]
    },
    {
        "city_id": 967,
        "region_id": 1,
        "name_ar": "خبراء حلوة",
        "name_en": "Khabra Halwah",
        "center": [
            23.98957006,
            45.82462997
        ]
    },
    {
        "city_id": 968,
        "region_id": 1,
        "name_ar": "حجيلا",
        "name_en": "Hujayla",
        "center": [
            23.94895994,
            45.59453999
        ]
    },
    {
        "city_id": 969,
        "region_id": 1,
        "name_ar": "الفويلق",
        "name_en": "Al Fuwayliq",
        "center": [
            24.39900997,
            45.32112993
        ]
    },
    {
        "city_id": 970,
        "region_id": 1,
        "name_ar": "القويع",
        "name_en": "Al Quway'",
        "center": [
            23.91974005,
            45.12794996
        ]
    },
    {
        "city_id": 971,
        "region_id": 1,
        "name_ar": "مزعل",
        "name_en": "Miz'il",
        "center": [
            24.01251002,
            45.21696003
        ]
    },
    {
        "city_id": 972,
        "region_id": 1,
        "name_ar": "بدائع المشاعلة",
        "name_en": "Badai' Al Masha'ilah",
        "center": [
            24.46192,
            46.00425994
        ]
    },
    {
        "city_id": 973,
        "region_id": 1,
        "name_ar": "خبراء فاران",
        "name_en": "Khabra Faran",
        "center": [
            24.28975996,
            46.04865002
        ]
    },
    {
        "city_id": 974,
        "region_id": 1,
        "name_ar": "خبيب الريم",
        "name_en": "Khubayb Ar Rim",
        "center": [
            24.41238996,
            45.93634998
        ]
    },
    {
        "city_id": 975,
        "region_id": 1,
        "name_ar": "القرارة",
        "name_en": "Al Qararah",
        "center": [
            24.41882001,
            45.89187006
        ]
    },
    {
        "city_id": 976,
        "region_id": 1,
        "name_ar": "أم طليح",
        "name_en": "Umm Tulayh",
        "center": [
            24.40727004,
            45.86698994
        ]
    },
    {
        "city_id": 977,
        "region_id": 1,
        "name_ar": "المانعية",
        "name_en": "Al Mani'iyah",
        "center": [
            24.40020997,
            45.84364998
        ]
    },
    {
        "city_id": 978,
        "region_id": 1,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            24.41605002,
            45.82452996
        ]
    },
    {
        "city_id": 979,
        "region_id": 1,
        "name_ar": "العدوة",
        "name_en": "Al 'Idwah",
        "center": [
            24.24407997,
            45.94955005
        ]
    },
    {
        "city_id": 980,
        "region_id": 1,
        "name_ar": "الذيبية",
        "name_en": "Adh Dhibiyah",
        "center": [
            24.50970996,
            45.96740994
        ]
    },
    {
        "city_id": 981,
        "region_id": 1,
        "name_ar": "الصدر",
        "name_en": "As Sadr",
        "center": [
            23.99734997,
            46.05704006
        ]
    },
    {
        "city_id": 982,
        "region_id": 1,
        "name_ar": "ابرقية",
        "name_en": "Abraqiyah",
        "center": [
            24.48851004,
            46.04216006
        ]
    },
    {
        "city_id": 983,
        "region_id": 1,
        "name_ar": "حجرفة",
        "name_en": "Hajrufah",
        "center": [
            24.51271005,
            46.06883002
        ]
    },
    {
        "city_id": 984,
        "region_id": 1,
        "name_ar": "معانيق",
        "name_en": "Ma'aniq",
        "center": [
            24.49726996,
            46.09354006
        ]
    },
    {
        "city_id": 985,
        "region_id": 1,
        "name_ar": "الصيهد",
        "name_en": "As Sayhad",
        "center": [
            24.49078005,
            45.80879996
        ]
    },
    {
        "city_id": 986,
        "region_id": 1,
        "name_ar": "اللغفة",
        "name_en": "Al Laghfah",
        "center": [
            24.47177006,
            45.83247999
        ]
    },
    {
        "city_id": 987,
        "region_id": 1,
        "name_ar": "الخفق الجديد",
        "name_en": "Al Khafaq Al Jadid",
        "center": [
            24.43721996,
            45.71832003
        ]
    },
    {
        "city_id": 988,
        "region_id": 1,
        "name_ar": "ظلماء",
        "name_en": "Dhalma",
        "center": [
            24.47559995,
            45.66782998
        ]
    },
    {
        "city_id": 989,
        "region_id": 1,
        "name_ar": "الخلائق الشرقية",
        "name_en": "Al Khalaiq Ash Sharqiyah",
        "center": [
            24.53259995,
            45.61312001
        ]
    },
    {
        "city_id": 990,
        "region_id": 1,
        "name_ar": "المزاحمية",
        "name_en": "Al Muzahimiyah",
        "center": [
            24.46203004,
            46.27660003
        ]
    },
    {
        "city_id": 991,
        "region_id": 1,
        "name_ar": "تبراك",
        "name_en": "Tebrak",
        "center": [
            24.38355006,
            45.91008002
        ]
    },
    {
        "city_id": 992,
        "region_id": 1,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            24.45644002,
            46.37919999
        ]
    },
    {
        "city_id": 993,
        "region_id": 1,
        "name_ar": "الاوسط",
        "name_en": "Al Awsat",
        "center": [
            24.37637001,
            46.44419004
        ]
    },
    {
        "city_id": 994,
        "region_id": 1,
        "name_ar": "الحويرة",
        "name_en": "Al Huwayrrah",
        "center": [
            24.16125,
            46.28443006
        ]
    },
    {
        "city_id": 995,
        "region_id": 1,
        "name_ar": "خشم معضد",
        "name_en": "Khashm Mi'dad",
        "center": [
            24.2981,
            46.28450997
        ]
    },
    {
        "city_id": 996,
        "region_id": 1,
        "name_ar": "البخرا",
        "name_en": "Al Bakhra",
        "center": [
            24.17327997,
            46.19217994
        ]
    },
    {
        "city_id": 997,
        "region_id": 1,
        "name_ar": "اللغفية",
        "name_en": "Al Lughfiyah",
        "center": [
            24.16783996,
            46.22606004
        ]
    },
    {
        "city_id": 998,
        "region_id": 1,
        "name_ar": "المسبر",
        "name_en": "Al Masbar",
        "center": [
            24.14726997,
            46.20453995
        ]
    },
    {
        "city_id": 999,
        "region_id": 1,
        "name_ar": "النظيم",
        "name_en": "An Nadhim",
        "center": [
            24.14602999,
            46.18714
        ]
    },
    {
        "city_id": 1000,
        "region_id": 1,
        "name_ar": "حفرة نساح",
        "name_en": "Hafirat Nisah",
        "center": [
            24.18358001,
            46.37311003
        ]
    },
    {
        "city_id": 1001,
        "region_id": 1,
        "name_ar": "عجاج",
        "name_en": "'Ajaj",
        "center": [
            24.17331,
            46.45201002
        ]
    },
    {
        "city_id": 1002,
        "region_id": 1,
        "name_ar": "المشاعلة",
        "name_en": "Al Masha'ilah",
        "center": [
            24.49953995,
            45.75739003
        ]
    },
    {
        "city_id": 1003,
        "region_id": 1,
        "name_ar": "قنيفذة",
        "name_en": "Qunayfidhah",
        "center": [
            24.55227005,
            45.71100001
        ]
    },
    {
        "city_id": 1004,
        "region_id": 1,
        "name_ar": "عفرية",
        "name_en": "Ifriyah",
        "center": [
            24.55770001,
            45.69242999
        ]
    },
    {
        "city_id": 1005,
        "region_id": 1,
        "name_ar": "الخلائق الغربية",
        "name_en": "Al Khalaiq Al Gharbiyah",
        "center": [
            24.52200999,
            45.60296001
        ]
    },
    {
        "city_id": 1006,
        "region_id": 1,
        "name_ar": "الجفير",
        "name_en": "Al Jufayr",
        "center": [
            24.01831997,
            46.29226005
        ]
    },
    {
        "city_id": 1007,
        "region_id": 3,
        "name_ar": "الأسطح",
        "name_en": "Al Astah",
        "center": [
            23.58358999,
            39.04956
        ]
    },
    {
        "city_id": 1008,
        "region_id": 3,
        "name_ar": "الرجع",
        "name_en": "Ar Raj'",
        "center": [
            23.52458995,
            38.99349
        ]
    },
    {
        "city_id": 1009,
        "region_id": 3,
        "name_ar": "دمان",
        "name_en": "Duman",
        "center": [
            23.76113996,
            38.80828
        ]
    },
    {
        "city_id": 1010,
        "region_id": 3,
        "name_ar": "المفرق",
        "name_en": "Al Mafraq",
        "center": [
            23.74139999,
            38.76674994
        ]
    },
    {
        "city_id": 1011,
        "region_id": 3,
        "name_ar": "الغزلان",
        "name_en": "Al Ghuzlan",
        "center": [
            23.76148003,
            38.73140998
        ]
    },
    {
        "city_id": 1012,
        "region_id": 3,
        "name_ar": "الجديد",
        "name_en": "Al Jadid",
        "center": [
            23.80681,
            38.83611998
        ]
    },
    {
        "city_id": 1013,
        "region_id": 3,
        "name_ar": "وجمة",
        "name_en": "Wajmah",
        "center": [
            24.34227996,
            39.01505997
        ]
    },
    {
        "city_id": 1014,
        "region_id": 3,
        "name_ar": "عرقوص",
        "name_en": "Arqus",
        "center": [
            24.26913995,
            39.03636998
        ]
    },
    {
        "city_id": 1015,
        "region_id": 3,
        "name_ar": "العنيق",
        "name_en": "Al 'Unayq",
        "center": [
            24.26444004,
            38.94819999
        ]
    },
    {
        "city_id": 1016,
        "region_id": 3,
        "name_ar": "مرتجة",
        "name_en": "Murattijah",
        "center": [
            24.24095004,
            38.86266999
        ]
    },
    {
        "city_id": 1017,
        "region_id": 3,
        "name_ar": "الفقرة",
        "name_en": "Al Faqrah",
        "center": [
            24.34006998,
            38.98653998
        ]
    },
    {
        "city_id": 1018,
        "region_id": 3,
        "name_ar": "خلص",
        "name_en": "Khals",
        "center": [
            23.80828003,
            39.35056002
        ]
    },
    {
        "city_id": 1019,
        "region_id": 3,
        "name_ar": "القفاف",
        "name_en": "Al Qifaf",
        "center": [
            23.43025,
            39.35958006
        ]
    },
    {
        "city_id": 1020,
        "region_id": 3,
        "name_ar": "أم البرك",
        "name_en": "Umm Al Birak",
        "center": [
            23.42377005,
            39.22377994
        ]
    },
    {
        "city_id": 1021,
        "region_id": 3,
        "name_ar": "مريخة",
        "name_en": "Muraykhah",
        "center": [
            23.56106005,
            39.09737004
        ]
    },
    {
        "city_id": 1022,
        "region_id": 3,
        "name_ar": "العبلا",
        "name_en": "Al 'Abla",
        "center": [
            23.56661998,
            39.28228001
        ]
    },
    {
        "city_id": 1023,
        "region_id": 3,
        "name_ar": "مرموماء",
        "name_en": "Marmuma",
        "center": [
            24.08337001,
            38.86265998
        ]
    },
    {
        "city_id": 1024,
        "region_id": 3,
        "name_ar": "قرظة",
        "name_en": "Qurudhah",
        "center": [
            24.12183999,
            38.80899006
        ]
    },
    {
        "city_id": 1025,
        "region_id": 3,
        "name_ar": "أم فحي",
        "name_en": "Umm Fahi",
        "center": [
            24.03612005,
            38.91732006
        ]
    },
    {
        "city_id": 1026,
        "region_id": 3,
        "name_ar": "البركة",
        "name_en": "Al Birkah",
        "center": [
            23.81795995,
            38.87263003
        ]
    },
    {
        "city_id": 1027,
        "region_id": 3,
        "name_ar": "الهدى",
        "name_en": "Al Hada",
        "center": [
            23.98200004,
            38.92602994
        ]
    },
    {
        "city_id": 1028,
        "region_id": 3,
        "name_ar": "الغور",
        "name_en": "Al Ghur",
        "center": [
            23.62826,
            39.04588004
        ]
    },
    {
        "city_id": 1029,
        "region_id": 3,
        "name_ar": "مثعر",
        "name_en": "Math'ar",
        "center": [
            23.68915003,
            39.07623002
        ]
    },
    {
        "city_id": 1030,
        "region_id": 3,
        "name_ar": "الحسينية",
        "name_en": "Al Husayniyah",
        "center": [
            23.86838999,
            38.90350002
        ]
    },
    {
        "city_id": 1031,
        "region_id": 3,
        "name_ar": "الشفية",
        "name_en": "Ash Shufayyah",
        "center": [
            23.82862002,
            39.14389003
        ]
    },
    {
        "city_id": 1032,
        "region_id": 3,
        "name_ar": "السليمية",
        "name_en": "As Sulaymiyah",
        "center": [
            23.93337006,
            39.03287997
        ]
    },
    {
        "city_id": 1033,
        "region_id": 3,
        "name_ar": "أبو قرن",
        "name_en": "Abu Qarn",
        "center": [
            24.20603998,
            38.71756998
        ]
    },
    {
        "city_id": 1034,
        "region_id": 3,
        "name_ar": "المسجد",
        "name_en": "Al Masjid",
        "center": [
            24.01170003,
            39.19695003
        ]
    },
    {
        "city_id": 1035,
        "region_id": 3,
        "name_ar": "اللهبان",
        "name_en": "Al Lahban",
        "center": [
            24.17529995,
            38.95639005
        ]
    },
    {
        "city_id": 1036,
        "region_id": 3,
        "name_ar": "الجوابرة",
        "name_en": "Al Jawabirat",
        "center": [
            24.19575998,
            38.88773999
        ]
    },
    {
        "city_id": 1037,
        "region_id": 3,
        "name_ar": "خرص",
        "name_en": "Khuruss",
        "center": [
            24.11758995,
            38.94595
        ]
    },
    {
        "city_id": 1038,
        "region_id": 3,
        "name_ar": "عاصر",
        "name_en": "Asir",
        "center": [
            24.20132003,
            38.85758998
        ]
    },
    {
        "city_id": 1039,
        "region_id": 3,
        "name_ar": "الأثود",
        "name_en": "Al Athud",
        "center": [
            24.03950001,
            39.00771994
        ]
    },
    {
        "city_id": 1040,
        "region_id": 3,
        "name_ar": "ترجم",
        "name_en": "Tarjim",
        "center": [
            24.02310996,
            39.03958
        ]
    },
    {
        "city_id": 1041,
        "region_id": 3,
        "name_ar": "كتيدة",
        "name_en": "Kitaydah",
        "center": [
            24.10614996,
            39.12592003
        ]
    },
    {
        "city_id": 1042,
        "region_id": 3,
        "name_ar": "سفاء",
        "name_en": "Safa",
        "center": [
            24.06004998,
            39.23148002
        ]
    },
    {
        "city_id": 1043,
        "region_id": 3,
        "name_ar": "رحقان",
        "name_en": "Rahqan",
        "center": [
            24.16431999,
            39.07217
        ]
    },
    {
        "city_id": 1044,
        "region_id": 3,
        "name_ar": "ثعيل",
        "name_en": "Thu'ayyil",
        "center": [
            23.99843997,
            39.09156002
        ]
    },
    {
        "city_id": 1045,
        "region_id": 3,
        "name_ar": "المفرق",
        "name_en": "Al Mafraq",
        "center": [
            23.85655978,
            39.15312323
        ]
    },
    {
        "city_id": 1046,
        "region_id": 3,
        "name_ar": "الميث",
        "name_en": "Al Mayth",
        "center": [
            23.99702,
            39.19453
        ]
    },
    {
        "city_id": 1047,
        "region_id": 3,
        "name_ar": "بئر الغنم",
        "name_en": "Bir Al Ghanam",
        "center": [
            23.90453004,
            39.11538005
        ]
    },
    {
        "city_id": 1048,
        "region_id": 3,
        "name_ar": "المرتجة",
        "name_en": "Al Murtajjah",
        "center": [
            23.93423994,
            39.06514002
        ]
    },
    {
        "city_id": 1049,
        "region_id": 3,
        "name_ar": "المعيزلة",
        "name_en": "Al Ma'ayzilah",
        "center": [
            23.97511996,
            39.07133995
        ]
    },
    {
        "city_id": 1050,
        "region_id": 3,
        "name_ar": "الحار",
        "name_en": "Al Har",
        "center": [
            23.98620999,
            39.12911004
        ]
    },
    {
        "city_id": 1051,
        "region_id": 3,
        "name_ar": "الصديرة",
        "name_en": "As Sudayyirah",
        "center": [
            24.37300995,
            38.86429994
        ]
    },
    {
        "city_id": 1052,
        "region_id": 3,
        "name_ar": "دريبس",
        "name_en": "Diraybis",
        "center": [
            23.36515001,
            39.22220003
        ]
    },
    {
        "city_id": 1053,
        "region_id": 3,
        "name_ar": "بدر",
        "name_en": "Badr",
        "center": [
            23.78301006,
            38.79495005
        ]
    },
    {
        "city_id": 1054,
        "region_id": 3,
        "name_ar": "بئر قيضي",
        "name_en": "Bi'r Qaydi",
        "center": [
            23.64138003,
            39.28377999
        ]
    },
    {
        "city_id": 1055,
        "region_id": 3,
        "name_ar": "الواسطة",
        "name_en": "Al Wasithah",
        "center": [
            23.88021996,
            38.89987997
        ]
    },
    {
        "city_id": 1056,
        "region_id": 3,
        "name_ar": "الرايس",
        "name_en": "Ar Rayis",
        "center": [
            23.58487999,
            38.60797
        ]
    },
    {
        "city_id": 1057,
        "region_id": 3,
        "name_ar": "المسيجيد",
        "name_en": "Al Musayjid",
        "center": [
            24.08679,
            39.09546005
        ]
    },
    {
        "city_id": 1058,
        "region_id": 1,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            24.08919001,
            46.86706
        ]
    },
    {
        "city_id": 1059,
        "region_id": 1,
        "name_ar": "خفس دغرة",
        "name_en": "Khafs Daghrah",
        "center": [
            23.78892002,
            47.18183997
        ]
    },
    {
        "city_id": 1060,
        "region_id": 1,
        "name_ar": "البياض",
        "name_en": "Al Biyad",
        "center": [
            23.86475003,
            47.40152995
        ]
    },
    {
        "city_id": 1061,
        "region_id": 1,
        "name_ar": "الخرج",
        "name_en": "Al Kharj",
        "center": [
            24.15869998,
            47.32695995
        ]
    },
    {
        "city_id": 1062,
        "region_id": 1,
        "name_ar": "اليمامة",
        "name_en": "Al Yamamah",
        "center": [
            24.18448006,
            47.33665995
        ]
    },
    {
        "city_id": 1063,
        "region_id": 1,
        "name_ar": "الرفاع",
        "name_en": "Ar Rufa'",
        "center": [
            24.30431002,
            47.17751999
        ]
    },
    {
        "city_id": 1064,
        "region_id": 1,
        "name_ar": "البرة",
        "name_en": "Al Barrah",
        "center": [
            24.25730995,
            47.23605994
        ]
    },
    {
        "city_id": 1065,
        "region_id": 1,
        "name_ar": "فرزان",
        "name_en": "Farzan",
        "center": [
            24.19442001,
            47.27922993
        ]
    },
    {
        "city_id": 1066,
        "region_id": 1,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            24.17300002,
            47.26093997
        ]
    },
    {
        "city_id": 1067,
        "region_id": 1,
        "name_ar": "الرفائع",
        "name_en": "Ar Rafai'",
        "center": [
            24.29890996,
            47.17395999
        ]
    },
    {
        "city_id": 1068,
        "region_id": 1,
        "name_ar": "العذار",
        "name_en": "Al 'Adhar",
        "center": [
            23.98161999,
            47.20274003
        ]
    },
    {
        "city_id": 1069,
        "region_id": 1,
        "name_ar": "زميقة",
        "name_en": "Zumayqah",
        "center": [
            23.95965997,
            47.20696994
        ]
    },
    {
        "city_id": 1070,
        "region_id": 1,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            24.12263006,
            47.15103002
        ]
    },
    {
        "city_id": 1071,
        "region_id": 1,
        "name_ar": "الهياثم",
        "name_en": "Al Hayathim",
        "center": [
            24.16543995,
            47.23317003
        ]
    },
    {
        "city_id": 1072,
        "region_id": 1,
        "name_ar": "البدع القديم",
        "name_en": "Al Bada' Al Qadim",
        "center": [
            24.18630001,
            47.22544996
        ]
    },
    {
        "city_id": 1073,
        "region_id": 1,
        "name_ar": "الدلم",
        "name_en": "Ad Dilam",
        "center": [
            23.99383001,
            47.21941
        ]
    },
    {
        "city_id": 1075,
        "region_id": 1,
        "name_ar": "نعجان",
        "name_en": "Na'jan",
        "center": [
            24.07839005,
            47.17281006
        ]
    },
    {
        "city_id": 1076,
        "region_id": 1,
        "name_ar": "حي القطار",
        "name_en": "Hai Al Qitar",
        "center": [
            24.25111003,
            47.36865
        ]
    },
    {
        "city_id": 1077,
        "region_id": 1,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            24.18920999,
            47.28343996
        ]
    },
    {
        "city_id": 1078,
        "region_id": 1,
        "name_ar": "السلمية",
        "name_en": "As Silimiyah",
        "center": [
            24.20312682,
            47.29035136
        ]
    },
    {
        "city_id": 1079,
        "region_id": 1,
        "name_ar": "البدع",
        "name_en": "Al Bada'",
        "center": [
            24.24650999,
            47.35543
        ]
    },
    {
        "city_id": 1080,
        "region_id": 1,
        "name_ar": "السهباء",
        "name_en": "As Sahba'",
        "center": [
            24.18803998,
            47.37774995
        ]
    },
    {
        "city_id": 1081,
        "region_id": 1,
        "name_ar": "الثليما",
        "name_en": "Ath Thalima",
        "center": [
            24.09368996,
            47.40338995
        ]
    },
    {
        "city_id": 1082,
        "region_id": 1,
        "name_ar": "التوضيحية",
        "name_en": "At Tawdihiyyah",
        "center": [
            24.20166994,
            48.07265998
        ]
    },
    {
        "city_id": 1083,
        "region_id": 1,
        "name_ar": "المحطة",
        "name_en": "Al Mahattah",
        "center": [
            24.24561995,
            47.36686005
        ]
    },
    {
        "city_id": 1084,
        "region_id": 1,
        "name_ar": "الرغيب",
        "name_en": "Ar Rughayb",
        "center": [
            23.96198002,
            47.12494006
        ]
    },
    {
        "city_id": 1085,
        "region_id": 1,
        "name_ar": "المحمدي",
        "name_en": "Al Muhammadi",
        "center": [
            24.00650004,
            47.16575005
        ]
    },
    {
        "city_id": 1086,
        "region_id": 1,
        "name_ar": "الصحنة",
        "name_en": "As Sahanah",
        "center": [
            24.01471996,
            47.13992
        ]
    },
    {
        "city_id": 1087,
        "region_id": 3,
        "name_ar": "الجريسية",
        "name_en": "Al Juraysiyah",
        "center": [
            23.58799995,
            40.81642994
        ]
    },
    {
        "city_id": 1088,
        "region_id": 3,
        "name_ar": "الغمر",
        "name_en": "Al Ghamr",
        "center": [
            23.56229005,
            40.73524005
        ]
    },
    {
        "city_id": 1089,
        "region_id": 3,
        "name_ar": "المزرع",
        "name_en": "Al Mazri'",
        "center": [
            23.54215994,
            40.63515997
        ]
    },
    {
        "city_id": 1090,
        "region_id": 3,
        "name_ar": "هبا",
        "name_en": "Haba",
        "center": [
            23.09946006,
            40.39803994
        ]
    },
    {
        "city_id": 1091,
        "region_id": 3,
        "name_ar": "الصحن",
        "name_en": "As Sahan",
        "center": [
            23.11311997,
            40.43859995
        ]
    },
    {
        "city_id": 1092,
        "region_id": 3,
        "name_ar": "مشوقة",
        "name_en": "Mashuqah",
        "center": [
            22.88502999,
            40.52953998
        ]
    },
    {
        "city_id": 1093,
        "region_id": 3,
        "name_ar": "أم العراد",
        "name_en": "Umm Al 'Arad",
        "center": [
            22.89266004,
            40.57707996
        ]
    },
    {
        "city_id": 1094,
        "region_id": 3,
        "name_ar": "الهرارة",
        "name_en": "Al Harrarah",
        "center": [
            23.87371002,
            40.56282
        ]
    },
    {
        "city_id": 1095,
        "region_id": 3,
        "name_ar": "السدرة",
        "name_en": "As Sidrah",
        "center": [
            23.33342,
            40.22609003
        ]
    },
    {
        "city_id": 1096,
        "region_id": 3,
        "name_ar": "الجصة",
        "name_en": "Al Jissah",
        "center": [
            23.34898,
            40.32716
        ]
    },
    {
        "city_id": 1097,
        "region_id": 3,
        "name_ar": "الحويمضة",
        "name_en": "Al Huwaymidah",
        "center": [
            23.29961997,
            40.33864996
        ]
    },
    {
        "city_id": 1098,
        "region_id": 3,
        "name_ar": "قران",
        "name_en": "Qaran",
        "center": [
            23.28693997,
            40.33013996
        ]
    },
    {
        "city_id": 1099,
        "region_id": 3,
        "name_ar": "الخفيق",
        "name_en": "Al Khufayq",
        "center": [
            23.02550994,
            40.26048997
        ]
    },
    {
        "city_id": 1100,
        "region_id": 3,
        "name_ar": "الهميجة",
        "name_en": "Al Humayjah",
        "center": [
            24.34452,
            41.89657005
        ]
    },
    {
        "city_id": 1101,
        "region_id": 3,
        "name_ar": "الصالحية",
        "name_en": "As Salhiyah",
        "center": [
            24.33184002,
            41.96219998
        ]
    },
    {
        "city_id": 1102,
        "region_id": 3,
        "name_ar": "مريغان",
        "name_en": "Murayghan",
        "center": [
            24.27223003,
            41.71361998
        ]
    },
    {
        "city_id": 1103,
        "region_id": 3,
        "name_ar": "العشاي",
        "name_en": "Al 'Ashshay",
        "center": [
            24.02462998,
            41.93914005
        ]
    },
    {
        "city_id": 1104,
        "region_id": 2,
        "name_ar": "القعر الاسفل",
        "name_en": "Al Qa'ar Al Asfal",
        "center": [
            22.16179006,
            39.51925995
        ]
    },
    {
        "city_id": 1105,
        "region_id": 2,
        "name_ar": "خليص",
        "name_en": "Khulays",
        "center": [
            22.155,
            39.33763333
        ]
    },
    {
        "city_id": 1106,
        "region_id": 2,
        "name_ar": "الحدباء",
        "name_en": "Al Hadba",
        "center": [
            22.11045003,
            39.81831997
        ]
    },
    {
        "city_id": 1107,
        "region_id": 2,
        "name_ar": "الرهوة",
        "name_en": "Ar Rahwah",
        "center": [
            22.16832997,
            39.78514003
        ]
    },
    {
        "city_id": 1108,
        "region_id": 2,
        "name_ar": "القوز",
        "name_en": "Al Qawz",
        "center": [
            22.00842004,
            39.37381999
        ]
    },
    {
        "city_id": 1109,
        "region_id": 2,
        "name_ar": "الخنفسة",
        "name_en": "Al Khunfusah",
        "center": [
            22.11045996,
            39.89387998
        ]
    },
    {
        "city_id": 1110,
        "region_id": 2,
        "name_ar": "حشاش",
        "name_en": "Hishash",
        "center": [
            21.93360995,
            39.90406995
        ]
    },
    {
        "city_id": 1111,
        "region_id": 2,
        "name_ar": "الضبية",
        "name_en": "Ad Dubayyah",
        "center": [
            22.43007001,
            39.44382003
        ]
    },
    {
        "city_id": 1112,
        "region_id": 2,
        "name_ar": "البريكة",
        "name_en": "Al Buraykah",
        "center": [
            22.35368003,
            39.31908003
        ]
    },
    {
        "city_id": 1113,
        "region_id": 2,
        "name_ar": "الفز",
        "name_en": "Al Fazz",
        "center": [
            21.98305005,
            39.52524001
        ]
    },
    {
        "city_id": 1114,
        "region_id": 2,
        "name_ar": "الطينة",
        "name_en": "At Tinah",
        "center": [
            21.97792,
            39.41912001
        ]
    },
    {
        "city_id": 1115,
        "region_id": 2,
        "name_ar": "ام الجرم",
        "name_en": "Umm Al Jurm",
        "center": [
            21.93831994,
            39.45269005
        ]
    },
    {
        "city_id": 1116,
        "region_id": 2,
        "name_ar": "الدوارة",
        "name_en": "Ad Duwwarah",
        "center": [
            22.42612995,
            39.68609003
        ]
    },
    {
        "city_id": 1117,
        "region_id": 2,
        "name_ar": "ابو مراغة",
        "name_en": "Abu Maraghah",
        "center": [
            22.12310002,
            39.61652004
        ]
    },
    {
        "city_id": 1118,
        "region_id": 2,
        "name_ar": "الحفياء",
        "name_en": "Al Hafya",
        "center": [
            22.09567,
            39.60185002
        ]
    },
    {
        "city_id": 1119,
        "region_id": 2,
        "name_ar": "الخيف",
        "name_en": "Al Khayf",
        "center": [
            22.12668999,
            39.59164
        ]
    },
    {
        "city_id": 1120,
        "region_id": 2,
        "name_ar": "المكسر",
        "name_en": "Al Maksir",
        "center": [
            22.05547003,
            39.63783998
        ]
    },
    {
        "city_id": 1121,
        "region_id": 2,
        "name_ar": "الفيج",
        "name_en": "Al Fij",
        "center": [
            22.00869995,
            39.56560997
        ]
    },
    {
        "city_id": 1122,
        "region_id": 2,
        "name_ar": "السهم",
        "name_en": "Al Saham",
        "center": [
            22.03034,
            39.59767006
        ]
    },
    {
        "city_id": 1123,
        "region_id": 2,
        "name_ar": "الدف",
        "name_en": "Ad Daff",
        "center": [
            22.01810996,
            39.64965995
        ]
    },
    {
        "city_id": 1124,
        "region_id": 2,
        "name_ar": "المشريفة",
        "name_en": "Al Musharifah",
        "center": [
            22.01363994,
            39.68622002
        ]
    },
    {
        "city_id": 1125,
        "region_id": 2,
        "name_ar": "الوقب",
        "name_en": "Al Waqib",
        "center": [
            22.04775996,
            39.70955997
        ]
    },
    {
        "city_id": 1126,
        "region_id": 2,
        "name_ar": "الحلقة",
        "name_en": "Al Halqah",
        "center": [
            22.08567996,
            39.78702002
        ]
    },
    {
        "city_id": 1127,
        "region_id": 2,
        "name_ar": "جليل",
        "name_en": "Julayyil",
        "center": [
            21.96603996,
            39.75967002
        ]
    },
    {
        "city_id": 1128,
        "region_id": 2,
        "name_ar": "حلمة",
        "name_en": "Hilimah",
        "center": [
            21.96785999,
            39.70871006
        ]
    },
    {
        "city_id": 1129,
        "region_id": 2,
        "name_ar": "الجضع",
        "name_en": "Al Jid'",
        "center": [
            21.94018997,
            39.58413005
        ]
    },
    {
        "city_id": 1130,
        "region_id": 2,
        "name_ar": "البيار",
        "name_en": "Al Biyar",
        "center": [
            22.62458006,
            39.64346995
        ]
    },
    {
        "city_id": 1131,
        "region_id": 2,
        "name_ar": "المعالي",
        "name_en": "Al Ma'ali",
        "center": [
            22.68507994,
            39.72625006
        ]
    },
    {
        "city_id": 1132,
        "region_id": 2,
        "name_ar": "المديد",
        "name_en": "Al Madid",
        "center": [
            22.65312997,
            39.68157994
        ]
    },
    {
        "city_id": 1133,
        "region_id": 2,
        "name_ar": "المريصيع",
        "name_en": "Al Maraysi'",
        "center": [
            22.57204001,
            39.65566
        ]
    },
    {
        "city_id": 1134,
        "region_id": 2,
        "name_ar": "جليلة",
        "name_en": "Jilayyilah",
        "center": [
            22.53655004,
            39.58474996
        ]
    },
    {
        "city_id": 1135,
        "region_id": 2,
        "name_ar": "المسماة",
        "name_en": "Al Masammah",
        "center": [
            22.47515004,
            39.54931997
        ]
    },
    {
        "city_id": 1136,
        "region_id": 2,
        "name_ar": "الحصينية",
        "name_en": "Al Husayniyah",
        "center": [
            22.58497999,
            39.41422999
        ]
    },
    {
        "city_id": 1137,
        "region_id": 2,
        "name_ar": "الغروف",
        "name_en": "Al Ghuruf",
        "center": [
            22.44086005,
            39.48325005
        ]
    },
    {
        "city_id": 1138,
        "region_id": 2,
        "name_ar": "البحول",
        "name_en": "Al Bahawal",
        "center": [
            22.42204996,
            39.40644006
        ]
    },
    {
        "city_id": 1139,
        "region_id": 2,
        "name_ar": "دوقة",
        "name_en": "Dawqah",
        "center": [
            22.38934997,
            39.34481995
        ]
    },
    {
        "city_id": 1140,
        "region_id": 2,
        "name_ar": "البخترية",
        "name_en": "Al Bakhtariyah",
        "center": [
            22.40724003,
            39.32537002
        ]
    },
    {
        "city_id": 1141,
        "region_id": 2,
        "name_ar": "البرزة",
        "name_en": "Al Barzah",
        "center": [
            21.98263003,
            39.67602002
        ]
    },
    {
        "city_id": 1142,
        "region_id": 2,
        "name_ar": "السليم",
        "name_en": "As Sulaym",
        "center": [
            22.59103997,
            39.63613994
        ]
    },
    {
        "city_id": 1143,
        "region_id": 2,
        "name_ar": "مهايع",
        "name_en": "Al Mahaya'",
        "center": [
            22.32909998,
            39.79683995
        ]
    },
    {
        "city_id": 1144,
        "region_id": 2,
        "name_ar": "المعداء",
        "name_en": "Al Ma'ada",
        "center": [
            22.20379997,
            39.89822004
        ]
    },
    {
        "city_id": 1145,
        "region_id": 2,
        "name_ar": "ام العرمط",
        "name_en": "Umm Al 'Urmut",
        "center": [
            22.35405005,
            39.69896005
        ]
    },
    {
        "city_id": 1146,
        "region_id": 2,
        "name_ar": "المليحة",
        "name_en": "Al Milayhah",
        "center": [
            22.32246996,
            39.67867998
        ]
    },
    {
        "city_id": 1147,
        "region_id": 2,
        "name_ar": "الدحلة",
        "name_en": "Ad Dahlah",
        "center": [
            22.29706997,
            39.65872002
        ]
    },
    {
        "city_id": 1148,
        "region_id": 2,
        "name_ar": "الصليلات",
        "name_en": "As Salaylat",
        "center": [
            22.28477998,
            39.67468994
        ]
    },
    {
        "city_id": 1149,
        "region_id": 2,
        "name_ar": "غصين",
        "name_en": "Ghusayyin",
        "center": [
            22.19409005,
            39.71877997
        ]
    },
    {
        "city_id": 1150,
        "region_id": 2,
        "name_ar": "الكامل",
        "name_en": "Al Kamil",
        "center": [
            22.26459,
            39.79018002
        ]
    },
    {
        "city_id": 1151,
        "region_id": 2,
        "name_ar": "العيبة العليا",
        "name_en": "Al 'Aybah Al 'Ulya",
        "center": [
            22.45223006,
            40.03304004
        ]
    },
    {
        "city_id": 1152,
        "region_id": 5,
        "name_ar": "الطليعة",
        "name_en": "Al Taleah",
        "center": [
            28.00194155,
            46.75111087
        ]
    },
    {
        "city_id": 1153,
        "region_id": 2,
        "name_ar": "القعور",
        "name_en": "Al Qu'ur",
        "center": [
            22.31394876,
            40.04208423
        ]
    },
    {
        "city_id": 1154,
        "region_id": 2,
        "name_ar": "الغريب",
        "name_en": "Al Gharayyib",
        "center": [
            22.62868999,
            39.94989996
        ]
    },
    {
        "city_id": 1155,
        "region_id": 2,
        "name_ar": "مشرق",
        "name_en": "Mishriq",
        "center": [
            22.62907002,
            39.88445
        ]
    },
    {
        "city_id": 1156,
        "region_id": 2,
        "name_ar": "اللصب",
        "name_en": "Al Lusub",
        "center": [
            22.52535002,
            39.93373004
        ]
    },
    {
        "city_id": 1157,
        "region_id": 2,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            22.50984995,
            39.91483995
        ]
    },
    {
        "city_id": 1158,
        "region_id": 2,
        "name_ar": "العمودة",
        "name_en": "Al 'Amudah",
        "center": [
            22.46857004,
            40.00887
        ]
    },
    {
        "city_id": 1159,
        "region_id": 2,
        "name_ar": "الوقبة",
        "name_en": "Al Waqbah",
        "center": [
            22.48827,
            39.90009004
        ]
    },
    {
        "city_id": 1160,
        "region_id": 2,
        "name_ar": "الفارع",
        "name_en": "Al Fari'",
        "center": [
            22.46184,
            39.87858994
        ]
    },
    {
        "city_id": 1161,
        "region_id": 2,
        "name_ar": "الخديد",
        "name_en": "Al Khidayd",
        "center": [
            22.45106006,
            39.84164
        ]
    },
    {
        "city_id": 1162,
        "region_id": 2,
        "name_ar": "المغاوي",
        "name_en": "Al Maghawi",
        "center": [
            18.86005004,
            41.41430995
        ]
    },
    {
        "city_id": 1163,
        "region_id": 2,
        "name_ar": "المقفي",
        "name_en": "Al Maqfa",
        "center": [
            18.84282006,
            41.46639
        ]
    },
    {
        "city_id": 1164,
        "region_id": 2,
        "name_ar": "الحطامية",
        "name_en": "Al Hatamiyah",
        "center": [
            18.76646997,
            41.31629997
        ]
    },
    {
        "city_id": 1165,
        "region_id": 2,
        "name_ar": "كدوة الأعوج",
        "name_en": "Kidwat Al 'Awaj",
        "center": [
            18.75317997,
            41.4001
        ]
    },
    {
        "city_id": 1166,
        "region_id": 2,
        "name_ar": "هشيمة",
        "name_en": "Hishaymah",
        "center": [
            18.84904999,
            41.26607999
        ]
    },
    {
        "city_id": 1167,
        "region_id": 2,
        "name_ar": "خبت مزقة",
        "name_en": "Khabt Mizqah",
        "center": [
            19.43999006,
            41.26432001
        ]
    },
    {
        "city_id": 1168,
        "region_id": 2,
        "name_ar": "السبت",
        "name_en": "As Sabt",
        "center": [
            19.36333997,
            41.12696
        ]
    },
    {
        "city_id": 1169,
        "region_id": 2,
        "name_ar": "النيلة",
        "name_en": "An Nilah",
        "center": [
            19.43223005,
            41.16955
        ]
    },
    {
        "city_id": 1170,
        "region_id": 2,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            19.44182004,
            41.24231003
        ]
    },
    {
        "city_id": 1171,
        "region_id": 2,
        "name_ar": "الحليفة",
        "name_en": "Al Hulayfah",
        "center": [
            19.37617004,
            41.25860998
        ]
    },
    {
        "city_id": 1172,
        "region_id": 2,
        "name_ar": "المسيليم",
        "name_en": "Al Musaylim",
        "center": [
            19.63886002,
            40.95451996
        ]
    },
    {
        "city_id": 1173,
        "region_id": 2,
        "name_ar": "القرى",
        "name_en": "Al Qara",
        "center": [
            19.68367995,
            40.95244004
        ]
    },
    {
        "city_id": 1174,
        "region_id": 6,
        "name_ar": "جمعة ربيعة",
        "name_en": "Jum'at At Rabiah",
        "center": [
            19.05771001,
            41.51059004
        ]
    },
    {
        "city_id": 1175,
        "region_id": 2,
        "name_ar": "الفالق",
        "name_en": "Al Faliq",
        "center": [
            19.07243995,
            41.50439
        ]
    },
    {
        "city_id": 1176,
        "region_id": 2,
        "name_ar": "خميس حرب",
        "name_en": "Khamis Harb",
        "center": [
            19.17945005,
            41.53979001
        ]
    },
    {
        "city_id": 1177,
        "region_id": 2,
        "name_ar": "الجرد",
        "name_en": "Al Jard",
        "center": [
            18.97839997,
            41.42819996
        ]
    },
    {
        "city_id": 1178,
        "region_id": 2,
        "name_ar": "الركح",
        "name_en": "Ar Rakh",
        "center": [
            18.84454999,
            41.52149003
        ]
    },
    {
        "city_id": 1179,
        "region_id": 2,
        "name_ar": "السبطة",
        "name_en": "As Sabatah",
        "center": [
            18.77762002,
            41.53425001
        ]
    },
    {
        "city_id": 1180,
        "region_id": 2,
        "name_ar": "الثلوث",
        "name_en": "Ath Thuluth",
        "center": [
            19.45175002,
            41.37851005
        ]
    },
    {
        "city_id": 1181,
        "region_id": 2,
        "name_ar": "الشصرة",
        "name_en": "Ash Shasarah",
        "center": [
            19.39606,
            41.46659002
        ]
    },
    {
        "city_id": 1182,
        "region_id": 2,
        "name_ar": "عمرات",
        "name_en": "'Amrat",
        "center": [
            19.22561006,
            41.21348999
        ]
    },
    {
        "city_id": 1183,
        "region_id": 2,
        "name_ar": "عاجة",
        "name_en": "'Ajah",
        "center": [
            19.26684994,
            41.09877004
        ]
    },
    {
        "city_id": 1184,
        "region_id": 2,
        "name_ar": "العقدة (السمارية)",
        "name_en": "Al 'Uqdah(Al Smariyah)",
        "center": [
            19.30311042,
            41.16289863
        ]
    },
    {
        "city_id": 1185,
        "region_id": 2,
        "name_ar": "الخمجان",
        "name_en": "Al Khumjan",
        "center": [
            19.34274001,
            41.18455998
        ]
    },
    {
        "city_id": 1186,
        "region_id": 2,
        "name_ar": "الكدنة",
        "name_en": "Al Kadanah",
        "center": [
            19.34875997,
            41.21024006
        ]
    },
    {
        "city_id": 1187,
        "region_id": 2,
        "name_ar": "شينانة",
        "name_en": "Shaynanah",
        "center": [
            19.14105004,
            41.23418998
        ]
    },
    {
        "city_id": 1188,
        "region_id": 2,
        "name_ar": "الجلمة",
        "name_en": "Al Jilamah",
        "center": [
            19.16640006,
            41.17796001
        ]
    },
    {
        "city_id": 1189,
        "region_id": 2,
        "name_ar": "الصرح",
        "name_en": "As Sarh",
        "center": [
            19.23054995,
            41.19093003
        ]
    },
    {
        "city_id": 1190,
        "region_id": 2,
        "name_ar": "الصعيب",
        "name_en": "As Sa'ayb",
        "center": [
            22.41109006,
            39.95478006
        ]
    },
    {
        "city_id": 1191,
        "region_id": 2,
        "name_ar": "القرية",
        "name_en": "Al Qurayyah",
        "center": [
            22.35452004,
            39.92883003
        ]
    },
    {
        "city_id": 1192,
        "region_id": 2,
        "name_ar": "المضحاة",
        "name_en": "Al Madhah",
        "center": [
            22.38046004,
            39.82491006
        ]
    },
    {
        "city_id": 1193,
        "region_id": 2,
        "name_ar": "النهيمية",
        "name_en": "An Nihaymiyah",
        "center": [
            22.70574004,
            39.85706003
        ]
    },
    {
        "city_id": 1194,
        "region_id": 2,
        "name_ar": "الغريف",
        "name_en": "Al Gharif",
        "center": [
            22.43019998,
            39.85838
        ]
    },
    {
        "city_id": 1195,
        "region_id": 2,
        "name_ar": "الشرع",
        "name_en": "Ash Shar'",
        "center": [
            22.64959997,
            39.96954006
        ]
    },
    {
        "city_id": 1196,
        "region_id": 2,
        "name_ar": "الدغمية",
        "name_en": "Ad Dughmiyah",
        "center": [
            21.95948005,
            42.06510995
        ]
    },
    {
        "city_id": 1197,
        "region_id": 2,
        "name_ar": "أم راكة",
        "name_en": "Umm Rakah",
        "center": [
            21.94396997,
            42.07928002
        ]
    },
    {
        "city_id": 1198,
        "region_id": 2,
        "name_ar": "الدبيلة",
        "name_en": "Ad Dubayyilah",
        "center": [
            21.92751998,
            42.06120994
        ]
    },
    {
        "city_id": 1199,
        "region_id": 2,
        "name_ar": "جبار",
        "name_en": "Jabbar",
        "center": [
            21.82581002,
            41.99841994
        ]
    },
    {
        "city_id": 1200,
        "region_id": 2,
        "name_ar": "الحجف",
        "name_en": "Al Hajf",
        "center": [
            21.79908001,
            41.98486995
        ]
    },
    {
        "city_id": 1201,
        "region_id": 2,
        "name_ar": "أبو جميدة",
        "name_en": "Abu Jumaydah",
        "center": [
            22.04641005,
            42.09319997
        ]
    },
    {
        "city_id": 1202,
        "region_id": 2,
        "name_ar": "غثاة",
        "name_en": "Ghithah",
        "center": [
            22.05570996,
            42.11327002
        ]
    },
    {
        "city_id": 1203,
        "region_id": 2,
        "name_ar": "الضحياء",
        "name_en": "Ad Dahya",
        "center": [
            21.27117997,
            40.26406004
        ]
    },
    {
        "city_id": 1204,
        "region_id": 4,
        "name_ar": "الطراق",
        "name_en": "At Tiraq",
        "center": [
            27.32758005,
            44.54961996
        ]
    },
    {
        "city_id": 1205,
        "region_id": 8,
        "name_ar": "الخريمي",
        "name_en": "Al Khuraymi",
        "center": [
            27.53075003,
            41.75683997
        ]
    },
    {
        "city_id": 1206,
        "region_id": 8,
        "name_ar": "مزارع الدوية",
        "name_en": "Mazari' Ad Dawayyah",
        "center": [
            27.34953996,
            42.57618002
        ]
    },
    {
        "city_id": 1207,
        "region_id": 8,
        "name_ar": "القرفاء",
        "name_en": "Al Qarfa",
        "center": [
            27.26047003,
            42.29598
        ]
    },
    {
        "city_id": 1208,
        "region_id": 6,
        "name_ar": "الطويفح",
        "name_en": "Al Tuwaifah",
        "center": [
            19.63863566,
            43.50511038
        ]
    },
    {
        "city_id": 1209,
        "region_id": 8,
        "name_ar": "مبرز",
        "name_en": "Mubaraz",
        "center": [
            27.2677,
            42.22573333
        ]
    },
    {
        "city_id": 1210,
        "region_id": 8,
        "name_ar": "السليل",
        "name_en": "As Sulayyil",
        "center": [
            27.30328333,
            42.25821667
        ]
    },
    {
        "city_id": 1211,
        "region_id": 8,
        "name_ar": "سبيعة",
        "name_en": "Sibi'ah",
        "center": [
            27.27738333,
            42.25398333
        ]
    },
    {
        "city_id": 1212,
        "region_id": 8,
        "name_ar": "الرشاوية",
        "name_en": "Ar Rishawiyah",
        "center": [
            27.43021667,
            42.47616667
        ]
    },
    {
        "city_id": 1213,
        "region_id": 8,
        "name_ar": "الميركة",
        "name_en": "Al Mirakah",
        "center": [
            27.07294004,
            43.03773003
        ]
    },
    {
        "city_id": 1214,
        "region_id": 8,
        "name_ar": "الشلالة",
        "name_en": "Ash Shallalah",
        "center": [
            27.09217003,
            43.04791998
        ]
    },
    {
        "city_id": 1215,
        "region_id": 8,
        "name_ar": "أم العماير",
        "name_en": "Umm Al 'Amayir",
        "center": [
            26.60528995,
            42.18857996
        ]
    },
    {
        "city_id": 1216,
        "region_id": 8,
        "name_ar": "مزارع تخاييل",
        "name_en": "Mazari Takhayil",
        "center": [
            27.1621,
            42.72331997
        ]
    },
    {
        "city_id": 1217,
        "region_id": 8,
        "name_ar": "بدائع إبضة",
        "name_en": "Badai' Ibdah",
        "center": [
            27.02879995,
            42.43805006
        ]
    },
    {
        "city_id": 1218,
        "region_id": 8,
        "name_ar": "الحورا",
        "name_en": "Al Hawra",
        "center": [
            26.87852,
            41.99160994
        ]
    },
    {
        "city_id": 1219,
        "region_id": 8,
        "name_ar": "قرية البطين",
        "name_en": "Qaryat Al Butain",
        "center": [
            27.22850002,
            42.17808003
        ]
    },
    {
        "city_id": 1220,
        "region_id": 8,
        "name_ar": "إبضة",
        "name_en": "Ibdah",
        "center": [
            26.96917995,
            42.34745995
        ]
    },
    {
        "city_id": 1221,
        "region_id": 8,
        "name_ar": "ثرال",
        "name_en": "Thiral",
        "center": [
            27.11591003,
            42.22971003
        ]
    },
    {
        "city_id": 1222,
        "region_id": 8,
        "name_ar": "زيخين",
        "name_en": "Zikhin",
        "center": [
            26.94862004,
            41.97072996
        ]
    },
    {
        "city_id": 1223,
        "region_id": 8,
        "name_ar": "الخيط",
        "name_en": "Al Khayt",
        "center": [
            27.14412005,
            42.00105006
        ]
    },
    {
        "city_id": 1224,
        "region_id": 8,
        "name_ar": "الصلبية",
        "name_en": "As Sulubiyah",
        "center": [
            26.79032001,
            42.09722997
        ]
    },
    {
        "city_id": 1225,
        "region_id": 8,
        "name_ar": "المعازل",
        "name_en": "Al Ma'azil",
        "center": [
            26.89041994,
            42.14142003
        ]
    },
    {
        "city_id": 1226,
        "region_id": 8,
        "name_ar": "المضابيع",
        "name_en": "Al Madabi'",
        "center": [
            26.97816003,
            42.12467002
        ]
    },
    {
        "city_id": 1227,
        "region_id": 8,
        "name_ar": "الساقية",
        "name_en": "As Saqiyah",
        "center": [
            27.15982995,
            42.47701005
        ]
    },
    {
        "city_id": 1228,
        "region_id": 8,
        "name_ar": "الشنان",
        "name_en": "Ash Shinan",
        "center": [
            27.18067001,
            42.44156006
        ]
    },
    {
        "city_id": 1229,
        "region_id": 8,
        "name_ar": "العدوة",
        "name_en": "Al 'Idwah",
        "center": [
            27.29778999,
            42.32028995
        ]
    },
    {
        "city_id": 1230,
        "region_id": 8,
        "name_ar": "السعيرة",
        "name_en": "As Su'ayyirah",
        "center": [
            27.27652002,
            43.16478004
        ]
    },
    {
        "city_id": 1231,
        "region_id": 8,
        "name_ar": "رك",
        "name_en": "Rakk",
        "center": [
            27.26186667,
            42.27528333
        ]
    },
    {
        "city_id": 1232,
        "region_id": 8,
        "name_ar": "الفويلق / الرشاوية",
        "name_en": "Al Fuwaileq / Ar Rishawiyah",
        "center": [
            27.45146999,
            42.45714994
        ]
    },
    {
        "city_id": 1233,
        "region_id": 8,
        "name_ar": "الابيتر",
        "name_en": "Al Ubaitir",
        "center": [
            27.05836001,
            42.84610006
        ]
    },
    {
        "city_id": 1234,
        "region_id": 8,
        "name_ar": "الكهيفية",
        "name_en": "Al Kihayfiyah",
        "center": [
            27.21183005,
            42.98579999
        ]
    },
    {
        "city_id": 1235,
        "region_id": 8,
        "name_ar": "العظيم",
        "name_en": "Al 'Udhaim",
        "center": [
            26.60166997,
            42.47207003
        ]
    },
    {
        "city_id": 1236,
        "region_id": 2,
        "name_ar": "المقيصر",
        "name_en": "Al Muqaysir",
        "center": [
            22.08726996,
            42.12075001
        ]
    },
    {
        "city_id": 1237,
        "region_id": 2,
        "name_ar": "الوطاة",
        "name_en": "Al Watah",
        "center": [
            21.99139001,
            42.05092994
        ]
    },
    {
        "city_id": 1238,
        "region_id": 2,
        "name_ar": "الزرب",
        "name_en": "Az Zirb",
        "center": [
            21.61679006,
            41.89510995
        ]
    },
    {
        "city_id": 1239,
        "region_id": 2,
        "name_ar": "اللويات",
        "name_en": "Al Luwayyat",
        "center": [
            21.66468997,
            41.90857998
        ]
    },
    {
        "city_id": 1240,
        "region_id": 2,
        "name_ar": "الأريقط",
        "name_en": "Al Urayqit",
        "center": [
            21.56467,
            41.86756005
        ]
    },
    {
        "city_id": 1241,
        "region_id": 2,
        "name_ar": "المعيزيلة",
        "name_en": "Al Mu'azilah",
        "center": [
            21.58372005,
            41.86249998
        ]
    },
    {
        "city_id": 1242,
        "region_id": 2,
        "name_ar": "الشرفية",
        "name_en": "Ash Shurufiyah",
        "center": [
            21.57666003,
            41.85806001
        ]
    },
    {
        "city_id": 1243,
        "region_id": 2,
        "name_ar": "البريكة",
        "name_en": "Al Buraykah",
        "center": [
            21.58574,
            41.87588003
        ]
    },
    {
        "city_id": 1244,
        "region_id": 2,
        "name_ar": "الظليم",
        "name_en": "Ad Dhalim",
        "center": [
            22.08757997,
            42.16210005
        ]
    },
    {
        "city_id": 1245,
        "region_id": 2,
        "name_ar": "الحنو",
        "name_en": "Al Hinu",
        "center": [
            22.11672006,
            42.16758996
        ]
    },
    {
        "city_id": 1246,
        "region_id": 2,
        "name_ar": "الجعيرة",
        "name_en": "Al Ju'ayrah",
        "center": [
            22.16339995,
            42.24626998
        ]
    },
    {
        "city_id": 1247,
        "region_id": 2,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            21.47698006,
            41.79374002
        ]
    },
    {
        "city_id": 1248,
        "region_id": 2,
        "name_ar": "الخرمة",
        "name_en": "Al Khurmah",
        "center": [
            21.91372003,
            42.03397998
        ]
    },
    {
        "city_id": 1249,
        "region_id": 2,
        "name_ar": "الغريف",
        "name_en": "Al Gharif",
        "center": [
            21.61302006,
            41.88139002
        ]
    },
    {
        "city_id": 1250,
        "region_id": 2,
        "name_ar": "شبيرم",
        "name_en": "Shubayrim",
        "center": [
            21.55043005,
            39.86019005
        ]
    },
    {
        "city_id": 1251,
        "region_id": 2,
        "name_ar": "مطية",
        "name_en": "Mityah",
        "center": [
            21.54065997,
            39.81932006
        ]
    },
    {
        "city_id": 1252,
        "region_id": 2,
        "name_ar": "دف زيني",
        "name_en": "Daff Zayni",
        "center": [
            21.55689002,
            39.68494995
        ]
    },
    {
        "city_id": 1253,
        "region_id": 2,
        "name_ar": "النويدرة",
        "name_en": "An Nuwaydirah",
        "center": [
            21.5086,
            39.63773333
        ]
    },
    {
        "city_id": 1254,
        "region_id": 2,
        "name_ar": "الصمد",
        "name_en": "As Samad",
        "center": [
            21.52840996,
            39.61652002
        ]
    },
    {
        "city_id": 1255,
        "region_id": 2,
        "name_ar": "المرشدية",
        "name_en": "Al Murshidiyah",
        "center": [
            21.48998995,
            39.61766005
        ]
    },
    {
        "city_id": 1256,
        "region_id": 2,
        "name_ar": "الدوح الكبير",
        "name_en": "Ad Dawh Al Kabir",
        "center": [
            21.53843001,
            39.66794997
        ]
    },
    {
        "city_id": 1257,
        "region_id": 2,
        "name_ar": "الجموم",
        "name_en": "Al Jumum",
        "center": [
            21.61476996,
            39.69689997
        ]
    },
    {
        "city_id": 1258,
        "region_id": 2,
        "name_ar": "ابو عروة",
        "name_en": "Abu 'Urwah",
        "center": [
            21.64609997,
            39.70652006
        ]
    },
    {
        "city_id": 1259,
        "region_id": 2,
        "name_ar": "البرابير",
        "name_en": "Al Brabir",
        "center": [
            21.53333001,
            39.61667
        ]
    },
    {
        "city_id": 1260,
        "region_id": 2,
        "name_ar": "قرن السرور",
        "name_en": "Qarn As Surur",
        "center": [
            21.58332999,
            39.68333
        ]
    },
    {
        "city_id": 1261,
        "region_id": 2,
        "name_ar": "الحميمة",
        "name_en": "Al Humaimah",
        "center": [
            21.51061667,
            39.63135
        ]
    },
    {
        "city_id": 1262,
        "region_id": 2,
        "name_ar": "حرة الجبل",
        "name_en": "Harat Al Jabal",
        "center": [
            21.54999995,
            39.61666996
        ]
    },
    {
        "city_id": 1263,
        "region_id": 2,
        "name_ar": "سمد الحميمة",
        "name_en": "Samd Al Humaymah",
        "center": [
            21.56666996,
            39.64999998
        ]
    },
    {
        "city_id": 1264,
        "region_id": 2,
        "name_ar": "النزهة",
        "name_en": "An Nuzhah",
        "center": [
            21.53333003,
            39.63332999
        ]
    },
    {
        "city_id": 1265,
        "region_id": 6,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            19.1137862,
            42.03051641
        ]
    },
    {
        "city_id": 1266,
        "region_id": 6,
        "name_ar": "القذال",
        "name_en": "Al Qadhal",
        "center": [
            18.88367002,
            42.16276996
        ]
    },
    {
        "city_id": 1267,
        "region_id": 6,
        "name_ar": "شواحط",
        "name_en": "Shawahit",
        "center": [
            18.85843995,
            42.11285
        ]
    },
    {
        "city_id": 1268,
        "region_id": 6,
        "name_ar": "عدمن",
        "name_en": "'Adaman",
        "center": [
            18.83793006,
            42.10847999
        ]
    },
    {
        "city_id": 1269,
        "region_id": 6,
        "name_ar": "المنيظر",
        "name_en": "Al Munaydhir",
        "center": [
            18.94497001,
            41.92357995
        ]
    },
    {
        "city_id": 1270,
        "region_id": 6,
        "name_ar": "محبة",
        "name_en": "Mahabbah",
        "center": [
            19.00506999,
            42.04452999
        ]
    },
    {
        "city_id": 1271,
        "region_id": 6,
        "name_ar": "الفصيلة",
        "name_en": "Al Fasilah",
        "center": [
            18.94279994,
            41.97496994
        ]
    },
    {
        "city_id": 1272,
        "region_id": 6,
        "name_ar": "المسلمة",
        "name_en": "Al Maslamah",
        "center": [
            18.95828997,
            41.97694
        ]
    },
    {
        "city_id": 1273,
        "region_id": 6,
        "name_ar": "الخوش",
        "name_en": "Al Khawsh",
        "center": [
            19.00540994,
            41.88606005
        ]
    },
    {
        "city_id": 1274,
        "region_id": 6,
        "name_ar": "الكنبي",
        "name_en": "Al Kanabi",
        "center": [
            18.98925998,
            41.89637
        ]
    },
    {
        "city_id": 1275,
        "region_id": 6,
        "name_ar": "القيوار",
        "name_en": "Al Qiwar",
        "center": [
            18.94130997,
            41.8982
        ]
    },
    {
        "city_id": 1276,
        "region_id": 6,
        "name_ar": "القنعات",
        "name_en": "Al Qana'at",
        "center": [
            18.91097995,
            42.05541
        ]
    },
    {
        "city_id": 1277,
        "region_id": 6,
        "name_ar": "الميفاء",
        "name_en": "Al Mifa",
        "center": [
            18.88523996,
            41.97796997
        ]
    },
    {
        "city_id": 1278,
        "region_id": 6,
        "name_ar": "صعابان",
        "name_en": "Sa'aban",
        "center": [
            18.87418004,
            41.94322003
        ]
    },
    {
        "city_id": 1279,
        "region_id": 6,
        "name_ar": "مكهاف",
        "name_en": "Makhaf",
        "center": [
            18.88279001,
            41.93406006
        ]
    },
    {
        "city_id": 1280,
        "region_id": 6,
        "name_ar": "المنظر",
        "name_en": "Al Mandhar",
        "center": [
            18.78178999,
            42.05921006
        ]
    },
    {
        "city_id": 1281,
        "region_id": 6,
        "name_ar": "أم فرع",
        "name_en": "Umm Fura'",
        "center": [
            18.87379002,
            42.01294998
        ]
    },
    {
        "city_id": 1282,
        "region_id": 6,
        "name_ar": "القريحة",
        "name_en": "Al Qurayhah",
        "center": [
            18.84259,
            42.00835998
        ]
    },
    {
        "city_id": 1283,
        "region_id": 6,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            18.80840004,
            42.00863996
        ]
    },
    {
        "city_id": 1284,
        "region_id": 6,
        "name_ar": "أم شعبين",
        "name_en": "Umm Sh'bayn",
        "center": [
            18.80697996,
            42.07069004
        ]
    },
    {
        "city_id": 1285,
        "region_id": 2,
        "name_ar": "مشرف",
        "name_en": "Mushrif",
        "center": [
            19.01390004,
            41.43380995
        ]
    },
    {
        "city_id": 1286,
        "region_id": 6,
        "name_ar": "قزة",
        "name_en": "Quzzah",
        "center": [
            19.11442,
            41.58342001
        ]
    },
    {
        "city_id": 1287,
        "region_id": 6,
        "name_ar": "سيالة",
        "name_en": "Sayalah",
        "center": [
            18.90101006,
            41.60293
        ]
    },
    {
        "city_id": 1288,
        "region_id": 6,
        "name_ar": "الأحسر",
        "name_en": "Al Ahsar",
        "center": [
            19.04488002,
            41.68024996
        ]
    },
    {
        "city_id": 1289,
        "region_id": 6,
        "name_ar": "الفاضية",
        "name_en": "Al Fadiyah",
        "center": [
            18.75698001,
            42.12138004
        ]
    },
    {
        "city_id": 1290,
        "region_id": 6,
        "name_ar": "نعص",
        "name_en": "Na's",
        "center": [
            18.76996998,
            42.09952998
        ]
    },
    {
        "city_id": 1291,
        "region_id": 6,
        "name_ar": "الضحي",
        "name_en": "Ad Dahi",
        "center": [
            18.78319003,
            42.15162997
        ]
    },
    {
        "city_id": 1292,
        "region_id": 6,
        "name_ar": "الحيد عبس",
        "name_en": "Al Hayd 'Abs",
        "center": [
            19.29600003,
            41.97897998
        ]
    },
    {
        "city_id": 1293,
        "region_id": 6,
        "name_ar": "الطرقة",
        "name_en": "At Taraqah",
        "center": [
            18.80328,
            42.15517006
        ]
    },
    {
        "city_id": 1294,
        "region_id": 6,
        "name_ar": "المجاردة",
        "name_en": "Al Majardah",
        "center": [
            19.12438998,
            41.93629999
        ]
    },
    {
        "city_id": 1295,
        "region_id": 6,
        "name_ar": "الحمة",
        "name_en": "Al Himah",
        "center": [
            18.92990005,
            42.11031004
        ]
    },
    {
        "city_id": 1296,
        "region_id": 6,
        "name_ar": "العقيقة",
        "name_en": "Al Aqiqah",
        "center": [
            19.21683996,
            42.04078003
        ]
    },
    {
        "city_id": 1297,
        "region_id": 6,
        "name_ar": "بارق",
        "name_en": "Bariq",
        "center": [
            18.92789997,
            41.94220006
        ]
    },
    {
        "city_id": 1298,
        "region_id": 6,
        "name_ar": "الهرير الشرقي - الجازي",
        "name_en": "Al Hurayr Ash Sharqi (Al Jazi)",
        "center": [
            18.24382006,
            42.77397999
        ]
    },
    {
        "city_id": 1299,
        "region_id": 6,
        "name_ar": "طيب الإسم",
        "name_en": "Tayyib Al Ism",
        "center": [
            18.31504004,
            42.70694002
        ]
    },
    {
        "city_id": 1300,
        "region_id": 6,
        "name_ar": "العمارة",
        "name_en": "Al 'Ammarah",
        "center": [
            18.37476995,
            42.64161001
        ]
    },
    {
        "city_id": 1301,
        "region_id": 6,
        "name_ar": "بيشة",
        "name_en": "Bishah",
        "center": [
            18.37224002,
            42.65382004
        ]
    },
    {
        "city_id": 1302,
        "region_id": 6,
        "name_ar": "المزارقة",
        "name_en": "Al Mazarqah",
        "center": [
            18.32431004,
            42.83444003
        ]
    },
    {
        "city_id": 1303,
        "region_id": 6,
        "name_ar": "آل غيثان",
        "name_en": "Al Ghaythan",
        "center": [
            18.31435003,
            42.85411997
        ]
    },
    {
        "city_id": 1304,
        "region_id": 6,
        "name_ar": "آل الشريفي",
        "name_en": "Al Ash Shirayfi",
        "center": [
            18.33438003,
            42.84272999
        ]
    },
    {
        "city_id": 1305,
        "region_id": 6,
        "name_ar": "آل التوم",
        "name_en": "Al At Tum",
        "center": [
            18.35660997,
            42.83712997
        ]
    },
    {
        "city_id": 1306,
        "region_id": 6,
        "name_ar": "آل سويد",
        "name_en": "Al Suwayd",
        "center": [
            18.39451995,
            42.79704004
        ]
    },
    {
        "city_id": 1307,
        "region_id": 6,
        "name_ar": "الصمدة",
        "name_en": "As Simidah",
        "center": [
            18.40119006,
            42.77966997
        ]
    },
    {
        "city_id": 1308,
        "region_id": 6,
        "name_ar": "الفيض",
        "name_en": "Al Fayd",
        "center": [
            18.41286003,
            42.77329006
        ]
    },
    {
        "city_id": 1309,
        "region_id": 6,
        "name_ar": "آل مريح",
        "name_en": "Al Mirayyih",
        "center": [
            18.42312002,
            42.77410996
        ]
    },
    {
        "city_id": 1310,
        "region_id": 6,
        "name_ar": "صفوان",
        "name_en": "Safwan",
        "center": [
            18.20851995,
            42.81667995
        ]
    },
    {
        "city_id": 1311,
        "region_id": 6,
        "name_ar": "الرونة",
        "name_en": "Ar Runah",
        "center": [
            18.22994997,
            42.79623005
        ]
    },
    {
        "city_id": 1312,
        "region_id": 6,
        "name_ar": "آل الذيب",
        "name_en": "Al Adh Dhib",
        "center": [
            18.29329997,
            42.84882997
        ]
    },
    {
        "city_id": 1313,
        "region_id": 6,
        "name_ar": "روضان",
        "name_en": "Rawdan",
        "center": [
            18.61264004,
            42.83640001
        ]
    },
    {
        "city_id": 1314,
        "region_id": 4,
        "name_ar": "فيضة الشعب",
        "name_en": "Faydah Ash Shi'b",
        "center": [
            25.46904288,
            42.68834188
        ]
    },
    {
        "city_id": 1315,
        "region_id": 2,
        "name_ar": "حداء",
        "name_en": "Hada'",
        "center": [
            21.44884999,
            39.55560998
        ]
    },
    {
        "city_id": 1316,
        "region_id": 2,
        "name_ar": "المقايث",
        "name_en": "Al Maqayth",
        "center": [
            21.49999995,
            39.58333001
        ]
    },
    {
        "city_id": 1317,
        "region_id": 2,
        "name_ar": "القرينة / هداة الشام",
        "name_en": "Al Qurainah / Hadat Ash Sham",
        "center": [
            21.78392,
            39.68172
        ]
    },
    {
        "city_id": 1318,
        "region_id": 2,
        "name_ar": "القعضبة",
        "name_en": "Al Qi'dubah",
        "center": [
            21.93304004,
            40.35869001
        ]
    },
    {
        "city_id": 1319,
        "region_id": 2,
        "name_ar": "الزلال",
        "name_en": "Az Zallal",
        "center": [
            21.49375005,
            39.58495995
        ]
    },
    {
        "city_id": 1320,
        "region_id": 2,
        "name_ar": "الرويغة",
        "name_en": "Ar Ruwayghag",
        "center": [
            21.77595005,
            39.60084995
        ]
    },
    {
        "city_id": 1321,
        "region_id": 2,
        "name_ar": "العصب",
        "name_en": "Al 'Asb",
        "center": [
            21.80835003,
            39.75390998
        ]
    },
    {
        "city_id": 1322,
        "region_id": 2,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            21.72282998,
            39.55080995
        ]
    },
    {
        "city_id": 1323,
        "region_id": 2,
        "name_ar": "المعلاة",
        "name_en": "Al Ma'lah",
        "center": [
            22.09909003,
            40.03159006
        ]
    },
    {
        "city_id": 1324,
        "region_id": 2,
        "name_ar": "الجرف",
        "name_en": "Al Jarf",
        "center": [
            22.04594995,
            40.00758001
        ]
    },
    {
        "city_id": 1325,
        "region_id": 2,
        "name_ar": "الجيشي",
        "name_en": "Al Jayshi",
        "center": [
            22.02384001,
            40.01556005
        ]
    },
    {
        "city_id": 1326,
        "region_id": 2,
        "name_ar": "الزريب",
        "name_en": "Az Zurayb",
        "center": [
            21.91453005,
            39.97450003
        ]
    },
    {
        "city_id": 1327,
        "region_id": 2,
        "name_ar": "البناية",
        "name_en": "Al Binayah",
        "center": [
            21.93308999,
            40.01996994
        ]
    },
    {
        "city_id": 1328,
        "region_id": 2,
        "name_ar": "فيدة",
        "name_en": "Faydah",
        "center": [
            21.9115,
            39.41970995
        ]
    },
    {
        "city_id": 1329,
        "region_id": 2,
        "name_ar": "الشامية",
        "name_en": "Ash Shamiyah",
        "center": [
            21.83968333,
            39.52018333
        ]
    },
    {
        "city_id": 1330,
        "region_id": 2,
        "name_ar": "المقيطيع",
        "name_en": "Al Muqayti'",
        "center": [
            21.85155,
            39.47568333
        ]
    },
    {
        "city_id": 1331,
        "region_id": 2,
        "name_ar": "المقايتة",
        "name_en": "Al Maqaytah",
        "center": [
            21.55421995,
            39.79442
        ]
    },
    {
        "city_id": 1332,
        "region_id": 2,
        "name_ar": "المقر",
        "name_en": "Al Miqarr",
        "center": [
            21.58825995,
            39.77019998
        ]
    },
    {
        "city_id": 1333,
        "region_id": 2,
        "name_ar": "ابو حصانية",
        "name_en": "Abu Hasaniyah",
        "center": [
            21.71942996,
            39.76995996
        ]
    },
    {
        "city_id": 1334,
        "region_id": 2,
        "name_ar": "النوارية",
        "name_en": "An Nawariyah",
        "center": [
            21.56898004,
            39.76449996
        ]
    },
    {
        "city_id": 1335,
        "region_id": 2,
        "name_ar": "الخيف",
        "name_en": "Al Khayf",
        "center": [
            21.69438997,
            39.73213994
        ]
    },
    {
        "city_id": 1336,
        "region_id": 2,
        "name_ar": "الضرس",
        "name_en": "Adh Dhars",
        "center": [
            21.75966999,
            39.89426005
        ]
    },
    {
        "city_id": 1337,
        "region_id": 2,
        "name_ar": "القرية",
        "name_en": "Al Qurayyah",
        "center": [
            21.77546999,
            39.99073998
        ]
    },
    {
        "city_id": 1338,
        "region_id": 2,
        "name_ar": "مشجي",
        "name_en": "Mushaji",
        "center": [
            21.72723002,
            39.95729
        ]
    },
    {
        "city_id": 1339,
        "region_id": 2,
        "name_ar": "الخلاصة",
        "name_en": "Al Khulasah",
        "center": [
            21.69356997,
            39.92474995
        ]
    },
    {
        "city_id": 1340,
        "region_id": 2,
        "name_ar": "القاحة",
        "name_en": "Al Qahah",
        "center": [
            22.12366998,
            40.44951998
        ]
    },
    {
        "city_id": 1341,
        "region_id": 2,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            22.21900004,
            40.1067
        ]
    },
    {
        "city_id": 1342,
        "region_id": 2,
        "name_ar": "عسفان",
        "name_en": "'Isfan",
        "center": [
            21.91019995,
            39.35153996
        ]
    },
    {
        "city_id": 1343,
        "region_id": 2,
        "name_ar": "المجمعة",
        "name_en": "Al Majma'ah",
        "center": [
            22.07088003,
            40.02121997
        ]
    },
    {
        "city_id": 1344,
        "region_id": 2,
        "name_ar": "مدركة",
        "name_en": "Madrakah",
        "center": [
            21.98396006,
            39.99699001
        ]
    },
    {
        "city_id": 1345,
        "region_id": 2,
        "name_ar": "عين شمس",
        "name_en": "'Ayn Shams",
        "center": [
            21.63900997,
            39.75549994
        ]
    },
    {
        "city_id": 1346,
        "region_id": 2,
        "name_ar": "الريان",
        "name_en": "Ar Rayyan",
        "center": [
            21.67632999,
            39.89796005
        ]
    },
    {
        "city_id": 1347,
        "region_id": 1,
        "name_ar": "جرير",
        "name_en": "Jarir",
        "center": [
            20.20559001,
            44.11099997
        ]
    },
    {
        "city_id": 1348,
        "region_id": 1,
        "name_ar": "الفائزية",
        "name_en": "Al Faiziyah",
        "center": [
            20.40164,
            45.22885005
        ]
    },
    {
        "city_id": 1349,
        "region_id": 1,
        "name_ar": "المصارير",
        "name_en": "Al Masarir",
        "center": [
            20.40513002,
            45.14487994
        ]
    },
    {
        "city_id": 1350,
        "region_id": 1,
        "name_ar": "النويعمة",
        "name_en": "An Nuway'mah",
        "center": [
            20.45584998,
            44.80922001
        ]
    },
    {
        "city_id": 1351,
        "region_id": 1,
        "name_ar": "وادي الدواسر",
        "name_en": "Wadi Ad Dawasir",
        "center": [
            20.46967996,
            44.78301002
        ]
    },
    {
        "city_id": 1352,
        "region_id": 1,
        "name_ar": "ابرق النعام",
        "name_en": "Abraq An Na 'Am",
        "center": [
            19.47675995,
            44.51637998
        ]
    },
    {
        "city_id": 1353,
        "region_id": 1,
        "name_ar": "كمدة",
        "name_en": "Kamdah",
        "center": [
            20.39066994,
            45.07755999
        ]
    },
    {
        "city_id": 1354,
        "region_id": 1,
        "name_ar": "الفاو",
        "name_en": "Al Faw",
        "center": [
            19.78676995,
            45.13723998
        ]
    },
    {
        "city_id": 1355,
        "region_id": 1,
        "name_ar": "حرجة الزفر",
        "name_en": "Hirjat Az Zufur",
        "center": [
            19.52688,
            45.11727997
        ]
    },
    {
        "city_id": 1356,
        "region_id": 1,
        "name_ar": "حجلة السواد",
        "name_en": "Hajlat As Suwad",
        "center": [
            19.92730997,
            45.10282998
        ]
    },
    {
        "city_id": 1357,
        "region_id": 1,
        "name_ar": "الكواكب",
        "name_en": "Al Kawakib",
        "center": [
            20.39955994,
            45.31129005
        ]
    },
    {
        "city_id": 1358,
        "region_id": 1,
        "name_ar": "الدلعبي",
        "name_en": "Ad Dhala'aby",
        "center": [
            19.94081995,
            45.36713
        ]
    },
    {
        "city_id": 1359,
        "region_id": 1,
        "name_ar": "بني لبيب",
        "name_en": "Bani Labib",
        "center": [
            20.50110998,
            46.18707994
        ]
    },
    {
        "city_id": 1360,
        "region_id": 1,
        "name_ar": "خشم البازوم",
        "name_en": "Khashm Al Bazum",
        "center": [
            20.69984004,
            46.11420005
        ]
    },
    {
        "city_id": 1361,
        "region_id": 1,
        "name_ar": "السليل",
        "name_en": "As Sulayyil",
        "center": [
            20.47345006,
            45.57561002
        ]
    },
    {
        "city_id": 1362,
        "region_id": 1,
        "name_ar": "خيران",
        "name_en": "Khayran",
        "center": [
            20.4101097,
            45.43664229
        ]
    },
    {
        "city_id": 1363,
        "region_id": 1,
        "name_ar": "تمرة",
        "name_en": "Tamrah",
        "center": [
            20.39487883,
            45.41077619
        ]
    },
    {
        "city_id": 1364,
        "region_id": 1,
        "name_ar": "حمام",
        "name_en": "Himam",
        "center": [
            20.82705001,
            45.81646004
        ]
    },
    {
        "city_id": 1365,
        "region_id": 1,
        "name_ar": "ريدا",
        "name_en": "Rayda",
        "center": [
            20.53437997,
            47.60188005
        ]
    },
    {
        "city_id": 1366,
        "region_id": 2,
        "name_ar": "الوسقة",
        "name_en": "Al Wasqah",
        "center": [
            19.98428995,
            40.56137004
        ]
    },
    {
        "city_id": 1367,
        "region_id": 2,
        "name_ar": "المدرج",
        "name_en": "Al Midrij",
        "center": [
            20.08300997,
            40.39814005
        ]
    },
    {
        "city_id": 1368,
        "region_id": 12,
        "name_ar": "الحدبة",
        "name_en": "Al Hadabah",
        "center": [
            20.23939,
            41.14767004
        ]
    },
    {
        "city_id": 1369,
        "region_id": 2,
        "name_ar": "الخصرة",
        "name_en": "Al Khasirah",
        "center": [
            20.35815006,
            40.77324006
        ]
    },
    {
        "city_id": 1370,
        "region_id": 2,
        "name_ar": "عوية",
        "name_en": "'Uwayyah",
        "center": [
            20.38274003,
            40.88801004
        ]
    },
    {
        "city_id": 1371,
        "region_id": 2,
        "name_ar": "المشاش",
        "name_en": "Al Mishash",
        "center": [
            20.31666995,
            40.97580999
        ]
    },
    {
        "city_id": 1372,
        "region_id": 6,
        "name_ar": "روام",
        "name_en": "Rwam",
        "center": [
            18.35722413,
            42.06944615
        ]
    },
    {
        "city_id": 1373,
        "region_id": 2,
        "name_ar": "الحصاحص",
        "name_en": "Al Hasahis",
        "center": [
            20.31839996,
            40.88587999
        ]
    },
    {
        "city_id": 1374,
        "region_id": 2,
        "name_ar": "المدير",
        "name_en": "Al Mudir",
        "center": [
            20.27833999,
            40.88126004
        ]
    },
    {
        "city_id": 1375,
        "region_id": 2,
        "name_ar": "ذي رهجان",
        "name_en": "Dhi Rahjan",
        "center": [
            20.34278001,
            41.01605006
        ]
    },
    {
        "city_id": 1376,
        "region_id": 2,
        "name_ar": "اللغيسيم",
        "name_en": "Al Lughaysim",
        "center": [
            20.42065001,
            40.97819001
        ]
    },
    {
        "city_id": 1377,
        "region_id": 2,
        "name_ar": "الوقرين",
        "name_en": "Al Waqrayn",
        "center": [
            20.40611006,
            40.94896005
        ]
    },
    {
        "city_id": 1378,
        "region_id": 2,
        "name_ar": "الصواملة",
        "name_en": "As Suwamilah",
        "center": [
            20.26373,
            40.44095995
        ]
    },
    {
        "city_id": 1379,
        "region_id": 2,
        "name_ar": "الصدية",
        "name_en": "As Sadiyah",
        "center": [
            20.30071999,
            40.54063
        ]
    },
    {
        "city_id": 1380,
        "region_id": 2,
        "name_ar": "سوق الجمعة",
        "name_en": "Suq Al Jum'ah",
        "center": [
            20.28339996,
            40.68121005
        ]
    },
    {
        "city_id": 1381,
        "region_id": 12,
        "name_ar": "مسعدة",
        "name_en": "Masa'dah",
        "center": [
            20.26103999,
            41.05692
        ]
    },
    {
        "city_id": 1382,
        "region_id": 12,
        "name_ar": "ظهي",
        "name_en": "Dhaha",
        "center": [
            20.19339,
            41.11419004
        ]
    },
    {
        "city_id": 1383,
        "region_id": 2,
        "name_ar": "سلم الزواهرة",
        "name_en": "Salam Az Zuwahirah",
        "center": [
            19.82467998,
            40.73074996
        ]
    },
    {
        "city_id": 1384,
        "region_id": 2,
        "name_ar": "أم الشوك",
        "name_en": "Umm Ash Shawk",
        "center": [
            19.87930001,
            40.62507997
        ]
    },
    {
        "city_id": 1385,
        "region_id": 12,
        "name_ar": "الحريقة",
        "name_en": "Al Hariqah",
        "center": [
            20.10346004,
            40.91526003
        ]
    },
    {
        "city_id": 1386,
        "region_id": 2,
        "name_ar": "الحبقة",
        "name_en": "Al Habqah",
        "center": [
            20.11684995,
            40.79714996
        ]
    },
    {
        "city_id": 1387,
        "region_id": 12,
        "name_ar": "كرش",
        "name_en": "Karsh",
        "center": [
            20.19008,
            40.96725
        ]
    },
    {
        "city_id": 1388,
        "region_id": 2,
        "name_ar": "مفتاح",
        "name_en": "Miftah",
        "center": [
            20.00537004,
            40.83705996
        ]
    },
    {
        "city_id": 1389,
        "region_id": 2,
        "name_ar": "الكردم",
        "name_en": "Al Kurdum",
        "center": [
            20.02320999,
            40.75136997
        ]
    },
    {
        "city_id": 1390,
        "region_id": 2,
        "name_ar": "الليث",
        "name_en": "Al Lith",
        "center": [
            20.15267003,
            40.27223003
        ]
    },
    {
        "city_id": 1391,
        "region_id": 2,
        "name_ar": "الجائزة",
        "name_en": "Al Jaizah",
        "center": [
            20.37097004,
            40.93930996
        ]
    },
    {
        "city_id": 1392,
        "region_id": 2,
        "name_ar": "قاعس",
        "name_en": "Qa'is",
        "center": [
            20.50942996,
            40.90675004
        ]
    },
    {
        "city_id": 1393,
        "region_id": 2,
        "name_ar": "المضحاة",
        "name_en": "Al Madhah",
        "center": [
            20.45928,
            40.81434995
        ]
    },
    {
        "city_id": 1394,
        "region_id": 2,
        "name_ar": "الميثاء",
        "name_en": "Al Maytha",
        "center": [
            20.43824995,
            40.78086002
        ]
    },
    {
        "city_id": 1395,
        "region_id": 2,
        "name_ar": "الغرات",
        "name_en": "Al Ghurrat",
        "center": [
            20.44816997,
            40.88301998
        ]
    },
    {
        "city_id": 1396,
        "region_id": 2,
        "name_ar": "صلعة",
        "name_en": "Sala'ah",
        "center": [
            20.46139996,
            40.94483
        ]
    },
    {
        "city_id": 1397,
        "region_id": 2,
        "name_ar": "ضبيعة",
        "name_en": "Dubay'ah",
        "center": [
            20.42949003,
            40.86611996
        ]
    },
    {
        "city_id": 1398,
        "region_id": 2,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            20.49735002,
            40.93033995
        ]
    },
    {
        "city_id": 1399,
        "region_id": 2,
        "name_ar": "الحلي",
        "name_en": "Al Hulay",
        "center": [
            20.45608006,
            40.90198995
        ]
    },
    {
        "city_id": 1400,
        "region_id": 12,
        "name_ar": "القري",
        "name_en": "Al Quray",
        "center": [
            20.26076001,
            41.14976002
        ]
    },
    {
        "city_id": 1401,
        "region_id": 2,
        "name_ar": "الرنيفة",
        "name_en": "Ar Runayfah",
        "center": [
            20.86822998,
            40.36719998
        ]
    },
    {
        "city_id": 1402,
        "region_id": 2,
        "name_ar": "سوق اللصفة",
        "name_en": "Suq Al Lusafah",
        "center": [
            20.77043002,
            40.26281006
        ]
    },
    {
        "city_id": 1403,
        "region_id": 2,
        "name_ar": "عيون حارة",
        "name_en": "Uyun Harrah",
        "center": [
            20.46589994,
            40.47027
        ]
    },
    {
        "city_id": 1404,
        "region_id": 2,
        "name_ar": "السوحة",
        "name_en": "As Siwahah",
        "center": [
            20.47295004,
            40.97375006
        ]
    },
    {
        "city_id": 1405,
        "region_id": 2,
        "name_ar": "ربوع العين",
        "name_en": "Rubu' Al Ayn",
        "center": [
            20.61634997,
            40.74749004
        ]
    },
    {
        "city_id": 1406,
        "region_id": 2,
        "name_ar": "المجيرمة",
        "name_en": "Al Mijayrimah",
        "center": [
            20.38026997,
            39.82116003
        ]
    },
    {
        "city_id": 1407,
        "region_id": 2,
        "name_ar": "السعدية",
        "name_en": "As Sa'diyah",
        "center": [
            20.71322005,
            39.90915003
        ]
    },
    {
        "city_id": 1408,
        "region_id": 2,
        "name_ar": "سوق ذرى",
        "name_en": "Suq Dhara",
        "center": [
            20.62101005,
            40.40601003
        ]
    },
    {
        "city_id": 1409,
        "region_id": 2,
        "name_ar": "سوق ترعا",
        "name_en": "Suq Tara'a",
        "center": [
            20.53959996,
            40.53949002
        ]
    },
    {
        "city_id": 1410,
        "region_id": 2,
        "name_ar": "الرفغ",
        "name_en": "Ar Rafugh",
        "center": [
            20.61436003,
            40.54665002
        ]
    },
    {
        "city_id": 1411,
        "region_id": 2,
        "name_ar": "قرضة",
        "name_en": "Qaradah",
        "center": [
            20.70034998,
            40.66228004
        ]
    },
    {
        "city_id": 1412,
        "region_id": 2,
        "name_ar": "البرد",
        "name_en": "Al Barid",
        "center": [
            20.66712,
            40.62634001
        ]
    },
    {
        "city_id": 1413,
        "region_id": 2,
        "name_ar": "سوق بني يزيد",
        "name_en": "Suq Bani Yazid",
        "center": [
            20.72443996,
            40.56916004
        ]
    },
    {
        "city_id": 1414,
        "region_id": 2,
        "name_ar": "حقال",
        "name_en": "Haqal",
        "center": [
            20.49809,
            40.69621002
        ]
    },
    {
        "city_id": 1415,
        "region_id": 2,
        "name_ar": "الساعي",
        "name_en": "As Sa'i",
        "center": [
            20.46544004,
            40.69841003
        ]
    },
    {
        "city_id": 1416,
        "region_id": 2,
        "name_ar": "ذنباء",
        "name_en": "Dhanaba",
        "center": [
            20.44325006,
            40.65419004
        ]
    },
    {
        "city_id": 1417,
        "region_id": 2,
        "name_ar": "المقسبة",
        "name_en": "Al Maqsabah",
        "center": [
            20.56338005,
            40.86763005
        ]
    },
    {
        "city_id": 1418,
        "region_id": 2,
        "name_ar": "شراقب",
        "name_en": "Sharaqib",
        "center": [
            20.53957999,
            40.86757
        ]
    },
    {
        "city_id": 1419,
        "region_id": 2,
        "name_ar": "شيباي",
        "name_en": "Shaybay",
        "center": [
            20.52798999,
            40.78539004
        ]
    },
    {
        "city_id": 1420,
        "region_id": 2,
        "name_ar": "قفيلان",
        "name_en": "Qufaylan",
        "center": [
            20.53978003,
            40.78134999
        ]
    },
    {
        "city_id": 1421,
        "region_id": 2,
        "name_ar": "الصالف",
        "name_en": "As Salif",
        "center": [
            20.64777999,
            40.77384999
        ]
    },
    {
        "city_id": 1422,
        "region_id": 2,
        "name_ar": "صبح",
        "name_en": "Sabah",
        "center": [
            20.49260995,
            40.83607999
        ]
    },
    {
        "city_id": 1423,
        "region_id": 2,
        "name_ar": "الغالة",
        "name_en": "Al Ghalah",
        "center": [
            20.27080995,
            40.14196001
        ]
    },
    {
        "city_id": 1424,
        "region_id": 2,
        "name_ar": "غميقة",
        "name_en": "Ghumayqah",
        "center": [
            20.31644003,
            40.44728998
        ]
    },
    {
        "city_id": 1425,
        "region_id": 12,
        "name_ar": "الحجرة",
        "name_en": "Al Hajrah",
        "center": [
            20.22874004,
            41.07438997
        ]
    },
    {
        "city_id": 1426,
        "region_id": 2,
        "name_ar": "لملم",
        "name_en": "Lamlam",
        "center": [
            20.82655002,
            40.11042005
        ]
    },
    {
        "city_id": 1427,
        "region_id": 12,
        "name_ar": "الجرين",
        "name_en": "Al Jarin",
        "center": [
            20.10151001,
            40.92422998
        ]
    },
    {
        "city_id": 1428,
        "region_id": 2,
        "name_ar": "الشاقة / الصهوة",
        "name_en": "Al Shaqqah (As Shwah)",
        "center": [
            19.91769996,
            40.74141003
        ]
    },
    {
        "city_id": 1429,
        "region_id": 6,
        "name_ar": "السفح",
        "name_en": "As Safah",
        "center": [
            19.31068999,
            43.46496998
        ]
    },
    {
        "city_id": 1430,
        "region_id": 6,
        "name_ar": "حزم مفتاح",
        "name_en": "Hazam Miftah",
        "center": [
            19.34922006,
            43.45220006
        ]
    },
    {
        "city_id": 1431,
        "region_id": 6,
        "name_ar": "جاش",
        "name_en": "Jash",
        "center": [
            19.37035997,
            43.45253002
        ]
    },
    {
        "city_id": 1432,
        "region_id": 6,
        "name_ar": "روضة جاش",
        "name_en": "Rawdat Jash",
        "center": [
            19.40947996,
            43.44646996
        ]
    },
    {
        "city_id": 1433,
        "region_id": 6,
        "name_ar": "الحرفين",
        "name_en": "Al Harfayn",
        "center": [
            19.40729005,
            43.48402002
        ]
    },
    {
        "city_id": 1434,
        "region_id": 6,
        "name_ar": "لاعس",
        "name_en": "La'is",
        "center": [
            19.46845997,
            43.54250002
        ]
    },
    {
        "city_id": 1435,
        "region_id": 6,
        "name_ar": "مريغان",
        "name_en": "Murayghan",
        "center": [
            19.53361005,
            43.7486
        ]
    },
    {
        "city_id": 1436,
        "region_id": 6,
        "name_ar": "الدريب",
        "name_en": "Ad Dirayb",
        "center": [
            19.11055996,
            43.61427994
        ]
    },
    {
        "city_id": 1437,
        "region_id": 6,
        "name_ar": "الجازع",
        "name_en": "Al Jazi'",
        "center": [
            19.09782003,
            43.33037
        ]
    },
    {
        "city_id": 1438,
        "region_id": 6,
        "name_ar": "الفاخرية",
        "name_en": "Al Fakhriyah",
        "center": [
            19.12247995,
            43.31207996
        ]
    },
    {
        "city_id": 1439,
        "region_id": 6,
        "name_ar": "كتنة",
        "name_en": "Kutnah",
        "center": [
            19.18233003,
            43.36955997
        ]
    },
    {
        "city_id": 1440,
        "region_id": 6,
        "name_ar": "الجزيرة",
        "name_en": "Al Jazirah",
        "center": [
            19.06870996,
            42.99571005
        ]
    },
    {
        "city_id": 1441,
        "region_id": 6,
        "name_ar": "الحنيك",
        "name_en": "Al Hanek",
        "center": [
            19.45165081,
            41.97843177
        ]
    },
    {
        "city_id": 1442,
        "region_id": 6,
        "name_ar": "مريخة",
        "name_en": "Muraykhah",
        "center": [
            18.40981,
            43.64898998
        ]
    },
    {
        "city_id": 1443,
        "region_id": 6,
        "name_ar": "تثليث",
        "name_en": "Tathlith",
        "center": [
            19.53081996,
            43.50362995
        ]
    },
    {
        "city_id": 1444,
        "region_id": 6,
        "name_ar": "ال سويدان",
        "name_en": "Al Suwaydan",
        "center": [
            19.57138005,
            43.50750006
        ]
    },
    {
        "city_id": 1445,
        "region_id": 6,
        "name_ar": "ال عيفان",
        "name_en": "Al Ayfan",
        "center": [
            19.59917999,
            43.51605004
        ]
    },
    {
        "city_id": 1446,
        "region_id": 6,
        "name_ar": "ال خميسة",
        "name_en": "Al Khumaysah",
        "center": [
            19.61055996,
            43.52441994
        ]
    },
    {
        "city_id": 1447,
        "region_id": 6,
        "name_ar": "القيرة",
        "name_en": "Al Qirah",
        "center": [
            20.02069004,
            44.05947006
        ]
    },
    {
        "city_id": 1448,
        "region_id": 6,
        "name_ar": "الحمضة",
        "name_en": "Al Hamdah",
        "center": [
            19.03371999,
            43.61124001
        ]
    },
    {
        "city_id": 1449,
        "region_id": 6,
        "name_ar": "الزرق",
        "name_en": "Az Zurq",
        "center": [
            19.21038005,
            43.98756
        ]
    },
    {
        "city_id": 1450,
        "region_id": 6,
        "name_ar": "حبية",
        "name_en": "Habiyah",
        "center": [
            20.27527994,
            43.88254995
        ]
    },
    {
        "city_id": 1451,
        "region_id": 6,
        "name_ar": "رغوان",
        "name_en": "Rughwan",
        "center": [
            19.06928999,
            43.61151996
        ]
    },
    {
        "city_id": 1452,
        "region_id": 6,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            18.92983994,
            44.06610001
        ]
    },
    {
        "city_id": 1453,
        "region_id": 6,
        "name_ar": "الامواه",
        "name_en": "Al Amwah",
        "center": [
            18.71503004,
            43.65935994
        ]
    },
    {
        "city_id": 1454,
        "region_id": 6,
        "name_ar": "الصبيخة",
        "name_en": "As Subaykhah",
        "center": [
            19.10166005,
            43.31577
        ]
    },
    {
        "city_id": 1455,
        "region_id": 12,
        "name_ar": "الإشتاء",
        "name_en": "Al Ishta",
        "center": [
            20.18349004,
            41.37237997
        ]
    },
    {
        "city_id": 1456,
        "region_id": 12,
        "name_ar": "المكاتيم",
        "name_en": "Al Makatim",
        "center": [
            20.23635002,
            41.31692006
        ]
    },
    {
        "city_id": 1457,
        "region_id": 12,
        "name_ar": "الحكمان",
        "name_en": "Al Hukman",
        "center": [
            20.22039999,
            41.35657002
        ]
    },
    {
        "city_id": 1458,
        "region_id": 12,
        "name_ar": "الكلبة",
        "name_en": "Al Kalibah",
        "center": [
            20.33964995,
            41.31120994
        ]
    },
    {
        "city_id": 1459,
        "region_id": 12,
        "name_ar": "الثراوين",
        "name_en": "Ath Tharawin",
        "center": [
            20.28561006,
            41.31856996
        ]
    },
    {
        "city_id": 1460,
        "region_id": 12,
        "name_ar": "قريش الحسن",
        "name_en": "Quraysh Al Hasan",
        "center": [
            20.30308001,
            41.35064005
        ]
    },
    {
        "city_id": 1461,
        "region_id": 12,
        "name_ar": "الضبيعات",
        "name_en": "Ad Dubay'at",
        "center": [
            20.32759004,
            41.40336998
        ]
    },
    {
        "city_id": 1462,
        "region_id": 12,
        "name_ar": "وادي بطحان",
        "name_en": "Wadi Bathan",
        "center": [
            20.22468004,
            41.40714995
        ]
    },
    {
        "city_id": 1463,
        "region_id": 12,
        "name_ar": "الكرادسة",
        "name_en": "Al Karadisah",
        "center": [
            20.37028005,
            41.27256994
        ]
    },
    {
        "city_id": 1464,
        "region_id": 12,
        "name_ar": "سبيحة العليا",
        "name_en": "Sabihah Al 'Ulya",
        "center": [
            20.35401004,
            41.28931004
        ]
    },
    {
        "city_id": 1465,
        "region_id": 12,
        "name_ar": "القرى",
        "name_en": "Al Qara",
        "center": [
            20.25145006,
            41.36415005
        ]
    },
    {
        "city_id": 1466,
        "region_id": 12,
        "name_ar": "الاطاولة",
        "name_en": "Al Atawlah",
        "center": [
            20.25776003,
            41.36387996
        ]
    },
    {
        "city_id": 1467,
        "region_id": 12,
        "name_ar": "بيدة",
        "name_en": "Baydah",
        "center": [
            20.24471001,
            41.40666995
        ]
    },
    {
        "city_id": 1468,
        "region_id": 12,
        "name_ar": "القسمة",
        "name_en": "Al Qisamah",
        "center": [
            20.31355004,
            41.32835002
        ]
    },
    {
        "city_id": 1469,
        "region_id": 12,
        "name_ar": "نخال",
        "name_en": "Nikhal",
        "center": [
            20.56468999,
            41.31857994
        ]
    },
    {
        "city_id": 1470,
        "region_id": 6,
        "name_ar": "الخليج",
        "name_en": "Al Khalij",
        "center": [
            20.04992,
            42.64346995
        ]
    },
    {
        "city_id": 1471,
        "region_id": 6,
        "name_ar": "الصبيحي",
        "name_en": "As Sabihi",
        "center": [
            20.06863001,
            42.59927998
        ]
    },
    {
        "city_id": 1472,
        "region_id": 6,
        "name_ar": "المدراء",
        "name_en": "Al Madra",
        "center": [
            19.91122002,
            42.57135999
        ]
    },
    {
        "city_id": 1473,
        "region_id": 6,
        "name_ar": "الباقرة",
        "name_en": "Al Baqirah",
        "center": [
            19.96381997,
            42.57826999
        ]
    },
    {
        "city_id": 1474,
        "region_id": 6,
        "name_ar": "نمران",
        "name_en": "Namran",
        "center": [
            19.9969,
            42.58859996
        ]
    },
    {
        "city_id": 1475,
        "region_id": 6,
        "name_ar": "شديق",
        "name_en": "Shudayq",
        "center": [
            20.03465003,
            42.50566998
        ]
    },
    {
        "city_id": 1476,
        "region_id": 6,
        "name_ar": "الحرف",
        "name_en": "Al Harf",
        "center": [
            19.98035006,
            42.58162003
        ]
    },
    {
        "city_id": 1477,
        "region_id": 6,
        "name_ar": "العطف",
        "name_en": "Al 'Atf",
        "center": [
            20.14657,
            42.63333994
        ]
    },
    {
        "city_id": 1478,
        "region_id": 6,
        "name_ar": "الدحو",
        "name_en": "Ad Duhu",
        "center": [
            20.12864001,
            42.68276999
        ]
    },
    {
        "city_id": 1479,
        "region_id": 6,
        "name_ar": "الحريرة",
        "name_en": "Al Hurayrah",
        "center": [
            20.11761999,
            42.66004003
        ]
    },
    {
        "city_id": 1480,
        "region_id": 6,
        "name_ar": "الشقيقة",
        "name_en": "Ash Shaqiqah",
        "center": [
            20.26101997,
            42.74999996
        ]
    },
    {
        "city_id": 1481,
        "region_id": 6,
        "name_ar": "النقيع",
        "name_en": "An Naqi'",
        "center": [
            20.22912999,
            42.69995004
        ]
    },
    {
        "city_id": 1482,
        "region_id": 6,
        "name_ar": "الرفائع",
        "name_en": "Ar Rafai'",
        "center": [
            20.18049,
            42.79743994
        ]
    },
    {
        "city_id": 1483,
        "region_id": 6,
        "name_ar": "الجنينة",
        "name_en": "Al Junaynah",
        "center": [
            20.22215999,
            42.85203998
        ]
    },
    {
        "city_id": 1484,
        "region_id": 6,
        "name_ar": "عيدان",
        "name_en": "Idan",
        "center": [
            20.25261997,
            42.89758999
        ]
    },
    {
        "city_id": 1485,
        "region_id": 6,
        "name_ar": "أم الفروغ",
        "name_en": "Umm Al Furugh",
        "center": [
            19.70294,
            42.48433997
        ]
    },
    {
        "city_id": 1486,
        "region_id": 6,
        "name_ar": "عقيلية",
        "name_en": "'Aqiliyah",
        "center": [
            19.72010005,
            42.49250999
        ]
    },
    {
        "city_id": 1487,
        "region_id": 6,
        "name_ar": "بينة",
        "name_en": "Baynah",
        "center": [
            19.75,
            42.49927997
        ]
    },
    {
        "city_id": 1488,
        "region_id": 6,
        "name_ar": "عرمان",
        "name_en": "'Arman",
        "center": [
            19.77162998,
            42.49848994
        ]
    },
    {
        "city_id": 1489,
        "region_id": 6,
        "name_ar": "القديحي",
        "name_en": "Al Qadihy",
        "center": [
            19.78549998,
            42.50093
        ]
    },
    {
        "city_id": 1490,
        "region_id": 6,
        "name_ar": "واعر",
        "name_en": "Wa'ir",
        "center": [
            19.81917996,
            42.52929994
        ]
    },
    {
        "city_id": 1491,
        "region_id": 6,
        "name_ar": "الشط",
        "name_en": "Ash Shatt",
        "center": [
            19.83878995,
            42.51424999
        ]
    },
    {
        "city_id": 1492,
        "region_id": 6,
        "name_ar": "المروة",
        "name_en": "Al Marwah",
        "center": [
            19.90129002,
            42.56101
        ]
    },
    {
        "city_id": 1493,
        "region_id": 6,
        "name_ar": "المهامل",
        "name_en": "Al Mahamil",
        "center": [
            19.85907998,
            42.44051006
        ]
    },
    {
        "city_id": 1494,
        "region_id": 6,
        "name_ar": "المجمعة",
        "name_en": "Al Majma'ah",
        "center": [
            19.87112997,
            42.55949996
        ]
    },
    {
        "city_id": 1495,
        "region_id": 6,
        "name_ar": "الحيفة",
        "name_en": "Al Hifah",
        "center": [
            19.86573004,
            42.54862994
        ]
    },
    {
        "city_id": 1496,
        "region_id": 6,
        "name_ar": "مهر",
        "name_en": "Muhr",
        "center": [
            19.84914004,
            42.43007999
        ]
    },
    {
        "city_id": 1497,
        "region_id": 6,
        "name_ar": "البهيم",
        "name_en": "Al Bahim",
        "center": [
            19.70183999,
            42.36618
        ]
    },
    {
        "city_id": 1498,
        "region_id": 6,
        "name_ar": "الغفرات",
        "name_en": "Al Ghafrat",
        "center": [
            19.79363001,
            42.40949999
        ]
    },
    {
        "city_id": 1499,
        "region_id": 6,
        "name_ar": "المعدن",
        "name_en": "Al Ma'din",
        "center": [
            19.20687994,
            42.78015994
        ]
    },
    {
        "city_id": 1500,
        "region_id": 6,
        "name_ar": "القوز",
        "name_en": "Al Qawz",
        "center": [
            19.23527004,
            42.79537998
        ]
    },
    {
        "city_id": 1501,
        "region_id": 6,
        "name_ar": "بادية",
        "name_en": "Badiyah",
        "center": [
            19.25102994,
            42.83146006
        ]
    },
    {
        "city_id": 1502,
        "region_id": 6,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            19.27155995,
            42.85673994
        ]
    },
    {
        "city_id": 1503,
        "region_id": 6,
        "name_ar": "كتنة",
        "name_en": "Kutnah",
        "center": [
            19.35776003,
            42.80039002
        ]
    },
    {
        "city_id": 1504,
        "region_id": 6,
        "name_ar": "مجحم",
        "name_en": "Mujahhim",
        "center": [
            19.42769002,
            42.81950995
        ]
    },
    {
        "city_id": 1505,
        "region_id": 6,
        "name_ar": "الحجون",
        "name_en": "Al Hajun",
        "center": [
            19.37869997,
            42.80044995
        ]
    },
    {
        "city_id": 1506,
        "region_id": 6,
        "name_ar": "صمخ",
        "name_en": "Samakh",
        "center": [
            19.37203333,
            42.80566667
        ]
    },
    {
        "city_id": 1507,
        "region_id": 6,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            19.4574,
            42.83753333
        ]
    },
    {
        "city_id": 1508,
        "region_id": 6,
        "name_ar": "الثنية",
        "name_en": "Ath Thaniyah",
        "center": [
            19.98373001,
            42.36051996
        ]
    },
    {
        "city_id": 1509,
        "region_id": 6,
        "name_ar": "القوزية",
        "name_en": "Al Qawziyah",
        "center": [
            19.98699997,
            42.33546998
        ]
    },
    {
        "city_id": 1510,
        "region_id": 6,
        "name_ar": "القوباء",
        "name_en": "Al Qawba",
        "center": [
            19.54958996,
            42.27807001
        ]
    },
    {
        "city_id": 1511,
        "region_id": 6,
        "name_ar": "قطبة",
        "name_en": "Qutbah",
        "center": [
            19.51869997,
            42.20907997
        ]
    },
    {
        "city_id": 1512,
        "region_id": 6,
        "name_ar": "دفرخرشان",
        "name_en": "Dafir Kharshan",
        "center": [
            19.76553996,
            42.26932996
        ]
    },
    {
        "city_id": 1513,
        "region_id": 6,
        "name_ar": "جلال",
        "name_en": "Jalal",
        "center": [
            19.77140999,
            42.25725006
        ]
    },
    {
        "city_id": 1514,
        "region_id": 6,
        "name_ar": "بيشة",
        "name_en": "Bishah",
        "center": [
            20.00736004,
            42.60646004
        ]
    },
    {
        "city_id": 1515,
        "region_id": 6,
        "name_ar": "الديلمي",
        "name_en": "Ad Dailami",
        "center": [
            20.08524997,
            42.63448994
        ]
    },
    {
        "city_id": 1516,
        "region_id": 6,
        "name_ar": "الرقيطاء",
        "name_en": "Ar Ruqaita'",
        "center": [
            20.16297996,
            42.68839999
        ]
    },
    {
        "city_id": 1517,
        "region_id": 6,
        "name_ar": "تبالة",
        "name_en": "Tabalah",
        "center": [
            19.98908999,
            42.22174996
        ]
    },
    {
        "city_id": 1518,
        "region_id": 6,
        "name_ar": "الحازمي",
        "name_en": "Al Hazmi",
        "center": [
            19.85933004,
            42.48144998
        ]
    },
    {
        "city_id": 1519,
        "region_id": 6,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            19.24673006,
            42.83849999
        ]
    },
    {
        "city_id": 1520,
        "region_id": 12,
        "name_ar": "الهضبة",
        "name_en": "Al Hadabah",
        "center": [
            19.89267998,
            41.58461002
        ]
    },
    {
        "city_id": 1521,
        "region_id": 12,
        "name_ar": "الأبناء",
        "name_en": "Al Abna",
        "center": [
            19.82241999,
            41.61170998
        ]
    },
    {
        "city_id": 1522,
        "region_id": 12,
        "name_ar": "بني جرة",
        "name_en": "Bani Jarrah",
        "center": [
            19.89997994,
            41.56559
        ]
    },
    {
        "city_id": 1523,
        "region_id": 12,
        "name_ar": "آل مرزوق",
        "name_en": "Al Marzuq",
        "center": [
            19.93115995,
            41.62396999
        ]
    },
    {
        "city_id": 1524,
        "region_id": 12,
        "name_ar": "آل حميد",
        "name_en": "Al Himayd",
        "center": [
            19.85420005,
            41.67384996
        ]
    },
    {
        "city_id": 1525,
        "region_id": 12,
        "name_ar": "جبر",
        "name_en": "Jabr",
        "center": [
            19.82853005,
            41.64464003
        ]
    },
    {
        "city_id": 1526,
        "region_id": 12,
        "name_ar": "حوالة",
        "name_en": "Hawalah",
        "center": [
            19.78683333,
            41.7218
        ]
    },
    {
        "city_id": 1527,
        "region_id": 12,
        "name_ar": "الأزاهرة",
        "name_en": "Al Azahirah",
        "center": [
            19.82121003,
            41.73715999
        ]
    },
    {
        "city_id": 1528,
        "region_id": 12,
        "name_ar": "دارالسوق",
        "name_en": "Dar As Suq",
        "center": [
            19.78325997,
            41.76507994
        ]
    },
    {
        "city_id": 1529,
        "region_id": 12,
        "name_ar": "بني كبير",
        "name_en": "Bani Kabir",
        "center": [
            19.94915003,
            41.57402001
        ]
    },
    {
        "city_id": 1530,
        "region_id": 12,
        "name_ar": "الحمران",
        "name_en": "Al Humran",
        "center": [
            19.83308005,
            41.59397994
        ]
    },
    {
        "city_id": 1531,
        "region_id": 12,
        "name_ar": "بلجرشي",
        "name_en": "Biljurashi",
        "center": [
            19.84112005,
            41.56252003
        ]
    },
    {
        "city_id": 1533,
        "region_id": 12,
        "name_ar": "بالشهم",
        "name_en": "Bal Shaham",
        "center": [
            19.84163995,
            41.68945005
        ]
    },
    {
        "city_id": 1534,
        "region_id": 12,
        "name_ar": "بادية بني كبير",
        "name_en": "Badiyat Bani Kabir",
        "center": [
            20.14726001,
            41.83764998
        ]
    },
    {
        "city_id": 1535,
        "region_id": 12,
        "name_ar": "بلعلاء",
        "name_en": "Bal'ala",
        "center": [
            20.06432994,
            41.44602003
        ]
    },
    {
        "city_id": 1536,
        "region_id": 12,
        "name_ar": "العفوص",
        "name_en": "Al 'Ufus",
        "center": [
            20.07674996,
            41.36887006
        ]
    },
    {
        "city_id": 1537,
        "region_id": 12,
        "name_ar": "خيرة",
        "name_en": "Khirah",
        "center": [
            20.07762999,
            41.41994995
        ]
    },
    {
        "city_id": 1538,
        "region_id": 12,
        "name_ar": "قرن ظبي",
        "name_en": "Qarn Dhabi",
        "center": [
            20.05831,
            41.41968997
        ]
    },
    {
        "city_id": 1539,
        "region_id": 12,
        "name_ar": "شبرقة",
        "name_en": "Shibriqah",
        "center": [
            20.12674005,
            41.40562002
        ]
    },
    {
        "city_id": 1540,
        "region_id": 12,
        "name_ar": "الغشامرة",
        "name_en": "Al Ghashamrah",
        "center": [
            19.97995997,
            41.52130998
        ]
    },
    {
        "city_id": 1541,
        "region_id": 12,
        "name_ar": "العباس",
        "name_en": "Al 'Abbas",
        "center": [
            19.95423996,
            41.49145001
        ]
    },
    {
        "city_id": 1542,
        "region_id": 12,
        "name_ar": "الباحة",
        "name_en": "Bahah",
        "center": [
            20.00695006,
            41.46314
        ]
    },
    {
        "city_id": 1543,
        "region_id": 12,
        "name_ar": "رغدان",
        "name_en": "Raghdan",
        "center": [
            20.035,
            41.46687996
        ]
    },
    {
        "city_id": 1544,
        "region_id": 12,
        "name_ar": "الظفير",
        "name_en": "Adh Dhafir",
        "center": [
            20.00261999,
            41.47141996
        ]
    },
    {
        "city_id": 1545,
        "region_id": 12,
        "name_ar": "بني حسن",
        "name_en": "Bani Hasan",
        "center": [
            20.05274003,
            41.35976995
        ]
    },
    {
        "city_id": 1546,
        "region_id": 12,
        "name_ar": "بيضان",
        "name_en": "Baydan",
        "center": [
            20.02430003,
            41.40964998
        ]
    },
    {
        "city_id": 1547,
        "region_id": 12,
        "name_ar": "الصغرة",
        "name_en": "As Saghrah",
        "center": [
            20.05229997,
            41.37073004
        ]
    },
    {
        "city_id": 1548,
        "region_id": 12,
        "name_ar": "بني ظبيان",
        "name_en": "Bani Dhabyan",
        "center": [
            19.9549,
            41.49229004
        ]
    },
    {
        "city_id": 1549,
        "region_id": 6,
        "name_ar": "الشقيق",
        "name_en": "Ash Shaqiq",
        "center": [
            19.65660004,
            41.90786997
        ]
    },
    {
        "city_id": 1550,
        "region_id": 6,
        "name_ar": "البظاظة",
        "name_en": "Al Badhdhadhah",
        "center": [
            19.60094002,
            41.96796999
        ]
    },
    {
        "city_id": 1551,
        "region_id": 6,
        "name_ar": "الحرجة",
        "name_en": "Al Harajah",
        "center": [
            19.57781001,
            41.99360998
        ]
    },
    {
        "city_id": 1552,
        "region_id": 6,
        "name_ar": "آل يزيد",
        "name_en": "Al Yazid",
        "center": [
            19.73462001,
            41.91324
        ]
    },
    {
        "city_id": 1553,
        "region_id": 6,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            19.74969004,
            41.94324997
        ]
    },
    {
        "city_id": 1554,
        "region_id": 6,
        "name_ar": "الفرع",
        "name_en": "Al Far'",
        "center": [
            19.76249001,
            41.86787998
        ]
    },
    {
        "city_id": 1555,
        "region_id": 6,
        "name_ar": "البلس",
        "name_en": "Al Balas",
        "center": [
            19.82229001,
            41.86126005
        ]
    },
    {
        "city_id": 1556,
        "region_id": 6,
        "name_ar": "العظة",
        "name_en": "Al 'Idhah",
        "center": [
            19.69742999,
            42.02316
        ]
    },
    {
        "city_id": 1557,
        "region_id": 6,
        "name_ar": "الصرف",
        "name_en": "As Sarf",
        "center": [
            19.65023996,
            42.00602
        ]
    },
    {
        "city_id": 1558,
        "region_id": 6,
        "name_ar": "ثما",
        "name_en": "Thamma",
        "center": [
            19.54260001,
            41.96606997
        ]
    },
    {
        "city_id": 1559,
        "region_id": 6,
        "name_ar": "العاسرة",
        "name_en": "Al 'Asirah",
        "center": [
            19.38081005,
            42.04378995
        ]
    },
    {
        "city_id": 1560,
        "region_id": 6,
        "name_ar": "حجاب",
        "name_en": "Hijab",
        "center": [
            19.48020003,
            41.97321002
        ]
    },
    {
        "city_id": 1561,
        "region_id": 6,
        "name_ar": "الحصنة",
        "name_en": "Al Husanah",
        "center": [
            19.47234001,
            41.96893003
        ]
    },
    {
        "city_id": 1562,
        "region_id": 6,
        "name_ar": "آل الزارية",
        "name_en": "Al Az Zariyah",
        "center": [
            19.42355995,
            41.99667995
        ]
    },
    {
        "city_id": 1563,
        "region_id": 6,
        "name_ar": "الحصباء",
        "name_en": "Al Hasba",
        "center": [
            19.3988,
            42.02738002
        ]
    },
    {
        "city_id": 1564,
        "region_id": 6,
        "name_ar": "آل سلمة",
        "name_en": "Al Salamah",
        "center": [
            19.41418711,
            42.011592
        ]
    },
    {
        "city_id": 1565,
        "region_id": 6,
        "name_ar": "ال الشيخ",
        "name_en": "Al Ash Shaykh",
        "center": [
            19.38938004,
            42.05047999
        ]
    },
    {
        "city_id": 1566,
        "region_id": 6,
        "name_ar": "البشائر",
        "name_en": "Al Bashair",
        "center": [
            19.74221997,
            41.94603
        ]
    },
    {
        "city_id": 1567,
        "region_id": 2,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            19.14113,
            41.14639005
        ]
    },
    {
        "city_id": 1568,
        "region_id": 2,
        "name_ar": "أبو علي",
        "name_en": "Abu 'Ali",
        "center": [
            19.28159994,
            41.07187001
        ]
    },
    {
        "city_id": 1569,
        "region_id": 2,
        "name_ar": "العمودية",
        "name_en": "Al 'Amudiyah",
        "center": [
            19.18822999,
            41.11981996
        ]
    },
    {
        "city_id": 1570,
        "region_id": 6,
        "name_ar": "قرن بن ساهر",
        "name_en": "Qarn Bin Sahir",
        "center": [
            19.59517998,
            41.88092004
        ]
    },
    {
        "city_id": 1571,
        "region_id": 2,
        "name_ar": "ثلوث عمارة",
        "name_en": "Thuluth 'Imarah",
        "center": [
            19.26942005,
            41.80901001
        ]
    },
    {
        "city_id": 1572,
        "region_id": 2,
        "name_ar": "حرف مبرة",
        "name_en": "Harf Mibrah",
        "center": [
            19.12452002,
            41.78839002
        ]
    },
    {
        "city_id": 1573,
        "region_id": 2,
        "name_ar": "الفايجة",
        "name_en": "Al Fayijah",
        "center": [
            19.46865005,
            41.60035996
        ]
    },
    {
        "city_id": 1574,
        "region_id": 2,
        "name_ar": "الحمضة",
        "name_en": "Al Hamdah",
        "center": [
            19.432,
            41.61164002
        ]
    },
    {
        "city_id": 1575,
        "region_id": 2,
        "name_ar": "ناخسة",
        "name_en": "Nakhusah",
        "center": [
            19.46620006,
            41.64958994
        ]
    },
    {
        "city_id": 1576,
        "region_id": 2,
        "name_ar": "نمرة",
        "name_en": "Numarah",
        "center": [
            19.56273998,
            41.67024996
        ]
    },
    {
        "city_id": 1577,
        "region_id": 2,
        "name_ar": "القزعة",
        "name_en": "Al Qaza'ah",
        "center": [
            19.55085995,
            41.61876003
        ]
    },
    {
        "city_id": 1578,
        "region_id": 2,
        "name_ar": "الصحنة",
        "name_en": "As Sahanah",
        "center": [
            19.53280003,
            41.63603994
        ]
    },
    {
        "city_id": 1579,
        "region_id": 2,
        "name_ar": "المعقص",
        "name_en": "Al Mu'aqas",
        "center": [
            19.51207999,
            41.66851
        ]
    },
    {
        "city_id": 1580,
        "region_id": 2,
        "name_ar": "المروة",
        "name_en": "Al Marwah",
        "center": [
            19.65974005,
            41.70077001
        ]
    },
    {
        "city_id": 1581,
        "region_id": 2,
        "name_ar": "الصفي",
        "name_en": "As Sufay",
        "center": [
            19.56634999,
            41.69663003
        ]
    },
    {
        "city_id": 1582,
        "region_id": 2,
        "name_ar": "الشغز",
        "name_en": "Ash Shaghaz",
        "center": [
            19.48424996,
            41.06654005
        ]
    },
    {
        "city_id": 1583,
        "region_id": 2,
        "name_ar": "القضب",
        "name_en": "Al Qadab",
        "center": [
            19.41922001,
            41.01418996
        ]
    },
    {
        "city_id": 1584,
        "region_id": 2,
        "name_ar": "العجالين",
        "name_en": "Al 'Ajalin",
        "center": [
            19.38453003,
            40.98485995
        ]
    },
    {
        "city_id": 1585,
        "region_id": 2,
        "name_ar": "الشعب",
        "name_en": "Ash Shi'b",
        "center": [
            18.76727997,
            41.42533005
        ]
    },
    {
        "city_id": 1586,
        "region_id": 2,
        "name_ar": "الصلب",
        "name_en": "As Sulb",
        "center": [
            18.74395002,
            41.28957994
        ]
    },
    {
        "city_id": 1587,
        "region_id": 2,
        "name_ar": "الفريق",
        "name_en": "Al Fariq",
        "center": [
            18.70503333,
            41.38075
        ]
    },
    {
        "city_id": 1588,
        "region_id": 2,
        "name_ar": "السلامة",
        "name_en": "As Salamah",
        "center": [
            18.71376995,
            41.35708001
        ]
    },
    {
        "city_id": 1589,
        "region_id": 2,
        "name_ar": "الصهوة",
        "name_en": "As Sahwah",
        "center": [
            18.94825995,
            41.34599001
        ]
    },
    {
        "city_id": 1590,
        "region_id": 2,
        "name_ar": "عنيكر",
        "name_en": "'Unaykir",
        "center": [
            18.89848997,
            41.25368002
        ]
    },
    {
        "city_id": 1591,
        "region_id": 2,
        "name_ar": "الكدسة",
        "name_en": "Al Kidsah",
        "center": [
            18.96015002,
            41.21804003
        ]
    },
    {
        "city_id": 1592,
        "region_id": 2,
        "name_ar": "عجلان",
        "name_en": "Ajlan",
        "center": [
            19.01701998,
            41.22348003
        ]
    },
    {
        "city_id": 1593,
        "region_id": 2,
        "name_ar": "القحمان",
        "name_en": "Al Quhman",
        "center": [
            18.93686003,
            41.28751996
        ]
    },
    {
        "city_id": 1594,
        "region_id": 2,
        "name_ar": "العرجاء",
        "name_en": "Al 'Arja",
        "center": [
            18.93167001,
            41.22321999
        ]
    },
    {
        "city_id": 1595,
        "region_id": 2,
        "name_ar": "البريم",
        "name_en": "Al Buraym",
        "center": [
            18.91813999,
            41.20619997
        ]
    },
    {
        "city_id": 1596,
        "region_id": 2,
        "name_ar": "الفرشة",
        "name_en": "Al Farshah",
        "center": [
            19.22090995,
            41.23320006
        ]
    },
    {
        "city_id": 1597,
        "region_id": 2,
        "name_ar": "الزعاترة",
        "name_en": "Az Za'atirah",
        "center": [
            19.28490997,
            41.22756006
        ]
    },
    {
        "city_id": 1598,
        "region_id": 2,
        "name_ar": "العماير",
        "name_en": "Al 'Amayir",
        "center": [
            19.25013998,
            41.26470999
        ]
    },
    {
        "city_id": 1599,
        "region_id": 2,
        "name_ar": "السمرة",
        "name_en": "As Samrah",
        "center": [
            19.08932997,
            41.18917994
        ]
    },
    {
        "city_id": 1600,
        "region_id": 2,
        "name_ar": "شعب سامر",
        "name_en": "Sha'ib Samir",
        "center": [
            19.20216997,
            41.25055
        ]
    },
    {
        "city_id": 1601,
        "region_id": 2,
        "name_ar": "السادة",
        "name_en": "As Sadah",
        "center": [
            19.24036,
            41.34960998
        ]
    },
    {
        "city_id": 1602,
        "region_id": 2,
        "name_ar": "القحب",
        "name_en": "Al Qahb",
        "center": [
            19.26701005,
            41.39281001
        ]
    },
    {
        "city_id": 1603,
        "region_id": 2,
        "name_ar": "بلاقة",
        "name_en": "Ballaqah",
        "center": [
            19.34632002,
            41.45238998
        ]
    },
    {
        "city_id": 1604,
        "region_id": 2,
        "name_ar": "زبيد",
        "name_en": "Zubayd",
        "center": [
            19.34189001,
            41.3439
        ]
    },
    {
        "city_id": 1605,
        "region_id": 2,
        "name_ar": "مخشوش",
        "name_en": "Makhshush",
        "center": [
            18.66196001,
            41.31793006
        ]
    },
    {
        "city_id": 1606,
        "region_id": 2,
        "name_ar": "العينة",
        "name_en": "Al 'Aynah",
        "center": [
            18.73269005,
            41.46444998
        ]
    },
    {
        "city_id": 1607,
        "region_id": 2,
        "name_ar": "خبت السبت",
        "name_en": "Khabt As Sabt",
        "center": [
            18.68646994,
            41.36476002
        ]
    },
    {
        "city_id": 1608,
        "region_id": 2,
        "name_ar": "الفاهمة",
        "name_en": "Al Fahimah",
        "center": [
            18.65478005,
            41.35284001
        ]
    },
    {
        "city_id": 1609,
        "region_id": 2,
        "name_ar": "ثريبان",
        "name_en": "Thurayban",
        "center": [
            19.44767996,
            41.83567
        ]
    },
    {
        "city_id": 1610,
        "region_id": 2,
        "name_ar": "المبنى",
        "name_en": "Al Mabna",
        "center": [
            19.58220998,
            41.70396995
        ]
    },
    {
        "city_id": 1611,
        "region_id": 6,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            19.53264995,
            41.95028001
        ]
    },
    {
        "city_id": 1612,
        "region_id": 2,
        "name_ar": "الحذيفة",
        "name_en": "Al Hudhayfah",
        "center": [
            19.63872996,
            41.73560002
        ]
    },
    {
        "city_id": 1613,
        "region_id": 2,
        "name_ar": "ناخس",
        "name_en": "Nakhis",
        "center": [
            19.55564005,
            41.74661
        ]
    },
    {
        "city_id": 1614,
        "region_id": 2,
        "name_ar": "الزبيري",
        "name_en": "Az Zubayri",
        "center": [
            19.56354999,
            41.79879
        ]
    },
    {
        "city_id": 1615,
        "region_id": 2,
        "name_ar": "غراب",
        "name_en": "Ghurab",
        "center": [
            19.53804998,
            41.81138995
        ]
    },
    {
        "city_id": 1616,
        "region_id": 2,
        "name_ar": "السر",
        "name_en": "As Sirr",
        "center": [
            19.54059006,
            41.74117006
        ]
    },
    {
        "city_id": 1617,
        "region_id": 6,
        "name_ar": "آل عامر",
        "name_en": "Al 'Amir",
        "center": [
            19.56809997,
            41.88501005
        ]
    },
    {
        "city_id": 1618,
        "region_id": 2,
        "name_ar": "النبيعة",
        "name_en": "An Nubay'ah",
        "center": [
            19.40083003,
            41.79534996
        ]
    },
    {
        "city_id": 1619,
        "region_id": 2,
        "name_ar": "الحرش",
        "name_en": "Al Harsh",
        "center": [
            19.46822,
            41.73844999
        ]
    },
    {
        "city_id": 1620,
        "region_id": 2,
        "name_ar": "الحدباء",
        "name_en": "Al Hadba",
        "center": [
            19.41042004,
            41.72821005
        ]
    },
    {
        "city_id": 1621,
        "region_id": 2,
        "name_ar": "الصدرة",
        "name_en": "As Sudarah",
        "center": [
            19.35674999,
            41.71091997
        ]
    },
    {
        "city_id": 1622,
        "region_id": 6,
        "name_ar": "الهدارة",
        "name_en": "Al Haddarah",
        "center": [
            19.49366002,
            41.95479997
        ]
    },
    {
        "city_id": 1623,
        "region_id": 2,
        "name_ar": "الشرى",
        "name_en": "Ash Shara",
        "center": [
            19.38593006,
            41.86108004
        ]
    },
    {
        "city_id": 1624,
        "region_id": 2,
        "name_ar": "الأنفة",
        "name_en": "Al Anafah",
        "center": [
            19.32726002,
            41.82665998
        ]
    },
    {
        "city_id": 1625,
        "region_id": 2,
        "name_ar": "القنفذة",
        "name_en": "Al Qunfidhah",
        "center": [
            19.12722996,
            41.09060996
        ]
    },
    {
        "city_id": 1626,
        "region_id": 6,
        "name_ar": "بلقرن",
        "name_en": "Balqarn",
        "center": [
            19.59037996,
            41.88863997
        ]
    },
    {
        "city_id": 1627,
        "region_id": 6,
        "name_ar": "سبت العلاية",
        "name_en": "Sabt Al 'Alayah",
        "center": [
            19.56225002,
            41.96276006
        ]
    },
    {
        "city_id": 1628,
        "region_id": 2,
        "name_ar": "القوز",
        "name_en": "Al Qawz",
        "center": [
            18.97216994,
            41.31254998
        ]
    },
    {
        "city_id": 1629,
        "region_id": 2,
        "name_ar": "كياد",
        "name_en": "Kiyad",
        "center": [
            18.74071997,
            41.40699003
        ]
    },
    {
        "city_id": 1630,
        "region_id": 2,
        "name_ar": "الصفة",
        "name_en": "As Suffah",
        "center": [
            18.76419997,
            41.38062004
        ]
    },
    {
        "city_id": 1631,
        "region_id": 2,
        "name_ar": "المظيلف",
        "name_en": "Al Mudhaylif",
        "center": [
            19.53855005,
            41.05783001
        ]
    },
    {
        "city_id": 1632,
        "region_id": 2,
        "name_ar": "الحبيل",
        "name_en": "Al Habil",
        "center": [
            18.97018996,
            41.35424995
        ]
    },
    {
        "city_id": 1633,
        "region_id": 2,
        "name_ar": "صبياء",
        "name_en": "Sabya'",
        "center": [
            19.39237005,
            41.14380994
        ]
    },
    {
        "city_id": 1634,
        "region_id": 6,
        "name_ar": "باشوت",
        "name_en": "Bashut",
        "center": [
            19.57859994,
            41.88285001
        ]
    },
    {
        "city_id": 1635,
        "region_id": 2,
        "name_ar": "معشوقة",
        "name_en": "Ma'shuqah",
        "center": [
            19.36170996,
            41.80806995
        ]
    },
    {
        "city_id": 1636,
        "region_id": 2,
        "name_ar": "دوقة",
        "name_en": "Dawqah",
        "center": [
            19.60426004,
            40.92212995
        ]
    },
    {
        "city_id": 1637,
        "region_id": 2,
        "name_ar": "سبت شمران",
        "name_en": "Sabt Shumran",
        "center": [
            19.46542998,
            41.79382995
        ]
    },
    {
        "city_id": 1638,
        "region_id": 2,
        "name_ar": "احد بني زيد",
        "name_en": "Ahd Bani Zayd",
        "center": [
            19.18976004,
            41.20672994
        ]
    },
    {
        "city_id": 1639,
        "region_id": 2,
        "name_ar": "سبت الجارة",
        "name_en": "Sabt Al Jarah",
        "center": [
            19.28711002,
            41.42632996
        ]
    },
    {
        "city_id": 1640,
        "region_id": 6,
        "name_ar": "قدرين",
        "name_en": "Qudrayn",
        "center": [
            19.04351995,
            42.05104999
        ]
    },
    {
        "city_id": 1641,
        "region_id": 6,
        "name_ar": "آل سفيان",
        "name_en": "Al Sufyan",
        "center": [
            19.04463002,
            41.93761999
        ]
    },
    {
        "city_id": 1642,
        "region_id": 6,
        "name_ar": "البدلة",
        "name_en": "Al Badlah",
        "center": [
            19.18574999,
            41.95106996
        ]
    },
    {
        "city_id": 1643,
        "region_id": 6,
        "name_ar": "مملح",
        "name_en": "Mamlah",
        "center": [
            19.15745002,
            41.88389996
        ]
    },
    {
        "city_id": 1644,
        "region_id": 6,
        "name_ar": "آل جودة",
        "name_en": "Al Jawdah",
        "center": [
            19.13283998,
            41.94279004
        ]
    },
    {
        "city_id": 1645,
        "region_id": 6,
        "name_ar": "بني زهير",
        "name_en": "Bani Zuhayr",
        "center": [
            19.13525003,
            41.98600997
        ]
    },
    {
        "city_id": 1646,
        "region_id": 6,
        "name_ar": "الحدباء",
        "name_en": "Al Hadba",
        "center": [
            19.11425996,
            41.98409999
        ]
    },
    {
        "city_id": 1647,
        "region_id": 6,
        "name_ar": "آل إثيبة",
        "name_en": "Al Ithibah",
        "center": [
            19.07746002,
            42.00234994
        ]
    },
    {
        "city_id": 1648,
        "region_id": 6,
        "name_ar": "تلاء",
        "name_en": "Tala",
        "center": [
            19.23446,
            42.02317997
        ]
    },
    {
        "city_id": 1649,
        "region_id": 6,
        "name_ar": "القيسة",
        "name_en": "Al Qaysah",
        "center": [
            19.25400005,
            42.00610996
        ]
    },
    {
        "city_id": 1650,
        "region_id": 6,
        "name_ar": "آل فارس",
        "name_en": "Al Faris",
        "center": [
            19.18953006,
            42.02967005
        ]
    },
    {
        "city_id": 1651,
        "region_id": 6,
        "name_ar": "الذفراء",
        "name_en": "Adh Dhafra",
        "center": [
            19.26215997,
            41.93909005
        ]
    },
    {
        "city_id": 1652,
        "region_id": 6,
        "name_ar": "بطحة",
        "name_en": "Bathah",
        "center": [
            19.15367994,
            41.99652999
        ]
    },
    {
        "city_id": 1653,
        "region_id": 6,
        "name_ar": "بني قيس",
        "name_en": "Bani Qays",
        "center": [
            19.13206999,
            42.03262005
        ]
    },
    {
        "city_id": 1654,
        "region_id": 6,
        "name_ar": "القضوى",
        "name_en": "Al Qadwa",
        "center": [
            18.70694995,
            42.56326998
        ]
    },
    {
        "city_id": 1655,
        "region_id": 6,
        "name_ar": "الحميطة",
        "name_en": "Al Humayyitah",
        "center": [
            18.69484002,
            42.60959998
        ]
    },
    {
        "city_id": 1656,
        "region_id": 6,
        "name_ar": "الرشداء",
        "name_en": "Ar Rashda",
        "center": [
            18.58774997,
            42.71710002
        ]
    },
    {
        "city_id": 1657,
        "region_id": 6,
        "name_ar": "لبوة",
        "name_en": "Labwah",
        "center": [
            18.57827997,
            42.70814006
        ]
    },
    {
        "city_id": 1658,
        "region_id": 6,
        "name_ar": "آل حضينان",
        "name_en": "Al Hidaynan",
        "center": [
            18.688,
            42.72308999
        ]
    },
    {
        "city_id": 1659,
        "region_id": 6,
        "name_ar": "المجرا",
        "name_en": "Al Mujra",
        "center": [
            18.70797994,
            42.69489003
        ]
    },
    {
        "city_id": 1660,
        "region_id": 6,
        "name_ar": "الخرب",
        "name_en": "Al Kharb",
        "center": [
            18.71988001,
            42.68891996
        ]
    },
    {
        "city_id": 1661,
        "region_id": 6,
        "name_ar": "آل صقر",
        "name_en": "Al Saqr",
        "center": [
            18.73399996,
            42.68339
        ]
    },
    {
        "city_id": 1662,
        "region_id": 6,
        "name_ar": "جليلة",
        "name_en": "Jilayyilah",
        "center": [
            18.70515006,
            42.62817005
        ]
    },
    {
        "city_id": 1663,
        "region_id": 6,
        "name_ar": "طعمة",
        "name_en": "Ti'mah",
        "center": [
            18.82737,
            42.6337
        ]
    },
    {
        "city_id": 1664,
        "region_id": 6,
        "name_ar": "المعاملة",
        "name_en": "Al Mu'amalah",
        "center": [
            18.85200996,
            42.61930995
        ]
    },
    {
        "city_id": 1665,
        "region_id": 6,
        "name_ar": "الحيمة",
        "name_en": "Al Haymah",
        "center": [
            18.71979995,
            42.57314
        ]
    },
    {
        "city_id": 1666,
        "region_id": 6,
        "name_ar": "البطنة",
        "name_en": "Al Batnah",
        "center": [
            18.85965001,
            42.63361005
        ]
    },
    {
        "city_id": 1667,
        "region_id": 6,
        "name_ar": "بيش",
        "name_en": "Bish",
        "center": [
            18.88462999,
            42.61248
        ]
    },
    {
        "city_id": 1668,
        "region_id": 6,
        "name_ar": "الحيفة",
        "name_en": "Al Hifah",
        "center": [
            18.57052996,
            42.63868997
        ]
    },
    {
        "city_id": 1669,
        "region_id": 6,
        "name_ar": "الطريف الأعلى",
        "name_en": "At Turayf Al A'la",
        "center": [
            18.59532004,
            42.66322
        ]
    },
    {
        "city_id": 1670,
        "region_id": 6,
        "name_ar": "المضة",
        "name_en": "Al Maddah",
        "center": [
            18.57430004,
            42.66042001
        ]
    },
    {
        "city_id": 1671,
        "region_id": 6,
        "name_ar": "عرقة",
        "name_en": "'Irqah",
        "center": [
            18.96967004,
            43.41920003
        ]
    },
    {
        "city_id": 1672,
        "region_id": 6,
        "name_ar": "ثفرة",
        "name_en": "Thafrah",
        "center": [
            18.96278998,
            43.43181005
        ]
    },
    {
        "city_id": 1673,
        "region_id": 6,
        "name_ar": "فرعة قواء",
        "name_en": "Far'at Quwa",
        "center": [
            18.70876995,
            43.18228001
        ]
    },
    {
        "city_id": 1674,
        "region_id": 6,
        "name_ar": "البرقاء",
        "name_en": "Al Barqa",
        "center": [
            18.76109,
            43.19216006
        ]
    },
    {
        "city_id": 1675,
        "region_id": 6,
        "name_ar": "فرسان",
        "name_en": "Farasan",
        "center": [
            18.82598996,
            43.23406998
        ]
    },
    {
        "city_id": 1676,
        "region_id": 6,
        "name_ar": "لسس",
        "name_en": "Lasas",
        "center": [
            18.75457999,
            43.35706
        ]
    },
    {
        "city_id": 1677,
        "region_id": 6,
        "name_ar": "القوز",
        "name_en": "Al Qawz",
        "center": [
            18.99558003,
            42.90493006
        ]
    },
    {
        "city_id": 1678,
        "region_id": 6,
        "name_ar": "الصفا الملبد",
        "name_en": "As Safa Al Mulabad",
        "center": [
            18.98254001,
            42.90066004
        ]
    },
    {
        "city_id": 1679,
        "region_id": 6,
        "name_ar": "الثعيلبة",
        "name_en": "Ath Thu'aylibah",
        "center": [
            18.95246998,
            42.90113006
        ]
    },
    {
        "city_id": 1680,
        "region_id": 6,
        "name_ar": "الطلحة",
        "name_en": "At Talhah",
        "center": [
            18.97015005,
            42.90022004
        ]
    },
    {
        "city_id": 1681,
        "region_id": 6,
        "name_ar": "بادية",
        "name_en": "Badiyah",
        "center": [
            18.91095002,
            42.88452997
        ]
    },
    {
        "city_id": 1682,
        "region_id": 6,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            19.03024003,
            42.91347004
        ]
    },
    {
        "city_id": 1683,
        "region_id": 6,
        "name_ar": "البغث",
        "name_en": "Al Baghath",
        "center": [
            19.05843999,
            42.90962005
        ]
    },
    {
        "city_id": 1684,
        "region_id": 6,
        "name_ar": "المريفق",
        "name_en": "Al Murayfiq",
        "center": [
            19.07503001,
            42.92259998
        ]
    },
    {
        "city_id": 1685,
        "region_id": 6,
        "name_ar": "الحرفين",
        "name_en": "Al Harfayn",
        "center": [
            19.06478004,
            42.96322997
        ]
    },
    {
        "city_id": 1686,
        "region_id": 6,
        "name_ar": "القضة",
        "name_en": "Al Qaddah",
        "center": [
            18.88999004,
            42.89407005
        ]
    },
    {
        "city_id": 1687,
        "region_id": 6,
        "name_ar": "الحامض",
        "name_en": "Al Hamid",
        "center": [
            18.87434998,
            42.89711003
        ]
    },
    {
        "city_id": 1688,
        "region_id": 6,
        "name_ar": "الطلاح",
        "name_en": "At Tilah",
        "center": [
            18.84893996,
            42.88981998
        ]
    },
    {
        "city_id": 1689,
        "region_id": 6,
        "name_ar": "واسط",
        "name_en": "Wasit",
        "center": [
            18.82135003,
            42.88689004
        ]
    },
    {
        "city_id": 1690,
        "region_id": 6,
        "name_ar": "خشم شاع",
        "name_en": "Khashm Sha'",
        "center": [
            18.77000006,
            42.89826999
        ]
    },
    {
        "city_id": 1691,
        "region_id": 6,
        "name_ar": "الخضاير",
        "name_en": "Al Khadayir",
        "center": [
            18.79908998,
            42.94587999
        ]
    },
    {
        "city_id": 1692,
        "region_id": 6,
        "name_ar": "مشحذ",
        "name_en": "Mashhidh",
        "center": [
            18.75817001,
            42.97341998
        ]
    },
    {
        "city_id": 1693,
        "region_id": 6,
        "name_ar": "بريم السليل",
        "name_en": "Buraym As Silil",
        "center": [
            18.73502997,
            42.84404002
        ]
    },
    {
        "city_id": 1694,
        "region_id": 6,
        "name_ar": "البردان",
        "name_en": "Al Burdan",
        "center": [
            18.72241003,
            42.89324999
        ]
    },
    {
        "city_id": 1695,
        "region_id": 6,
        "name_ar": "رغوة",
        "name_en": "Raghwah",
        "center": [
            18.70746004,
            42.90309001
        ]
    },
    {
        "city_id": 1696,
        "region_id": 6,
        "name_ar": "آل سعيد",
        "name_en": "Al Sa'id",
        "center": [
            18.70922997,
            42.96695006
        ]
    },
    {
        "city_id": 1697,
        "region_id": 6,
        "name_ar": "الغول",
        "name_en": "Al Ghawl",
        "center": [
            18.69162999,
            42.97826999
        ]
    },
    {
        "city_id": 1698,
        "region_id": 6,
        "name_ar": "آل الهايلة",
        "name_en": "Al Al Hayilah",
        "center": [
            18.69850996,
            42.96183005
        ]
    },
    {
        "city_id": 1699,
        "region_id": 6,
        "name_ar": "آل جرمان",
        "name_en": "Al Jarman",
        "center": [
            18.66872999,
            42.95987998
        ]
    },
    {
        "city_id": 1700,
        "region_id": 6,
        "name_ar": "عرقة",
        "name_en": "'Irqah",
        "center": [
            18.65381996,
            42.91016997
        ]
    },
    {
        "city_id": 1701,
        "region_id": 6,
        "name_ar": "الحواويش",
        "name_en": "Al Hawawish",
        "center": [
            18.65452005,
            42.96009006
        ]
    },
    {
        "city_id": 1702,
        "region_id": 6,
        "name_ar": "المري",
        "name_en": "Al Marri",
        "center": [
            18.61422003,
            42.97894005
        ]
    },
    {
        "city_id": 1703,
        "region_id": 6,
        "name_ar": "آل شويل",
        "name_en": "Al Shuwayl",
        "center": [
            18.58854997,
            42.95292998
        ]
    },
    {
        "city_id": 1704,
        "region_id": 6,
        "name_ar": "كدمان",
        "name_en": "Kidman",
        "center": [
            18.57300006,
            42.95221
        ]
    },
    {
        "city_id": 1705,
        "region_id": 6,
        "name_ar": "الصفية",
        "name_en": "As Sufayyah",
        "center": [
            18.59361001,
            42.90198003
        ]
    },
    {
        "city_id": 1706,
        "region_id": 6,
        "name_ar": "إبن نجم",
        "name_en": "Ibn Nijam",
        "center": [
            18.60295003,
            42.90278998
        ]
    },
    {
        "city_id": 1707,
        "region_id": 6,
        "name_ar": "المثناة",
        "name_en": "Al Mathnah",
        "center": [
            18.61844999,
            42.90062997
        ]
    },
    {
        "city_id": 1708,
        "region_id": 5,
        "name_ar": "هدباء",
        "name_en": "Hadba'",
        "center": [
            28.75697998,
            47.57292994
        ]
    },
    {
        "city_id": 1709,
        "region_id": 6,
        "name_ar": "وادي ابن هشبل",
        "name_en": "Wadi Ibn Hashbal",
        "center": [
            18.61880003,
            42.68408
        ]
    },
    {
        "city_id": 1710,
        "region_id": 6,
        "name_ar": "ال بي ثور",
        "name_en": "Al Bi Thawr",
        "center": [
            18.60263995,
            42.69648005
        ]
    },
    {
        "city_id": 1711,
        "region_id": 6,
        "name_ar": "السلع",
        "name_en": "As Sila",
        "center": [
            18.87727002,
            43.27771004
        ]
    },
    {
        "city_id": 1712,
        "region_id": 6,
        "name_ar": "المضة",
        "name_en": "Al Maddah",
        "center": [
            18.83227001,
            43.25264995
        ]
    },
    {
        "city_id": 1713,
        "region_id": 6,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            18.74328997,
            43.19190998
        ]
    },
    {
        "city_id": 1714,
        "region_id": 6,
        "name_ar": "خيبر الجنوب",
        "name_en": "Khaybar Al Janub",
        "center": [
            18.79591005,
            42.87761
        ]
    },
    {
        "city_id": 1715,
        "region_id": 6,
        "name_ar": "الحثدة",
        "name_en": "Al Hithadah",
        "center": [
            18.89237006,
            42.63260996
        ]
    },
    {
        "city_id": 1716,
        "region_id": 6,
        "name_ar": "الباعق",
        "name_en": "Al Ba'iq",
        "center": [
            18.23449997,
            41.93435003
        ]
    },
    {
        "city_id": 1717,
        "region_id": 6,
        "name_ar": "العرض",
        "name_en": "Al 'Ard",
        "center": [
            18.27324994,
            41.92384995
        ]
    },
    {
        "city_id": 1718,
        "region_id": 6,
        "name_ar": "أم ضحي",
        "name_en": "Umm Dahi",
        "center": [
            18.27931998,
            41.98046
        ]
    },
    {
        "city_id": 1719,
        "region_id": 6,
        "name_ar": "آل ثوبان",
        "name_en": "Al Thawban",
        "center": [
            18.30263995,
            41.98384998
        ]
    },
    {
        "city_id": 1720,
        "region_id": 6,
        "name_ar": "الحيلة",
        "name_en": "Al Haylah",
        "center": [
            18.36297997,
            41.90630998
        ]
    },
    {
        "city_id": 1721,
        "region_id": 6,
        "name_ar": "مراتخ",
        "name_en": "Muratikh",
        "center": [
            18.39499003,
            41.91088
        ]
    },
    {
        "city_id": 1722,
        "region_id": 6,
        "name_ar": "أم ظهور الرفود",
        "name_en": "Umm Dhuhur Ar Rafud",
        "center": [
            18.44151,
            41.96033999
        ]
    },
    {
        "city_id": 1723,
        "region_id": 6,
        "name_ar": "مجزوعة",
        "name_en": "Majzu'ah",
        "center": [
            18.44951005,
            41.91018996
        ]
    },
    {
        "city_id": 1724,
        "region_id": 6,
        "name_ar": "القرونة",
        "name_en": "Al Qurunah",
        "center": [
            18.54819003,
            41.99088003
        ]
    },
    {
        "city_id": 1725,
        "region_id": 6,
        "name_ar": "الريع",
        "name_en": "Ar Ri'",
        "center": [
            18.57042996,
            41.97891996
        ]
    },
    {
        "city_id": 1726,
        "region_id": 6,
        "name_ar": "قنيفد",
        "name_en": "Qinayfid",
        "center": [
            18.59622996,
            41.96380997
        ]
    },
    {
        "city_id": 1727,
        "region_id": 6,
        "name_ar": "المربع",
        "name_en": "Al Murabba'",
        "center": [
            18.70616995,
            41.98646997
        ]
    },
    {
        "city_id": 1728,
        "region_id": 6,
        "name_ar": "الفاهمة",
        "name_en": "Al Fahimah",
        "center": [
            18.60526002,
            42.03801995
        ]
    },
    {
        "city_id": 1729,
        "region_id": 6,
        "name_ar": "آل محصن",
        "name_en": "Al Muhsun",
        "center": [
            18.60639996,
            42.07493
        ]
    },
    {
        "city_id": 1730,
        "region_id": 6,
        "name_ar": "النصب",
        "name_en": "An Nusub",
        "center": [
            18.63303005,
            42.02378004
        ]
    },
    {
        "city_id": 1731,
        "region_id": 6,
        "name_ar": "المسلم",
        "name_en": "Al Muslim",
        "center": [
            18.63199996,
            42.07349003
        ]
    },
    {
        "city_id": 1732,
        "region_id": 6,
        "name_ar": "الريش",
        "name_en": "Ar Raysh",
        "center": [
            18.62556995,
            42.09825997
        ]
    },
    {
        "city_id": 1733,
        "region_id": 6,
        "name_ar": "الحاجب",
        "name_en": "Al Hajib",
        "center": [
            18.60185002,
            42.11196003
        ]
    },
    {
        "city_id": 1734,
        "region_id": 6,
        "name_ar": "آل علين",
        "name_en": "Al 'Illin",
        "center": [
            18.65335001,
            42.12536003
        ]
    },
    {
        "city_id": 1735,
        "region_id": 6,
        "name_ar": "الحضن",
        "name_en": "Al Hadan",
        "center": [
            18.67946995,
            42.06850003
        ]
    },
    {
        "city_id": 1736,
        "region_id": 6,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            18.66638997,
            41.98388995
        ]
    },
    {
        "city_id": 1737,
        "region_id": 6,
        "name_ar": "المكثر",
        "name_en": "Al Mukaththir",
        "center": [
            18.62663997,
            42.17233996
        ]
    },
    {
        "city_id": 1738,
        "region_id": 6,
        "name_ar": "البارك",
        "name_en": "Al Barik",
        "center": [
            18.58495002,
            42.15210005
        ]
    },
    {
        "city_id": 1739,
        "region_id": 6,
        "name_ar": "المغمر",
        "name_en": "Al Maghmar",
        "center": [
            18.59930003,
            42.20604006
        ]
    },
    {
        "city_id": 1740,
        "region_id": 6,
        "name_ar": "العيدة",
        "name_en": "Al 'Idah",
        "center": [
            18.52892,
            42.17056001
        ]
    },
    {
        "city_id": 1741,
        "region_id": 6,
        "name_ar": "الحجف",
        "name_en": "Al Hajf",
        "center": [
            18.51842001,
            42.01463
        ]
    },
    {
        "city_id": 1742,
        "region_id": 6,
        "name_ar": "المقاعد",
        "name_en": "Al Maqa'id",
        "center": [
            18.51738995,
            42.09668
        ]
    },
    {
        "city_id": 1743,
        "region_id": 6,
        "name_ar": "شعب دريب",
        "name_en": "Shi'b Durayb",
        "center": [
            18.49244004,
            42.11448995
        ]
    },
    {
        "city_id": 1744,
        "region_id": 6,
        "name_ar": "الكديد",
        "name_en": "Al Kadid",
        "center": [
            18.41400001,
            42.06156996
        ]
    },
    {
        "city_id": 1745,
        "region_id": 6,
        "name_ar": "السحر",
        "name_en": "As Sahar",
        "center": [
            18.41823001,
            42.11852994
        ]
    },
    {
        "city_id": 1746,
        "region_id": 6,
        "name_ar": "إبن عبيدي",
        "name_en": "Ibn 'Abidi",
        "center": [
            18.40178004,
            42.11696001
        ]
    },
    {
        "city_id": 1747,
        "region_id": 6,
        "name_ar": "الجبهة",
        "name_en": "Al Jabhah",
        "center": [
            18.35908997,
            42.06804
        ]
    },
    {
        "city_id": 1748,
        "region_id": 6,
        "name_ar": "الحرة",
        "name_en": "Al Harrah",
        "center": [
            18.35968002,
            42.00908998
        ]
    },
    {
        "city_id": 1749,
        "region_id": 6,
        "name_ar": "معصم",
        "name_en": "Ma'sam",
        "center": [
            18.33216996,
            42.00969997
        ]
    },
    {
        "city_id": 1750,
        "region_id": 6,
        "name_ar": "الحدبات",
        "name_en": "Al Hadabat",
        "center": [
            18.29973002,
            42.00755004
        ]
    },
    {
        "city_id": 1751,
        "region_id": 6,
        "name_ar": "المعشور",
        "name_en": "Al Ma'shur",
        "center": [
            18.28303995,
            42.01653998
        ]
    },
    {
        "city_id": 1752,
        "region_id": 6,
        "name_ar": "المسلمة",
        "name_en": "Al Maslamah",
        "center": [
            18.43245,
            42.16122997
        ]
    },
    {
        "city_id": 1753,
        "region_id": 6,
        "name_ar": "بين الجبلين",
        "name_en": "Bayn Al Jablayn",
        "center": [
            18.25532998,
            41.99296006
        ]
    },
    {
        "city_id": 1754,
        "region_id": 6,
        "name_ar": "الحشف",
        "name_en": "Al Hashaf",
        "center": [
            18.52573995,
            41.88646999
        ]
    },
    {
        "city_id": 1755,
        "region_id": 6,
        "name_ar": "ريمان",
        "name_en": "Rayman",
        "center": [
            18.25260995,
            42.00381
        ]
    },
    {
        "city_id": 1756,
        "region_id": 6,
        "name_ar": "الخليف",
        "name_en": "Al Khalif",
        "center": [
            18.14334997,
            41.92396
        ]
    },
    {
        "city_id": 1757,
        "region_id": 6,
        "name_ar": "الراحة",
        "name_en": "Ar Rahah",
        "center": [
            18.2107,
            41.94521003
        ]
    },
    {
        "city_id": 1758,
        "region_id": 6,
        "name_ar": "العفارة",
        "name_en": "Al 'Afarah",
        "center": [
            18.21353995,
            42.00324996
        ]
    },
    {
        "city_id": 1759,
        "region_id": 6,
        "name_ar": "البجيلي",
        "name_en": "Al Bajili",
        "center": [
            18.19764003,
            42.00647003
        ]
    },
    {
        "city_id": 1760,
        "region_id": 6,
        "name_ar": "العقل",
        "name_en": "Al 'Aql",
        "center": [
            18.13774996,
            42.10658004
        ]
    },
    {
        "city_id": 1761,
        "region_id": 6,
        "name_ar": "المجمعة",
        "name_en": "Al Majma'ah",
        "center": [
            18.15275996,
            42.07120994
        ]
    },
    {
        "city_id": 1762,
        "region_id": 6,
        "name_ar": "سيال",
        "name_en": "Sayyal",
        "center": [
            18.17831001,
            42.05279005
        ]
    },
    {
        "city_id": 1763,
        "region_id": 6,
        "name_ar": "آل معلوي",
        "name_en": "Al Ma'lawi",
        "center": [
            18.63892999,
            42.24352006
        ]
    },
    {
        "city_id": 1764,
        "region_id": 6,
        "name_ar": "الخطيم",
        "name_en": "Al Khutaym",
        "center": [
            18.65694,
            42.18510004
        ]
    },
    {
        "city_id": 1765,
        "region_id": 6,
        "name_ar": "الفي",
        "name_en": "Al Fayy",
        "center": [
            18.72893996,
            42.12286998
        ]
    },
    {
        "city_id": 1766,
        "region_id": 6,
        "name_ar": "الجردان",
        "name_en": "Al Jardan",
        "center": [
            18.69951003,
            42.15693
        ]
    },
    {
        "city_id": 1767,
        "region_id": 6,
        "name_ar": "خارف",
        "name_en": "Kharif",
        "center": [
            18.71658004,
            42.22037005
        ]
    },
    {
        "city_id": 1768,
        "region_id": 6,
        "name_ar": "الشرف",
        "name_en": "Ash Sharaf",
        "center": [
            18.73914006,
            42.14508995
        ]
    },
    {
        "city_id": 1769,
        "region_id": 6,
        "name_ar": "سارة",
        "name_en": "Sarah",
        "center": [
            18.37224005,
            42.20074005
        ]
    },
    {
        "city_id": 1770,
        "region_id": 6,
        "name_ar": "سقامة",
        "name_en": "Siqamah",
        "center": [
            18.40505005,
            42.19910005
        ]
    },
    {
        "city_id": 1771,
        "region_id": 6,
        "name_ar": "الخبارة",
        "name_en": "Al Khabarah",
        "center": [
            18.42054003,
            42.21988003
        ]
    },
    {
        "city_id": 1772,
        "region_id": 2,
        "name_ar": "غديقة",
        "name_en": "Ghudayqah",
        "center": [
            21.07342004,
            40.69810002
        ]
    },
    {
        "city_id": 1773,
        "region_id": 2,
        "name_ar": "الخرجة",
        "name_en": "Al Kharjah",
        "center": [
            21.08399998,
            40.72520995
        ]
    },
    {
        "city_id": 1774,
        "region_id": 2,
        "name_ar": "الدبانية",
        "name_en": "Ad Dubaniyah",
        "center": [
            20.99125001,
            40.74151997
        ]
    },
    {
        "city_id": 1775,
        "region_id": 2,
        "name_ar": "الصبخة",
        "name_en": "As Sabkhah",
        "center": [
            20.95465002,
            40.82872003
        ]
    },
    {
        "city_id": 1776,
        "region_id": 2,
        "name_ar": "صعبة",
        "name_en": "Sa'bah",
        "center": [
            20.99566001,
            40.84887004
        ]
    },
    {
        "city_id": 1777,
        "region_id": 2,
        "name_ar": "صور بن شكوان",
        "name_en": "Sur Bin Shakwan",
        "center": [
            20.92625001,
            40.80085002
        ]
    },
    {
        "city_id": 1778,
        "region_id": 2,
        "name_ar": "الخشاشة",
        "name_en": "Al Khashashah",
        "center": [
            20.90913005,
            40.78700996
        ]
    },
    {
        "city_id": 1779,
        "region_id": 2,
        "name_ar": "العوصاء",
        "name_en": "Al 'Awsa",
        "center": [
            20.90897996,
            40.85159002
        ]
    },
    {
        "city_id": 1780,
        "region_id": 2,
        "name_ar": "الخشة",
        "name_en": "Al Khashah",
        "center": [
            20.90801,
            40.72585003
        ]
    },
    {
        "city_id": 1781,
        "region_id": 2,
        "name_ar": "لغب",
        "name_en": "Laghab",
        "center": [
            20.85886002,
            40.79017999
        ]
    },
    {
        "city_id": 1782,
        "region_id": 2,
        "name_ar": "الرحى",
        "name_en": "Ar Raha",
        "center": [
            20.87555999,
            40.80861006
        ]
    },
    {
        "city_id": 1783,
        "region_id": 2,
        "name_ar": "حريزة",
        "name_en": "Harizah",
        "center": [
            20.79651997,
            40.77565003
        ]
    },
    {
        "city_id": 1784,
        "region_id": 2,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            20.79955004,
            40.76454994
        ]
    },
    {
        "city_id": 1785,
        "region_id": 2,
        "name_ar": "الحورة",
        "name_en": "Al Hawrah",
        "center": [
            20.81848995,
            40.71439005
        ]
    },
    {
        "city_id": 1786,
        "region_id": 2,
        "name_ar": "رضوان",
        "name_en": "Radwan",
        "center": [
            22.09263001,
            41.27284997
        ]
    },
    {
        "city_id": 1787,
        "region_id": 6,
        "name_ar": "حبث",
        "name_en": "Habath",
        "center": [
            18.43693006,
            42.21808995
        ]
    },
    {
        "city_id": 1788,
        "region_id": 6,
        "name_ar": "آل ناهية",
        "name_en": "Al Nahiyah",
        "center": [
            18.49782005,
            42.34250996
        ]
    },
    {
        "city_id": 1789,
        "region_id": 6,
        "name_ar": "آل الذيب",
        "name_en": "Al Adh Dhib",
        "center": [
            18.48253999,
            42.38165996
        ]
    },
    {
        "city_id": 1790,
        "region_id": 6,
        "name_ar": "فتاح",
        "name_en": "Futah",
        "center": [
            18.43578001,
            42.44919998
        ]
    },
    {
        "city_id": 1791,
        "region_id": 6,
        "name_ar": "مسلت",
        "name_en": "Maslat",
        "center": [
            18.40507005,
            42.48591997
        ]
    },
    {
        "city_id": 1792,
        "region_id": 6,
        "name_ar": "آل شدادي",
        "name_en": "Al Shaddadi",
        "center": [
            18.33431004,
            42.33327999
        ]
    },
    {
        "city_id": 1793,
        "region_id": 6,
        "name_ar": "آل عاصمي",
        "name_en": "Al 'Asimi",
        "center": [
            18.35267005,
            42.31854
        ]
    },
    {
        "city_id": 1794,
        "region_id": 6,
        "name_ar": "ذي حصيمو",
        "name_en": "Dhi Husaymu",
        "center": [
            18.34245996,
            42.24591997
        ]
    },
    {
        "city_id": 1795,
        "region_id": 6,
        "name_ar": "وسانب",
        "name_en": "Wusanib",
        "center": [
            18.35460002,
            42.25430004
        ]
    },
    {
        "city_id": 1796,
        "region_id": 6,
        "name_ar": "الزهراء",
        "name_en": "Az Zaha",
        "center": [
            18.41363999,
            42.34750003
        ]
    },
    {
        "city_id": 1797,
        "region_id": 6,
        "name_ar": "المسقوي",
        "name_en": "Al Masqawi",
        "center": [
            18.39388999,
            42.34116001
        ]
    },
    {
        "city_id": 1798,
        "region_id": 6,
        "name_ar": "هدة",
        "name_en": "Hidah",
        "center": [
            18.40016996,
            42.25167999
        ]
    },
    {
        "city_id": 1799,
        "region_id": 6,
        "name_ar": "الغال",
        "name_en": "Al Ghal",
        "center": [
            18.40949994,
            42.41206004
        ]
    },
    {
        "city_id": 1800,
        "region_id": 6,
        "name_ar": "خميس مطير",
        "name_en": "Khamis Mutair",
        "center": [
            18.70002996,
            42.10808003
        ]
    },
    {
        "city_id": 1801,
        "region_id": 6,
        "name_ar": "محايل",
        "name_en": "Muhayil",
        "center": [
            18.54434004,
            42.04321
        ]
    },
    {
        "city_id": 1802,
        "region_id": 6,
        "name_ar": "قنا البحر",
        "name_en": "Qana Al Bahr",
        "center": [
            18.34138997,
            41.99183997
        ]
    },
    {
        "city_id": 1803,
        "region_id": 6,
        "name_ar": "خميس البحر",
        "name_en": "Khamis Al Bahr",
        "center": [
            18.33563006,
            41.91318998
        ]
    },
    {
        "city_id": 1804,
        "region_id": 6,
        "name_ar": "قشيعة",
        "name_en": "Qushay'ah",
        "center": [
            18.34141004,
            41.98772003
        ]
    },
    {
        "city_id": 1805,
        "region_id": 6,
        "name_ar": "دالج",
        "name_en": "Dalaj",
        "center": [
            18.36854004,
            42.11958997
        ]
    },
    {
        "city_id": 1806,
        "region_id": 6,
        "name_ar": "شط إبن جازعة",
        "name_en": "Shatt Ibn Jazi'ah",
        "center": [
            18.35177998,
            42.14822002
        ]
    },
    {
        "city_id": 1807,
        "region_id": 6,
        "name_ar": "منقش",
        "name_en": "Manqash",
        "center": [
            18.34228998,
            42.18531002
        ]
    },
    {
        "city_id": 1808,
        "region_id": 6,
        "name_ar": "الدماغ",
        "name_en": "Ad Dimagh",
        "center": [
            18.25961998,
            42.11089998
        ]
    },
    {
        "city_id": 1809,
        "region_id": 6,
        "name_ar": "ثلوث ريم",
        "name_en": "Thuluth Rim",
        "center": [
            18.22697994,
            42.16617998
        ]
    },
    {
        "city_id": 1810,
        "region_id": 6,
        "name_ar": "الحضن",
        "name_en": "Al Hadan",
        "center": [
            18.28825001,
            42.12179005
        ]
    },
    {
        "city_id": 1811,
        "region_id": 6,
        "name_ar": "الضاجع",
        "name_en": "Ad Daji'",
        "center": [
            18.31617999,
            42.09771999
        ]
    },
    {
        "city_id": 1812,
        "region_id": 6,
        "name_ar": "الرصعة",
        "name_en": "Ar Ras'ah",
        "center": [
            18.26055994,
            42.28206002
        ]
    },
    {
        "city_id": 1813,
        "region_id": 6,
        "name_ar": "سنومة",
        "name_en": "Sanumah",
        "center": [
            18.28625001,
            42.27913999
        ]
    },
    {
        "city_id": 1814,
        "region_id": 6,
        "name_ar": "الجرف",
        "name_en": "Al Jarf",
        "center": [
            18.27726962,
            42.23762112
        ]
    },
    {
        "city_id": 1815,
        "region_id": 6,
        "name_ar": "السرو",
        "name_en": "As Sarw",
        "center": [
            18.27641996,
            42.20415005
        ]
    },
    {
        "city_id": 1816,
        "region_id": 6,
        "name_ar": "العشة",
        "name_en": "Al Ashah",
        "center": [
            18.26122002,
            42.19824005
        ]
    },
    {
        "city_id": 1817,
        "region_id": 6,
        "name_ar": "آل مجم",
        "name_en": "Al Majam",
        "center": [
            18.23272,
            42.22230999
        ]
    },
    {
        "city_id": 1818,
        "region_id": 6,
        "name_ar": "الحصون",
        "name_en": "Al Husun",
        "center": [
            18.18498999,
            42.163
        ]
    },
    {
        "city_id": 1819,
        "region_id": 6,
        "name_ar": "القارية",
        "name_en": "Al Qariyah",
        "center": [
            18.24422999,
            42.26804004
        ]
    },
    {
        "city_id": 1820,
        "region_id": 6,
        "name_ar": "الذروة",
        "name_en": "Adh Dhurwah",
        "center": [
            18.23764006,
            42.32034995
        ]
    },
    {
        "city_id": 1821,
        "region_id": 6,
        "name_ar": "الشعبين",
        "name_en": "Ash Shi'bayn",
        "center": [
            18.21858006,
            42.29727996
        ]
    },
    {
        "city_id": 1822,
        "region_id": 6,
        "name_ar": "آل عيسى",
        "name_en": "Al 'Isa",
        "center": [
            18.19330998,
            42.32267006
        ]
    },
    {
        "city_id": 1823,
        "region_id": 6,
        "name_ar": "مرجومة",
        "name_en": "Marjumah",
        "center": [
            18.08993,
            42.37207
        ]
    },
    {
        "city_id": 1824,
        "region_id": 6,
        "name_ar": "بيغ",
        "name_en": "Bayyagh",
        "center": [
            18.16820996,
            42.23703996
        ]
    },
    {
        "city_id": 1825,
        "region_id": 6,
        "name_ar": "الجزوة",
        "name_en": "Al Jazwah",
        "center": [
            18.17226998,
            42.26471001
        ]
    },
    {
        "city_id": 1826,
        "region_id": 6,
        "name_ar": "فقوة",
        "name_en": "Faqwah",
        "center": [
            18.20077998,
            42.19999002
        ]
    },
    {
        "city_id": 1827,
        "region_id": 6,
        "name_ar": "آل متعالي",
        "name_en": "Al Mut'ali",
        "center": [
            18.17190004,
            42.31640005
        ]
    },
    {
        "city_id": 1828,
        "region_id": 6,
        "name_ar": "دبلاء",
        "name_en": "Dabla",
        "center": [
            18.12990998,
            42.32583997
        ]
    },
    {
        "city_id": 1829,
        "region_id": 6,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            18.32094995,
            42.22636006
        ]
    },
    {
        "city_id": 1830,
        "region_id": 6,
        "name_ar": "كلمة",
        "name_en": "Kalmah",
        "center": [
            18.27428001,
            42.32822997
        ]
    },
    {
        "city_id": 1831,
        "region_id": 6,
        "name_ar": "آل مصم",
        "name_en": "Al Masam",
        "center": [
            18.26594003,
            42.30877005
        ]
    },
    {
        "city_id": 1832,
        "region_id": 6,
        "name_ar": "يسراة",
        "name_en": "Yasrah",
        "center": [
            18.31817004,
            42.27612003
        ]
    },
    {
        "city_id": 1833,
        "region_id": 6,
        "name_ar": "الأثل",
        "name_en": "Al Athl",
        "center": [
            18.16092002,
            42.15728995
        ]
    },
    {
        "city_id": 1834,
        "region_id": 6,
        "name_ar": "لصناي",
        "name_en": "Lasnay",
        "center": [
            18.12233004,
            42.20402
        ]
    },
    {
        "city_id": 1835,
        "region_id": 6,
        "name_ar": "عكية",
        "name_en": "'Ukyah",
        "center": [
            18.05183995,
            42.37568004
        ]
    },
    {
        "city_id": 1836,
        "region_id": 6,
        "name_ar": "القرار",
        "name_en": "Al Qarar",
        "center": [
            18.07131001,
            42.37289994
        ]
    },
    {
        "city_id": 1837,
        "region_id": 6,
        "name_ar": "الجرف",
        "name_en": "Al Jarf",
        "center": [
            18.01788071,
            42.32410375
        ]
    },
    {
        "city_id": 1838,
        "region_id": 6,
        "name_ar": "فيشان",
        "name_en": "Fayshan",
        "center": [
            18.07267,
            42.30116006
        ]
    },
    {
        "city_id": 1839,
        "region_id": 6,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            18.10688,
            42.27943006
        ]
    },
    {
        "city_id": 1840,
        "region_id": 6,
        "name_ar": "الراحة",
        "name_en": "Ar Rahah",
        "center": [
            18.05624005,
            42.22881994
        ]
    },
    {
        "city_id": 1841,
        "region_id": 6,
        "name_ar": "اللصبة",
        "name_en": "Al Lasbah",
        "center": [
            18.06577002,
            42.21619003
        ]
    },
    {
        "city_id": 1842,
        "region_id": 6,
        "name_ar": "جو جيبة",
        "name_en": "Jaww Jibah",
        "center": [
            18.02686998,
            42.27148006
        ]
    },
    {
        "city_id": 1843,
        "region_id": 6,
        "name_ar": "لهد",
        "name_en": "Luhud",
        "center": [
            18.14968999,
            42.19675995
        ]
    },
    {
        "city_id": 1844,
        "region_id": 6,
        "name_ar": "الهدانة",
        "name_en": "Al Hadanah",
        "center": [
            18.01023999,
            42.27226994
        ]
    },
    {
        "city_id": 1845,
        "region_id": 6,
        "name_ar": "أبو ذراع",
        "name_en": "Abu Dhira'",
        "center": [
            18.04270004,
            42.25295999
        ]
    },
    {
        "city_id": 1846,
        "region_id": 6,
        "name_ar": "رجال المع",
        "name_en": "Rijal Al Ma'",
        "center": [
            18.19537994,
            42.28445996
        ]
    },
    {
        "city_id": 1847,
        "region_id": 6,
        "name_ar": "السودة",
        "name_en": "As Sudah",
        "center": [
            18.26752005,
            42.37885004
        ]
    },
    {
        "city_id": 1848,
        "region_id": 6,
        "name_ar": "الحريضة",
        "name_en": "Al Huraydah",
        "center": [
            17.78887997,
            41.94162994
        ]
    },
    {
        "city_id": 1849,
        "region_id": 6,
        "name_ar": "الخطوة",
        "name_en": "Al Khutwah",
        "center": [
            18.10951997,
            42.23298999
        ]
    },
    {
        "city_id": 1850,
        "region_id": 6,
        "name_ar": "الحبيل",
        "name_en": "Al Habil",
        "center": [
            18.07359,
            42.23341006
        ]
    },
    {
        "city_id": 1851,
        "region_id": 6,
        "name_ar": "آل قفيع",
        "name_en": "Al Qifay'",
        "center": [
            18.15163005,
            42.85493006
        ]
    },
    {
        "city_id": 1852,
        "region_id": 6,
        "name_ar": "المضيق",
        "name_en": "Al Madiq",
        "center": [
            18.13119001,
            42.85239001
        ]
    },
    {
        "city_id": 1853,
        "region_id": 6,
        "name_ar": "آل لغر",
        "name_en": "Al Laghir",
        "center": [
            18.13860997,
            42.96851003
        ]
    },
    {
        "city_id": 1854,
        "region_id": 6,
        "name_ar": "الهضبة",
        "name_en": "Al Hadabah",
        "center": [
            18.01595005,
            42.95315998
        ]
    },
    {
        "city_id": 1855,
        "region_id": 6,
        "name_ar": "آل دلهم",
        "name_en": "Al Dalham",
        "center": [
            18.04433999,
            42.95272001
        ]
    },
    {
        "city_id": 1856,
        "region_id": 6,
        "name_ar": "عنقرة",
        "name_en": "'Unqarah",
        "center": [
            18.07216997,
            42.88250002
        ]
    },
    {
        "city_id": 1857,
        "region_id": 6,
        "name_ar": "آل لوط",
        "name_en": "Al Lut",
        "center": [
            18.09542006,
            42.83335002
        ]
    },
    {
        "city_id": 1858,
        "region_id": 6,
        "name_ar": "آل مكر",
        "name_en": "Al Makir",
        "center": [
            18.11538997,
            42.97553996
        ]
    },
    {
        "city_id": 1859,
        "region_id": 6,
        "name_ar": "آل عرق",
        "name_en": "Al 'Irq",
        "center": [
            18.16625997,
            42.96473002
        ]
    },
    {
        "city_id": 1860,
        "region_id": 6,
        "name_ar": "سرايم",
        "name_en": "Sarayim",
        "center": [
            18.18113001,
            42.94919004
        ]
    },
    {
        "city_id": 1861,
        "region_id": 6,
        "name_ar": "لزمة",
        "name_en": "Lazmah",
        "center": [
            18.19747995,
            42.88098995
        ]
    },
    {
        "city_id": 1862,
        "region_id": 6,
        "name_ar": "الدرب",
        "name_en": "Ad Darb",
        "center": [
            18.19670002,
            42.85803005
        ]
    },
    {
        "city_id": 1863,
        "region_id": 6,
        "name_ar": "بني تميم",
        "name_en": "Bani Tamim",
        "center": [
            18.16578001,
            42.83699002
        ]
    },
    {
        "city_id": 1864,
        "region_id": 6,
        "name_ar": "القرحاء",
        "name_en": "Al Qarha",
        "center": [
            18.11968996,
            42.88253001
        ]
    },
    {
        "city_id": 1865,
        "region_id": 6,
        "name_ar": "آل عمرة",
        "name_en": "Al 'Amrah",
        "center": [
            18.0911,
            42.99756667
        ]
    },
    {
        "city_id": 1866,
        "region_id": 6,
        "name_ar": "آل الداحس",
        "name_en": "Al Ad Dahis",
        "center": [
            18.05723995,
            42.98838002
        ]
    },
    {
        "city_id": 1867,
        "region_id": 6,
        "name_ar": "آل زهير",
        "name_en": "Al Zuhayr",
        "center": [
            18.02428005,
            42.97787994
        ]
    },
    {
        "city_id": 1868,
        "region_id": 6,
        "name_ar": "عراب",
        "name_en": "'Irab",
        "center": [
            18.01125997,
            42.96709005
        ]
    },
    {
        "city_id": 1869,
        "region_id": 6,
        "name_ar": "آل مشهور",
        "name_en": "Al Mashhur",
        "center": [
            18.12942006,
            42.99541999
        ]
    },
    {
        "city_id": 1870,
        "region_id": 6,
        "name_ar": "آل عامر",
        "name_en": "Al 'Amir",
        "center": [
            18.08914996,
            42.80019002
        ]
    },
    {
        "city_id": 1871,
        "region_id": 6,
        "name_ar": "آل حديلة",
        "name_en": "Al Hidaylah",
        "center": [
            18.06488996,
            42.80965995
        ]
    },
    {
        "city_id": 1872,
        "region_id": 6,
        "name_ar": "آل حلامي",
        "name_en": "Al Hilami",
        "center": [
            18.03131996,
            42.81930001
        ]
    },
    {
        "city_id": 1873,
        "region_id": 6,
        "name_ar": "صفحان",
        "name_en": "Safhan",
        "center": [
            18.03459,
            42.86063002
        ]
    },
    {
        "city_id": 1874,
        "region_id": 5,
        "name_ar": "سامودة",
        "name_en": "Samudah",
        "center": [
            27.86362004,
            44.89987999
        ]
    },
    {
        "city_id": 1875,
        "region_id": 2,
        "name_ar": "الغبة",
        "name_en": "Al Ghubbah",
        "center": [
            21.16440002,
            39.19185
        ]
    },
    {
        "city_id": 1876,
        "region_id": 2,
        "name_ar": "المحاميد",
        "name_en": "Al Mahamid",
        "center": [
            21.45000003,
            39.43333005
        ]
    },
    {
        "city_id": 1877,
        "region_id": 2,
        "name_ar": "مسنى الازيار",
        "name_en": "Masna Al 'Azyar",
        "center": [
            21.39999998,
            39.43333001
        ]
    },
    {
        "city_id": 1878,
        "region_id": 2,
        "name_ar": "الحذيفة القالة",
        "name_en": "Al Hudhayfah Al Qalah",
        "center": [
            21.38332998,
            39.43332998
        ]
    },
    {
        "city_id": 1879,
        "region_id": 2,
        "name_ar": "ثول",
        "name_en": "Thuwal",
        "center": [
            22.27165001,
            39.10917999
        ]
    },
    {
        "city_id": 1880,
        "region_id": 2,
        "name_ar": "ام السلم",
        "name_en": "Umm As Salam",
        "center": [
            21.42826004,
            39.38546002
        ]
    },
    {
        "city_id": 1881,
        "region_id": 3,
        "name_ar": "غضن علياء",
        "name_en": "Ghadn Aliya",
        "center": [
            26.01990229,
            39.35423176
        ]
    },
    {
        "city_id": 1882,
        "region_id": 2,
        "name_ar": "بحرة المجاهدين",
        "name_en": "Bahrah Al Mujahidin",
        "center": [
            21.40226999,
            39.45037999
        ]
    },
    {
        "city_id": 1883,
        "region_id": 2,
        "name_ar": "بحرة القديمة",
        "name_en": "Bahrah Al Qadimah",
        "center": [
            21.40222999,
            39.48073001
        ]
    },
    {
        "city_id": 1884,
        "region_id": 2,
        "name_ar": "حداء الجديدة",
        "name_en": "Hada' Al Jadidah",
        "center": [
            21.43911001,
            39.50962994
        ]
    },
    {
        "city_id": 1885,
        "region_id": 2,
        "name_ar": "ذهبان",
        "name_en": "Dhahban",
        "center": [
            21.933,
            39.10282004
        ]
    },
    {
        "city_id": 1886,
        "region_id": 2,
        "name_ar": "الغولاء",
        "name_en": "Al Ghawla",
        "center": [
            21.94534003,
            39.26995003
        ]
    },
    {
        "city_id": 1887,
        "region_id": 2,
        "name_ar": "العوجانية",
        "name_en": "Al 'Awjaniyah",
        "center": [
            21.97188996,
            39.31329002
        ]
    },
    {
        "city_id": 1888,
        "region_id": 2,
        "name_ar": "الصفحة",
        "name_en": "As Safhah",
        "center": [
            21.89397006,
            39.26625005
        ]
    },
    {
        "city_id": 1889,
        "region_id": 2,
        "name_ar": "القضيمة",
        "name_en": "Al Qadimah",
        "center": [
            22.34455999,
            39.12445005
        ]
    },
    {
        "city_id": 1890,
        "region_id": 2,
        "name_ar": "ميناء القضيمة",
        "name_en": "Al Qadimah Port",
        "center": [
            22.34526003,
            39.10398996
        ]
    },
    {
        "city_id": 1891,
        "region_id": 2,
        "name_ar": "المواليد",
        "name_en": "Al Mawalid",
        "center": [
            22.31283995,
            39.11887996
        ]
    },
    {
        "city_id": 1892,
        "region_id": 12,
        "name_ar": "دغماء",
        "name_en": "Daghma",
        "center": [
            20.31043997,
            41.12252003
        ]
    },
    {
        "city_id": 1893,
        "region_id": 2,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            22.87196998,
            42.52365006
        ]
    },
    {
        "city_id": 1894,
        "region_id": 2,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            21.84330894,
            41.53290398
        ]
    },
    {
        "city_id": 1895,
        "region_id": 12,
        "name_ar": "القهب",
        "name_en": "Al Qahab",
        "center": [
            20.34924006,
            41.05690003
        ]
    },
    {
        "city_id": 1896,
        "region_id": 2,
        "name_ar": "الجحصة",
        "name_en": "Al Jahasah",
        "center": [
            20.40749997,
            41.12980997
        ]
    },
    {
        "city_id": 1897,
        "region_id": 12,
        "name_ar": "الدقم",
        "name_en": "Ad Duqum",
        "center": [
            20.31513996,
            41.05205005
        ]
    },
    {
        "city_id": 1898,
        "region_id": 12,
        "name_ar": "الشهومة",
        "name_en": "Ash Shuhumah",
        "center": [
            20.29290999,
            41.06768002
        ]
    },
    {
        "city_id": 1899,
        "region_id": 2,
        "name_ar": "عوية",
        "name_en": "'Uwayyah",
        "center": [
            20.38972003,
            41.13247005
        ]
    },
    {
        "city_id": 1900,
        "region_id": 12,
        "name_ar": "سيحان",
        "name_en": "Sayhan",
        "center": [
            20.35108003,
            41.19689997
        ]
    },
    {
        "city_id": 1901,
        "region_id": 12,
        "name_ar": "الحوية",
        "name_en": "Al Hawiyah",
        "center": [
            20.28703004,
            41.23259
        ]
    },
    {
        "city_id": 1902,
        "region_id": 12,
        "name_ar": "خميس",
        "name_en": "Humays",
        "center": [
            20.33288996,
            41.11535003
        ]
    },
    {
        "city_id": 1903,
        "region_id": 12,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            20.39807001,
            41.22784004
        ]
    },
    {
        "city_id": 1904,
        "region_id": 2,
        "name_ar": "الاحلاف",
        "name_en": "Al Ahlaf",
        "center": [
            20.35147002,
            41.15914999
        ]
    },
    {
        "city_id": 1905,
        "region_id": 2,
        "name_ar": "المويه القديم",
        "name_en": "Al Muwayh Al Qadim",
        "center": [
            22.74815997,
            41.59327995
        ]
    },
    {
        "city_id": 1906,
        "region_id": 2,
        "name_ar": "البحرة",
        "name_en": "Al Baharah",
        "center": [
            22.94974,
            41.66771
        ]
    },
    {
        "city_id": 1907,
        "region_id": 2,
        "name_ar": "البادرية",
        "name_en": "Al Badiriyah",
        "center": [
            22.92598994,
            41.64161998
        ]
    },
    {
        "city_id": 1908,
        "region_id": 2,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            22.87635003,
            41.54463996
        ]
    },
    {
        "city_id": 1909,
        "region_id": 2,
        "name_ar": "الذويب",
        "name_en": "Adh Dhuwayb",
        "center": [
            23.03889997,
            41.63916994
        ]
    },
    {
        "city_id": 1910,
        "region_id": 2,
        "name_ar": "مروان",
        "name_en": "Marwan",
        "center": [
            22.21170996,
            42.29834001
        ]
    },
    {
        "city_id": 1911,
        "region_id": 2,
        "name_ar": "القرارة",
        "name_en": "Al Qararah",
        "center": [
            22.66721995,
            41.38976001
        ]
    },
    {
        "city_id": 1912,
        "region_id": 2,
        "name_ar": "أم الدوم",
        "name_en": "Umm Ad Dawm",
        "center": [
            22.61432995,
            41.34985997
        ]
    },
    {
        "city_id": 1913,
        "region_id": 2,
        "name_ar": "دغيبجة",
        "name_en": "Dughaybjah",
        "center": [
            22.59214996,
            41.35815
        ]
    },
    {
        "city_id": 1914,
        "region_id": 2,
        "name_ar": "الرميدة",
        "name_en": "Ar Rumaydah",
        "center": [
            21.31203004,
            40.54652999
        ]
    },
    {
        "city_id": 1915,
        "region_id": 2,
        "name_ar": "خد الحاج",
        "name_en": "Khadd Al Haj",
        "center": [
            21.2995,
            40.55838996
        ]
    },
    {
        "city_id": 1916,
        "region_id": 2,
        "name_ar": "شويحط",
        "name_en": "Shuwayhit",
        "center": [
            21.39418003,
            40.52999995
        ]
    },
    {
        "city_id": 1917,
        "region_id": 2,
        "name_ar": "وطيلح",
        "name_en": "Witaylih",
        "center": [
            21.20714996,
            40.63699999
        ]
    },
    {
        "city_id": 1918,
        "region_id": 7,
        "name_ar": "العنبة",
        "name_en": "Al 'Anabah",
        "center": [
            27.73678,
            36.78680001
        ]
    },
    {
        "city_id": 1919,
        "region_id": 2,
        "name_ar": "الخضر",
        "name_en": "Al Khudr",
        "center": [
            22.52383998,
            40.46918994
        ]
    },
    {
        "city_id": 1920,
        "region_id": 2,
        "name_ar": "الودية",
        "name_en": "Al Wudiyah",
        "center": [
            22.50705006,
            40.42817
        ]
    },
    {
        "city_id": 1921,
        "region_id": 2,
        "name_ar": "الصالحية",
        "name_en": "As Salhiyah",
        "center": [
            22.37083998,
            40.47792005
        ]
    },
    {
        "city_id": 1922,
        "region_id": 2,
        "name_ar": "المحاني",
        "name_en": "Al Mahani",
        "center": [
            22.49522002,
            40.43638005
        ]
    },
    {
        "city_id": 1923,
        "region_id": 2,
        "name_ar": "الدار البيضاء",
        "name_en": "Ad Dar Al Bayda",
        "center": [
            21.37159997,
            40.28721002
        ]
    },
    {
        "city_id": 1924,
        "region_id": 2,
        "name_ar": "النمور",
        "name_en": "An Namur",
        "center": [
            21.44129994,
            40.27419995
        ]
    },
    {
        "city_id": 1925,
        "region_id": 2,
        "name_ar": "المبيرز",
        "name_en": "Al Mubayriz",
        "center": [
            21.44094001,
            40.36319997
        ]
    },
    {
        "city_id": 1926,
        "region_id": 2,
        "name_ar": "ملح",
        "name_en": "Malah",
        "center": [
            21.35401995,
            40.34905
        ]
    },
    {
        "city_id": 1927,
        "region_id": 2,
        "name_ar": "الغديرين",
        "name_en": "Al Ghadirayn",
        "center": [
            21.30593001,
            40.28623004
        ]
    },
    {
        "city_id": 1928,
        "region_id": 7,
        "name_ar": "الهامة",
        "name_en": "Al Hamah",
        "center": [
            27.65238006,
            35.73459997
        ]
    },
    {
        "city_id": 1929,
        "region_id": 7,
        "name_ar": "بئر ابو العجاج",
        "name_en": "Bir Abu Al 'Ajjaj",
        "center": [
            27.41328001,
            36.21329002
        ]
    },
    {
        "city_id": 1930,
        "region_id": 7,
        "name_ar": "بئر السادي",
        "name_en": "Bir As Sadi",
        "center": [
            27.54891003,
            36.23423996
        ]
    },
    {
        "city_id": 1931,
        "region_id": 7,
        "name_ar": "قلعة الاذنم",
        "name_en": "Qal'at Al Adhnum",
        "center": [
            27.04256003,
            36.01446004
        ]
    },
    {
        "city_id": 1932,
        "region_id": 7,
        "name_ar": "سلوى",
        "name_en": "Salwa",
        "center": [
            27.24748001,
            35.95412001
        ]
    },
    {
        "city_id": 1933,
        "region_id": 7,
        "name_ar": "وادي ابو طينة",
        "name_en": "Wadi Abu Tinah",
        "center": [
            27.07759001,
            36.29758001
        ]
    },
    {
        "city_id": 1934,
        "region_id": 7,
        "name_ar": "الصورة",
        "name_en": "As Surah",
        "center": [
            27.85183999,
            35.34931998
        ]
    },
    {
        "city_id": 1935,
        "region_id": 7,
        "name_ar": "تريم",
        "name_en": "Tiraym",
        "center": [
            27.90062995,
            35.35576004
        ]
    },
    {
        "city_id": 1936,
        "region_id": 7,
        "name_ar": "بئر فحيمان",
        "name_en": "Bir Fhayman",
        "center": [
            28.08388997,
            35.45969002
        ]
    },
    {
        "city_id": 1937,
        "region_id": 7,
        "name_ar": "قاصرة",
        "name_en": "Qasrah",
        "center": [
            27.17869002,
            36.26858993
        ]
    },
    {
        "city_id": 1938,
        "region_id": 7,
        "name_ar": "هداج",
        "name_en": "Haddaj",
        "center": [
            27.15315996,
            36.31093999
        ]
    },
    {
        "city_id": 1939,
        "region_id": 7,
        "name_ar": "الحواويط",
        "name_en": "Al Hawawit",
        "center": [
            27.30575,
            36.25806001
        ]
    },
    {
        "city_id": 1940,
        "region_id": 7,
        "name_ar": "جبة",
        "name_en": "Jubbah",
        "center": [
            27.57290998,
            35.53545994
        ]
    },
    {
        "city_id": 1941,
        "region_id": 7,
        "name_ar": "المهارش",
        "name_en": "Al Mharish",
        "center": [
            27.53090999,
            35.56915995
        ]
    },
    {
        "city_id": 1942,
        "region_id": 7,
        "name_ar": "ضوجي",
        "name_en": "Duji",
        "center": [
            27.84373,
            35.57957006
        ]
    },
    {
        "city_id": 1943,
        "region_id": 7,
        "name_ar": "المرير",
        "name_en": "Al Murayr",
        "center": [
            27.80950001,
            35.35258994
        ]
    },
    {
        "city_id": 1944,
        "region_id": 7,
        "name_ar": "شواق",
        "name_en": "Shuwaq",
        "center": [
            27.38907998,
            36.48730998
        ]
    },
    {
        "city_id": 1945,
        "region_id": 7,
        "name_ar": "آمدان",
        "name_en": "Amdan",
        "center": [
            27.62869,
            36.27107998
        ]
    },
    {
        "city_id": 1946,
        "region_id": 7,
        "name_ar": "رواقا",
        "name_en": "Ruwaqa",
        "center": [
            27.73203001,
            36.15176002
        ]
    },
    {
        "city_id": 1947,
        "region_id": 7,
        "name_ar": "ضبا",
        "name_en": "Duba",
        "center": [
            27.36211995,
            35.68198997
        ]
    },
    {
        "city_id": 1948,
        "region_id": 7,
        "name_ar": "الخريبة",
        "name_en": "Al Khuraybah",
        "center": [
            28.06428998,
            35.16126997
        ]
    },
    {
        "city_id": 1949,
        "region_id": 7,
        "name_ar": "صر",
        "name_en": "Surr",
        "center": [
            27.70283998,
            35.85884002
        ]
    },
    {
        "city_id": 1950,
        "region_id": 7,
        "name_ar": "صدر",
        "name_en": "Sadr",
        "center": [
            27.92019005,
            35.78849005
        ]
    },
    {
        "city_id": 1951,
        "region_id": 7,
        "name_ar": "نابع داما",
        "name_en": "Nabi' Dama",
        "center": [
            27.46740998,
            36.15210004
        ]
    },
    {
        "city_id": 1952,
        "region_id": 7,
        "name_ar": "قبقاب",
        "name_en": "Qabqab",
        "center": [
            27.09279001,
            36.20256002
        ]
    },
    {
        "city_id": 1953,
        "region_id": 7,
        "name_ar": "شرماء",
        "name_en": "Sharma",
        "center": [
            28.01993999,
            35.26014998
        ]
    },
    {
        "city_id": 1954,
        "region_id": 7,
        "name_ar": "شغب",
        "name_en": "Shaghab",
        "center": [
            27.22289999,
            36.32685996
        ]
    },
    {
        "city_id": 1955,
        "region_id": 7,
        "name_ar": "المويلح",
        "name_en": "Al Muwaylih",
        "center": [
            27.69333999,
            35.47536996
        ]
    },
    {
        "city_id": 1956,
        "region_id": 7,
        "name_ar": "الديسة",
        "name_en": "Ad Disah",
        "center": [
            27.63331994,
            36.46961
        ]
    },
    {
        "city_id": 1957,
        "region_id": 4,
        "name_ar": "السالمية",
        "name_en": "As Salmiyah",
        "center": [
            26.28348998,
            44.00658994
        ]
    },
    {
        "city_id": 1958,
        "region_id": 4,
        "name_ar": "المريديسية",
        "name_en": "Al Muraydisiyah",
        "center": [
            26.31673002,
            43.92280998
        ]
    },
    {
        "city_id": 1959,
        "region_id": 4,
        "name_ar": "الصفراء",
        "name_en": "As Safra",
        "center": [
            26.40052997,
            43.94030993
        ]
    },
    {
        "city_id": 1960,
        "region_id": 4,
        "name_ar": "خب روضان",
        "name_en": "Khabb Rawdan",
        "center": [
            26.29166999,
            43.91096998
        ]
    },
    {
        "city_id": 1961,
        "region_id": 4,
        "name_ar": "المنتزة",
        "name_en": "Al Muntazah",
        "center": [
            26.35711998,
            43.90225003
        ]
    },
    {
        "city_id": 1962,
        "region_id": 4,
        "name_ar": "مشرفة",
        "name_en": "Mushrifah",
        "center": [
            26.67604003,
            44.06886007
        ]
    },
    {
        "city_id": 1963,
        "region_id": 8,
        "name_ar": "فيد",
        "name_en": "Fayd",
        "center": [
            27.12084995,
            42.51787
        ]
    },
    {
        "city_id": 1964,
        "region_id": 8,
        "name_ar": "طابة",
        "name_en": "Tabah",
        "center": [
            27.0324,
            42.18454004
        ]
    },
    {
        "city_id": 1965,
        "region_id": 8,
        "name_ar": "الكهفة",
        "name_en": "Al Kahafah",
        "center": [
            27.09066998,
            43.02091995
        ]
    },
    {
        "city_id": 1966,
        "region_id": 8,
        "name_ar": "عقلة بن داني",
        "name_en": "Uqlat Ibn Dani",
        "center": [
            26.78809998,
            42.07233994
        ]
    },
    {
        "city_id": 1967,
        "region_id": 8,
        "name_ar": "عقلة اللبن",
        "name_en": "Uqlat Al Laban",
        "center": [
            26.76908999,
            42.07395
        ]
    },
    {
        "city_id": 1968,
        "region_id": 8,
        "name_ar": "الصفراء",
        "name_en": "As Safra",
        "center": [
            26.84315005,
            42.17576998
        ]
    },
    {
        "city_id": 1969,
        "region_id": 8,
        "name_ar": "البير",
        "name_en": "Al Bir",
        "center": [
            26.92221998,
            42.15914002
        ]
    },
    {
        "city_id": 1970,
        "region_id": 8,
        "name_ar": "عقلة ابن كليب",
        "name_en": "Uqlat Ibn Kulayb",
        "center": [
            26.76062006,
            42.08197006
        ]
    },
    {
        "city_id": 1971,
        "region_id": 8,
        "name_ar": "عريجاء",
        "name_en": "Uraija'",
        "center": [
            27.45563006,
            41.97826996
        ]
    },
    {
        "city_id": 1972,
        "region_id": 8,
        "name_ar": "المطرفية",
        "name_en": "Al Matrafiyah",
        "center": [
            26.90373004,
            42.02174996
        ]
    },
    {
        "city_id": 1973,
        "region_id": 8,
        "name_ar": "المضيح",
        "name_en": "Al Mudayyih",
        "center": [
            26.89068998,
            42.09819996
        ]
    },
    {
        "city_id": 1974,
        "region_id": 8,
        "name_ar": "غمرة",
        "name_en": "Ghamrah",
        "center": [
            26.60353999,
            42.32592004
        ]
    },
    {
        "city_id": 1975,
        "region_id": 8,
        "name_ar": "النعي",
        "name_en": "An Ni'ayy",
        "center": [
            27.18635006,
            42.28341001
        ]
    },
    {
        "city_id": 1976,
        "region_id": 8,
        "name_ar": "الجحفة",
        "name_en": "Al Juhfah",
        "center": [
            27.06784002,
            42.24810999
        ]
    },
    {
        "city_id": 1977,
        "region_id": 8,
        "name_ar": "العش",
        "name_en": "Al 'Ishsh",
        "center": [
            27.08117994,
            41.79644001
        ]
    },
    {
        "city_id": 1978,
        "region_id": 8,
        "name_ar": "السبعان",
        "name_en": "As Sab'an",
        "center": [
            27.04140003,
            41.98384004
        ]
    },
    {
        "city_id": 1979,
        "region_id": 4,
        "name_ar": "قصر العبد الله",
        "name_en": "Qasr Al 'Abdallah",
        "center": [
            26.79944997,
            44.21280996
        ]
    },
    {
        "city_id": 1980,
        "region_id": 4,
        "name_ar": "مزارع الحفيرات",
        "name_en": "Mazari' Al Hufayrat",
        "center": [
            26.86251996,
            44.15022004
        ]
    },
    {
        "city_id": 1981,
        "region_id": 4,
        "name_ar": "الشنانة",
        "name_en": "Ash Shananah",
        "center": [
            26.82062006,
            44.18767995
        ]
    },
    {
        "city_id": 1982,
        "region_id": 4,
        "name_ar": "السمراء",
        "name_en": "As Samra",
        "center": [
            26.83964997,
            44.16019004
        ]
    },
    {
        "city_id": 1983,
        "region_id": 4,
        "name_ar": "العطشان",
        "name_en": "Al 'Atshan",
        "center": [
            26.96102002,
            44.10937999
        ]
    },
    {
        "city_id": 1984,
        "region_id": 4,
        "name_ar": "السيق",
        "name_en": "As Siq",
        "center": [
            27.00317995,
            44.09022
        ]
    },
    {
        "city_id": 1985,
        "region_id": 4,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            27.01782004,
            43.86398006
        ]
    },
    {
        "city_id": 1986,
        "region_id": 4,
        "name_ar": "الاسياح",
        "name_en": "Al Asyah",
        "center": [
            26.77779003,
            44.21844994
        ]
    },
    {
        "city_id": 1987,
        "region_id": 4,
        "name_ar": "التنومة",
        "name_en": "At Tannumah",
        "center": [
            26.86196004,
            44.16729006
        ]
    },
    {
        "city_id": 1988,
        "region_id": 4,
        "name_ar": "البرود",
        "name_en": "Al Burud",
        "center": [
            26.88735004,
            44.13807005
        ]
    },
    {
        "city_id": 1989,
        "region_id": 4,
        "name_ar": "خصيبة",
        "name_en": "Khusayyibah",
        "center": [
            26.89287997,
            44.15079998
        ]
    },
    {
        "city_id": 1990,
        "region_id": 4,
        "name_ar": "طريف الاسياح",
        "name_en": "Turayf Al Asyah",
        "center": [
            26.82826667,
            44.17925
        ]
    },
    {
        "city_id": 1991,
        "region_id": 4,
        "name_ar": "البندرية",
        "name_en": "Al Bandariyah",
        "center": [
            26.59636,
            44.28162999
        ]
    },
    {
        "city_id": 1992,
        "region_id": 4,
        "name_ar": "حنيظل",
        "name_en": "Hunaydhil",
        "center": [
            26.97663001,
            44.10170006
        ]
    },
    {
        "city_id": 1993,
        "region_id": 4,
        "name_ar": "الجعلة",
        "name_en": "Al Ja'alah",
        "center": [
            26.69083996,
            44.23304005
        ]
    },
    {
        "city_id": 1994,
        "region_id": 4,
        "name_ar": "ابا الورود",
        "name_en": "Aba Al Wurood",
        "center": [
            27.02699999,
            44.07459001
        ]
    },
    {
        "city_id": 1995,
        "region_id": 4,
        "name_ar": "ضيدة",
        "name_en": "Didah",
        "center": [
            27.17446994,
            43.99790998
        ]
    },
    {
        "city_id": 1996,
        "region_id": 4,
        "name_ar": "النمرية",
        "name_en": "An Nimriyah",
        "center": [
            26.40437995,
            42.34126005
        ]
    },
    {
        "city_id": 1997,
        "region_id": 4,
        "name_ar": "المطيوي الشمالي",
        "name_en": "Al Mutaywi Ash Shamali",
        "center": [
            26.53701005,
            42.59745004
        ]
    },
    {
        "city_id": 1998,
        "region_id": 4,
        "name_ar": "المحلاني",
        "name_en": "Al Mahalani",
        "center": [
            26.14069005,
            42.20297005
        ]
    },
    {
        "city_id": 1999,
        "region_id": 4,
        "name_ar": "عيون الجواء",
        "name_en": "Uyun Al Jawa'",
        "center": [
            26.49974004,
            43.62932997
        ]
    },
    {
        "city_id": 2000,
        "region_id": 4,
        "name_ar": "أوثال",
        "name_en": "Uthal",
        "center": [
            26.53086005,
            43.69260005
        ]
    },
    {
        "city_id": 2001,
        "region_id": 4,
        "name_ar": "غاف الجواء",
        "name_en": "Ghaf Al Jiwa",
        "center": [
            26.54493,
            43.60628997
        ]
    },
    {
        "city_id": 2002,
        "region_id": 4,
        "name_ar": "روض الجواء",
        "name_en": "Rawd Al Jiwa",
        "center": [
            26.54185,
            43.57745995
        ]
    },
    {
        "city_id": 2003,
        "region_id": 5,
        "name_ar": "الشهارين",
        "name_en": "Ash Shaharin",
        "center": [
            25.38433998,
            49.64863988
        ]
    },
    {
        "city_id": 2005,
        "region_id": 5,
        "name_ar": "أم العراد",
        "name_en": "Umm Al 'Arad",
        "center": [
            25.94342995,
            48.97312989
        ]
    },
    {
        "city_id": 2006,
        "region_id": 5,
        "name_ar": "العبيلة",
        "name_en": "Al 'Ubaylah",
        "center": [
            22.01407001,
            50.93502973
        ]
    },
    {
        "city_id": 2007,
        "region_id": 5,
        "name_ar": "شبيطة",
        "name_en": "Shubaytah",
        "center": [
            22.71668008,
            53.29999794
        ]
    },
    {
        "city_id": 2008,
        "region_id": 5,
        "name_ar": "شوالة",
        "name_en": "Shawwalah",
        "center": [
            22.53333014,
            54.0333266
        ]
    },
    {
        "city_id": 2009,
        "region_id": 5,
        "name_ar": "مركز الشيبة",
        "name_en": "Markaz Ash Shaybah",
        "center": [
            22.23333031,
            55.4499918
        ]
    },
    {
        "city_id": 2010,
        "region_id": 5,
        "name_ar": "مركز الخيران",
        "name_en": "Markaz Al Khiran",
        "center": [
            19.4775,
            53.25049817
        ]
    },
    {
        "city_id": 2011,
        "region_id": 5,
        "name_ar": "هجرة الطويلة",
        "name_en": "Hijrat At Tawilah",
        "center": [
            24.24487,
            49.66007992
        ]
    },
    {
        "city_id": 2012,
        "region_id": 5,
        "name_ar": "عجائب",
        "name_en": "Ajaib",
        "center": [
            24.64991999,
            49.74943991
        ]
    },
    {
        "city_id": 2013,
        "region_id": 5,
        "name_ar": "الطربيل",
        "name_en": "At Tarbil",
        "center": [
            25.39325996,
            49.65965989
        ]
    },
    {
        "city_id": 2014,
        "region_id": 5,
        "name_ar": "التهيمية",
        "name_en": "At Tuhaymiyah",
        "center": [
            25.39789997,
            49.69140983
        ]
    },
    {
        "city_id": 2015,
        "region_id": 5,
        "name_ar": "المقدام",
        "name_en": "Al Miqdam",
        "center": [
            25.43696995,
            49.67207981
        ]
    },
    {
        "city_id": 2016,
        "region_id": 5,
        "name_ar": "السبايرة",
        "name_en": "As Sabayirah",
        "center": [
            25.39393001,
            49.70236986
        ]
    },
    {
        "city_id": 2017,
        "region_id": 5,
        "name_ar": "السباط",
        "name_en": "As Sabat",
        "center": [
            25.38248282,
            49.71641256
        ]
    },
    {
        "city_id": 2018,
        "region_id": 5,
        "name_ar": "الجرن",
        "name_en": "Al Jarn",
        "center": [
            25.53004004,
            49.61463993
        ]
    },
    {
        "city_id": 2019,
        "region_id": 5,
        "name_ar": "برقاء  الركبان",
        "name_en": "Barqa Al Rukban",
        "center": [
            25.54349996,
            49.57296986
        ]
    },
    {
        "city_id": 2021,
        "region_id": 7,
        "name_ar": "عمرات",
        "name_en": "'Amrat",
        "center": [
            29.77982005,
            36.70712004
        ]
    },
    {
        "city_id": 2022,
        "region_id": 5,
        "name_ar": "بطحاء",
        "name_en": "Batha",
        "center": [
            24.15539001,
            51.58313935
        ]
    },
    {
        "city_id": 2023,
        "region_id": 5,
        "name_ar": "العديد",
        "name_en": "Al 'Adid",
        "center": [
            24.44902996,
            51.30288944
        ]
    },
    {
        "city_id": 2024,
        "region_id": 5,
        "name_ar": "عردة",
        "name_en": "'Ardah",
        "center": [
            21.3629702,
            55.24334305
        ]
    },
    {
        "city_id": 2025,
        "region_id": 5,
        "name_ar": "ذعبلوتن",
        "name_en": "Dha'blutin",
        "center": [
            19.71155996,
            53.96287703
        ]
    },
    {
        "city_id": 2026,
        "region_id": 5,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            25.68457995,
            49.51965991
        ]
    },
    {
        "city_id": 2027,
        "region_id": 5,
        "name_ar": "نعلة شدقم",
        "name_en": "Na'lat Shadqam",
        "center": [
            25.65866,
            49.38815996
        ]
    },
    {
        "city_id": 2028,
        "region_id": 5,
        "name_ar": "الخويس",
        "name_en": "Al Khuways",
        "center": [
            25.59087003,
            49.58014991
        ]
    },
    {
        "city_id": 2029,
        "region_id": 5,
        "name_ar": "شدقم",
        "name_en": "Shadqam",
        "center": [
            25.74034994,
            49.43195995
        ]
    },
    {
        "city_id": 2030,
        "region_id": 5,
        "name_ar": "ابرقية",
        "name_en": "Abraqiyah",
        "center": [
            23.08255999,
            48.97411989
        ]
    },
    {
        "city_id": 2031,
        "region_id": 5,
        "name_ar": "الحفاير",
        "name_en": "Al Hafayer",
        "center": [
            23.12377001,
            48.97322001
        ]
    },
    {
        "city_id": 2032,
        "region_id": 5,
        "name_ar": "ابن سرحان",
        "name_en": "Ibn Sirhan",
        "center": [
            23.30140995,
            48.98318993
        ]
    },
    {
        "city_id": 2033,
        "region_id": 5,
        "name_ar": "المرضف",
        "name_en": "Al Muraddaf",
        "center": [
            23.30506995,
            48.96611989
        ]
    },
    {
        "city_id": 2034,
        "region_id": 5,
        "name_ar": "الحوية",
        "name_en": "Al Hawiyah",
        "center": [
            24.80731999,
            49.18237989
        ]
    },
    {
        "city_id": 2035,
        "region_id": 5,
        "name_ar": "العضيلية",
        "name_en": "Al Udayliyah",
        "center": [
            25.15497,
            49.29419997
        ]
    },
    {
        "city_id": 2037,
        "region_id": 5,
        "name_ar": "حرض",
        "name_en": "Harad",
        "center": [
            24.14337995,
            49.06244993
        ]
    },
    {
        "city_id": 2038,
        "region_id": 5,
        "name_ar": "العيون",
        "name_en": "Al Uyun",
        "center": [
            25.61732,
            49.55622986
        ]
    },
    {
        "city_id": 2039,
        "region_id": 2,
        "name_ar": "الحائط",
        "name_en": "Al Hait",
        "center": [
            21.08364004,
            40.52394002
        ]
    },
    {
        "city_id": 2040,
        "region_id": 2,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            21.05661005,
            40.49915001
        ]
    },
    {
        "city_id": 2041,
        "region_id": 2,
        "name_ar": "غزال",
        "name_en": "Ghazal",
        "center": [
            21.09327999,
            40.37574999
        ]
    },
    {
        "city_id": 2042,
        "region_id": 2,
        "name_ar": "السلامة",
        "name_en": "As Salamah",
        "center": [
            21.14152996,
            40.26985994
        ]
    },
    {
        "city_id": 2044,
        "region_id": 2,
        "name_ar": "المويه الجديد",
        "name_en": "Al Muwayh Al Jadid",
        "center": [
            22.43612997,
            41.76097
        ]
    },
    {
        "city_id": 2045,
        "region_id": 2,
        "name_ar": "عبال",
        "name_en": "'Abal",
        "center": [
            20.62426003,
            40.96141006
        ]
    },
    {
        "city_id": 2046,
        "region_id": 2,
        "name_ar": "الجعلان",
        "name_en": "Al Ji'lan",
        "center": [
            20.59275006,
            41.09628999
        ]
    },
    {
        "city_id": 2047,
        "region_id": 2,
        "name_ar": "حلباء",
        "name_en": "Halaba",
        "center": [
            20.55763999,
            40.96263995
        ]
    },
    {
        "city_id": 2048,
        "region_id": 2,
        "name_ar": "حداد",
        "name_en": "Haddad",
        "center": [
            20.60107004,
            41.04509005
        ]
    },
    {
        "city_id": 2049,
        "region_id": 2,
        "name_ar": "السيل الصغير",
        "name_en": "As Sayl As Saghir",
        "center": [
            21.50766003,
            40.48350998
        ]
    },
    {
        "city_id": 2050,
        "region_id": 2,
        "name_ar": "ريحة",
        "name_en": "Rayhah",
        "center": [
            21.49297995,
            40.45372997
        ]
    },
    {
        "city_id": 2051,
        "region_id": 2,
        "name_ar": "العرفاء",
        "name_en": "Al 'Arfa",
        "center": [
            21.51586996,
            40.59122
        ]
    },
    {
        "city_id": 2052,
        "region_id": 2,
        "name_ar": "الرحبة",
        "name_en": "Ar Rahbah",
        "center": [
            21.54247004,
            40.52839999
        ]
    },
    {
        "city_id": 2053,
        "region_id": 2,
        "name_ar": "القهيب",
        "name_en": "Al Quhayb",
        "center": [
            21.57549001,
            40.50203999
        ]
    },
    {
        "city_id": 2054,
        "region_id": 2,
        "name_ar": "القران",
        "name_en": "Al Qaran",
        "center": [
            21.58819005,
            40.53200998
        ]
    },
    {
        "city_id": 2055,
        "region_id": 2,
        "name_ar": "الحوية",
        "name_en": "Al Hawiyah",
        "center": [
            21.45503995,
            40.52069005
        ]
    },
    {
        "city_id": 2056,
        "region_id": 2,
        "name_ar": "السيل الكبير",
        "name_en": "As Sayl Al Kabir",
        "center": [
            21.62399006,
            40.41663006
        ]
    },
    {
        "city_id": 2057,
        "region_id": 2,
        "name_ar": "السوارفية",
        "name_en": "As Sawarqiyah",
        "center": [
            21.85750003,
            40.69422998
        ]
    },
    {
        "city_id": 2058,
        "region_id": 2,
        "name_ar": "عشيرة الجديدة",
        "name_en": "'Ushayrah Al Jadidah",
        "center": [
            21.81626996,
            40.68012005
        ]
    },
    {
        "city_id": 2059,
        "region_id": 2,
        "name_ar": "العطيف",
        "name_en": "Al 'Atif",
        "center": [
            21.85838002,
            40.99542
        ]
    },
    {
        "city_id": 2060,
        "region_id": 2,
        "name_ar": "القرشيات",
        "name_en": "Al Qurrashiyat",
        "center": [
            21.63544995,
            40.72360002
        ]
    },
    {
        "city_id": 2061,
        "region_id": 2,
        "name_ar": "عشيرة",
        "name_en": "'Ushayrah",
        "center": [
            21.77456997,
            40.66029004
        ]
    },
    {
        "city_id": 2062,
        "region_id": 2,
        "name_ar": "السايلة",
        "name_en": "As Sayilah",
        "center": [
            20.43777005,
            41.09313994
        ]
    },
    {
        "city_id": 2063,
        "region_id": 2,
        "name_ar": "الفراع",
        "name_en": "Al Fira'",
        "center": [
            20.45823998,
            41.10839001
        ]
    },
    {
        "city_id": 2064,
        "region_id": 2,
        "name_ar": "النجمة",
        "name_en": "An Najmah",
        "center": [
            20.47051004,
            41.03769005
        ]
    },
    {
        "city_id": 2065,
        "region_id": 2,
        "name_ar": "العصمان",
        "name_en": "Al 'Usman",
        "center": [
            20.49133001,
            41.03787005
        ]
    },
    {
        "city_id": 2066,
        "region_id": 2,
        "name_ar": "العاصد",
        "name_en": "Al 'Asid",
        "center": [
            20.50388333,
            41.03531667
        ]
    },
    {
        "city_id": 2067,
        "region_id": 2,
        "name_ar": "اليعاسيب",
        "name_en": "Al Ya'asib",
        "center": [
            20.52332003,
            41.06661997
        ]
    },
    {
        "city_id": 2068,
        "region_id": 2,
        "name_ar": "الشبان",
        "name_en": "Ash Shubban",
        "center": [
            20.43994994,
            41.07506003
        ]
    },
    {
        "city_id": 2069,
        "region_id": 2,
        "name_ar": "العنع",
        "name_en": "Al Qana'",
        "center": [
            20.78309997,
            40.77053001
        ]
    },
    {
        "city_id": 2070,
        "region_id": 2,
        "name_ar": "الطوال",
        "name_en": "At Tuwal",
        "center": [
            20.77507,
            40.81236004
        ]
    },
    {
        "city_id": 2071,
        "region_id": 2,
        "name_ar": "الفارعة",
        "name_en": "Al Fari'ah",
        "center": [
            20.73463994,
            40.81207999
        ]
    },
    {
        "city_id": 2072,
        "region_id": 2,
        "name_ar": "المريفق",
        "name_en": "Al Murayfiq",
        "center": [
            20.79219997,
            40.91665999
        ]
    },
    {
        "city_id": 2073,
        "region_id": 2,
        "name_ar": "السد",
        "name_en": "As Sadd",
        "center": [
            20.80884002,
            40.88281995
        ]
    },
    {
        "city_id": 2074,
        "region_id": 2,
        "name_ar": "مشرق",
        "name_en": "Mishriq",
        "center": [
            20.80974996,
            40.84517999
        ]
    },
    {
        "city_id": 2075,
        "region_id": 2,
        "name_ar": "البورة",
        "name_en": "Al Burah",
        "center": [
            20.79824003,
            40.81251997
        ]
    },
    {
        "city_id": 2076,
        "region_id": 2,
        "name_ar": "الشرى",
        "name_en": "Ash Shara",
        "center": [
            20.77606005,
            40.86762999
        ]
    },
    {
        "city_id": 2077,
        "region_id": 2,
        "name_ar": "ريشان",
        "name_en": "Rishan",
        "center": [
            20.88458997,
            40.94432005
        ]
    },
    {
        "city_id": 2078,
        "region_id": 2,
        "name_ar": "المثان",
        "name_en": "Mithan",
        "center": [
            20.82311005,
            41.01022
        ]
    },
    {
        "city_id": 2079,
        "region_id": 2,
        "name_ar": "المناضح",
        "name_en": "Al Manadih",
        "center": [
            20.71931996,
            40.90147001
        ]
    },
    {
        "city_id": 2080,
        "region_id": 2,
        "name_ar": "العمار",
        "name_en": "Al 'Amar",
        "center": [
            20.67631001,
            40.87916994
        ]
    },
    {
        "city_id": 2081,
        "region_id": 2,
        "name_ar": "المجرد",
        "name_en": "Al Majrad",
        "center": [
            20.66015002,
            40.91768997
        ]
    },
    {
        "city_id": 2082,
        "region_id": 2,
        "name_ar": "آل عطى",
        "name_en": "Al 'Ata",
        "center": [
            20.71387998,
            40.85565001
        ]
    },
    {
        "city_id": 2083,
        "region_id": 2,
        "name_ar": "السلاقا",
        "name_en": "As Salaqa",
        "center": [
            20.95004003,
            40.81093995
        ]
    },
    {
        "city_id": 2084,
        "region_id": 2,
        "name_ar": "الدار الحمراء",
        "name_en": "Al Dar Al Hamra",
        "center": [
            20.88064999,
            40.75443998
        ]
    },
    {
        "city_id": 2085,
        "region_id": 2,
        "name_ar": "مران",
        "name_en": "Marran",
        "center": [
            22.63991,
            41.37787999
        ]
    },
    {
        "city_id": 2086,
        "region_id": 2,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            22.59558562,
            40.49908397
        ]
    },
    {
        "city_id": 2087,
        "region_id": 2,
        "name_ar": "شقصان",
        "name_en": "Shaqasan",
        "center": [
            21.12269995,
            40.83668995
        ]
    },
    {
        "city_id": 2088,
        "region_id": 2,
        "name_ar": "مظللة",
        "name_en": "Mudallilah",
        "center": [
            21.14835999,
            40.83263002
        ]
    },
    {
        "city_id": 2089,
        "region_id": 2,
        "name_ar": "ام النخلة",
        "name_en": "Umm An Nakhlah",
        "center": [
            21.10840003,
            40.83268994
        ]
    },
    {
        "city_id": 2090,
        "region_id": 2,
        "name_ar": "الذيابات",
        "name_en": "Adh Dhiyabat",
        "center": [
            21.04144995,
            40.92863
        ]
    },
    {
        "city_id": 2091,
        "region_id": 2,
        "name_ar": "غزايل",
        "name_en": "Ghazayil",
        "center": [
            20.97307,
            41.07774001
        ]
    },
    {
        "city_id": 2092,
        "region_id": 2,
        "name_ar": "قيا",
        "name_en": "Qiya",
        "center": [
            21.05986002,
            41.00185997
        ]
    },
    {
        "city_id": 2093,
        "region_id": 2,
        "name_ar": "بوا",
        "name_en": "Buwa",
        "center": [
            20.75683995,
            41.23399
        ]
    },
    {
        "city_id": 2094,
        "region_id": 2,
        "name_ar": "عشيرة مكتن",
        "name_en": "'Ishayra Maktan",
        "center": [
            22.50936667,
            40.52063333
        ]
    },
    {
        "city_id": 2095,
        "region_id": 2,
        "name_ar": "الحفائر",
        "name_en": "Al Hafair",
        "center": [
            22.31496,
            40.60850999
        ]
    },
    {
        "city_id": 2096,
        "region_id": 2,
        "name_ar": "رمحة",
        "name_en": "Rumhah",
        "center": [
            20.84485994,
            40.61988
        ]
    },
    {
        "city_id": 2097,
        "region_id": 2,
        "name_ar": "السلمة",
        "name_en": "As Salamah",
        "center": [
            20.79788995,
            40.53703997
        ]
    },
    {
        "city_id": 2098,
        "region_id": 2,
        "name_ar": "حضن",
        "name_en": "Hadan",
        "center": [
            21.34129995,
            41.16220996
        ]
    },
    {
        "city_id": 2099,
        "region_id": 2,
        "name_ar": "بئر عن",
        "name_en": "Bir 'Inn",
        "center": [
            21.26861995,
            41.16930994
        ]
    },
    {
        "city_id": 2100,
        "region_id": 2,
        "name_ar": "الثابتية",
        "name_en": "Ath Thabitiyah",
        "center": [
            21.43745001,
            40.63281999
        ]
    },
    {
        "city_id": 2101,
        "region_id": 2,
        "name_ar": "جليل",
        "name_en": "Julayyil",
        "center": [
            21.39866003,
            40.62780004
        ]
    },
    {
        "city_id": 2102,
        "region_id": 2,
        "name_ar": "صلبة",
        "name_en": "Sulubah",
        "center": [
            21.46697003,
            40.63297995
        ]
    },
    {
        "city_id": 2103,
        "region_id": 2,
        "name_ar": "الاخاضر",
        "name_en": "Al Akhadir",
        "center": [
            21.484,
            40.64674004
        ]
    },
    {
        "city_id": 2104,
        "region_id": 2,
        "name_ar": "الخرائق",
        "name_en": "Al Kharaiq",
        "center": [
            21.34943495,
            40.90270864
        ]
    },
    {
        "city_id": 2105,
        "region_id": 2,
        "name_ar": "كلاخ",
        "name_en": "Kulakh",
        "center": [
            21.29998003,
            40.78082005
        ]
    },
    {
        "city_id": 2106,
        "region_id": 2,
        "name_ar": "زبيدة",
        "name_en": "Zubaidah",
        "center": [
            21.23490999,
            40.76294003
        ]
    },
    {
        "city_id": 2107,
        "region_id": 2,
        "name_ar": "زعفران",
        "name_en": "Za'faran",
        "center": [
            21.22717996,
            40.75550001
        ]
    },
    {
        "city_id": 2108,
        "region_id": 2,
        "name_ar": "مرفوض",
        "name_en": "Marfud",
        "center": [
            21.23411001,
            40.77240997
        ]
    },
    {
        "city_id": 2109,
        "region_id": 2,
        "name_ar": "القضيفة",
        "name_en": "Al Qudaifah",
        "center": [
            21.20484002,
            40.78220002
        ]
    },
    {
        "city_id": 2110,
        "region_id": 2,
        "name_ar": "بسل",
        "name_en": "Bisil",
        "center": [
            21.17493999,
            40.70445002
        ]
    },
    {
        "city_id": 2111,
        "region_id": 2,
        "name_ar": "السديرة",
        "name_en": "As Sudayrah",
        "center": [
            21.37181998,
            40.84469996
        ]
    },
    {
        "city_id": 2112,
        "region_id": 2,
        "name_ar": "المعقر",
        "name_en": "Al Ma'qir",
        "center": [
            20.83996999,
            40.67308003
        ]
    },
    {
        "city_id": 2113,
        "region_id": 2,
        "name_ar": "الطفلان",
        "name_en": "At Tuflan",
        "center": [
            20.94690999,
            40.67985996
        ]
    },
    {
        "city_id": 2114,
        "region_id": 2,
        "name_ar": "الصفاة",
        "name_en": "As Sufah",
        "center": [
            20.92194005,
            40.68809999
        ]
    },
    {
        "city_id": 2115,
        "region_id": 2,
        "name_ar": "الحلقة",
        "name_en": "Al Halqah",
        "center": [
            20.90543005,
            40.63669998
        ]
    },
    {
        "city_id": 2116,
        "region_id": 2,
        "name_ar": "الجدير",
        "name_en": "Al Jadir",
        "center": [
            20.96370998,
            40.61194002
        ]
    },
    {
        "city_id": 2117,
        "region_id": 2,
        "name_ar": "الخليف",
        "name_en": "Al Khalif",
        "center": [
            21.08724003,
            40.60954003
        ]
    },
    {
        "city_id": 2118,
        "region_id": 2,
        "name_ar": "الحوطة",
        "name_en": "Al Hawtah",
        "center": [
            21.07693996,
            40.64245996
        ]
    },
    {
        "city_id": 2119,
        "region_id": 2,
        "name_ar": "جويرة",
        "name_en": "Juwairah",
        "center": [
            21.05780002,
            40.81090997
        ]
    },
    {
        "city_id": 2120,
        "region_id": 2,
        "name_ar": "الطفيحاء",
        "name_en": "At Tufayha",
        "center": [
            21.04246001,
            40.81808004
        ]
    },
    {
        "city_id": 2121,
        "region_id": 2,
        "name_ar": "جوش",
        "name_en": "Jush",
        "center": [
            21.10451995,
            40.77826003
        ]
    },
    {
        "city_id": 2122,
        "region_id": 2,
        "name_ar": "القحوم",
        "name_en": "Al Qahum",
        "center": [
            21.08237999,
            40.78416994
        ]
    },
    {
        "city_id": 2123,
        "region_id": 2,
        "name_ar": "الغريب",
        "name_en": "Al Gharayyib",
        "center": [
            21.05244998,
            40.77657994
        ]
    },
    {
        "city_id": 2124,
        "region_id": 2,
        "name_ar": "الحمراء",
        "name_en": "Al Hamra",
        "center": [
            21.03611004,
            40.77229001
        ]
    },
    {
        "city_id": 2125,
        "region_id": 2,
        "name_ar": "القصر",
        "name_en": "Al Qasr",
        "center": [
            21.01915,
            40.76986997
        ]
    },
    {
        "city_id": 2126,
        "region_id": 2,
        "name_ar": "اللبة",
        "name_en": "Al Libbah",
        "center": [
            21.04283002,
            40.70318005
        ]
    },
    {
        "city_id": 2127,
        "region_id": 2,
        "name_ar": "القريع",
        "name_en": "Al Qari'",
        "center": [
            20.46331003,
            41.07191996
        ]
    },
    {
        "city_id": 2128,
        "region_id": 2,
        "name_ar": "الشعاعيب",
        "name_en": "Ash Sha'a'ib",
        "center": [
            20.74133,
            40.84029004
        ]
    },
    {
        "city_id": 2129,
        "region_id": 2,
        "name_ar": "ميسان",
        "name_en": "Maysan",
        "center": [
            20.74756002,
            40.85031999
        ]
    },
    {
        "city_id": 2130,
        "region_id": 2,
        "name_ar": "قها",
        "name_en": "Qaha",
        "center": [
            20.64031,
            40.85831006
        ]
    },
    {
        "city_id": 2131,
        "region_id": 12,
        "name_ar": "برحرح",
        "name_en": "Barahrah",
        "center": [
            20.33848003,
            41.19826997
        ]
    },
    {
        "city_id": 2132,
        "region_id": 2,
        "name_ar": "الصور",
        "name_en": "As Sur",
        "center": [
            20.87828001,
            40.98837997
        ]
    },
    {
        "city_id": 2133,
        "region_id": 2,
        "name_ar": "ابو راكة",
        "name_en": "Abu Rakah",
        "center": [
            20.93348997,
            41.2022
        ]
    },
    {
        "city_id": 2134,
        "region_id": 2,
        "name_ar": "الفريع",
        "name_en": "Al Furay'",
        "center": [
            22.62078002,
            40.55289004
        ]
    },
    {
        "city_id": 2135,
        "region_id": 2,
        "name_ar": "الوطاة",
        "name_en": "Al Watah",
        "center": [
            21.13400995,
            41.62649
        ]
    },
    {
        "city_id": 2136,
        "region_id": 2,
        "name_ar": "القويعية",
        "name_en": "Al Quway'iyah",
        "center": [
            21.25280994,
            41.66506994
        ]
    },
    {
        "city_id": 2137,
        "region_id": 2,
        "name_ar": "إبن غنام",
        "name_en": "Ibn Ghannam",
        "center": [
            21.20018004,
            41.67097997
        ]
    },
    {
        "city_id": 2138,
        "region_id": 2,
        "name_ar": "ذواد",
        "name_en": "Dhawwad",
        "center": [
            21.21835006,
            41.69189003
        ]
    },
    {
        "city_id": 2139,
        "region_id": 2,
        "name_ar": "المبرك",
        "name_en": "Al Mabrak",
        "center": [
            21.20704004,
            41.65172999
        ]
    },
    {
        "city_id": 2140,
        "region_id": 2,
        "name_ar": "العلاوة",
        "name_en": "Al 'Ilawah",
        "center": [
            21.16794996,
            41.64241996
        ]
    },
    {
        "city_id": 2141,
        "region_id": 2,
        "name_ar": "الحائرية",
        "name_en": "Al Hairiyah",
        "center": [
            21.15003001,
            41.60206996
        ]
    },
    {
        "city_id": 2142,
        "region_id": 2,
        "name_ar": "دعيمر",
        "name_en": "Du'aymir",
        "center": [
            21.15616004,
            41.65835995
        ]
    },
    {
        "city_id": 2143,
        "region_id": 2,
        "name_ar": "وساعد",
        "name_en": "Wusa'ad",
        "center": [
            21.26641001,
            41.71402994
        ]
    },
    {
        "city_id": 2144,
        "region_id": 2,
        "name_ar": "المدرة",
        "name_en": "Al Midarah",
        "center": [
            21.24953001,
            41.72094998
        ]
    },
    {
        "city_id": 2145,
        "region_id": 2,
        "name_ar": "الديرة",
        "name_en": "Ad Dayyirah",
        "center": [
            21.29826995,
            41.74076001
        ]
    },
    {
        "city_id": 2146,
        "region_id": 2,
        "name_ar": "الخالدية",
        "name_en": "Al Khalidiyah",
        "center": [
            21.72163995,
            41.55616006
        ]
    },
    {
        "city_id": 2147,
        "region_id": 2,
        "name_ar": "الغرابة",
        "name_en": "Al Ghurabah",
        "center": [
            21.03991995,
            41.53099001
        ]
    },
    {
        "city_id": 2148,
        "region_id": 2,
        "name_ar": "العلبة",
        "name_en": "Al 'Ilabah",
        "center": [
            20.90298003,
            41.43270002
        ]
    },
    {
        "city_id": 2149,
        "region_id": 2,
        "name_ar": "العابسية",
        "name_en": "Al 'Abisiyah",
        "center": [
            21.30172,
            41.75595998
        ]
    },
    {
        "city_id": 2150,
        "region_id": 2,
        "name_ar": "العرقين",
        "name_en": "Al 'Irqayn",
        "center": [
            21.33241995,
            41.74564994
        ]
    },
    {
        "city_id": 2151,
        "region_id": 2,
        "name_ar": "الغرمول",
        "name_en": "Al Gharmul",
        "center": [
            21.34139998,
            41.75918994
        ]
    },
    {
        "city_id": 2152,
        "region_id": 2,
        "name_ar": "العصلة",
        "name_en": "Al 'Isalah",
        "center": [
            21.36988003,
            41.77455005
        ]
    },
    {
        "city_id": 2153,
        "region_id": 2,
        "name_ar": "زلاقة",
        "name_en": "Zallaqah",
        "center": [
            21.39230001,
            41.78318001
        ]
    },
    {
        "city_id": 2154,
        "region_id": 2,
        "name_ar": "الحشفة",
        "name_en": "Al Hashafah",
        "center": [
            21.40320005,
            41.77295999
        ]
    },
    {
        "city_id": 2155,
        "region_id": 2,
        "name_ar": "ابو مظلة",
        "name_en": "Abu Madhallah",
        "center": [
            21.31987004,
            41.75935
        ]
    },
    {
        "city_id": 2156,
        "region_id": 2,
        "name_ar": "تربه",
        "name_en": "Turbah",
        "center": [
            21.20677997,
            41.63521004
        ]
    },
    {
        "city_id": 2157,
        "region_id": 2,
        "name_ar": "الحشرج",
        "name_en": "Al Hashraj",
        "center": [
            21.08813005,
            41.56364005
        ]
    },
    {
        "city_id": 2158,
        "region_id": 2,
        "name_ar": "شعر",
        "name_en": "Shi'r",
        "center": [
            21.44280004,
            41.78559995
        ]
    },
    {
        "city_id": 2159,
        "region_id": 5,
        "name_ar": "الربيعية",
        "name_en": "Ar Rabi'iyah",
        "center": [
            26.56667997,
            50.09033973
        ]
    },
    {
        "city_id": 2160,
        "region_id": 7,
        "name_ar": "بئر ابن رشدان",
        "name_en": "Bir Ibn Rashdan",
        "center": [
            27.69790005,
            38.61131999
        ]
    },
    {
        "city_id": 2161,
        "region_id": 5,
        "name_ar": "القديح",
        "name_en": "Al Qudayh",
        "center": [
            26.56918996,
            49.9972598
        ]
    },
    {
        "city_id": 2162,
        "region_id": 5,
        "name_ar": "الخويلدية",
        "name_en": "Al Khuwildiyah",
        "center": [
            26.51852001,
            49.97540982
        ]
    },
    {
        "city_id": 2163,
        "region_id": 5,
        "name_ar": "الدريدي",
        "name_en": "Ad Duraidy",
        "center": [
            26.65420998,
            49.89517978
        ]
    },
    {
        "city_id": 2164,
        "region_id": 5,
        "name_ar": "الخترشية",
        "name_en": "Al Khatrashiyah",
        "center": [
            26.63620001,
            49.93637981
        ]
    },
    {
        "city_id": 2165,
        "region_id": 5,
        "name_ar": "ابو معن",
        "name_en": "Abu Ma'an",
        "center": [
            26.66515004,
            49.81103989
        ]
    },
    {
        "city_id": 2166,
        "region_id": 5,
        "name_ar": "ام الساهك",
        "name_en": "Umm As Sahik",
        "center": [
            26.65903002,
            49.92348988
        ]
    },
    {
        "city_id": 2167,
        "region_id": 5,
        "name_ar": "صفوى",
        "name_en": "Safwa",
        "center": [
            26.66339995,
            49.9616098
        ]
    },
    {
        "city_id": 2168,
        "region_id": 5,
        "name_ar": "حزم ام الساهك",
        "name_en": "Hazam Umm As Sahik",
        "center": [
            26.64325999,
            49.91438979
        ]
    },
    {
        "city_id": 2169,
        "region_id": 3,
        "name_ar": "الفرش",
        "name_en": "Al Farsh",
        "center": [
            24.08960001,
            38.13419005
        ]
    },
    {
        "city_id": 2170,
        "region_id": 5,
        "name_ar": "الجش",
        "name_en": "Al Jish",
        "center": [
            26.51381322,
            49.99045039
        ]
    },
    {
        "city_id": 2171,
        "region_id": 5,
        "name_ar": "عنك",
        "name_en": "'Inak",
        "center": [
            26.52814,
            50.02680977
        ]
    },
    {
        "city_id": 2172,
        "region_id": 5,
        "name_ar": "حلة محيش",
        "name_en": "Hulat Muhish",
        "center": [
            26.53272998,
            49.99581979
        ]
    },
    {
        "city_id": 2173,
        "region_id": 5,
        "name_ar": "التوبي",
        "name_en": "At Tubi",
        "center": [
            26.52539995,
            50.00792982
        ]
    },
    {
        "city_id": 2174,
        "region_id": 5,
        "name_ar": "الملاحة",
        "name_en": "Al Malahah",
        "center": [
            26.51228857,
            50.00101063
        ]
    },
    {
        "city_id": 2175,
        "region_id": 3,
        "name_ar": "العصيلي",
        "name_en": "Al 'Usayli",
        "center": [
            24.12044999,
            38.07071
        ]
    },
    {
        "city_id": 2176,
        "region_id": 5,
        "name_ar": "دارين",
        "name_en": "Darin",
        "center": [
            26.55389001,
            50.08275981
        ]
    },
    {
        "city_id": 2177,
        "region_id": 5,
        "name_ar": "العوامية",
        "name_en": "Al 'Awwamiyah",
        "center": [
            26.59888001,
            49.98871975
        ]
    },
    {
        "city_id": 2178,
        "region_id": 5,
        "name_ar": "النابية",
        "name_en": "An Nabiyah",
        "center": [
            26.48702004,
            49.98463988
        ]
    },
    {
        "city_id": 2179,
        "region_id": 5,
        "name_ar": "الزور",
        "name_en": "Az Zawr",
        "center": [
            26.59466999,
            50.08104985
        ]
    },
    {
        "city_id": 2180,
        "region_id": 5,
        "name_ar": "الفريع",
        "name_en": "Al Furay'",
        "center": [
            27.13646999,
            49.3631299
        ]
    },
    {
        "city_id": 2182,
        "region_id": 2,
        "name_ar": "شرائع المجاهدين",
        "name_en": "Sharai' Al Mujahidin",
        "center": [
            21.49290004,
            39.96079999
        ]
    },
    {
        "city_id": 2183,
        "region_id": 2,
        "name_ar": "التنعيم",
        "name_en": "At Tan'im",
        "center": [
            21.49536005,
            39.78258006
        ]
    },
    {
        "city_id": 2184,
        "region_id": 7,
        "name_ar": "الشرف",
        "name_en": "Ash Sharaf",
        "center": [
            28.92730995,
            35.17333997
        ]
    },
    {
        "city_id": 2185,
        "region_id": 2,
        "name_ar": "الشرائع",
        "name_en": "Ash Sharai'",
        "center": [
            21.51745998,
            40.06360994
        ]
    },
    {
        "city_id": 2186,
        "region_id": 2,
        "name_ar": "الريجة",
        "name_en": "Ar Rayjah",
        "center": [
            21.59232,
            40.12636998
        ]
    },
    {
        "city_id": 2187,
        "region_id": 2,
        "name_ar": "قابل عيفان",
        "name_en": "Qabil 'Ifan",
        "center": [
            21.62047996,
            40.09100995
        ]
    },
    {
        "city_id": 2188,
        "region_id": 2,
        "name_ar": "بني عمير",
        "name_en": "Bani Umayr",
        "center": [
            21.66592001,
            40.01618999
        ]
    },
    {
        "city_id": 2189,
        "region_id": 2,
        "name_ar": "البجيدي",
        "name_en": "Al Bijaydi",
        "center": [
            21.4856,
            40.13218003
        ]
    },
    {
        "city_id": 2190,
        "region_id": 2,
        "name_ar": "قرى الصدر",
        "name_en": "Qura As Sadr",
        "center": [
            21.52108994,
            40.20459002
        ]
    },
    {
        "city_id": 2191,
        "region_id": 2,
        "name_ar": "المضيق",
        "name_en": "Al Madiq",
        "center": [
            21.67510001,
            40.12579
        ]
    },
    {
        "city_id": 2192,
        "region_id": 2,
        "name_ar": "المجاريش",
        "name_en": "Al Majarish",
        "center": [
            21.33769002,
            40.11707995
        ]
    },
    {
        "city_id": 2193,
        "region_id": 2,
        "name_ar": "الحسن",
        "name_en": "Al Hasan",
        "center": [
            21.40773002,
            40.14891996
        ]
    },
    {
        "city_id": 2194,
        "region_id": 2,
        "name_ar": "الشدقاء",
        "name_en": "Ash Shadqa",
        "center": [
            21.44630005,
            40.16377005
        ]
    },
    {
        "city_id": 2195,
        "region_id": 2,
        "name_ar": "الريقة",
        "name_en": "Ar Riqah",
        "center": [
            21.42112999,
            40.18956998
        ]
    },
    {
        "city_id": 2196,
        "region_id": 2,
        "name_ar": "الزيمة",
        "name_en": "Az Zaymah",
        "center": [
            21.62052004,
            40.11015999
        ]
    },
    {
        "city_id": 2197,
        "region_id": 2,
        "name_ar": "الشميسي",
        "name_en": "Ash Shumaysi",
        "center": [
            21.34961005,
            39.61432003
        ]
    },
    {
        "city_id": 2198,
        "region_id": 2,
        "name_ar": "ام حبيتر",
        "name_en": "Umm Hubaytir",
        "center": [
            21.28188003,
            40.08186996
        ]
    },
    {
        "city_id": 2199,
        "region_id": 2,
        "name_ar": "الصرف",
        "name_en": "As Sarf",
        "center": [
            21.29816998,
            40.07314998
        ]
    },
    {
        "city_id": 2200,
        "region_id": 2,
        "name_ar": "شداد",
        "name_en": "Shadad",
        "center": [
            21.32386001,
            40.05019998
        ]
    },
    {
        "city_id": 2201,
        "region_id": 2,
        "name_ar": "ام الزلة",
        "name_en": "Umm Al Zillah",
        "center": [
            21.05426995,
            40.04178999
        ]
    },
    {
        "city_id": 2202,
        "region_id": 2,
        "name_ar": "بني دعد",
        "name_en": "Bani Da'ad",
        "center": [
            21.15285997,
            40.09979996
        ]
    },
    {
        "city_id": 2203,
        "region_id": 2,
        "name_ar": "ام الراكة",
        "name_en": "Umm Ar Rakah",
        "center": [
            21.16410002,
            39.98667995
        ]
    },
    {
        "city_id": 2204,
        "region_id": 2,
        "name_ar": "الشعيبة",
        "name_en": "Ash Shu'aybah",
        "center": [
            20.80702994,
            39.47153006
        ]
    },
    {
        "city_id": 2205,
        "region_id": 2,
        "name_ar": "الدحيلة",
        "name_en": "Ad Duhaylah",
        "center": [
            21.65792005,
            39.98532002
        ]
    },
    {
        "city_id": 2206,
        "region_id": 2,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            21.57186006,
            39.90210006
        ]
    },
    {
        "city_id": 2207,
        "region_id": 2,
        "name_ar": "جعرانة",
        "name_en": "Ju'ranah",
        "center": [
            21.57020996,
            39.95165999
        ]
    },
    {
        "city_id": 2208,
        "region_id": 9,
        "name_ar": "طريف",
        "name_en": "Turaif",
        "center": [
            31.68193994,
            38.65750003
        ]
    },
    {
        "city_id": 2209,
        "region_id": 9,
        "name_ar": "الجراني",
        "name_en": "Al Jirani",
        "center": [
            31.81066997,
            38.27483
        ]
    },
    {
        "city_id": 2210,
        "region_id": 13,
        "name_ar": "الحماد",
        "name_en": "Al Hamad",
        "center": [
            31.43377995,
            37.96381997
        ]
    },
    {
        "city_id": 2211,
        "region_id": 9,
        "name_ar": "نعيج",
        "name_en": "Nu'ayj",
        "center": [
            31.64407999,
            37.98358996
        ]
    },
    {
        "city_id": 2212,
        "region_id": 9,
        "name_ar": "قاع الحنو",
        "name_en": "Qa' Al Hinu",
        "center": [
            30.99949996,
            38.43001004
        ]
    },
    {
        "city_id": 2213,
        "region_id": 9,
        "name_ar": "عرعر",
        "name_en": "Arar",
        "center": [
            30.97214998,
            41.01332997
        ]
    },
    {
        "city_id": 2214,
        "region_id": 9,
        "name_ar": "مركز الصحن",
        "name_en": "Markaz As Sahan",
        "center": [
            30.63446003,
            42.75294004
        ]
    },
    {
        "city_id": 2215,
        "region_id": 9,
        "name_ar": "العويقلية",
        "name_en": "Al 'Uwayqiliyah",
        "center": [
            30.38782999,
            42.23977006
        ]
    },
    {
        "city_id": 2216,
        "region_id": 9,
        "name_ar": "أبا الرواث",
        "name_en": "Aba Ar Rawath",
        "center": [
            30.48311005,
            42.00819001
        ]
    },
    {
        "city_id": 2217,
        "region_id": 9,
        "name_ar": "الكاسب",
        "name_en": "Al Kasib",
        "center": [
            30.53767,
            41.95729005
        ]
    },
    {
        "city_id": 2218,
        "region_id": 9,
        "name_ar": "أم خنصر",
        "name_en": "Umm Khunsur",
        "center": [
            30.69742001,
            41.62676001
        ]
    },
    {
        "city_id": 2219,
        "region_id": 9,
        "name_ar": "حزم الجلاميد",
        "name_en": "Hazam Al Jalamid",
        "center": [
            31.28288,
            40.10798001
        ]
    },
    {
        "city_id": 2220,
        "region_id": 9,
        "name_ar": "الدويد",
        "name_en": "Ad Duwayd",
        "center": [
            30.22807003,
            42.29200005
        ]
    },
    {
        "city_id": 2221,
        "region_id": 9,
        "name_ar": "جديدة عرعر",
        "name_en": "Jadidat 'Ar'ar",
        "center": [
            31.35207002,
            41.44392005
        ]
    },
    {
        "city_id": 2222,
        "region_id": 13,
        "name_ar": "كاف",
        "name_en": "Kaf",
        "center": [
            31.39420006,
            37.50056007
        ]
    },
    {
        "city_id": 2223,
        "region_id": 13,
        "name_ar": "القرقر",
        "name_en": "Al Qarqar",
        "center": [
            31.35135001,
            37.54635996
        ]
    },
    {
        "city_id": 2224,
        "region_id": 13,
        "name_ar": "إثرة",
        "name_en": "Ithrah",
        "center": [
            31.38758994,
            37.61526994
        ]
    },
    {
        "city_id": 2225,
        "region_id": 13,
        "name_ar": "غطي",
        "name_en": "Ghutayy",
        "center": [
            31.27738999,
            37.52431003
        ]
    },
    {
        "city_id": 2226,
        "region_id": 13,
        "name_ar": "القريات",
        "name_en": "Al Qurayyat",
        "center": [
            31.35133999,
            37.33972993
        ]
    },
    {
        "city_id": 2227,
        "region_id": 13,
        "name_ar": "عين الحواسي",
        "name_en": "'Ayn Al Hawasi",
        "center": [
            31.37283003,
            37.60495005
        ]
    },
    {
        "city_id": 2228,
        "region_id": 13,
        "name_ar": "قليب خضر",
        "name_en": "Qulayyib Khudr",
        "center": [
            30.82263997,
            37.85159006
        ]
    },
    {
        "city_id": 2229,
        "region_id": 13,
        "name_ar": "العيساوية",
        "name_en": "Al Isawiyah",
        "center": [
            30.73120004,
            37.97120002
        ]
    },
    {
        "city_id": 2230,
        "region_id": 13,
        "name_ar": "الحديثة",
        "name_en": "Al Hadithah",
        "center": [
            31.46886005,
            37.13793999
        ]
    },
    {
        "city_id": 2231,
        "region_id": 13,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            31.07881994,
            37.63061004
        ]
    },
    {
        "city_id": 2232,
        "region_id": 13,
        "name_ar": "الشقيق",
        "name_en": "Ash Shaqiq",
        "center": [
            29.84423997,
            40.16806006
        ]
    },
    {
        "city_id": 2233,
        "region_id": 13,
        "name_ar": "الحوي",
        "name_en": "Al Hawi",
        "center": [
            29.26561003,
            38.24427004
        ]
    },
    {
        "city_id": 2234,
        "region_id": 13,
        "name_ar": "صوير",
        "name_en": "Suwayr",
        "center": [
            30.14147004,
            40.36975004
        ]
    },
    {
        "city_id": 2235,
        "region_id": 13,
        "name_ar": "حدرج",
        "name_en": "Hidrij",
        "center": [
            30.33157995,
            37.68685004
        ]
    },
    {
        "city_id": 2236,
        "region_id": 13,
        "name_ar": "ام طليحة",
        "name_en": "Umm Tulayhah",
        "center": [
            30.00362004,
            37.55725996
        ]
    },
    {
        "city_id": 2237,
        "region_id": 13,
        "name_ar": "سكاكا",
        "name_en": "Sakaka",
        "center": [
            29.9728,
            40.21416997
        ]
    },
    {
        "city_id": 2238,
        "region_id": 13,
        "name_ar": "اللقايط",
        "name_en": "Al Laqayit",
        "center": [
            29.99463995,
            40.24232994
        ]
    },
    {
        "city_id": 2239,
        "region_id": 13,
        "name_ar": "صبيحة",
        "name_en": "Subayhah",
        "center": [
            30.04140998,
            38.84114001
        ]
    },
    {
        "city_id": 2240,
        "region_id": 13,
        "name_ar": "طبرجل",
        "name_en": "Tubarjal",
        "center": [
            30.50098005,
            38.22183997
        ]
    },
    {
        "city_id": 2241,
        "region_id": 13,
        "name_ar": "الفياض",
        "name_en": "Al Fiyad",
        "center": [
            29.98542001,
            40.08523002
        ]
    },
    {
        "city_id": 2242,
        "region_id": 13,
        "name_ar": "قارا",
        "name_en": "Qara",
        "center": [
            29.87852006,
            40.22009006
        ]
    },
    {
        "city_id": 2243,
        "region_id": 13,
        "name_ar": "الثنية",
        "name_en": "Ath Thaniyah",
        "center": [
            29.75867996,
            38.17847998
        ]
    },
    {
        "city_id": 2244,
        "region_id": 13,
        "name_ar": "ام نخيلة",
        "name_en": "Umm Nakhilah",
        "center": [
            29.49712005,
            38.57924001
        ]
    },
    {
        "city_id": 2245,
        "region_id": 13,
        "name_ar": "المرير",
        "name_en": "Al Murayr",
        "center": [
            30.05246996,
            39.90161
        ]
    },
    {
        "city_id": 2246,
        "region_id": 13,
        "name_ar": "زلوم",
        "name_en": "Zallum",
        "center": [
            30.17442994,
            40.29357999
        ]
    },
    {
        "city_id": 2247,
        "region_id": 13,
        "name_ar": "النبك ابو قصر",
        "name_en": "An Nabk Abu Qasr",
        "center": [
            30.30041003,
            38.69426999
        ]
    },
    {
        "city_id": 2248,
        "region_id": 13,
        "name_ar": "طلعة عمار",
        "name_en": "Tal'at 'Ammar",
        "center": [
            30.67703998,
            40.55438002
        ]
    },
    {
        "city_id": 2249,
        "region_id": 13,
        "name_ar": "عذفاء",
        "name_en": "'Adhfa",
        "center": [
            29.24663001,
            41.42611004
        ]
    },
    {
        "city_id": 2250,
        "region_id": 13,
        "name_ar": "خوعاء",
        "name_en": "Khaw'a'",
        "center": [
            29.81154002,
            40.43703002
        ]
    },
    {
        "city_id": 2251,
        "region_id": 13,
        "name_ar": "الشويحطية",
        "name_en": "Ash Shuwayhitiyah",
        "center": [
            30.31285002,
            40.19509993
        ]
    },
    {
        "city_id": 2252,
        "region_id": 9,
        "name_ar": "مركز أم الحيران",
        "name_en": "Markaz Umm Al Hiran",
        "center": [
            29.16327,
            45.16090995
        ]
    },
    {
        "city_id": 2253,
        "region_id": 5,
        "name_ar": "مركز سماح الجديد",
        "name_en": "Markaz Samah Al Jadid",
        "center": [
            29.13576999,
            45.52222999
        ]
    },
    {
        "city_id": 2254,
        "region_id": 5,
        "name_ar": "مركز الظهرة",
        "name_en": "Markaz Adh Dhahrah",
        "center": [
            29.10842005,
            45.86389004
        ]
    },
    {
        "city_id": 2255,
        "region_id": 9,
        "name_ar": "إبن سوقي",
        "name_en": "Ibn Suqi",
        "center": [
            29.77632003,
            43.37192004
        ]
    },
    {
        "city_id": 2256,
        "region_id": 9,
        "name_ar": "رفحاء",
        "name_en": "Rafha'",
        "center": [
            29.63723002,
            43.49903001
        ]
    },
    {
        "city_id": 2257,
        "region_id": 9,
        "name_ar": "نصاب",
        "name_en": "Nisab",
        "center": [
            29.19001,
            44.78566995
        ]
    },
    {
        "city_id": 2258,
        "region_id": 5,
        "name_ar": "سماح",
        "name_en": "Samah",
        "center": [
            28.93762996,
            45.55701
        ]
    },
    {
        "city_id": 2259,
        "region_id": 9,
        "name_ar": "لوقة",
        "name_en": "Lawqah",
        "center": [
            29.83564003,
            42.74389004
        ]
    },
    {
        "city_id": 2260,
        "region_id": 9,
        "name_ar": "ام رضمة",
        "name_en": "Umm Rudmah",
        "center": [
            28.69226003,
            44.69069001
        ]
    },
    {
        "city_id": 2261,
        "region_id": 5,
        "name_ar": "ابن لغيصم",
        "name_en": "Ibn Lughaisim",
        "center": [
            28.2442,
            45.24091999
        ]
    },
    {
        "city_id": 2262,
        "region_id": 9,
        "name_ar": "روضة هباس",
        "name_en": "Rawdat Habbas",
        "center": [
            29.15764995,
            44.31328003
        ]
    },
    {
        "city_id": 2263,
        "region_id": 9,
        "name_ar": "التمياط",
        "name_en": "Timiat",
        "center": [
            29.88348997,
            43.14656996
        ]
    },
    {
        "city_id": 2264,
        "region_id": 9,
        "name_ar": "إبن شريم",
        "name_en": "Ibn Shuraym",
        "center": [
            29.93399,
            43.42812
        ]
    },
    {
        "city_id": 2265,
        "region_id": 9,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            28.89277003,
            44.73194004
        ]
    },
    {
        "city_id": 2266,
        "region_id": 9,
        "name_ar": "لينة",
        "name_en": "Linah",
        "center": [
            28.76579997,
            43.74796994
        ]
    },
    {
        "city_id": 2267,
        "region_id": 9,
        "name_ar": "المركوز",
        "name_en": "Al Markuz",
        "center": [
            30.16829998,
            42.63975
        ]
    },
    {
        "city_id": 2268,
        "region_id": 13,
        "name_ar": "دومة الجندل",
        "name_en": "Dawmat Al Jandal",
        "center": [
            29.81786995,
            39.86566997
        ]
    },
    {
        "city_id": 2269,
        "region_id": 13,
        "name_ar": "ميقوع",
        "name_en": "Mayqu'",
        "center": [
            29.89132002,
            39.04258998
        ]
    },
    {
        "city_id": 2270,
        "region_id": 13,
        "name_ar": "الأضارع",
        "name_en": "Al Adari'",
        "center": [
            29.82666005,
            39.55713005
        ]
    },
    {
        "city_id": 2271,
        "region_id": 13,
        "name_ar": "صفان",
        "name_en": "Safan",
        "center": [
            29.67291997,
            39.70001003
        ]
    },
    {
        "city_id": 2272,
        "region_id": 13,
        "name_ar": "الرديفة",
        "name_en": "Ar Radifah",
        "center": [
            29.81385339,
            39.6935473
        ]
    },
    {
        "city_id": 2273,
        "region_id": 13,
        "name_ar": "ابو عجرم",
        "name_en": "Abu 'Ajram",
        "center": [
            29.87618004,
            39.32821997
        ]
    },
    {
        "city_id": 2274,
        "region_id": 13,
        "name_ar": "الطوير",
        "name_en": "At Tuwayr",
        "center": [
            29.91137996,
            40.19980994
        ]
    },
    {
        "city_id": 2275,
        "region_id": 8,
        "name_ar": "صديان",
        "name_en": "Sadyan",
        "center": [
            27.55897001,
            41.71785005
        ]
    },
    {
        "city_id": 2276,
        "region_id": 8,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            27.49752998,
            41.67789997
        ]
    },
    {
        "city_id": 2277,
        "region_id": 8,
        "name_ar": "البير",
        "name_en": "Al Bir",
        "center": [
            26.89463003,
            40.14425002
        ]
    },
    {
        "city_id": 2278,
        "region_id": 8,
        "name_ar": "البويطن",
        "name_en": "Al Buwaytin",
        "center": [
            26.84963996,
            40.05602
        ]
    },
    {
        "city_id": 2279,
        "region_id": 8,
        "name_ar": "بدائع العش",
        "name_en": "Badai' Al 'Ishsh",
        "center": [
            27.08357997,
            41.66239999
        ]
    },
    {
        "city_id": 2280,
        "region_id": 8,
        "name_ar": "صحي",
        "name_en": "Sahayy",
        "center": [
            27.27076996,
            41.26840998
        ]
    },
    {
        "city_id": 2281,
        "region_id": 8,
        "name_ar": "الوبيرية",
        "name_en": "Al Wubayriyah",
        "center": [
            27.27755999,
            41.28745999
        ]
    },
    {
        "city_id": 2282,
        "region_id": 8,
        "name_ar": "قصيريات",
        "name_en": "Qusayriyat",
        "center": [
            27.45314997,
            41.10265994
        ]
    },
    {
        "city_id": 2283,
        "region_id": 8,
        "name_ar": "سعيدان",
        "name_en": "Su'aydan",
        "center": [
            27.49774001,
            40.91496997
        ]
    },
    {
        "city_id": 2284,
        "region_id": 8,
        "name_ar": "جفيفاء",
        "name_en": "Jufayfa",
        "center": [
            27.19338005,
            40.99218003
        ]
    },
    {
        "city_id": 2285,
        "region_id": 8,
        "name_ar": "الغمياء",
        "name_en": "Al Ghamya",
        "center": [
            27.35599004,
            40.81505998
        ]
    },
    {
        "city_id": 2286,
        "region_id": 8,
        "name_ar": "الفرحانية",
        "name_en": "Al Farhaniyah",
        "center": [
            27.29925005,
            40.94617006
        ]
    },
    {
        "city_id": 2287,
        "region_id": 8,
        "name_ar": "المليح",
        "name_en": "Al Mulayh",
        "center": [
            27.19839006,
            40.89421005
        ]
    },
    {
        "city_id": 2288,
        "region_id": 8,
        "name_ar": "حفيرة الشقيق",
        "name_en": "Hafirat Ash Shaqayq",
        "center": [
            27.19023003,
            40.82506005
        ]
    },
    {
        "city_id": 2289,
        "region_id": 8,
        "name_ar": "جرمة",
        "name_en": "Jurumah",
        "center": [
            27.06607001,
            40.89093994
        ]
    },
    {
        "city_id": 2290,
        "region_id": 8,
        "name_ar": "السفن",
        "name_en": "As Sufun",
        "center": [
            27.74023996,
            41.52199002
        ]
    },
    {
        "city_id": 2291,
        "region_id": 8,
        "name_ar": "منيفة القاعد",
        "name_en": "Munifah Al Qa'id",
        "center": [
            27.86575,
            41.66085003
        ]
    },
    {
        "city_id": 2292,
        "region_id": 8,
        "name_ar": "القاعد",
        "name_en": "Al Qa'id",
        "center": [
            27.84813004,
            41.73321997
        ]
    },
    {
        "city_id": 2293,
        "region_id": 8,
        "name_ar": "الطوال",
        "name_en": "At Tuwal",
        "center": [
            27.97931,
            41.66314
        ]
    },
    {
        "city_id": 2294,
        "region_id": 8,
        "name_ar": "الشعفة",
        "name_en": "Ash Sha'afah",
        "center": [
            27.93505999,
            41.75347999
        ]
    },
    {
        "city_id": 2295,
        "region_id": 8,
        "name_ar": "الجلف",
        "name_en": "Al Jilf",
        "center": [
            27.90033003,
            41.82313999
        ]
    },
    {
        "city_id": 2296,
        "region_id": 8,
        "name_ar": "الهرير",
        "name_en": "Al Hurayr",
        "center": [
            27.88157999,
            41.81342002
        ]
    },
    {
        "city_id": 2297,
        "region_id": 8,
        "name_ar": "طوية",
        "name_en": "Tuwayyah",
        "center": [
            27.66234001,
            40.96846
        ]
    },
    {
        "city_id": 2298,
        "region_id": 8,
        "name_ar": "البدع",
        "name_en": "Al Bada'",
        "center": [
            27.54825999,
            40.61042007
        ]
    },
    {
        "city_id": 2299,
        "region_id": 8,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            27.23237998,
            41.20580993
        ]
    },
    {
        "city_id": 2300,
        "region_id": 8,
        "name_ar": "الرويع",
        "name_en": "Ar Ruway'",
        "center": [
            27.23732001,
            41.17765
        ]
    },
    {
        "city_id": 2301,
        "region_id": 8,
        "name_ar": "العضدي",
        "name_en": "Al 'Iddi",
        "center": [
            27.04338002,
            41.01160997
        ]
    },
    {
        "city_id": 2302,
        "region_id": 8,
        "name_ar": "المرمى",
        "name_en": "Al Marma",
        "center": [
            27.12811995,
            41.06462003
        ]
    },
    {
        "city_id": 2303,
        "region_id": 8,
        "name_ar": "المندسة الشرقية",
        "name_en": "Al Mindassah Ash Sharqiyah",
        "center": [
            28.00470005,
            42.02255004
        ]
    },
    {
        "city_id": 2304,
        "region_id": 8,
        "name_ar": "التيم",
        "name_en": "At Tim",
        "center": [
            28.06415002,
            41.98288003
        ]
    },
    {
        "city_id": 2305,
        "region_id": 8,
        "name_ar": "القليبين",
        "name_en": "Al Qulaybayn",
        "center": [
            27.43168996,
            41.47318002
        ]
    },
    {
        "city_id": 2306,
        "region_id": 8,
        "name_ar": "رينبة",
        "name_en": "Raynibah",
        "center": [
            27.28315003,
            41.51842004
        ]
    },
    {
        "city_id": 2307,
        "region_id": 8,
        "name_ar": "المكظم",
        "name_en": "Al Makdham",
        "center": [
            27.26326822,
            41.40768488
        ]
    },
    {
        "city_id": 2308,
        "region_id": 8,
        "name_ar": "الحميراء",
        "name_en": "Al Humayra",
        "center": [
            27.29512999,
            41.44607003
        ]
    },
    {
        "city_id": 2309,
        "region_id": 8,
        "name_ar": "الغار",
        "name_en": "Al Ghar",
        "center": [
            27.17081998,
            41.57469997
        ]
    },
    {
        "city_id": 2310,
        "region_id": 8,
        "name_ar": "المعيقلات",
        "name_en": "Al Mu'ayqilat",
        "center": [
            27.29599995,
            41.37870997
        ]
    },
    {
        "city_id": 2311,
        "region_id": 8,
        "name_ar": "المويكر",
        "name_en": "Al Muwaykir",
        "center": [
            27.01485996,
            41.54454002
        ]
    },
    {
        "city_id": 2312,
        "region_id": 8,
        "name_ar": "المكظم",
        "name_en": "Al Makdham",
        "center": [
            27.03150999,
            41.51827998
        ]
    },
    {
        "city_id": 2313,
        "region_id": 8,
        "name_ar": "الدارة",
        "name_en": "Ad Darah",
        "center": [
            26.99616003,
            41.47827994
        ]
    },
    {
        "city_id": 2314,
        "region_id": 8,
        "name_ar": "الشبيكة",
        "name_en": "Ash Shubaykah",
        "center": [
            27.04478997,
            41.46325995
        ]
    },
    {
        "city_id": 2315,
        "region_id": 8,
        "name_ar": "المبعوثة",
        "name_en": "Al Mab'uthah",
        "center": [
            27.06698002,
            41.46263994
        ]
    },
    {
        "city_id": 2316,
        "region_id": 8,
        "name_ar": "الجفر",
        "name_en": "Al Jafr",
        "center": [
            26.98339005,
            41.42911004
        ]
    },
    {
        "city_id": 2317,
        "region_id": 8,
        "name_ar": "المعترضة",
        "name_en": "Al Mu'taridah",
        "center": [
            26.86746003,
            41.45023999
        ]
    },
    {
        "city_id": 2318,
        "region_id": 8,
        "name_ar": "اللقيطه",
        "name_en": "Al Liqitah",
        "center": [
            27.65105002,
            41.69020005
        ]
    },
    {
        "city_id": 2319,
        "region_id": 8,
        "name_ar": "منشار",
        "name_en": "Minshar",
        "center": [
            27.59011999,
            41.62932005
        ]
    },
    {
        "city_id": 2320,
        "region_id": 8,
        "name_ar": "سهلة بدنة",
        "name_en": "Sahlat Badanah",
        "center": [
            27.38163002,
            41.65014993
        ]
    },
    {
        "city_id": 2321,
        "region_id": 8,
        "name_ar": "بدائع مريفق",
        "name_en": "Badai' Murayfiq",
        "center": [
            27.34940997,
            41.62665002
        ]
    },
    {
        "city_id": 2322,
        "region_id": 8,
        "name_ar": "السليل",
        "name_en": "As Sulayyil",
        "center": [
            27.58980995,
            41.50990994
        ]
    },
    {
        "city_id": 2323,
        "region_id": 8,
        "name_ar": "الصليعاء",
        "name_en": "As Sulay'a",
        "center": [
            27.52104003,
            41.45707007
        ]
    },
    {
        "city_id": 2324,
        "region_id": 8,
        "name_ar": "الصبيحية",
        "name_en": "As Subayhiyah",
        "center": [
            27.54013003,
            41.43925005
        ]
    },
    {
        "city_id": 2325,
        "region_id": 8,
        "name_ar": "الأثلة",
        "name_en": "Al Athlah",
        "center": [
            27.48703004,
            41.53156002
        ]
    },
    {
        "city_id": 2326,
        "region_id": 8,
        "name_ar": "حويان",
        "name_en": "Huwayyan",
        "center": [
            27.03849,
            41.21256003
        ]
    },
    {
        "city_id": 2327,
        "region_id": 8,
        "name_ar": "المبيدع",
        "name_en": "Al Mubaydi'",
        "center": [
            27.18714994,
            41.31646996
        ]
    },
    {
        "city_id": 2328,
        "region_id": 8,
        "name_ar": "المبدع",
        "name_en": "Al Mabda'",
        "center": [
            27.20878005,
            41.31127998
        ]
    },
    {
        "city_id": 2329,
        "region_id": 7,
        "name_ar": "كلوة",
        "name_en": "Kilwah",
        "center": [
            29.67577996,
            37.58392002
        ]
    },
    {
        "city_id": 2331,
        "region_id": 8,
        "name_ar": "العمائر",
        "name_en": "Al 'Amair",
        "center": [
            27.00482005,
            40.30888002
        ]
    },
    {
        "city_id": 2332,
        "region_id": 8,
        "name_ar": "الشملي",
        "name_en": "Ash Shamli",
        "center": [
            26.84331,
            40.31884998
        ]
    },
    {
        "city_id": 2333,
        "region_id": 8,
        "name_ar": "المسلسل",
        "name_en": "Al Musalsal",
        "center": [
            27.60086006,
            40.44603004
        ]
    },
    {
        "city_id": 2334,
        "region_id": 8,
        "name_ar": "سبطر",
        "name_en": "Sibutar",
        "center": [
            26.98379997,
            40.27417
        ]
    },
    {
        "city_id": 2336,
        "region_id": 8,
        "name_ar": "غرمول العويد",
        "name_en": "Ghurmul Al Uwayd",
        "center": [
            27.66776005,
            40.24462995
        ]
    },
    {
        "city_id": 2337,
        "region_id": 8,
        "name_ar": "الحامرية",
        "name_en": "Al Hamiriyah",
        "center": [
            27.01437001,
            41.62912006
        ]
    },
    {
        "city_id": 2338,
        "region_id": 8,
        "name_ar": "الخبة",
        "name_en": "Al Khubbah",
        "center": [
            27.43308004,
            40.91622
        ]
    },
    {
        "city_id": 2339,
        "region_id": 8,
        "name_ar": "الحطي",
        "name_en": "Al Hati",
        "center": [
            27.52566002,
            41.08933002
        ]
    },
    {
        "city_id": 2340,
        "region_id": 8,
        "name_ar": "الصنينا",
        "name_en": "As Sunayna'",
        "center": [
            27.33320997,
            41.05455006
        ]
    },
    {
        "city_id": 2341,
        "region_id": 8,
        "name_ar": "دليهان",
        "name_en": "Dulayhan",
        "center": [
            27.29449,
            40.93939994
        ]
    },
    {
        "city_id": 2342,
        "region_id": 8,
        "name_ar": "الشقيق",
        "name_en": "Ash Shaqiq",
        "center": [
            27.16775001,
            40.90580999
        ]
    },
    {
        "city_id": 2343,
        "region_id": 8,
        "name_ar": "ابا الحيران",
        "name_en": "Aba Al Hiran",
        "center": [
            27.05360006,
            40.94405998
        ]
    },
    {
        "city_id": 2344,
        "region_id": 8,
        "name_ar": "قليب الاطرم",
        "name_en": "Qalib Al Atram",
        "center": [
            27.06940005,
            40.50972999
        ]
    },
    {
        "city_id": 2345,
        "region_id": 8,
        "name_ar": "بيضاء نثيل",
        "name_en": "Bayda' Nathil",
        "center": [
            27.05017995,
            40.43648003
        ]
    },
    {
        "city_id": 2346,
        "region_id": 8,
        "name_ar": "قناء",
        "name_en": "Qina'",
        "center": [
            27.78027996,
            41.44103006
        ]
    },
    {
        "city_id": 2347,
        "region_id": 8,
        "name_ar": "المشيطية",
        "name_en": "Al Mushaytiyah",
        "center": [
            27.78119,
            41.48440001
        ]
    },
    {
        "city_id": 2348,
        "region_id": 8,
        "name_ar": "التربية",
        "name_en": "At Turbiyah",
        "center": [
            27.82594994,
            41.58315996
        ]
    },
    {
        "city_id": 2349,
        "region_id": 8,
        "name_ar": "الخطة",
        "name_en": "Al Khuttah",
        "center": [
            28.00030002,
            41.73456
        ]
    },
    {
        "city_id": 2350,
        "region_id": 8,
        "name_ar": "جبة",
        "name_en": "Jubbah",
        "center": [
            28.02072998,
            40.96025001
        ]
    },
    {
        "city_id": 2351,
        "region_id": 8,
        "name_ar": "موقق",
        "name_en": "Mawqaq",
        "center": [
            27.38726005,
            41.17471
        ]
    },
    {
        "city_id": 2352,
        "region_id": 8,
        "name_ar": "عقلة بن جبرين",
        "name_en": "Uqlat Bin Jabrin",
        "center": [
            27.17664003,
            41.31631997
        ]
    },
    {
        "city_id": 2353,
        "region_id": 8,
        "name_ar": "ام القلبان",
        "name_en": "Umm Al Qulban",
        "center": [
            27.81660001,
            41.43294004
        ]
    },
    {
        "city_id": 2354,
        "region_id": 8,
        "name_ar": "مزارع السحل",
        "name_en": "Mazari' As Sihhal",
        "center": [
            27.26505998,
            42.50816999
        ]
    },
    {
        "city_id": 2355,
        "region_id": 8,
        "name_ar": "مزارع الرغلية",
        "name_en": "Mazari Ar Righliyah",
        "center": [
            27.42603002,
            42.54716001
        ]
    },
    {
        "city_id": 2356,
        "region_id": 8,
        "name_ar": "الطليحة",
        "name_en": "At Tulayhah",
        "center": [
            27.39895998,
            43.22801997
        ]
    },
    {
        "city_id": 2357,
        "region_id": 8,
        "name_ar": "مزارع الصفيا",
        "name_en": "Mazari' As Safya",
        "center": [
            27.33714003,
            42.66915997
        ]
    },
    {
        "city_id": 2358,
        "region_id": 8,
        "name_ar": "البدائع",
        "name_en": "Al Badai'",
        "center": [
            27.44330999,
            42.97330004
        ]
    },
    {
        "city_id": 2359,
        "region_id": 8,
        "name_ar": "الهمجة",
        "name_en": "Al Hamjah",
        "center": [
            27.61637997,
            43.20679996
        ]
    },
    {
        "city_id": 2360,
        "region_id": 8,
        "name_ar": "المهينية",
        "name_en": "Al Mihayniyah",
        "center": [
            27.70152,
            43.06203995
        ]
    },
    {
        "city_id": 2361,
        "region_id": 8,
        "name_ar": "الجابرية",
        "name_en": "Al Jabiriyah",
        "center": [
            27.97643004,
            42.24155004
        ]
    },
    {
        "city_id": 2362,
        "region_id": 8,
        "name_ar": "الوعيلي",
        "name_en": "Al Wu'ayli",
        "center": [
            27.85004997,
            42.09886001
        ]
    },
    {
        "city_id": 2363,
        "region_id": 8,
        "name_ar": "مزارع الرخيصية",
        "name_en": "Mazari' Ar Rikhaysiyah",
        "center": [
            27.94061,
            42.60471004
        ]
    },
    {
        "city_id": 2364,
        "region_id": 8,
        "name_ar": "مزارع بيط",
        "name_en": "Mazari' Bayt",
        "center": [
            27.92926997,
            42.64150006
        ]
    },
    {
        "city_id": 2365,
        "region_id": 8,
        "name_ar": "الجثياثة",
        "name_en": "Al Jithyathah",
        "center": [
            27.72920003,
            42.64625999
        ]
    },
    {
        "city_id": 2366,
        "region_id": 8,
        "name_ar": "القصعاء",
        "name_en": "Al Qas'a",
        "center": [
            27.64744001,
            42.55120994
        ]
    },
    {
        "city_id": 2367,
        "region_id": 8,
        "name_ar": "اللويبدة",
        "name_en": "Al Luwaybidah",
        "center": [
            27.56234996,
            42.71263006
        ]
    },
    {
        "city_id": 2368,
        "region_id": 8,
        "name_ar": "الجثامية",
        "name_en": "Al Jithamiyyah",
        "center": [
            27.67144001,
            41.73391006
        ]
    },
    {
        "city_id": 2369,
        "region_id": 8,
        "name_ar": "السويفلة",
        "name_en": "As Suwayfilah",
        "center": [
            27.58841006,
            41.76347996
        ]
    },
    {
        "city_id": 2370,
        "region_id": 8,
        "name_ar": "بقعاء",
        "name_en": "Baq'a",
        "center": [
            27.91023996,
            42.40918005
        ]
    },
    {
        "city_id": 2371,
        "region_id": 8,
        "name_ar": "الاجفر",
        "name_en": "Al Ajfar",
        "center": [
            27.47859001,
            42.99625994
        ]
    },
    {
        "city_id": 2372,
        "region_id": 8,
        "name_ar": "تربه",
        "name_en": "Turbah",
        "center": [
            28.25271994,
            42.91852998
        ]
    },
    {
        "city_id": 2373,
        "region_id": 8,
        "name_ar": "ضبيعة",
        "name_en": "Dubay'ah",
        "center": [
            27.96894996,
            42.17404006
        ]
    },
    {
        "city_id": 2374,
        "region_id": 8,
        "name_ar": "الشيحية",
        "name_en": "Ash Shihiyah",
        "center": [
            27.88362996,
            42.67986004
        ]
    },
    {
        "city_id": 2375,
        "region_id": 8,
        "name_ar": "الشعيبة",
        "name_en": "Ash Shu'aybah",
        "center": [
            27.84774999,
            42.77615004
        ]
    },
    {
        "city_id": 2376,
        "region_id": 8,
        "name_ar": "بقعاء الشرقية",
        "name_en": "Baq'a' Ash Sharqiyah",
        "center": [
            27.86440003,
            42.43598998
        ]
    },
    {
        "city_id": 2377,
        "region_id": 8,
        "name_ar": "الثنيان",
        "name_en": "Ath Thinayyan",
        "center": [
            27.87447002,
            42.11379002
        ]
    },
    {
        "city_id": 2378,
        "region_id": 8,
        "name_ar": "الجديدة",
        "name_en": "Al Jadidah",
        "center": [
            27.97175004,
            42.10766997
        ]
    },
    {
        "city_id": 2379,
        "region_id": 8,
        "name_ar": "الشعلانية",
        "name_en": "Ash Sha'laniyah",
        "center": [
            27.73343002,
            42.56622001
        ]
    },
    {
        "city_id": 2380,
        "region_id": 8,
        "name_ar": "طلحاء",
        "name_en": "Talha'",
        "center": [
            27.70612998,
            42.92720995
        ]
    },
    {
        "city_id": 2381,
        "region_id": 7,
        "name_ar": "العمود",
        "name_en": "Al 'Amud",
        "center": [
            27.21717006,
            35.83616002
        ]
    },
    {
        "city_id": 2382,
        "region_id": 7,
        "name_ar": "الحميرة",
        "name_en": "Al Humayrah",
        "center": [
            27.49642005,
            35.60568994
        ]
    },
    {
        "city_id": 2383,
        "region_id": 7,
        "name_ar": "الغال",
        "name_en": "Al Ghal",
        "center": [
            27.46871998,
            35.58402005
        ]
    },
    {
        "city_id": 2384,
        "region_id": 7,
        "name_ar": "السجدة",
        "name_en": "Al Sajdah",
        "center": [
            27.46866997,
            35.60777005
        ]
    },
    {
        "city_id": 2385,
        "region_id": 7,
        "name_ar": "الحشا",
        "name_en": "Al Hasha",
        "center": [
            27.41522,
            35.62193004
        ]
    },
    {
        "city_id": 2386,
        "region_id": 7,
        "name_ar": "عينونة",
        "name_en": "'Aynunah",
        "center": [
            28.09388996,
            35.19133002
        ]
    },
    {
        "city_id": 2387,
        "region_id": 7,
        "name_ar": "بئر عودة",
        "name_en": "Bir 'Audah",
        "center": [
            27.37919,
            36.33933994
        ]
    },
    {
        "city_id": 2388,
        "region_id": 7,
        "name_ar": "الجدة",
        "name_en": "Al Jiddah",
        "center": [
            27.62959,
            35.89756994
        ]
    },
    {
        "city_id": 2389,
        "region_id": 4,
        "name_ar": "مطربة",
        "name_en": "Mutribah",
        "center": [
            25.49373003,
            42.30868001
        ]
    },
    {
        "city_id": 2390,
        "region_id": 4,
        "name_ar": "الطرفية الغربية",
        "name_en": "At Turfiyah Al Gharbiyah",
        "center": [
            25.41136003,
            42.31247995
        ]
    },
    {
        "city_id": 2391,
        "region_id": 4,
        "name_ar": "البديعة",
        "name_en": "Al Badi'ah",
        "center": [
            25.40258005,
            42.09277998
        ]
    },
    {
        "city_id": 2392,
        "region_id": 4,
        "name_ar": "عريفجان ساحوق",
        "name_en": "'Urayfjan Sahuq",
        "center": [
            25.36427003,
            42.03287003
        ]
    },
    {
        "city_id": 2393,
        "region_id": 4,
        "name_ar": "الصليبي",
        "name_en": "As Sulaybi",
        "center": [
            25.62431999,
            43.05094003
        ]
    },
    {
        "city_id": 2394,
        "region_id": 4,
        "name_ar": "الزهيرية",
        "name_en": "Az Zihayriyah",
        "center": [
            25.63401998,
            43.01332994
        ]
    },
    {
        "city_id": 2395,
        "region_id": 4,
        "name_ar": "روضة قرادان",
        "name_en": "Rawdat Qiradan",
        "center": [
            25.91108999,
            42.88184006
        ]
    },
    {
        "city_id": 2396,
        "region_id": 4,
        "name_ar": "أبانات",
        "name_en": "Abanat",
        "center": [
            25.50121001,
            42.85269006
        ]
    },
    {
        "city_id": 2397,
        "region_id": 4,
        "name_ar": "الحنينية",
        "name_en": "Al Hinayniyah",
        "center": [
            25.51314005,
            42.96254005
        ]
    },
    {
        "city_id": 2398,
        "region_id": 4,
        "name_ar": "خضراء",
        "name_en": "Khadra",
        "center": [
            25.49088001,
            42.99983996
        ]
    },
    {
        "city_id": 2399,
        "region_id": 4,
        "name_ar": "ضليع رشيد",
        "name_en": "Dulay' Rashid",
        "center": [
            25.4976657,
            42.84069852
        ]
    },
    {
        "city_id": 2400,
        "region_id": 4,
        "name_ar": "الخطيم",
        "name_en": "Al Khutaym",
        "center": [
            25.63115001,
            42.54262999
        ]
    },
    {
        "city_id": 2401,
        "region_id": 4,
        "name_ar": "عطا",
        "name_en": "'Ata",
        "center": [
            25.71455995,
            42.72773001
        ]
    },
    {
        "city_id": 2402,
        "region_id": 4,
        "name_ar": "عطي",
        "name_en": "'Utayy",
        "center": [
            25.76378997,
            42.77272005
        ]
    },
    {
        "city_id": 2403,
        "region_id": 4,
        "name_ar": "الهمجة",
        "name_en": "Al Hamjah",
        "center": [
            25.49130002,
            43.06827
        ]
    },
    {
        "city_id": 2404,
        "region_id": 4,
        "name_ar": "رفائع اللهيب",
        "name_en": "Ruf'ai' Al Luhayb",
        "center": [
            25.22625001,
            42.81613
        ]
    },
    {
        "city_id": 2405,
        "region_id": 4,
        "name_ar": "الجرذاوية",
        "name_en": "Al Jardhawiyah",
        "center": [
            25.39487001,
            42.73419995
        ]
    },
    {
        "city_id": 2406,
        "region_id": 4,
        "name_ar": "الركنة",
        "name_en": "Ar Ruknah",
        "center": [
            25.29947995,
            42.58322004
        ]
    },
    {
        "city_id": 2407,
        "region_id": 4,
        "name_ar": "البتراء",
        "name_en": "Al Batra'",
        "center": [
            25.94574006,
            42.95882
        ]
    },
    {
        "city_id": 2408,
        "region_id": 4,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            25.82631003,
            43.51672001
        ]
    },
    {
        "city_id": 2409,
        "region_id": 4,
        "name_ar": "الحوطة",
        "name_en": "Al Hawtah",
        "center": [
            25.85015999,
            43.51500003
        ]
    },
    {
        "city_id": 2410,
        "region_id": 4,
        "name_ar": "العبيل",
        "name_en": "Al 'Ubayl",
        "center": [
            25.79935001,
            43.51434998
        ]
    },
    {
        "city_id": 2411,
        "region_id": 4,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            25.64523005,
            43.39827001
        ]
    },
    {
        "city_id": 2412,
        "region_id": 4,
        "name_ar": "نفجة",
        "name_en": "Nafjah",
        "center": [
            25.66327001,
            43.37238002
        ]
    },
    {
        "city_id": 2413,
        "region_id": 4,
        "name_ar": "الغيدانية",
        "name_en": "Al Ghaydaniyah",
        "center": [
            25.22693333,
            43.72406667
        ]
    },
    {
        "city_id": 2414,
        "region_id": 4,
        "name_ar": "العبلة",
        "name_en": "Al 'Abla",
        "center": [
            25.44281995,
            43.68190001
        ]
    },
    {
        "city_id": 2415,
        "region_id": 4,
        "name_ar": "مزارع الجراوة",
        "name_en": "Mazari' Al Jirawah",
        "center": [
            25.40487004,
            43.63919006
        ]
    },
    {
        "city_id": 2416,
        "region_id": 4,
        "name_ar": "السميراء",
        "name_en": "As Sumayra",
        "center": [
            25.75919997,
            43.42480998
        ]
    },
    {
        "city_id": 2417,
        "region_id": 4,
        "name_ar": "الرضيمة",
        "name_en": "Al Rudaymah",
        "center": [
            25.77575998,
            43.37918
        ]
    },
    {
        "city_id": 2418,
        "region_id": 4,
        "name_ar": "القوعي",
        "name_en": "Al Qaw'i",
        "center": [
            25.77155,
            43.35941994
        ]
    },
    {
        "city_id": 2419,
        "region_id": 4,
        "name_ar": "مزارع العقل",
        "name_en": "Mazari' Al 'Aql",
        "center": [
            25.92341003,
            43.61722001
        ]
    },
    {
        "city_id": 2420,
        "region_id": 4,
        "name_ar": "دخنة",
        "name_en": "Dukhnah",
        "center": [
            25.35588001,
            43.62000004
        ]
    },
    {
        "city_id": 2421,
        "region_id": 4,
        "name_ar": "الرس",
        "name_en": "Ar Rass",
        "center": [
            25.87025999,
            43.50747996
        ]
    },
    {
        "city_id": 2422,
        "region_id": 4,
        "name_ar": "الشنانة",
        "name_en": "Ash Shananah",
        "center": [
            25.81397002,
            43.44530005
        ]
    },
    {
        "city_id": 2423,
        "region_id": 4,
        "name_ar": "الشورقية",
        "name_en": "Ash Shawraqiyah",
        "center": [
            25.82831004,
            44.20828005
        ]
    },
    {
        "city_id": 2424,
        "region_id": 4,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            25.84088004,
            44.19040004
        ]
    },
    {
        "city_id": 2425,
        "region_id": 4,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            25.91384996,
            44.17781
        ]
    },
    {
        "city_id": 2426,
        "region_id": 4,
        "name_ar": "الطلعة",
        "name_en": "At Tal'ah",
        "center": [
            25.85563994,
            44.08548003
        ]
    },
    {
        "city_id": 2427,
        "region_id": 4,
        "name_ar": "مظيفيرة",
        "name_en": "Mudhayfirah",
        "center": [
            25.79876999,
            44.11160001
        ]
    },
    {
        "city_id": 2428,
        "region_id": 4,
        "name_ar": "الوشحاء",
        "name_en": "Al Washha",
        "center": [
            25.92829001,
            44.17445
        ]
    },
    {
        "city_id": 2429,
        "region_id": 4,
        "name_ar": "الهيشة",
        "name_en": "Al Hishah",
        "center": [
            25.84987995,
            44.18467997
        ]
    },
    {
        "city_id": 2430,
        "region_id": 4,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            25.88706995,
            44.20373996
        ]
    },
    {
        "city_id": 2431,
        "region_id": 4,
        "name_ar": "العدان",
        "name_en": "Al 'Adan",
        "center": [
            25.84009995,
            44.24231001
        ]
    },
    {
        "city_id": 2432,
        "region_id": 4,
        "name_ar": "عين العقيلي",
        "name_en": "'Ayn Al 'Uqayli",
        "center": [
            25.87547001,
            44.19991994
        ]
    },
    {
        "city_id": 2433,
        "region_id": 4,
        "name_ar": "روضة اللواف",
        "name_en": "Rawdat Al Lawwaf",
        "center": [
            25.94774,
            44.25510001
        ]
    },
    {
        "city_id": 2434,
        "region_id": 4,
        "name_ar": "العكرشية",
        "name_en": "Al 'Ikrashiyah",
        "center": [
            25.92453995,
            44.28407996
        ]
    },
    {
        "city_id": 2435,
        "region_id": 4,
        "name_ar": "زهلولة",
        "name_en": "Zihlulah",
        "center": [
            25.89625997,
            44.31808998
        ]
    },
    {
        "city_id": 2436,
        "region_id": 4,
        "name_ar": "الرحيمية",
        "name_en": "Ar Ruhaymiyah",
        "center": [
            25.77309002,
            44.33626999
        ]
    },
    {
        "city_id": 2437,
        "region_id": 4,
        "name_ar": "الوسطى",
        "name_en": "Al Wista",
        "center": [
            25.82357005,
            44.36246004
        ]
    },
    {
        "city_id": 2438,
        "region_id": 4,
        "name_ar": "المفيض",
        "name_en": "Al Mafid",
        "center": [
            25.74953,
            44.28495997
        ]
    },
    {
        "city_id": 2439,
        "region_id": 4,
        "name_ar": "المحروقة",
        "name_en": "Al Mahruqah",
        "center": [
            25.89619004,
            44.30273004
        ]
    },
    {
        "city_id": 2440,
        "region_id": 4,
        "name_ar": "مزارع خريمان",
        "name_en": "Mazari' Khurayman",
        "center": [
            25.51850001,
            44.14993999
        ]
    },
    {
        "city_id": 2441,
        "region_id": 4,
        "name_ar": "الربقية",
        "name_en": "Ar Ribqiyah",
        "center": [
            25.47708996,
            43.86836006
        ]
    },
    {
        "city_id": 2442,
        "region_id": 4,
        "name_ar": "ام طليحة",
        "name_en": "Umm Tulayhah",
        "center": [
            25.39671995,
            43.91464998
        ]
    },
    {
        "city_id": 2443,
        "region_id": 4,
        "name_ar": "فردة",
        "name_en": "Fardah",
        "center": [
            25.64770002,
            44.02147001
        ]
    },
    {
        "city_id": 2444,
        "region_id": 4,
        "name_ar": "الناصرية",
        "name_en": "An Nasiriyah",
        "center": [
            25.65453001,
            44.06131995
        ]
    },
    {
        "city_id": 2445,
        "region_id": 4,
        "name_ar": "الخرماء الجنوبية",
        "name_en": "Al Kharma Al Janubiyah",
        "center": [
            25.57744005,
            44.09605004
        ]
    },
    {
        "city_id": 2446,
        "region_id": 4,
        "name_ar": "النعايم",
        "name_en": "An Na'ayim",
        "center": [
            25.60931996,
            43.96061006
        ]
    },
    {
        "city_id": 2447,
        "region_id": 4,
        "name_ar": "خريمان",
        "name_en": "Khurayman",
        "center": [
            25.53501997,
            44.14250001
        ]
    },
    {
        "city_id": 2448,
        "region_id": 4,
        "name_ar": "المذنب",
        "name_en": "Al Midhnab",
        "center": [
            25.86073,
            44.22219004
        ]
    },
    {
        "city_id": 2449,
        "region_id": 4,
        "name_ar": "علباء",
        "name_en": "'Alba",
        "center": [
            25.49626,
            43.85432002
        ]
    },
    {
        "city_id": 2450,
        "region_id": 4,
        "name_ar": "روضة الحسو",
        "name_en": "Rawdat Al Hisu",
        "center": [
            25.80792996,
            44.31655002
        ]
    },
    {
        "city_id": 2451,
        "region_id": 4,
        "name_ar": "المربع",
        "name_en": "Al Murabba'",
        "center": [
            25.73458002,
            44.30451003
        ]
    },
    {
        "city_id": 2452,
        "region_id": 4,
        "name_ar": "المحلاوية",
        "name_en": "Al Muhallawiyah",
        "center": [
            26.14292002,
            44.20312001
        ]
    },
    {
        "city_id": 2453,
        "region_id": 4,
        "name_ar": "مزارع الحزم",
        "name_en": "Mazari' Al Hazm",
        "center": [
            26.08165997,
            44.23671996
        ]
    },
    {
        "city_id": 2454,
        "region_id": 4,
        "name_ar": "ظليم",
        "name_en": "Dhulyim",
        "center": [
            26.17212995,
            44.15757002
        ]
    },
    {
        "city_id": 2455,
        "region_id": 4,
        "name_ar": "الباطن",
        "name_en": "Al Batin",
        "center": [
            26.23628998,
            44.07601993
        ]
    },
    {
        "city_id": 2456,
        "region_id": 4,
        "name_ar": "المرغلة",
        "name_en": "Al Murghalah",
        "center": [
            26.16797002,
            43.92500005
        ]
    },
    {
        "city_id": 2457,
        "region_id": 4,
        "name_ar": "رغابية",
        "name_en": "Raghabiyah",
        "center": [
            26.17061003,
            44.08397995
        ]
    },
    {
        "city_id": 2458,
        "region_id": 4,
        "name_ar": "الطعمية",
        "name_en": "At Tu'miyah",
        "center": [
            26.26003996,
            44.07464996
        ]
    },
    {
        "city_id": 2459,
        "region_id": 4,
        "name_ar": "العداين",
        "name_en": "Al 'Adayin",
        "center": [
            26.18654998,
            43.99349004
        ]
    },
    {
        "city_id": 2460,
        "region_id": 4,
        "name_ar": "البويطن",
        "name_en": "Al Buwaytin",
        "center": [
            26.16008002,
            43.99614005
        ]
    },
    {
        "city_id": 2461,
        "region_id": 4,
        "name_ar": "الرقة",
        "name_en": "Ar Riqa",
        "center": [
            25.71874997,
            44.03973993
        ]
    },
    {
        "city_id": 2462,
        "region_id": 4,
        "name_ar": "العبلة",
        "name_en": "Al 'Abla",
        "center": [
            25.70069995,
            44.00733994
        ]
    },
    {
        "city_id": 2463,
        "region_id": 4,
        "name_ar": "الروغاني",
        "name_en": "Ar Rawghany",
        "center": [
            26.14050003,
            43.97818997
        ]
    },
    {
        "city_id": 2464,
        "region_id": 5,
        "name_ar": "الخفجي",
        "name_en": "Al Khafji",
        "center": [
            28.43980997,
            48.49033999
        ]
    },
    {
        "city_id": 2465,
        "region_id": 4,
        "name_ar": "العوشزية",
        "name_en": "Al Awshaziyah",
        "center": [
            26.06543999,
            44.13407997
        ]
    },
    {
        "city_id": 2466,
        "region_id": 4,
        "name_ar": "وادى أبو على",
        "name_en": "Wadi Abu 'Ali",
        "center": [
            26.20506006,
            43.99976002
        ]
    },
    {
        "city_id": 2467,
        "region_id": 4,
        "name_ar": "رياض الخبراء",
        "name_en": "Riyad Al Khabra",
        "center": [
            26.03877996,
            43.53903006
        ]
    },
    {
        "city_id": 2468,
        "region_id": 4,
        "name_ar": "شعب الحمر",
        "name_en": "Shi'b Al Hamar",
        "center": [
            26.06356856,
            43.04675006
        ]
    },
    {
        "city_id": 2469,
        "region_id": 4,
        "name_ar": "صبيح",
        "name_en": "Subayh",
        "center": [
            26.02121995,
            43.02502994
        ]
    },
    {
        "city_id": 2470,
        "region_id": 4,
        "name_ar": "نبيها",
        "name_en": "Nubayha",
        "center": [
            25.95220999,
            43.06306002
        ]
    },
    {
        "city_id": 2471,
        "region_id": 4,
        "name_ar": "الشبيبة",
        "name_en": "Ash Shibibiyah",
        "center": [
            26.06094996,
            43.78676006
        ]
    },
    {
        "city_id": 2472,
        "region_id": 4,
        "name_ar": "البدائع أم تلعة",
        "name_en": "Al Bada'i Umm Tal'ah",
        "center": [
            26.02768998,
            43.76463999
        ]
    },
    {
        "city_id": 2473,
        "region_id": 4,
        "name_ar": "البدائع العليا",
        "name_en": "Al Badai Al 'Ulya",
        "center": [
            25.96689994,
            43.70448004
        ]
    },
    {
        "city_id": 2474,
        "region_id": 4,
        "name_ar": "العبيلة",
        "name_en": "Al 'Ubaylah",
        "center": [
            26.03211004,
            43.75634007
        ]
    },
    {
        "city_id": 2475,
        "region_id": 4,
        "name_ar": "مزرعة عبلا",
        "name_en": "Mazra'at At 'Abla",
        "center": [
            25.62533002,
            43.77514
        ]
    },
    {
        "city_id": 2476,
        "region_id": 4,
        "name_ar": "عبل عبلا",
        "name_en": "'Abal 'Abla",
        "center": [
            25.65405997,
            43.76604996
        ]
    },
    {
        "city_id": 2477,
        "region_id": 4,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            25.95755997,
            43.86008003
        ]
    },
    {
        "city_id": 2478,
        "region_id": 4,
        "name_ar": "العبدلية",
        "name_en": "Al 'Abdaliyah",
        "center": [
            25.91033999,
            43.66798995
        ]
    },
    {
        "city_id": 2479,
        "region_id": 4,
        "name_ar": "الحجناوي",
        "name_en": "Al Hajnawi",
        "center": [
            25.94183004,
            43.63737006
        ]
    },
    {
        "city_id": 2480,
        "region_id": 4,
        "name_ar": "الدحلة",
        "name_en": "Ad Dahlah",
        "center": [
            25.93266996,
            43.67312998
        ]
    },
    {
        "city_id": 2481,
        "region_id": 4,
        "name_ar": "البدائع",
        "name_en": "Al Badai'",
        "center": [
            25.99835995,
            43.72565998
        ]
    },
    {
        "city_id": 2482,
        "region_id": 4,
        "name_ar": "دهيماء",
        "name_en": "Duhayma",
        "center": [
            25.53025995,
            43.83925002
        ]
    },
    {
        "city_id": 2483,
        "region_id": 4,
        "name_ar": "الابرق",
        "name_en": "Al Abraq",
        "center": [
            25.88389001,
            43.81104001
        ]
    },
    {
        "city_id": 2484,
        "region_id": 4,
        "name_ar": "العبيد",
        "name_en": "Al 'Ubayd",
        "center": [
            26.11528003,
            43.64325001
        ]
    },
    {
        "city_id": 2485,
        "region_id": 4,
        "name_ar": "النفيد",
        "name_en": "An Nufayyid",
        "center": [
            26.04723005,
            43.61065995
        ]
    },
    {
        "city_id": 2486,
        "region_id": 4,
        "name_ar": "الخبراء",
        "name_en": "Al Khabra'",
        "center": [
            26.06003996,
            43.63155004
        ]
    },
    {
        "city_id": 2487,
        "region_id": 8,
        "name_ar": "المحوى",
        "name_en": "Al Mahawa",
        "center": [
            25.86402994,
            41.80549003
        ]
    },
    {
        "city_id": 2488,
        "region_id": 4,
        "name_ar": "فيضة ذيبان",
        "name_en": "Faydat Dhiban",
        "center": [
            25.88445,
            41.91926999
        ]
    },
    {
        "city_id": 2489,
        "region_id": 4,
        "name_ar": "مشرف",
        "name_en": "Mushrif",
        "center": [
            26.01788996,
            44.26756993
        ]
    },
    {
        "city_id": 2490,
        "region_id": 4,
        "name_ar": "العابر",
        "name_en": "Al 'Abir",
        "center": [
            25.98224005,
            44.26471003
        ]
    },
    {
        "city_id": 2491,
        "region_id": 4,
        "name_ar": "مزارع الحقباء",
        "name_en": "Mazari Al Haqba",
        "center": [
            25.99391003,
            44.24074004
        ]
    },
    {
        "city_id": 2492,
        "region_id": 4,
        "name_ar": "الحجبة",
        "name_en": "Al Hajbah",
        "center": [
            26.01268998,
            44.23922
        ]
    },
    {
        "city_id": 2493,
        "region_id": 4,
        "name_ar": "الظبة",
        "name_en": "Adh Dhabah",
        "center": [
            26.02685005,
            44.21732003
        ]
    },
    {
        "city_id": 2494,
        "region_id": 4,
        "name_ar": "الدعثة",
        "name_en": "Ad Daathah",
        "center": [
            25.9683,
            44.08696001
        ]
    },
    {
        "city_id": 2495,
        "region_id": 4,
        "name_ar": "الضبة",
        "name_en": "Ad Dabbah",
        "center": [
            25.99464997,
            44.13702005
        ]
    },
    {
        "city_id": 2496,
        "region_id": 4,
        "name_ar": "الحنية",
        "name_en": "Al Haniyah",
        "center": [
            25.93764998,
            44.32926998
        ]
    },
    {
        "city_id": 2497,
        "region_id": 4,
        "name_ar": "ابو خشبة",
        "name_en": "Abu Khashabah",
        "center": [
            25.95969003,
            44.17554998
        ]
    },
    {
        "city_id": 2498,
        "region_id": 4,
        "name_ar": "أم الخراسع",
        "name_en": "Umm Al Kharasi",
        "center": [
            25.97108002,
            44.24810996
        ]
    },
    {
        "city_id": 2499,
        "region_id": 4,
        "name_ar": "الثامرية",
        "name_en": "Ath Thamiriyah",
        "center": [
            25.95733996,
            44.26780006
        ]
    },
    {
        "city_id": 2500,
        "region_id": 4,
        "name_ar": "الداث",
        "name_en": "Ad Dath",
        "center": [
            25.58028999,
            43.15945004
        ]
    },
    {
        "city_id": 2501,
        "region_id": 4,
        "name_ar": "مهدومة",
        "name_en": "Mahdumah",
        "center": [
            25.68332,
            43.08691995
        ]
    },
    {
        "city_id": 2502,
        "region_id": 4,
        "name_ar": "مزارع أم أرطى",
        "name_en": "Mazari' Umm Arta",
        "center": [
            25.56607997,
            42.96476996
        ]
    },
    {
        "city_id": 2503,
        "region_id": 4,
        "name_ar": "الجرارية",
        "name_en": "Al Jarrariyah",
        "center": [
            25.53168003,
            42.89469994
        ]
    },
    {
        "city_id": 2504,
        "region_id": 4,
        "name_ar": "خربشاء",
        "name_en": "Kharbasha",
        "center": [
            25.47146002,
            42.85786
        ]
    },
    {
        "city_id": 2505,
        "region_id": 4,
        "name_ar": "الظاهرية",
        "name_en": "Adh Dhahiriyah",
        "center": [
            25.46361003,
            42.91601994
        ]
    },
    {
        "city_id": 2506,
        "region_id": 4,
        "name_ar": "الظاهرية الجنوبية",
        "name_en": "Adh Dhahiriyah Al Janubiyah",
        "center": [
            25.43870999,
            42.90916994
        ]
    },
    {
        "city_id": 2507,
        "region_id": 4,
        "name_ar": "الناعمة",
        "name_en": "An Na'imah",
        "center": [
            25.45496997,
            42.86242002
        ]
    },
    {
        "city_id": 2508,
        "region_id": 4,
        "name_ar": "الوطاة",
        "name_en": "Al Watah",
        "center": [
            25.5331,
            42.57292005
        ]
    },
    {
        "city_id": 2509,
        "region_id": 4,
        "name_ar": "الغضياء والسلمات",
        "name_en": "Al Ghadya And Salmat",
        "center": [
            25.57634002,
            42.71319995
        ]
    },
    {
        "city_id": 2510,
        "region_id": 4,
        "name_ar": "مزارع ثويدج",
        "name_en": "Mazari' Thuwaydij",
        "center": [
            25.80731002,
            42.79930005
        ]
    },
    {
        "city_id": 2511,
        "region_id": 4,
        "name_ar": "الجرير",
        "name_en": "Al Jarir",
        "center": [
            25.86627996,
            42.80413003
        ]
    },
    {
        "city_id": 2512,
        "region_id": 4,
        "name_ar": "القيصومة",
        "name_en": "Al Qaysumah",
        "center": [
            25.75224004,
            43.16683996
        ]
    },
    {
        "city_id": 2513,
        "region_id": 6,
        "name_ar": "الكنهبلة",
        "name_en": "Al Kanahbilah",
        "center": [
            19.35942,
            42.08683001
        ]
    },
    {
        "city_id": 2514,
        "region_id": 6,
        "name_ar": "السهوة",
        "name_en": "As Sahwah",
        "center": [
            19.34036002,
            42.07526
        ]
    },
    {
        "city_id": 2515,
        "region_id": 6,
        "name_ar": "يانف",
        "name_en": "Yanif",
        "center": [
            19.31696997,
            42.08489997
        ]
    },
    {
        "city_id": 2516,
        "region_id": 6,
        "name_ar": "حلباء",
        "name_en": "Halaba",
        "center": [
            19.27010001,
            42.08785998
        ]
    },
    {
        "city_id": 2517,
        "region_id": 6,
        "name_ar": "العدوة",
        "name_en": "Al 'Idwah",
        "center": [
            19.30590005,
            42.07270006
        ]
    },
    {
        "city_id": 2518,
        "region_id": 6,
        "name_ar": "الطلحة",
        "name_en": "At Talhah",
        "center": [
            19.33229996,
            42.14486001
        ]
    },
    {
        "city_id": 2519,
        "region_id": 6,
        "name_ar": "النماص",
        "name_en": "An Namas",
        "center": [
            19.12173995,
            42.13678004
        ]
    },
    {
        "city_id": 2520,
        "region_id": 11,
        "name_ar": "حمراء نثيل / ابو شداد",
        "name_en": "Hamrah Nithil (Abu Shadad)",
        "center": [
            18.49589995,
            46.50673
        ]
    },
    {
        "city_id": 2521,
        "region_id": 11,
        "name_ar": "خجيم",
        "name_en": "Khajim",
        "center": [
            18.29995006,
            47.11451997
        ]
    },
    {
        "city_id": 2522,
        "region_id": 11,
        "name_ar": "يدمة",
        "name_en": "Yadamah",
        "center": [
            18.52821182,
            44.27333336
        ]
    },
    {
        "city_id": 2523,
        "region_id": 11,
        "name_ar": "ابا الرخم",
        "name_en": "Aba Ar Rakham",
        "center": [
            18.31794997,
            44.22619994
        ]
    },
    {
        "city_id": 2524,
        "region_id": 11,
        "name_ar": "مركز الوجيد",
        "name_en": "Markaz Al Wujid",
        "center": [
            19.21514003,
            44.50976005
        ]
    },
    {
        "city_id": 2525,
        "region_id": 11,
        "name_ar": "ظلماء",
        "name_en": "Dhalma",
        "center": [
            18.98622999,
            45.12826995
        ]
    },
    {
        "city_id": 2526,
        "region_id": 6,
        "name_ar": "تباشعة",
        "name_en": "Tubash'ah",
        "center": [
            18.81764004,
            42.60886001
        ]
    },
    {
        "city_id": 2527,
        "region_id": 6,
        "name_ar": "أم خيسة",
        "name_en": "Umm Khisah",
        "center": [
            18.80630003,
            42.62156997
        ]
    },
    {
        "city_id": 2528,
        "region_id": 6,
        "name_ar": "صلحلح",
        "name_en": "Salahlah",
        "center": [
            18.73658997,
            42.56801998
        ]
    },
    {
        "city_id": 2529,
        "region_id": 6,
        "name_ar": "آل خضاري",
        "name_en": "Al Khidari",
        "center": [
            19.00525001,
            42.17880006
        ]
    },
    {
        "city_id": 2530,
        "region_id": 8,
        "name_ar": "النقرة",
        "name_en": "An Nuqrah",
        "center": [
            27.47099003,
            41.66149006
        ]
    },
    {
        "city_id": 2531,
        "region_id": 8,
        "name_ar": "كمب الضلوع",
        "name_en": "Kamp Ad Dulu'",
        "center": [
            27.71882003,
            41.15436998
        ]
    },
    {
        "city_id": 2532,
        "region_id": 8,
        "name_ar": "الحفير",
        "name_en": "Al Hufayr",
        "center": [
            27.64744998,
            41.29132
        ]
    },
    {
        "city_id": 2533,
        "region_id": 8,
        "name_ar": "الودي",
        "name_en": "Al Wuday",
        "center": [
            27.39769995,
            41.57112996
        ]
    },
    {
        "city_id": 2534,
        "region_id": 8,
        "name_ar": "قصر العشروات",
        "name_en": "Qasr Al Ishruwat",
        "center": [
            27.33809001,
            41.45591002
        ]
    },
    {
        "city_id": 2535,
        "region_id": 8,
        "name_ar": "سراء",
        "name_en": "Sara'",
        "center": [
            27.06460996,
            41.53710001
        ]
    },
    {
        "city_id": 2536,
        "region_id": 8,
        "name_ar": "فيضة بن سويلم",
        "name_en": "Faydat Ibn Suwaylim",
        "center": [
            27.16598005,
            40.61967004
        ]
    },
    {
        "city_id": 2537,
        "region_id": 8,
        "name_ar": "النيصية",
        "name_en": "An Nisiyah",
        "center": [
            27.62912994,
            41.69493994
        ]
    },
    {
        "city_id": 2538,
        "region_id": 8,
        "name_ar": "مريفق",
        "name_en": "Murayfiq",
        "center": [
            27.36383005,
            41.64518006
        ]
    },
    {
        "city_id": 2539,
        "region_id": 8,
        "name_ar": "قفار",
        "name_en": "Qufar",
        "center": [
            27.41521997,
            41.62693997
        ]
    },
    {
        "city_id": 2540,
        "region_id": 8,
        "name_ar": "توارين",
        "name_en": "Tuwarin",
        "center": [
            27.59575001,
            41.44866003
        ]
    },
    {
        "city_id": 2541,
        "region_id": 8,
        "name_ar": "عقدة",
        "name_en": "'Iqdah",
        "center": [
            27.52235994,
            41.59121995
        ]
    },
    {
        "city_id": 2542,
        "region_id": 8,
        "name_ar": "المحفر",
        "name_en": "Al Mahaffar",
        "center": [
            27.71436997,
            40.65254999
        ]
    },
    {
        "city_id": 2543,
        "region_id": 8,
        "name_ar": "المختلف",
        "name_en": "Al Mukhtalif",
        "center": [
            27.18780996,
            41.21020003
        ]
    },
    {
        "city_id": 2544,
        "region_id": 8,
        "name_ar": "الصهوة",
        "name_en": "As Sahwah",
        "center": [
            27.13199001,
            41.14632996
        ]
    },
    {
        "city_id": 2545,
        "region_id": 8,
        "name_ar": "اللويمي",
        "name_en": "Al Luwaymi",
        "center": [
            27.90726995,
            42.36756999
        ]
    },
    {
        "city_id": 2546,
        "region_id": 8,
        "name_ar": "المستجدة",
        "name_en": "Al Mustajiddah",
        "center": [
            26.67269997,
            41.53575994
        ]
    },
    {
        "city_id": 2547,
        "region_id": 8,
        "name_ar": "العجاجة",
        "name_en": "Al 'Ajajah",
        "center": [
            25.95414005,
            41.35258005
        ]
    },
    {
        "city_id": 2548,
        "region_id": 8,
        "name_ar": "الرقب",
        "name_en": "Ar Raqab",
        "center": [
            25.74993003,
            41.10108002
        ]
    },
    {
        "city_id": 2549,
        "region_id": 8,
        "name_ar": "النمارة",
        "name_en": "An Nimarah",
        "center": [
            25.64563999,
            41.03736994
        ]
    },
    {
        "city_id": 2550,
        "region_id": 8,
        "name_ar": "العيثمة",
        "name_en": "Al 'Aythamah",
        "center": [
            25.52039001,
            41.17357
        ]
    },
    {
        "city_id": 2551,
        "region_id": 8,
        "name_ar": "لبدة",
        "name_en": "Libdah",
        "center": [
            26.64557004,
            40.47154001
        ]
    },
    {
        "city_id": 2552,
        "region_id": 8,
        "name_ar": "ضرغط",
        "name_en": "Darghat",
        "center": [
            26.53154996,
            40.53868
        ]
    },
    {
        "city_id": 2553,
        "region_id": 8,
        "name_ar": "ضريغط",
        "name_en": "Duraighat",
        "center": [
            26.48816005,
            40.59107997
        ]
    },
    {
        "city_id": 2554,
        "region_id": 8,
        "name_ar": "الحميمة",
        "name_en": "Al Humaimah",
        "center": [
            26.52050002,
            40.75420998
        ]
    },
    {
        "city_id": 2555,
        "region_id": 8,
        "name_ar": "بدائع اول",
        "name_en": "Badai' Awl",
        "center": [
            26.66675002,
            40.82638997
        ]
    },
    {
        "city_id": 2556,
        "region_id": 8,
        "name_ar": "الثمامية",
        "name_en": "Ath Thumamiyah",
        "center": [
            25.98172995,
            41.21672996
        ]
    },
    {
        "city_id": 2557,
        "region_id": 8,
        "name_ar": "الحليفة العليا",
        "name_en": "Al Hulayfah Al 'Ulya",
        "center": [
            25.94684006,
            40.73342
        ]
    },
    {
        "city_id": 2558,
        "region_id": 8,
        "name_ar": "مرحب الشمالي",
        "name_en": "Marhab Ash Shamali",
        "center": [
            26.07421998,
            40.71279996
        ]
    },
    {
        "city_id": 2559,
        "region_id": 8,
        "name_ar": "العرادية",
        "name_en": "Al 'Aradiyah",
        "center": [
            25.95422,
            40.60824007
        ]
    },
    {
        "city_id": 2560,
        "region_id": 8,
        "name_ar": "فيضة اثقب",
        "name_en": "Faydat Athqab",
        "center": [
            26.04256998,
            40.61812995
        ]
    },
    {
        "city_id": 2561,
        "region_id": 8,
        "name_ar": "روض ابن هادي",
        "name_en": "Rawd Ibn Hadi",
        "center": [
            26.16450997,
            40.63686999
        ]
    },
    {
        "city_id": 2562,
        "region_id": 8,
        "name_ar": "الوسعة",
        "name_en": "Al Was'ah",
        "center": [
            26.13298004,
            40.53072005
        ]
    },
    {
        "city_id": 2563,
        "region_id": 8,
        "name_ar": "الشويمس",
        "name_en": "Ash Shiwaymis",
        "center": [
            26.22871002,
            40.39787003
        ]
    },
    {
        "city_id": 2564,
        "region_id": 8,
        "name_ar": "البرقة",
        "name_en": "Al Barqah",
        "center": [
            26.14145998,
            40.28201996
        ]
    },
    {
        "city_id": 2565,
        "region_id": 8,
        "name_ar": "الدابية",
        "name_en": "Ad Dabiyah",
        "center": [
            25.78945998,
            40.58152003
        ]
    },
    {
        "city_id": 2566,
        "region_id": 8,
        "name_ar": "الحويط",
        "name_en": "Al Huwayyit",
        "center": [
            25.63534002,
            40.38270995
        ]
    },
    {
        "city_id": 2567,
        "region_id": 8,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            25.52328997,
            40.29805998
        ]
    },
    {
        "city_id": 2568,
        "region_id": 8,
        "name_ar": "عمائر المرير",
        "name_en": "Ama'ir Al Murayr",
        "center": [
            25.41467995,
            40.43716004
        ]
    },
    {
        "city_id": 2569,
        "region_id": 8,
        "name_ar": "بدع ابن خلف",
        "name_en": "Bid' Ibn Khalaf",
        "center": [
            25.71092996,
            40.36969002
        ]
    },
    {
        "city_id": 2570,
        "region_id": 8,
        "name_ar": "المرير",
        "name_en": "Al Murayr",
        "center": [
            25.50719002,
            40.33092999
        ]
    },
    {
        "city_id": 2571,
        "region_id": 8,
        "name_ar": "ام روشن",
        "name_en": "Umm Rawshan",
        "center": [
            25.55560994,
            40.65813002
        ]
    },
    {
        "city_id": 2572,
        "region_id": 8,
        "name_ar": "صفيط",
        "name_en": "Sufayt",
        "center": [
            25.59913999,
            40.59959998
        ]
    },
    {
        "city_id": 2573,
        "region_id": 8,
        "name_ar": "النحيتية",
        "name_en": "An Nuhaytiyah",
        "center": [
            25.87081996,
            41.44465005
        ]
    },
    {
        "city_id": 2574,
        "region_id": 8,
        "name_ar": "مبرز",
        "name_en": "Mubaraz",
        "center": [
            26.03130995,
            40.91324996
        ]
    },
    {
        "city_id": 2575,
        "region_id": 8,
        "name_ar": "المعرش",
        "name_en": "Al Ma'arrash",
        "center": [
            25.99565,
            40.97020994
        ]
    },
    {
        "city_id": 2576,
        "region_id": 8,
        "name_ar": "العوشزية",
        "name_en": "Al Awshaziyah",
        "center": [
            26.76274002,
            41.76461998
        ]
    },
    {
        "city_id": 2577,
        "region_id": 8,
        "name_ar": "وسيطاء الحفن",
        "name_en": "Wusayta' Al Hafan",
        "center": [
            26.71475001,
            41.72712003
        ]
    },
    {
        "city_id": 2578,
        "region_id": 8,
        "name_ar": "البعايث",
        "name_en": "Al Ba'ayith",
        "center": [
            26.02950001,
            41.80777
        ]
    },
    {
        "city_id": 2579,
        "region_id": 8,
        "name_ar": "الزغيبية",
        "name_en": "Az Zughaibiyah",
        "center": [
            25.99935998,
            41.62877997
        ]
    },
    {
        "city_id": 2580,
        "region_id": 8,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            26.75733004,
            42.75404005
        ]
    },
    {
        "city_id": 2581,
        "region_id": 8,
        "name_ar": "بدائع الصغوي",
        "name_en": "Badai' As Sighwa",
        "center": [
            26.73701003,
            42.72867004
        ]
    },
    {
        "city_id": 2582,
        "region_id": 8,
        "name_ar": "الصغوى",
        "name_en": "As Sighawa",
        "center": [
            26.78033002,
            42.69863996
        ]
    },
    {
        "city_id": 2583,
        "region_id": 4,
        "name_ar": "فيضة يكلب",
        "name_en": "Faydat Yaklib",
        "center": [
            26.89396996,
            43.14237999
        ]
    },
    {
        "city_id": 2584,
        "region_id": 4,
        "name_ar": "مزارع القرائن",
        "name_en": "Mazari' Al Qarain",
        "center": [
            26.75473999,
            43.02603002
        ]
    },
    {
        "city_id": 2585,
        "region_id": 4,
        "name_ar": "النويبات",
        "name_en": "An Nuwaybat",
        "center": [
            26.87127003,
            43.15884997
        ]
    },
    {
        "city_id": 2586,
        "region_id": 4,
        "name_ar": "مزرعة مشرفة",
        "name_en": "Mazra'at Mushrifah",
        "center": [
            26.62958996,
            43.33470998
        ]
    },
    {
        "city_id": 2587,
        "region_id": 4,
        "name_ar": "المخرم",
        "name_en": "Al Makhram",
        "center": [
            26.80355999,
            43.21916003
        ]
    },
    {
        "city_id": 2588,
        "region_id": 4,
        "name_ar": "الطراق",
        "name_en": "At Tiraq",
        "center": [
            26.68422995,
            43.30497005
        ]
    },
    {
        "city_id": 2589,
        "region_id": 4,
        "name_ar": "الصلبية",
        "name_en": "As Sulubiyah",
        "center": [
            26.75712002,
            42.79672005
        ]
    },
    {
        "city_id": 2590,
        "region_id": 5,
        "name_ar": "راس تنورة",
        "name_en": "Ras Tannurah",
        "center": [
            26.70673998,
            50.07245984
        ]
    },
    {
        "city_id": 2591,
        "region_id": 5,
        "name_ar": "رحيمة",
        "name_en": "Rahimah",
        "center": [
            26.70870998,
            50.08801981
        ]
    },
    {
        "city_id": 2592,
        "region_id": 8,
        "name_ar": "بدائع الصفران",
        "name_en": "Badai' As Sufran",
        "center": [
            26.45150004,
            41.96532997
        ]
    },
    {
        "city_id": 2593,
        "region_id": 8,
        "name_ar": "حمر القعساء",
        "name_en": "Humr Al Qa'asa",
        "center": [
            26.48552,
            41.91105994
        ]
    },
    {
        "city_id": 2594,
        "region_id": 8,
        "name_ar": "حريد",
        "name_en": "Hurayd",
        "center": [
            26.31046002,
            41.97169998
        ]
    },
    {
        "city_id": 2595,
        "region_id": 8,
        "name_ar": "الديماسة",
        "name_en": "Ad Dimasah",
        "center": [
            26.43115999,
            42.21592006
        ]
    },
    {
        "city_id": 2596,
        "region_id": 8,
        "name_ar": "القعساء",
        "name_en": "Al Qa'asa",
        "center": [
            26.53168004,
            41.97465999
        ]
    },
    {
        "city_id": 2597,
        "region_id": 8,
        "name_ar": "وتدة",
        "name_en": "Wutidah",
        "center": [
            26.29743002,
            42.08540004
        ]
    },
    {
        "city_id": 2598,
        "region_id": 8,
        "name_ar": "عقيلة اللبن",
        "name_en": "Uqaylat Al Laban",
        "center": [
            26.57409003,
            42.23202997
        ]
    },
    {
        "city_id": 2599,
        "region_id": 8,
        "name_ar": "البلازية",
        "name_en": "Al Ballaziyah",
        "center": [
            26.45378005,
            41.83707
        ]
    },
    {
        "city_id": 2600,
        "region_id": 8,
        "name_ar": "خنقة الرماحي",
        "name_en": "Khanqat Ar Rimahi",
        "center": [
            26.72641005,
            42.02385004
        ]
    },
    {
        "city_id": 2601,
        "region_id": 8,
        "name_ar": "غسل",
        "name_en": "Ghisil",
        "center": [
            26.60006998,
            42.02822
        ]
    },
    {
        "city_id": 2602,
        "region_id": 8,
        "name_ar": "سميراء",
        "name_en": "Simira'",
        "center": [
            26.49941,
            42.12939001
        ]
    },
    {
        "city_id": 2603,
        "region_id": 8,
        "name_ar": "الرفايع",
        "name_en": "Ar Rufayi'",
        "center": [
            26.33964997,
            41.98556002
        ]
    },
    {
        "city_id": 2604,
        "region_id": 8,
        "name_ar": "قصير متروك",
        "name_en": "Qusayr Matruk",
        "center": [
            26.66987997,
            41.99637995
        ]
    },
    {
        "city_id": 2605,
        "region_id": 8,
        "name_ar": "كتيفة",
        "name_en": "Kutaifah",
        "center": [
            26.26623005,
            41.90801006
        ]
    },
    {
        "city_id": 2606,
        "region_id": 8,
        "name_ar": "وسيط",
        "name_en": "Wusayt",
        "center": [
            26.20606003,
            41.91828001
        ]
    },
    {
        "city_id": 2607,
        "region_id": 4,
        "name_ar": "نفجة",
        "name_en": "Nafjah",
        "center": [
            26.21747004,
            43.65901002
        ]
    },
    {
        "city_id": 2608,
        "region_id": 4,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            26.23436,
            43.66061002
        ]
    },
    {
        "city_id": 2609,
        "region_id": 4,
        "name_ar": "المعدا",
        "name_en": "Al Ma'ada",
        "center": [
            26.34038996,
            43.51670002
        ]
    },
    {
        "city_id": 2610,
        "region_id": 4,
        "name_ar": "مزارع الشيحية",
        "name_en": "Mazari Ash Shihiyah",
        "center": [
            26.24968,
            43.64508002
        ]
    },
    {
        "city_id": 2611,
        "region_id": 4,
        "name_ar": "الشيحية",
        "name_en": "Ash Shihiyah",
        "center": [
            26.25740999,
            43.62280005
        ]
    },
    {
        "city_id": 2612,
        "region_id": 4,
        "name_ar": "أم قدة",
        "name_en": "Umm Qiddah",
        "center": [
            26.26258997,
            43.64693003
        ]
    },
    {
        "city_id": 2613,
        "region_id": 4,
        "name_ar": "قليب خنيفسة",
        "name_en": "Qalib Khunayfisah",
        "center": [
            26.27169997,
            43.59701996
        ]
    },
    {
        "city_id": 2614,
        "region_id": 4,
        "name_ar": "مزرعة الغبية",
        "name_en": "Mazra'at Al Ghibyah",
        "center": [
            26.63042003,
            43.52931994
        ]
    },
    {
        "city_id": 2615,
        "region_id": 4,
        "name_ar": "أم العراد",
        "name_en": "Umm Al 'Arad",
        "center": [
            26.45659997,
            42.72481003
        ]
    },
    {
        "city_id": 2616,
        "region_id": 4,
        "name_ar": "الثابتية",
        "name_en": "Ath Thabitiyah",
        "center": [
            26.45492002,
            42.81127997
        ]
    },
    {
        "city_id": 2617,
        "region_id": 4,
        "name_ar": "بقيعاء الشمالية",
        "name_en": "Buqay'a Ash Shamaliyah",
        "center": [
            26.32561003,
            42.94147
        ]
    },
    {
        "city_id": 2618,
        "region_id": 4,
        "name_ar": "مزارع الرفائع",
        "name_en": "Mazari' Ar Rufai'",
        "center": [
            26.30685998,
            42.94454002
        ]
    },
    {
        "city_id": 2619,
        "region_id": 4,
        "name_ar": "عسيلة",
        "name_en": "'Usaylah",
        "center": [
            26.58194998,
            42.83672994
        ]
    },
    {
        "city_id": 2620,
        "region_id": 4,
        "name_ar": "النجبة",
        "name_en": "An Nijibah",
        "center": [
            26.58108996,
            42.74531006
        ]
    },
    {
        "city_id": 2621,
        "region_id": 4,
        "name_ar": "قليب الرجيمية",
        "name_en": "Qalib Ar Rujaymiyah",
        "center": [
            26.32661996,
            43.66695995
        ]
    },
    {
        "city_id": 2622,
        "region_id": 4,
        "name_ar": "عقدة",
        "name_en": "'Iqdah",
        "center": [
            26.2567,
            43.70314004
        ]
    },
    {
        "city_id": 2623,
        "region_id": 4,
        "name_ar": "أم خطوط",
        "name_en": "Umm Khutut",
        "center": [
            26.66767998,
            43.53638004
        ]
    },
    {
        "city_id": 2624,
        "region_id": 4,
        "name_ar": "مزارع الوسيطاء",
        "name_en": "Mazari' Al Wusayta",
        "center": [
            26.67331998,
            42.75825998
        ]
    },
    {
        "city_id": 2625,
        "region_id": 8,
        "name_ar": "المكحول",
        "name_en": "Al Makhul",
        "center": [
            26.62799996,
            42.61010998
        ]
    },
    {
        "city_id": 2626,
        "region_id": 4,
        "name_ar": "كحلة",
        "name_en": "Kahlah",
        "center": [
            26.61416001,
            42.64796005
        ]
    },
    {
        "city_id": 2627,
        "region_id": 4,
        "name_ar": "الأرطاوي الشمالي",
        "name_en": "Al Artawi Ash Shamali",
        "center": [
            26.63597004,
            42.69060996
        ]
    },
    {
        "city_id": 2628,
        "region_id": 4,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            26.63506996,
            42.67072004
        ]
    },
    {
        "city_id": 2629,
        "region_id": 4,
        "name_ar": "الهلالية",
        "name_en": "Al Hilaliyah",
        "center": [
            26.11904995,
            43.69033004
        ]
    },
    {
        "city_id": 2630,
        "region_id": 4,
        "name_ar": "البكيرية",
        "name_en": "Al Bukayriyah",
        "center": [
            26.14888995,
            43.65727004
        ]
    },
    {
        "city_id": 2631,
        "region_id": 4,
        "name_ar": "الفويلق",
        "name_en": "Al Fuwayliq",
        "center": [
            26.45376999,
            43.27344997
        ]
    },
    {
        "city_id": 2632,
        "region_id": 4,
        "name_ar": "مشاش جرود",
        "name_en": "Mishash Jurud",
        "center": [
            26.55119,
            42.78757
        ]
    },
    {
        "city_id": 2633,
        "region_id": 4,
        "name_ar": "الضلفعة",
        "name_en": "Ad Dalfa'ah",
        "center": [
            26.32755002,
            43.68044002
        ]
    },
    {
        "city_id": 2634,
        "region_id": 4,
        "name_ar": "الطوال",
        "name_en": "At Tuwal",
        "center": [
            26.01562995,
            42.39074998
        ]
    },
    {
        "city_id": 2635,
        "region_id": 4,
        "name_ar": "العليا",
        "name_en": "Al 'Ulayya",
        "center": [
            26.52559999,
            42.58989001
        ]
    },
    {
        "city_id": 2636,
        "region_id": 4,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            26.59588002,
            42.64306996
        ]
    },
    {
        "city_id": 2637,
        "region_id": 4,
        "name_ar": "الشباكية",
        "name_en": "Ash Shabbakiyah",
        "center": [
            26.17721002,
            42.25113999
        ]
    },
    {
        "city_id": 2638,
        "region_id": 8,
        "name_ar": "الجابرية",
        "name_en": "Al Jabiriyah",
        "center": [
            26.26498001,
            42.16606998
        ]
    },
    {
        "city_id": 2639,
        "region_id": 5,
        "name_ar": "المراح",
        "name_en": "Al Marah",
        "center": [
            25.59250004,
            49.58031988
        ]
    },
    {
        "city_id": 2640,
        "region_id": 5,
        "name_ar": "جودة",
        "name_en": "Judah",
        "center": [
            25.86625003,
            48.83206989
        ]
    },
    {
        "city_id": 2641,
        "region_id": 5,
        "name_ar": "سلوى",
        "name_en": "Salwa",
        "center": [
            24.71230998,
            50.77010972
        ]
    },
    {
        "city_id": 2642,
        "region_id": 5,
        "name_ar": "العقير",
        "name_en": "Al Uqayr",
        "center": [
            25.64924005,
            50.21762975
        ]
    },
    {
        "city_id": 2643,
        "region_id": 5,
        "name_ar": "يبرين",
        "name_en": "Yabrin / Jabrin",
        "center": [
            23.27095,
            48.99637
        ]
    },
    {
        "city_id": 2644,
        "region_id": 5,
        "name_ar": "البطالية",
        "name_en": "Al Bataliyah",
        "center": [
            25.43349998,
            49.61517988
        ]
    },
    {
        "city_id": 2645,
        "region_id": 5,
        "name_ar": "الشقيق",
        "name_en": "Ash Shaqiq",
        "center": [
            25.48469004,
            49.5751999
        ]
    },
    {
        "city_id": 2646,
        "region_id": 5,
        "name_ar": "القرين",
        "name_en": "Al Qurayn",
        "center": [
            25.48307998,
            49.61085992
        ]
    },
    {
        "city_id": 2647,
        "region_id": 5,
        "name_ar": "الوزية",
        "name_en": "Al Wizyah",
        "center": [
            25.48869005,
            49.56324993
        ]
    },
    {
        "city_id": 2648,
        "region_id": 5,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            25.52415001,
            49.61604983
        ]
    },
    {
        "city_id": 2649,
        "region_id": 5,
        "name_ar": "الخرس",
        "name_en": "Al Khars",
        "center": [
            25.44407004,
            49.57444983
        ]
    },
    {
        "city_id": 2650,
        "region_id": 5,
        "name_ar": "الغويبة",
        "name_en": "Al Ghuwaybah",
        "center": [
            25.26613559,
            49.7147965
        ]
    },
    {
        "city_id": 2651,
        "region_id": 5,
        "name_ar": "مريطبة",
        "name_en": "Muraytibah",
        "center": [
            25.27905697,
            49.77402063
        ]
    },
    {
        "city_id": 2652,
        "region_id": 5,
        "name_ar": "سوده",
        "name_en": "Sudah",
        "center": [
            25.27382714,
            49.75937267
        ]
    },
    {
        "city_id": 2653,
        "region_id": 5,
        "name_ar": "العمران",
        "name_en": "Al Umran",
        "center": [
            25.42219996,
            49.7274599
        ]
    },
    {
        "city_id": 2654,
        "region_id": 6,
        "name_ar": "آل مجادب",
        "name_en": "Al Mijadib",
        "center": [
            18.96846998,
            42.16012002
        ]
    },
    {
        "city_id": 2655,
        "region_id": 6,
        "name_ar": "السبت",
        "name_en": "As Sabt",
        "center": [
            18.95632,
            42.17590995
        ]
    },
    {
        "city_id": 2656,
        "region_id": 6,
        "name_ar": "آل الصعدي",
        "name_en": "Al As Sa'di",
        "center": [
            18.94894998,
            42.19799003
        ]
    },
    {
        "city_id": 2657,
        "region_id": 6,
        "name_ar": "سدوان",
        "name_en": "Sadwan",
        "center": [
            18.87891005,
            42.22203002
        ]
    },
    {
        "city_id": 2658,
        "region_id": 6,
        "name_ar": "الشعف",
        "name_en": "Ash Sha'af",
        "center": [
            18.93560995,
            42.19122996
        ]
    },
    {
        "city_id": 2659,
        "region_id": 6,
        "name_ar": "لربوعة",
        "name_en": "Larbu'ah",
        "center": [
            18.93292997,
            42.13843999
        ]
    },
    {
        "city_id": 2660,
        "region_id": 6,
        "name_ar": "قريش",
        "name_en": "Qiraysh",
        "center": [
            18.90026003,
            42.18695001
        ]
    },
    {
        "city_id": 2661,
        "region_id": 6,
        "name_ar": "آل دحمان",
        "name_en": "Al Dahman",
        "center": [
            18.91471001,
            42.19451999
        ]
    },
    {
        "city_id": 2662,
        "region_id": 6,
        "name_ar": "الجفر",
        "name_en": "Al Jafr",
        "center": [
            18.63454996,
            42.53530004
        ]
    },
    {
        "city_id": 2663,
        "region_id": 6,
        "name_ar": "النماص",
        "name_en": "An Namas",
        "center": [
            18.60494,
            42.49615002
        ]
    },
    {
        "city_id": 2664,
        "region_id": 6,
        "name_ar": "شوحطة",
        "name_en": "Shuhitah",
        "center": [
            18.59330001,
            42.49013005
        ]
    },
    {
        "city_id": 2665,
        "region_id": 6,
        "name_ar": "الرهوة",
        "name_en": "Ar Rahwah",
        "center": [
            18.91589001,
            42.49262
        ]
    },
    {
        "city_id": 2666,
        "region_id": 6,
        "name_ar": "قاها",
        "name_en": "Qaha",
        "center": [
            18.94777994,
            42.53416996
        ]
    },
    {
        "city_id": 2667,
        "region_id": 6,
        "name_ar": "آل عزة",
        "name_en": "Al 'Azzah",
        "center": [
            18.62130995,
            42.25795003
        ]
    },
    {
        "city_id": 2668,
        "region_id": 6,
        "name_ar": "بيحان",
        "name_en": "Bihan",
        "center": [
            18.64003997,
            42.25933001
        ]
    },
    {
        "city_id": 2669,
        "region_id": 6,
        "name_ar": "قرآنية",
        "name_en": "Quraniyah",
        "center": [
            18.65314999,
            42.26479001
        ]
    },
    {
        "city_id": 2670,
        "region_id": 6,
        "name_ar": "العطوف",
        "name_en": "Al 'Utuf",
        "center": [
            18.63942001,
            42.33512999
        ]
    },
    {
        "city_id": 2671,
        "region_id": 4,
        "name_ar": "طلحة",
        "name_en": "Talhah",
        "center": [
            27.21081003,
            43.83153006
        ]
    },
    {
        "city_id": 2672,
        "region_id": 8,
        "name_ar": "القصير",
        "name_en": "Al Qusayr",
        "center": [
            26.72532999,
            41.35270004
        ]
    },
    {
        "city_id": 2673,
        "region_id": 8,
        "name_ar": "المهاش",
        "name_en": "Al Mahash",
        "center": [
            26.85535004,
            41.35868999
        ]
    },
    {
        "city_id": 2674,
        "region_id": 8,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            26.54518002,
            41.18278004
        ]
    },
    {
        "city_id": 2675,
        "region_id": 8,
        "name_ar": "بدائع قني",
        "name_en": "Badai' Qunay",
        "center": [
            26.17854997,
            41.26234003
        ]
    },
    {
        "city_id": 2676,
        "region_id": 8,
        "name_ar": "مغيضة",
        "name_en": "Mughaydah",
        "center": [
            26.19685997,
            41.37037994
        ]
    },
    {
        "city_id": 2677,
        "region_id": 8,
        "name_ar": "بطيحان",
        "name_en": "Butayhan",
        "center": [
            26.06557001,
            41.57706
        ]
    },
    {
        "city_id": 2678,
        "region_id": 8,
        "name_ar": "القحصية",
        "name_en": "Al Qahsiyah",
        "center": [
            26.48600002,
            41.28161001
        ]
    },
    {
        "city_id": 2679,
        "region_id": 8,
        "name_ar": "الدوادمي",
        "name_en": "Ad Duwadimi",
        "center": [
            25.99733998,
            40.75032002
        ]
    },
    {
        "city_id": 2680,
        "region_id": 8,
        "name_ar": "البنانة",
        "name_en": "Al Bananah",
        "center": [
            26.72778001,
            41.13302998
        ]
    },
    {
        "city_id": 2681,
        "region_id": 8,
        "name_ar": "الركية",
        "name_en": "Ar Rukayyah",
        "center": [
            26.97686004,
            40.97128998
        ]
    },
    {
        "city_id": 2682,
        "region_id": 8,
        "name_ar": "مرموثة العلم",
        "name_en": "Marmuthat Al 'Alam",
        "center": [
            25.60487999,
            41.01642998
        ]
    },
    {
        "city_id": 2683,
        "region_id": 8,
        "name_ar": "نخلة",
        "name_en": "Nakhlah",
        "center": [
            25.75945005,
            40.99135
        ]
    },
    {
        "city_id": 2684,
        "region_id": 8,
        "name_ar": "النميرة",
        "name_en": "An Numayyirah",
        "center": [
            25.70289001,
            41.07360999
        ]
    },
    {
        "city_id": 2685,
        "region_id": 8,
        "name_ar": "قصيباء",
        "name_en": "Qusayba",
        "center": [
            25.75182998,
            41.02678997
        ]
    },
    {
        "city_id": 2686,
        "region_id": 8,
        "name_ar": "ملحاء",
        "name_en": "Malha",
        "center": [
            25.70661997,
            41.18027003
        ]
    },
    {
        "city_id": 2687,
        "region_id": 8,
        "name_ar": "الطرفاوي",
        "name_en": "At Tarfawi",
        "center": [
            25.71054,
            41.28370999
        ]
    },
    {
        "city_id": 2688,
        "region_id": 8,
        "name_ar": "الشقة",
        "name_en": "Ash Shiqqah",
        "center": [
            26.50050005,
            40.56965994
        ]
    },
    {
        "city_id": 2689,
        "region_id": 8,
        "name_ar": "شعيلا المصع",
        "name_en": "Shuayla Al Masae",
        "center": [
            26.56518333,
            40.48713333
        ]
    },
    {
        "city_id": 2690,
        "region_id": 8,
        "name_ar": "بدائع الفقي",
        "name_en": "Badai' Al Fuqayy",
        "center": [
            26.52426999,
            40.47010003
        ]
    },
    {
        "city_id": 2691,
        "region_id": 8,
        "name_ar": "أم هشيم",
        "name_en": "Umm Hashim",
        "center": [
            25.87953002,
            40.69975
        ]
    },
    {
        "city_id": 2692,
        "region_id": 8,
        "name_ar": "خفيج أم هشيم",
        "name_en": "Khufayj Umm Hashim",
        "center": [
            25.89842,
            40.72743997
        ]
    },
    {
        "city_id": 2693,
        "region_id": 8,
        "name_ar": "الباحة",
        "name_en": "Al Baha",
        "center": [
            26.05922314,
            40.53401944
        ]
    },
    {
        "city_id": 2694,
        "region_id": 8,
        "name_ar": "العمائر",
        "name_en": "Al 'Amair",
        "center": [
            26.15924995,
            40.56373998
        ]
    },
    {
        "city_id": 2695,
        "region_id": 8,
        "name_ar": "الصور",
        "name_en": "As Sur",
        "center": [
            26.17030997,
            40.58710994
        ]
    },
    {
        "city_id": 2696,
        "region_id": 8,
        "name_ar": "قرية عشيرة",
        "name_en": "Qaryat 'Ishayrah",
        "center": [
            25.76697002,
            40.57549005
        ]
    },
    {
        "city_id": 2697,
        "region_id": 8,
        "name_ar": "عقلة المخروق",
        "name_en": "Uqlat Al Makhruq",
        "center": [
            25.861,
            40.65310998
        ]
    },
    {
        "city_id": 2698,
        "region_id": 8,
        "name_ar": "الدغيبجة",
        "name_en": "Al Dughaibjah",
        "center": [
            25.82825754,
            40.49882547
        ]
    },
    {
        "city_id": 2699,
        "region_id": 8,
        "name_ar": "مصدة",
        "name_en": "Masadah",
        "center": [
            25.74301004,
            40.52097001
        ]
    },
    {
        "city_id": 2700,
        "region_id": 8,
        "name_ar": "أبلة",
        "name_en": "Ablah",
        "center": [
            25.70052005,
            40.33467004
        ]
    },
    {
        "city_id": 2701,
        "region_id": 8,
        "name_ar": "القصيلة",
        "name_en": "Al Qusailah",
        "center": [
            25.65896995,
            40.50708997
        ]
    },
    {
        "city_id": 2702,
        "region_id": 8,
        "name_ar": "السليمي",
        "name_en": "As Sulaymi",
        "center": [
            26.29488997,
            41.36380997
        ]
    },
    {
        "city_id": 2703,
        "region_id": 8,
        "name_ar": "الحماد",
        "name_en": "Al Hamad",
        "center": [
            26.16098003,
            40.92055998
        ]
    },
    {
        "city_id": 2704,
        "region_id": 8,
        "name_ar": "الوهيبيات",
        "name_en": "Al Wuhaybiyat",
        "center": [
            26.62968999,
            41.88312004
        ]
    },
    {
        "city_id": 2705,
        "region_id": 8,
        "name_ar": "أرينبة",
        "name_en": "Uraynibah",
        "center": [
            26.73221002,
            41.79608007
        ]
    },
    {
        "city_id": 2706,
        "region_id": 8,
        "name_ar": "فرتاج",
        "name_en": "Firtaj",
        "center": [
            26.66261001,
            41.77204996
        ]
    },
    {
        "city_id": 2707,
        "region_id": 8,
        "name_ar": "الشبرية الصفراء",
        "name_en": "Ash Shibriyah As Safra",
        "center": [
            26.59519997,
            41.86856995
        ]
    },
    {
        "city_id": 2708,
        "region_id": 8,
        "name_ar": "الشبرية الحمراء",
        "name_en": "Ash Shibriyah Al Hamra",
        "center": [
            26.53793999,
            41.88026001
        ]
    },
    {
        "city_id": 2709,
        "region_id": 8,
        "name_ar": "الوسيطي",
        "name_en": "Al Wusayti",
        "center": [
            26.44735995,
            40.63897007
        ]
    },
    {
        "city_id": 2710,
        "region_id": 8,
        "name_ar": "الصخنة",
        "name_en": "As Sikhinah",
        "center": [
            26.45374004,
            40.6566
        ]
    },
    {
        "city_id": 2711,
        "region_id": 8,
        "name_ar": "أفيعية",
        "name_en": "Afay'iyah",
        "center": [
            26.43192001,
            40.83580001
        ]
    },
    {
        "city_id": 2712,
        "region_id": 8,
        "name_ar": "الهمجة",
        "name_en": "Al Hamjah",
        "center": [
            26.23382995,
            41.08660995
        ]
    },
    {
        "city_id": 2713,
        "region_id": 8,
        "name_ar": "المعاذب",
        "name_en": "Al Ma'adhib",
        "center": [
            26.23687,
            41.07387
        ]
    },
    {
        "city_id": 2714,
        "region_id": 8,
        "name_ar": "الهدية",
        "name_en": "Al Hudayyah",
        "center": [
            26.24162006,
            41.05228007
        ]
    },
    {
        "city_id": 2715,
        "region_id": 8,
        "name_ar": "الغزالة",
        "name_en": "Al Ghazalah",
        "center": [
            26.79444003,
            41.31731998
        ]
    },
    {
        "city_id": 2716,
        "region_id": 8,
        "name_ar": "الغريسة",
        "name_en": "Al Gharisah",
        "center": [
            26.10720002,
            40.49372
        ]
    },
    {
        "city_id": 2717,
        "region_id": 8,
        "name_ar": "المجيصة",
        "name_en": "Al Mijayssah",
        "center": [
            25.93500241,
            40.34423447
        ]
    },
    {
        "city_id": 2718,
        "region_id": 8,
        "name_ar": "البركة",
        "name_en": "Al Birkah",
        "center": [
            26.46346999,
            41.09797003
        ]
    },
    {
        "city_id": 2719,
        "region_id": 8,
        "name_ar": "طلوح",
        "name_en": "Tuluh",
        "center": [
            25.82960006,
            40.87635997
        ]
    },
    {
        "city_id": 2720,
        "region_id": 8,
        "name_ar": "الحليفة السفلى",
        "name_en": "Al Hulayfah As Suflah",
        "center": [
            25.98816004,
            40.80204006
        ]
    },
    {
        "city_id": 2721,
        "region_id": 8,
        "name_ar": "الحائط",
        "name_en": "Al Hait",
        "center": [
            25.98816001,
            40.47389006
        ]
    },
    {
        "city_id": 2722,
        "region_id": 8,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            26.79236002,
            41.67498001
        ]
    },
    {
        "city_id": 2723,
        "region_id": 8,
        "name_ar": "قاع حجلا",
        "name_en": "Qa' Hajla",
        "center": [
            26.13804005,
            41.38347996
        ]
    },
    {
        "city_id": 2724,
        "region_id": 8,
        "name_ar": "الخفج",
        "name_en": "Al Khufj",
        "center": [
            26.26896995,
            40.44590005
        ]
    },
    {
        "city_id": 2725,
        "region_id": 8,
        "name_ar": "الفقي",
        "name_en": "Al Fuqay",
        "center": [
            26.45503996,
            40.48632002
        ]
    },
    {
        "city_id": 2726,
        "region_id": 8,
        "name_ar": "النبوان",
        "name_en": "An Nabuwan",
        "center": [
            26.41647004,
            40.54799996
        ]
    },
    {
        "city_id": 2727,
        "region_id": 8,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            27.10344999,
            41.27830995
        ]
    },
    {
        "city_id": 2728,
        "region_id": 8,
        "name_ar": "العوشري",
        "name_en": "Al Awshari",
        "center": [
            25.65061006,
            40.37872999
        ]
    },
    {
        "city_id": 2729,
        "region_id": 8,
        "name_ar": "مرغان",
        "name_en": "Marghan",
        "center": [
            26.01771001,
            41.04226997
        ]
    },
    {
        "city_id": 2730,
        "region_id": 8,
        "name_ar": "الهويدي",
        "name_en": "Al Huwaidi",
        "center": [
            27.02586996,
            41.31803996
        ]
    },
    {
        "city_id": 2731,
        "region_id": 8,
        "name_ar": "القصيصة",
        "name_en": "Al Qusaysah",
        "center": [
            26.96748003,
            41.03942997
        ]
    },
    {
        "city_id": 2732,
        "region_id": 8,
        "name_ar": "المسجد",
        "name_en": "Al Masjid",
        "center": [
            26.96273001,
            41.10410998
        ]
    },
    {
        "city_id": 2733,
        "region_id": 8,
        "name_ar": "سقف",
        "name_en": "Saqf",
        "center": [
            26.90706,
            41.13444002
        ]
    },
    {
        "city_id": 2734,
        "region_id": 8,
        "name_ar": "بدع ابن حويط",
        "name_en": "Bid' Bin Huwayyit",
        "center": [
            26.61068,
            40.95554003
        ]
    },
    {
        "city_id": 2735,
        "region_id": 8,
        "name_ar": "بدائع الصداعية",
        "name_en": "Badai' As Suda'iyah",
        "center": [
            26.82041004,
            41.49834994
        ]
    },
    {
        "city_id": 2736,
        "region_id": 8,
        "name_ar": "ريع البكر",
        "name_en": "Ri' Al Bakr",
        "center": [
            26.74868,
            41.50292
        ]
    },
    {
        "city_id": 2737,
        "region_id": 5,
        "name_ar": "الكلابية",
        "name_en": "Al Kilabiyah",
        "center": [
            25.43563004,
            49.66106982
        ]
    },
    {
        "city_id": 2738,
        "region_id": 5,
        "name_ar": "المنيزلة",
        "name_en": "Al Munaizlah",
        "center": [
            25.38783002,
            49.6722999
        ]
    },
    {
        "city_id": 2739,
        "region_id": 5,
        "name_ar": "القارة",
        "name_en": "Al Qarah",
        "center": [
            25.42157995,
            49.68561992
        ]
    },
    {
        "city_id": 2740,
        "region_id": 5,
        "name_ar": "المنصورة",
        "name_en": "Al Mansurah",
        "center": [
            25.40113001,
            49.67138984
        ]
    },
    {
        "city_id": 2741,
        "region_id": 5,
        "name_ar": "المزاوي",
        "name_en": "Al Mazawi",
        "center": [
            25.38780967,
            49.70303409
        ]
    },
    {
        "city_id": 2742,
        "region_id": 5,
        "name_ar": "الحوطة",
        "name_en": "Al Hawtah",
        "center": [
            25.41762,
            49.72567981
        ]
    },
    {
        "city_id": 2743,
        "region_id": 5,
        "name_ar": "المركز",
        "name_en": "Al Markaz",
        "center": [
            25.38914997,
            49.73208984
        ]
    },
    {
        "city_id": 2744,
        "region_id": 5,
        "name_ar": "الفضول",
        "name_en": "Al Fudul",
        "center": [
            25.37368415,
            49.68277685
        ]
    },
    {
        "city_id": 2745,
        "region_id": 5,
        "name_ar": "الرميلة",
        "name_en": "Ar Rumaylah",
        "center": [
            25.41251994,
            49.7444199
        ]
    },
    {
        "city_id": 2746,
        "region_id": 5,
        "name_ar": "الجشة",
        "name_en": "Al Jishshah",
        "center": [
            25.38689999,
            49.7468799
        ]
    },
    {
        "city_id": 2747,
        "region_id": 5,
        "name_ar": "الشعبة",
        "name_en": "Ash Shu'abah",
        "center": [
            25.47571001,
            49.62410994
        ]
    },
    {
        "city_id": 2748,
        "region_id": 5,
        "name_ar": "المبرز",
        "name_en": "Al Mubarraz",
        "center": [
            25.40610996,
            49.58653982
        ]
    },
    {
        "city_id": 2749,
        "region_id": 5,
        "name_ar": "الجليجلة",
        "name_en": "Al Julijlah",
        "center": [
            25.5035864,
            49.59994131
        ]
    },
    {
        "city_id": 2750,
        "region_id": 5,
        "name_ar": "المطيرفي",
        "name_en": "Al Mutairifi",
        "center": [
            25.47917006,
            49.56204988
        ]
    },
    {
        "city_id": 2752,
        "region_id": 5,
        "name_ar": "بني معن",
        "name_en": "Bani Mu'n",
        "center": [
            25.38958003,
            49.63875992
        ]
    },
    {
        "city_id": 2754,
        "region_id": 5,
        "name_ar": "الخن",
        "name_en": "Al Khinn",
        "center": [
            23.31694999,
            49.25308992
        ]
    },
    {
        "city_id": 2755,
        "region_id": 5,
        "name_ar": "ام اثلة",
        "name_en": "Umm Athlah",
        "center": [
            23.15252005,
            49.33390989
        ]
    },
    {
        "city_id": 2756,
        "region_id": 5,
        "name_ar": "خريص",
        "name_en": "Khurays",
        "center": [
            25.08931998,
            48.06063997
        ]
    },
    {
        "city_id": 2757,
        "region_id": 5,
        "name_ar": "عريعرة",
        "name_en": "Uray'irah",
        "center": [
            25.96725,
            48.88524995
        ]
    },
    {
        "city_id": 2758,
        "region_id": 5,
        "name_ar": "متالع / ام تالع",
        "name_en": "Matali' / Umm Tali'",
        "center": [
            25.98071002,
            48.86389994
        ]
    },
    {
        "city_id": 2759,
        "region_id": 5,
        "name_ar": "التويثير",
        "name_en": "Al Tuwaythir",
        "center": [
            25.42170004,
            49.69604985
        ]
    },
    {
        "city_id": 2760,
        "region_id": 5,
        "name_ar": "الدالوة",
        "name_en": "Ad Dalwah",
        "center": [
            25.40202005,
            49.68663984
        ]
    },
    {
        "city_id": 2761,
        "region_id": 5,
        "name_ar": "الشهادين",
        "name_en": "Ash Shahadin",
        "center": [
            25.39841,
            49.66445992
        ]
    },
    {
        "city_id": 2762,
        "region_id": 5,
        "name_ar": "الحليلة",
        "name_en": "Al Halilah",
        "center": [
            25.43166005,
            49.67339984
        ]
    },
    {
        "city_id": 2763,
        "region_id": 5,
        "name_ar": "الطرف",
        "name_en": "At Taraf",
        "center": [
            25.37245998,
            49.73076981
        ]
    },
    {
        "city_id": 2764,
        "region_id": 5,
        "name_ar": "الجفر",
        "name_en": "Al Jafr",
        "center": [
            25.376841,
            49.72379387
        ]
    },
    {
        "city_id": 2765,
        "region_id": 5,
        "name_ar": "الحني",
        "name_en": "Al Hunayy",
        "center": [
            24.96665997,
            48.76086996
        ]
    },
    {
        "city_id": 2766,
        "region_id": 5,
        "name_ar": "القصيبي",
        "name_en": "Al Qusaybi",
        "center": [
            25.19972995,
            48.47713991
        ]
    },
    {
        "city_id": 2767,
        "region_id": 5,
        "name_ar": "الحبل",
        "name_en": "Al Habl",
        "center": [
            25.90520004,
            49.24928998
        ]
    },
    {
        "city_id": 2768,
        "region_id": 5,
        "name_ar": "الحرملية",
        "name_en": "Al Harmaliyah",
        "center": [
            24.55875003,
            49.4745199
        ]
    },
    {
        "city_id": 2769,
        "region_id": 5,
        "name_ar": "نباك",
        "name_en": "Nibak",
        "center": [
            24.4061,
            50.84062964
        ]
    },
    {
        "city_id": 2770,
        "region_id": 4,
        "name_ar": "البرجسية",
        "name_en": "Al Barjasiyah",
        "center": [
            26.21284,
            44.31672005
        ]
    },
    {
        "city_id": 2771,
        "region_id": 4,
        "name_ar": "مزرعة الزرقاء",
        "name_en": "Mazra'at Az Zarqa",
        "center": [
            26.28679005,
            44.27366999
        ]
    },
    {
        "city_id": 2772,
        "region_id": 4,
        "name_ar": "مزارع أم ظهيرة",
        "name_en": "Mazrai' Umm Dhuhayrah",
        "center": [
            26.28066,
            44.18198996
        ]
    },
    {
        "city_id": 2773,
        "region_id": 4,
        "name_ar": "النبتى رية",
        "name_en": "An Nabta Rayyah",
        "center": [
            26.36955996,
            44.35256997
        ]
    },
    {
        "city_id": 2774,
        "region_id": 4,
        "name_ar": "الرويضة",
        "name_en": "Ar Ruwaydah",
        "center": [
            26.42957004,
            44.22932998
        ]
    },
    {
        "city_id": 2775,
        "region_id": 4,
        "name_ar": "الركية",
        "name_en": "Ar Rukayyah",
        "center": [
            26.47326005,
            44.23240001
        ]
    },
    {
        "city_id": 2776,
        "region_id": 4,
        "name_ar": "ام طليحة",
        "name_en": "Umm Tulayhah",
        "center": [
            25.93897994,
            44.45407001
        ]
    },
    {
        "city_id": 2777,
        "region_id": 4,
        "name_ar": "الشماسية",
        "name_en": "Ash Shimasiyah",
        "center": [
            26.32592999,
            44.25512996
        ]
    },
    {
        "city_id": 2778,
        "region_id": 4,
        "name_ar": "الربيعية",
        "name_en": "Ar Rabi'iyah",
        "center": [
            26.38138001,
            44.23238003
        ]
    },
    {
        "city_id": 2779,
        "region_id": 4,
        "name_ar": "العويقلية",
        "name_en": "Al 'Uwayqiliyah",
        "center": [
            26.41383004,
            44.22201998
        ]
    },
    {
        "city_id": 2780,
        "region_id": 4,
        "name_ar": "النبقية",
        "name_en": "An Nubqiyah",
        "center": [
            26.50268003,
            44.30862003
        ]
    },
    {
        "city_id": 2781,
        "region_id": 4,
        "name_ar": "أم حزم",
        "name_en": "Umm Hazm",
        "center": [
            25.83455,
            44.59143333
        ]
    },
    {
        "city_id": 2782,
        "region_id": 7,
        "name_ar": "الخشة",
        "name_en": "Al Khashah",
        "center": [
            29.52586995,
            36.52585999
        ]
    },
    {
        "city_id": 2783,
        "region_id": 4,
        "name_ar": "القرين",
        "name_en": "Al Qurayn",
        "center": [
            26.01936996,
            43.37256997
        ]
    },
    {
        "city_id": 2784,
        "region_id": 4,
        "name_ar": "الهبيرية",
        "name_en": "Al Hubayriyah",
        "center": [
            26.28273999,
            42.45684995
        ]
    },
    {
        "city_id": 2785,
        "region_id": 4,
        "name_ar": "البدع",
        "name_en": "Al Bada'",
        "center": [
            26.27796,
            42.34861001
        ]
    },
    {
        "city_id": 2786,
        "region_id": 4,
        "name_ar": "ساق",
        "name_en": "Saq",
        "center": [
            26.27516,
            43.30407995
        ]
    },
    {
        "city_id": 2787,
        "region_id": 4,
        "name_ar": "الشقران",
        "name_en": "Ash Shuqran",
        "center": [
            25.95404997,
            41.95564997
        ]
    },
    {
        "city_id": 2788,
        "region_id": 4,
        "name_ar": "البكرة",
        "name_en": "Al Bakrah",
        "center": [
            25.94986002,
            42.31672994
        ]
    },
    {
        "city_id": 2789,
        "region_id": 4,
        "name_ar": "دوبح",
        "name_en": "Dawbah",
        "center": [
            25.63725997,
            42.27554003
        ]
    },
    {
        "city_id": 2790,
        "region_id": 4,
        "name_ar": "الفيضة",
        "name_en": "Al Faydah",
        "center": [
            25.37019997,
            42.09848004
        ]
    },
    {
        "city_id": 2791,
        "region_id": 4,
        "name_ar": "طوال جبيرة",
        "name_en": "Tuwal Jubayrah",
        "center": [
            25.37541999,
            41.92048
        ]
    },
    {
        "city_id": 2792,
        "region_id": 4,
        "name_ar": "جبيرة",
        "name_en": "Jubayrah",
        "center": [
            25.39718001,
            41.80975003
        ]
    },
    {
        "city_id": 2793,
        "region_id": 4,
        "name_ar": "الرحيمية",
        "name_en": "Ar Ruhaymiyah",
        "center": [
            25.2803,
            41.94489004
        ]
    },
    {
        "city_id": 2794,
        "region_id": 2,
        "name_ar": "الجمدة",
        "name_en": "Al Jimdah",
        "center": [
            21.16633995,
            42.71279997
        ]
    },
    {
        "city_id": 2795,
        "region_id": 2,
        "name_ar": "ام الفروغ",
        "name_en": "Umm Al Furugh",
        "center": [
            21.18169004,
            42.74897995
        ]
    },
    {
        "city_id": 2796,
        "region_id": 2,
        "name_ar": "الفجانة",
        "name_en": "Al Fajjanah",
        "center": [
            21.14140001,
            42.66771997
        ]
    },
    {
        "city_id": 2797,
        "region_id": 2,
        "name_ar": "الحجرة",
        "name_en": "Al Hajrah",
        "center": [
            21.15164002,
            42.68230005
        ]
    },
    {
        "city_id": 2798,
        "region_id": 2,
        "name_ar": "الجريف",
        "name_en": "Al Jurayf",
        "center": [
            21.16680996,
            42.69392999
        ]
    },
    {
        "city_id": 2799,
        "region_id": 2,
        "name_ar": "الحجيرة",
        "name_en": "Al Hujayrah",
        "center": [
            21.15417999,
            42.69742998
        ]
    },
    {
        "city_id": 2800,
        "region_id": 2,
        "name_ar": "رنية",
        "name_en": "Ranyah",
        "center": [
            21.24929998,
            42.84215002
        ]
    },
    {
        "city_id": 2801,
        "region_id": 2,
        "name_ar": "العمائر",
        "name_en": "Al 'Amair",
        "center": [
            21.26032005,
            42.90369002
        ]
    },
    {
        "city_id": 2802,
        "region_id": 2,
        "name_ar": "القوز",
        "name_en": "Al Qawz",
        "center": [
            21.26863996,
            42.93124
        ]
    },
    {
        "city_id": 2803,
        "region_id": 2,
        "name_ar": "الابرق",
        "name_en": "Al Abraq",
        "center": [
            21.23418002,
            42.84809006
        ]
    },
    {
        "city_id": 2804,
        "region_id": 2,
        "name_ar": "كويكب",
        "name_en": "Kuwaykib",
        "center": [
            21.22389995,
            42.79088998
        ]
    },
    {
        "city_id": 2805,
        "region_id": 2,
        "name_ar": "الضرم",
        "name_en": "Ad Duram",
        "center": [
            21.20173999,
            42.7953
        ]
    },
    {
        "city_id": 2806,
        "region_id": 2,
        "name_ar": "العويلة",
        "name_en": "Al 'Uwaylah",
        "center": [
            21.04171995,
            42.47155996
        ]
    },
    {
        "city_id": 2807,
        "region_id": 2,
        "name_ar": "الاملح",
        "name_en": "Al Amlah",
        "center": [
            21.17028997,
            42.71723997
        ]
    },
    {
        "city_id": 2808,
        "region_id": 2,
        "name_ar": "تربة الخيالة",
        "name_en": "Turabat Al Khiyalah",
        "center": [
            20.69274001,
            41.65277001
        ]
    },
    {
        "city_id": 2809,
        "region_id": 12,
        "name_ar": "بني فروة",
        "name_en": "Bani Farwah",
        "center": [
            20.05952995,
            41.53077999
        ]
    },
    {
        "city_id": 2810,
        "region_id": 12,
        "name_ar": "خدعة",
        "name_en": "Khid'ah",
        "center": [
            20.28013004,
            41.68377002
        ]
    },
    {
        "city_id": 2811,
        "region_id": 12,
        "name_ar": "الحضيري",
        "name_en": "Al Hudayri",
        "center": [
            20.28348005,
            41.40856004
        ]
    },
    {
        "city_id": 2812,
        "region_id": 12,
        "name_ar": "النعرة",
        "name_en": "An Na'arah",
        "center": [
            20.57280998,
            41.47972006
        ]
    },
    {
        "city_id": 2813,
        "region_id": 12,
        "name_ar": "الثودة",
        "name_en": "Ath Thudah",
        "center": [
            20.45514002,
            41.99687994
        ]
    },
    {
        "city_id": 2814,
        "region_id": 6,
        "name_ar": "جعبة",
        "name_en": "Ji'abah",
        "center": [
            20.35759995,
            42.12294996
        ]
    },
    {
        "city_id": 2815,
        "region_id": 12,
        "name_ar": "بني سار",
        "name_en": "Bani Sar",
        "center": [
            20.10637,
            41.45102999
        ]
    },
    {
        "city_id": 2816,
        "region_id": 12,
        "name_ar": "الربوة",
        "name_en": "Ar Rabwah",
        "center": [
            20.51664997,
            41.66758994
        ]
    },
    {
        "city_id": 2817,
        "region_id": 12,
        "name_ar": "الحشرج",
        "name_en": "Al Hashraj",
        "center": [
            20.40970002,
            41.59989006
        ]
    },
    {
        "city_id": 2818,
        "region_id": 6,
        "name_ar": "مرازيق",
        "name_en": "Maraziq",
        "center": [
            20.39653,
            42.11514997
        ]
    },
    {
        "city_id": 2819,
        "region_id": 12,
        "name_ar": "العقيق",
        "name_en": "Al Aqiq",
        "center": [
            20.27438994,
            41.66305995
        ]
    },
    {
        "city_id": 2820,
        "region_id": 12,
        "name_ar": "المطرية",
        "name_en": "Al Mutariyah",
        "center": [
            20.49658995,
            41.40161996
        ]
    },
    {
        "city_id": 2821,
        "region_id": 12,
        "name_ar": "معشوقة",
        "name_en": "Ma'shuqah",
        "center": [
            20.46640001,
            41.38938001
        ]
    },
    {
        "city_id": 2822,
        "region_id": 12,
        "name_ar": "وراخ",
        "name_en": "Wurakh",
        "center": [
            20.57439004,
            41.51386999
        ]
    },
    {
        "city_id": 2823,
        "region_id": 12,
        "name_ar": "جرب",
        "name_en": "Jarab",
        "center": [
            20.45630999,
            41.95549
        ]
    },
    {
        "city_id": 2824,
        "region_id": 12,
        "name_ar": "كرا الحائط",
        "name_en": "Kara Al Hait",
        "center": [
            20.41106,
            41.60011005
        ]
    },
    {
        "city_id": 2825,
        "region_id": 12,
        "name_ar": "النصباء",
        "name_en": "An Nasba",
        "center": [
            20.14698996,
            41.29338001
        ]
    },
    {
        "city_id": 2826,
        "region_id": 12,
        "name_ar": "بالحكم",
        "name_en": "Balhakam",
        "center": [
            20.10968996,
            41.29361
        ]
    },
    {
        "city_id": 2827,
        "region_id": 12,
        "name_ar": "آل صقاعة",
        "name_en": "Al Suqa'ah",
        "center": [
            20.14928002,
            41.31348002
        ]
    },
    {
        "city_id": 2828,
        "region_id": 12,
        "name_ar": "المغثة",
        "name_en": "Al Maghthah",
        "center": [
            20.18470999,
            41.27671006
        ]
    },
    {
        "city_id": 2829,
        "region_id": 12,
        "name_ar": "حظوة",
        "name_en": "Hadhwah",
        "center": [
            20.19684002,
            41.24110997
        ]
    },
    {
        "city_id": 2830,
        "region_id": 12,
        "name_ar": "العقب",
        "name_en": "Al 'Aqib",
        "center": [
            20.18937999,
            41.18977996
        ]
    },
    {
        "city_id": 2831,
        "region_id": 12,
        "name_ar": "عمضان",
        "name_en": "'Amdan",
        "center": [
            20.17954003,
            41.24796999
        ]
    },
    {
        "city_id": 2832,
        "region_id": 12,
        "name_ar": "آل حبيبة",
        "name_en": "Al Habibah",
        "center": [
            20.15829006,
            41.20888999
        ]
    },
    {
        "city_id": 2833,
        "region_id": 12,
        "name_ar": "مراوة",
        "name_en": "Marawah",
        "center": [
            20.10330002,
            41.37309995
        ]
    },
    {
        "city_id": 2834,
        "region_id": 12,
        "name_ar": "الصفح",
        "name_en": "As Safh",
        "center": [
            20.09126004,
            41.31881997
        ]
    },
    {
        "city_id": 2835,
        "region_id": 12,
        "name_ar": "المندق",
        "name_en": "Al Mandaq",
        "center": [
            20.16445997,
            41.29221005
        ]
    },
    {
        "city_id": 2836,
        "region_id": 12,
        "name_ar": "بالخزمر",
        "name_en": "Bal Khazmar",
        "center": [
            20.10195003,
            41.29335998
        ]
    },
    {
        "city_id": 2837,
        "region_id": 12,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            20.20982003,
            41.21929999
        ]
    },
    {
        "city_id": 2838,
        "region_id": 12,
        "name_ar": "ال نعمة",
        "name_en": "Al Na'mah",
        "center": [
            20.23850004,
            41.23049001
        ]
    },
    {
        "city_id": 2839,
        "region_id": 12,
        "name_ar": "دوس",
        "name_en": "Daws",
        "center": [
            20.20572005,
            41.23139
        ]
    },
    {
        "city_id": 2840,
        "region_id": 12,
        "name_ar": "الطرف",
        "name_en": "At Taraf",
        "center": [
            20.01342994,
            41.28281006
        ]
    },
    {
        "city_id": 2841,
        "region_id": 12,
        "name_ar": "الخليف",
        "name_en": "Al Khalif",
        "center": [
            19.96506997,
            41.20750997
        ]
    },
    {
        "city_id": 2842,
        "region_id": 12,
        "name_ar": "أبو غبار",
        "name_en": "Abu Ghubar",
        "center": [
            20.13571005,
            41.21148005
        ]
    },
    {
        "city_id": 2843,
        "region_id": 4,
        "name_ar": "مرغان",
        "name_en": "Marghan",
        "center": [
            26.02958,
            42.81072996
        ]
    },
    {
        "city_id": 2844,
        "region_id": 4,
        "name_ar": "الإفيهد",
        "name_en": "Al Ifayhid",
        "center": [
            25.69371998,
            42.35269998
        ]
    },
    {
        "city_id": 2845,
        "region_id": 4,
        "name_ar": "الحمادة",
        "name_en": "Al Hamadah",
        "center": [
            25.60302,
            43.33976003
        ]
    },
    {
        "city_id": 2846,
        "region_id": 4,
        "name_ar": "أشقر النومانيات",
        "name_en": "Ashqar An Numaniyat",
        "center": [
            25.93490004,
            42.61785003
        ]
    },
    {
        "city_id": 2847,
        "region_id": 4,
        "name_ar": "النومانية",
        "name_en": "An Numaniyah",
        "center": [
            25.97481,
            42.60157005
        ]
    },
    {
        "city_id": 2848,
        "region_id": 4,
        "name_ar": "العمودة الجنوبية",
        "name_en": "Al 'Amudah Al Janubiyah",
        "center": [
            26.12842002,
            42.82773997
        ]
    },
    {
        "city_id": 2849,
        "region_id": 4,
        "name_ar": "العمودة الشمالية",
        "name_en": "Al 'Amudah Ash Shamaliyah",
        "center": [
            26.14866001,
            42.76810005
        ]
    },
    {
        "city_id": 2850,
        "region_id": 4,
        "name_ar": "الجرير",
        "name_en": "Al Jarir",
        "center": [
            26.07071994,
            42.63870998
        ]
    },
    {
        "city_id": 2851,
        "region_id": 4,
        "name_ar": "الأشيعل",
        "name_en": "Al Ishay'il",
        "center": [
            26.04563002,
            42.60125999
        ]
    },
    {
        "city_id": 2852,
        "region_id": 4,
        "name_ar": "القهيبية",
        "name_en": "Al Qihabiyah",
        "center": [
            25.46034764,
            43.25033279
        ]
    },
    {
        "city_id": 2853,
        "region_id": 4,
        "name_ar": "الشعيفانية",
        "name_en": "Ash Shi'faniyah",
        "center": [
            25.40026002,
            43.22251006
        ]
    },
    {
        "city_id": 2854,
        "region_id": 4,
        "name_ar": "المشاش",
        "name_en": "Al Mishash",
        "center": [
            25.71828996,
            42.07852002
        ]
    },
    {
        "city_id": 2855,
        "region_id": 4,
        "name_ar": "دريميحة",
        "name_en": "Diraymihah",
        "center": [
            26.19172997,
            43.11971001
        ]
    },
    {
        "city_id": 2856,
        "region_id": 4,
        "name_ar": "المصك",
        "name_en": "Al Masak",
        "center": [
            26.12879006,
            43.21896007
        ]
    },
    {
        "city_id": 2857,
        "region_id": 4,
        "name_ar": "قريطة",
        "name_en": "Quraytah",
        "center": [
            26.00666483,
            43.11550734
        ]
    },
    {
        "city_id": 2858,
        "region_id": 4,
        "name_ar": "مزارع الوسيطاء",
        "name_en": "Mazari' Al Wusayta",
        "center": [
            26.17673005,
            43.16872998
        ]
    },
    {
        "city_id": 2859,
        "region_id": 4,
        "name_ar": "قصر البطاح",
        "name_en": "Qasr Al Battah",
        "center": [
            25.84383998,
            43.34336004
        ]
    },
    {
        "city_id": 2860,
        "region_id": 4,
        "name_ar": "السيح",
        "name_en": "As Seeh",
        "center": [
            25.98947003,
            43.23184996
        ]
    },
    {
        "city_id": 2861,
        "region_id": 4,
        "name_ar": "الحملية",
        "name_en": "Al Himliyah",
        "center": [
            26.2051,
            42.9228
        ]
    },
    {
        "city_id": 2862,
        "region_id": 4,
        "name_ar": "الصويتية",
        "name_en": "As Suwaytiyah",
        "center": [
            25.64482001,
            43.20271
        ]
    },
    {
        "city_id": 2863,
        "region_id": 4,
        "name_ar": "الأسامر",
        "name_en": "Al Asamir",
        "center": [
            25.64119999,
            43.23678998
        ]
    },
    {
        "city_id": 2864,
        "region_id": 4,
        "name_ar": "الأساس",
        "name_en": "Al Asas",
        "center": [
            25.70587996,
            43.22348994
        ]
    },
    {
        "city_id": 2865,
        "region_id": 4,
        "name_ar": "أبو نخلة",
        "name_en": "Abu Nakhlah",
        "center": [
            25.19751995,
            43.42339996
        ]
    },
    {
        "city_id": 2866,
        "region_id": 4,
        "name_ar": "الشبيكية",
        "name_en": "Ash Shubaykiyah",
        "center": [
            25.25891,
            43.28727996
        ]
    },
    {
        "city_id": 2867,
        "region_id": 4,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            26.04841,
            42.21863002
        ]
    },
    {
        "city_id": 2868,
        "region_id": 4,
        "name_ar": "جديد",
        "name_en": "Jadid",
        "center": [
            26.00694996,
            42.20602994
        ]
    },
    {
        "city_id": 2869,
        "region_id": 4,
        "name_ar": "الطرفاوي",
        "name_en": "At Tarfawi",
        "center": [
            25.95656004,
            42.13027004
        ]
    },
    {
        "city_id": 2870,
        "region_id": 4,
        "name_ar": "الخشيبي",
        "name_en": "Al Khishaybi",
        "center": [
            25.55358003,
            43.34950003
        ]
    },
    {
        "city_id": 2871,
        "region_id": 4,
        "name_ar": "الحجازية",
        "name_en": "Al Hajjaziyah",
        "center": [
            26.01660991,
            43.23359288
        ]
    },
    {
        "city_id": 2872,
        "region_id": 11,
        "name_ar": "زور العقارب",
        "name_en": "Zur Al 'Aqarib",
        "center": [
            17.98700995,
            44.07440996
        ]
    },
    {
        "city_id": 2873,
        "region_id": 11,
        "name_ar": "الغافية",
        "name_en": "Al Ghafiyah",
        "center": [
            18.05297005,
            43.97628997
        ]
    },
    {
        "city_id": 2874,
        "region_id": 11,
        "name_ar": "صفاه",
        "name_en": "Sufah",
        "center": [
            18.29320001,
            43.86239005
        ]
    },
    {
        "city_id": 2875,
        "region_id": 11,
        "name_ar": "العضبات",
        "name_en": "Al 'Adabat",
        "center": [
            18.15770998,
            44.08444996
        ]
    },
    {
        "city_id": 2876,
        "region_id": 11,
        "name_ar": "قطان",
        "name_en": "Qatan",
        "center": [
            18.12509002,
            44.12671002
        ]
    },
    {
        "city_id": 2877,
        "region_id": 11,
        "name_ar": "ثار",
        "name_en": "Thar",
        "center": [
            17.97738998,
            44.07633004
        ]
    },
    {
        "city_id": 2878,
        "region_id": 11,
        "name_ar": "حمى",
        "name_en": "Hima",
        "center": [
            18.24369998,
            44.45426002
        ]
    },
    {
        "city_id": 2879,
        "region_id": 6,
        "name_ar": "الشرفات",
        "name_en": "Ash Shurafat",
        "center": [
            18.36524004,
            41.66489006
        ]
    },
    {
        "city_id": 2880,
        "region_id": 6,
        "name_ar": "الرعي",
        "name_en": "Ar Ra'y",
        "center": [
            18.26371001,
            41.64940998
        ]
    },
    {
        "city_id": 2881,
        "region_id": 6,
        "name_ar": "الطرق",
        "name_en": "At Tirq",
        "center": [
            18.10636999,
            41.62042005
        ]
    },
    {
        "city_id": 2882,
        "region_id": 6,
        "name_ar": "الجرمة",
        "name_en": "Al Jirmah",
        "center": [
            18.06211999,
            41.68160994
        ]
    },
    {
        "city_id": 2883,
        "region_id": 6,
        "name_ar": "الحشافة",
        "name_en": "Al Hashafah",
        "center": [
            18.03275005,
            41.67767004
        ]
    },
    {
        "city_id": 2884,
        "region_id": 6,
        "name_ar": "حمضة",
        "name_en": "Hamadah",
        "center": [
            17.95249998,
            41.74389
        ]
    },
    {
        "city_id": 2885,
        "region_id": 6,
        "name_ar": "المطعن",
        "name_en": "Al Mat'an",
        "center": [
            18.16748004,
            41.81757994
        ]
    },
    {
        "city_id": 2886,
        "region_id": 6,
        "name_ar": "المنجحة",
        "name_en": "Al Manjahah",
        "center": [
            18.25021996,
            41.79249995
        ]
    },
    {
        "city_id": 2887,
        "region_id": 6,
        "name_ar": "الفيض",
        "name_en": "Al Fayd",
        "center": [
            18.39491997,
            41.73569004
        ]
    },
    {
        "city_id": 2888,
        "region_id": 6,
        "name_ar": "غالب",
        "name_en": "Ghalib",
        "center": [
            18.64516004,
            41.44077002
        ]
    },
    {
        "city_id": 2889,
        "region_id": 6,
        "name_ar": "سعيدة",
        "name_en": "Sa'idah",
        "center": [
            18.58940994,
            41.43316999
        ]
    },
    {
        "city_id": 2890,
        "region_id": 6,
        "name_ar": "الأجرع الشمالي",
        "name_en": "Al Ajra' Ash Shamali",
        "center": [
            18.51566003,
            41.63167004
        ]
    },
    {
        "city_id": 2891,
        "region_id": 6,
        "name_ar": "ذهبان",
        "name_en": "Dhahban",
        "center": [
            18.10393996,
            41.61765995
        ]
    },
    {
        "city_id": 2892,
        "region_id": 6,
        "name_ar": "دبساء",
        "name_en": "Dabsa",
        "center": [
            18.29726995,
            41.52279006
        ]
    },
    {
        "city_id": 2893,
        "region_id": 6,
        "name_ar": "البرك",
        "name_en": "Al Birk",
        "center": [
            18.22491996,
            41.54150999
        ]
    },
    {
        "city_id": 2894,
        "region_id": 6,
        "name_ar": "القحمة",
        "name_en": "Al Qahmah",
        "center": [
            18.00805004,
            41.68300001
        ]
    },
    {
        "city_id": 2895,
        "region_id": 6,
        "name_ar": "عمق",
        "name_en": "'Amaq",
        "center": [
            18.46235004,
            41.46793002
        ]
    },
    {
        "city_id": 2896,
        "region_id": 6,
        "name_ar": "الحظيرة",
        "name_en": "Al Hadhirah",
        "center": [
            18.29538299,
            42.47915316
        ]
    },
    {
        "city_id": 2897,
        "region_id": 6,
        "name_ar": "آل حامد",
        "name_en": "Al Hamid",
        "center": [
            18.29784995,
            42.50834002
        ]
    },
    {
        "city_id": 2898,
        "region_id": 6,
        "name_ar": "آل يوسف",
        "name_en": "Al Yusuf",
        "center": [
            18.26532995,
            42.47445996
        ]
    },
    {
        "city_id": 2899,
        "region_id": 6,
        "name_ar": "البدلة",
        "name_en": "Al Badlah",
        "center": [
            18.22955999,
            42.43969995
        ]
    },
    {
        "city_id": 2900,
        "region_id": 6,
        "name_ar": "لولاة",
        "name_en": "Lawlah",
        "center": [
            18.16556052,
            42.44884361
        ]
    },
    {
        "city_id": 2901,
        "region_id": 6,
        "name_ar": "نجد قرض",
        "name_en": "Najd Qarad",
        "center": [
            18.11497999,
            42.40887997
        ]
    },
    {
        "city_id": 2902,
        "region_id": 6,
        "name_ar": "جمان",
        "name_en": "Jumman",
        "center": [
            18.08340002,
            42.42957005
        ]
    },
    {
        "city_id": 2903,
        "region_id": 6,
        "name_ar": "كثم",
        "name_en": "Kathm",
        "center": [
            18.04706,
            42.45752005
        ]
    },
    {
        "city_id": 2904,
        "region_id": 6,
        "name_ar": "السلامة",
        "name_en": "As Salamah",
        "center": [
            18.03630001,
            42.42521997
        ]
    },
    {
        "city_id": 2905,
        "region_id": 6,
        "name_ar": "المثناة",
        "name_en": "Al Mathnah",
        "center": [
            18.17468005,
            42.63688995
        ]
    },
    {
        "city_id": 2906,
        "region_id": 6,
        "name_ar": "الهضبة",
        "name_en": "Al Hadabah",
        "center": [
            18.17491998,
            42.56994003
        ]
    },
    {
        "city_id": 2907,
        "region_id": 6,
        "name_ar": "لعصان",
        "name_en": "Li'san",
        "center": [
            18.26165001,
            42.58847995
        ]
    },
    {
        "city_id": 2908,
        "region_id": 6,
        "name_ar": "المحالة",
        "name_en": "Al Mahalah",
        "center": [
            18.30567999,
            42.58817001
        ]
    },
    {
        "city_id": 2909,
        "region_id": 6,
        "name_ar": "الشرف",
        "name_en": "Ash Sharaf",
        "center": [
            18.20013997,
            42.53986006
        ]
    },
    {
        "city_id": 2910,
        "region_id": 6,
        "name_ar": "سر آل السريع",
        "name_en": "Sirr Al As Siri'",
        "center": [
            18.19995,
            42.58916
        ]
    },
    {
        "city_id": 2911,
        "region_id": 6,
        "name_ar": "العبب",
        "name_en": "Al 'Abab",
        "center": [
            18.23514,
            42.56985003
        ]
    },
    {
        "city_id": 2912,
        "region_id": 6,
        "name_ar": "الدارة",
        "name_en": "Ad Darah",
        "center": [
            18.24061004,
            42.55205
        ]
    },
    {
        "city_id": 2913,
        "region_id": 6,
        "name_ar": "الجرجر",
        "name_en": "Al Jarjar",
        "center": [
            18.26198005,
            42.55644996
        ]
    },
    {
        "city_id": 2914,
        "region_id": 6,
        "name_ar": "عدوان",
        "name_en": "'Adwan",
        "center": [
            18.29299996,
            42.55732005
        ]
    },
    {
        "city_id": 2915,
        "region_id": 6,
        "name_ar": "العين",
        "name_en": "Al 'Ayn",
        "center": [
            18.31670004,
            42.54337004
        ]
    },
    {
        "city_id": 2916,
        "region_id": 6,
        "name_ar": "الجعجاع",
        "name_en": "Al Ja'ja'",
        "center": [
            18.34249996,
            42.54338005
        ]
    },
    {
        "city_id": 2917,
        "region_id": 6,
        "name_ar": "الموسطة",
        "name_en": "Al Mawsatah",
        "center": [
            18.36202005,
            42.54026005
        ]
    },
    {
        "city_id": 2918,
        "region_id": 6,
        "name_ar": "آل جمعة",
        "name_en": "Al Jum'ah",
        "center": [
            18.33540002,
            42.56928005
        ]
    },
    {
        "city_id": 2919,
        "region_id": 6,
        "name_ar": "العزيزة",
        "name_en": "Al 'Azizah",
        "center": [
            18.21043996,
            42.42649002
        ]
    },
    {
        "city_id": 2920,
        "region_id": 6,
        "name_ar": "الهرير الغربي",
        "name_en": "Al Hurayr Al Gharbi",
        "center": [
            18.27355998,
            42.74523998
        ]
    },
    {
        "city_id": 2921,
        "region_id": 6,
        "name_ar": "إيتارة",
        "name_en": "Itarah",
        "center": [
            18.29782001,
            42.67889998
        ]
    },
    {
        "city_id": 2922,
        "region_id": 6,
        "name_ar": "أبو نخلة",
        "name_en": "Abu Nakhlah",
        "center": [
            18.26632,
            42.71758994
        ]
    },
    {
        "city_id": 2923,
        "region_id": 6,
        "name_ar": "القرح",
        "name_en": "Al Qurh",
        "center": [
            18.25500004,
            42.72160995
        ]
    },
    {
        "city_id": 2924,
        "region_id": 6,
        "name_ar": "العرف",
        "name_en": "Al 'Araf",
        "center": [
            18.21769,
            42.71936994
        ]
    },
    {
        "city_id": 2925,
        "region_id": 6,
        "name_ar": "أبو جرشة",
        "name_en": "Abu Jarshah",
        "center": [
            18.17522,
            42.67080994
        ]
    },
    {
        "city_id": 2926,
        "region_id": 6,
        "name_ar": "الخشم",
        "name_en": "Al Khashm",
        "center": [
            18.16128002,
            42.65908
        ]
    },
    {
        "city_id": 2927,
        "region_id": 6,
        "name_ar": "روغ العاند",
        "name_en": "Rugh Al 'Anid",
        "center": [
            18.19704995,
            42.64845994
        ]
    },
    {
        "city_id": 2928,
        "region_id": 6,
        "name_ar": "آل بالفلاح",
        "name_en": "Al Balfalah",
        "center": [
            18.27249005,
            42.63168005
        ]
    },
    {
        "city_id": 2929,
        "region_id": 6,
        "name_ar": "حجلا",
        "name_en": "Hajla",
        "center": [
            18.25042,
            42.62879002
        ]
    },
    {
        "city_id": 2930,
        "region_id": 6,
        "name_ar": "العطفة",
        "name_en": "Al 'Utfah",
        "center": [
            18.38945998,
            42.56227002
        ]
    },
    {
        "city_id": 2931,
        "region_id": 6,
        "name_ar": "تانة",
        "name_en": "Tanah",
        "center": [
            18.39910003,
            42.63685996
        ]
    },
    {
        "city_id": 2932,
        "region_id": 6,
        "name_ar": "آل الشيخ",
        "name_en": "Al Ash Shaykh",
        "center": [
            18.03386999,
            42.93425003
        ]
    },
    {
        "city_id": 2933,
        "region_id": 6,
        "name_ar": "حبيب",
        "name_en": "Hubayyib",
        "center": [
            17.98196001,
            42.59489996
        ]
    },
    {
        "city_id": 2934,
        "region_id": 6,
        "name_ar": "رغفة",
        "name_en": "Rughfah",
        "center": [
            17.94670005,
            42.62175004
        ]
    },
    {
        "city_id": 2935,
        "region_id": 6,
        "name_ar": "عضاضة",
        "name_en": "'Adadah",
        "center": [
            18.13612998,
            42.65352
        ]
    },
    {
        "city_id": 2936,
        "region_id": 6,
        "name_ar": "آل سرحان",
        "name_en": "Al Sirhan",
        "center": [
            18.12920996,
            42.69286002
        ]
    },
    {
        "city_id": 2937,
        "region_id": 6,
        "name_ar": "القعرة",
        "name_en": "Al Qa'arah",
        "center": [
            18.11046006,
            42.65732
        ]
    },
    {
        "city_id": 2938,
        "region_id": 6,
        "name_ar": "آل يزيد",
        "name_en": "Al Yazid",
        "center": [
            18.10194003,
            42.67994002
        ]
    },
    {
        "city_id": 2939,
        "region_id": 6,
        "name_ar": "المجمع",
        "name_en": "Al Majma'",
        "center": [
            18.12191998,
            42.73795003
        ]
    },
    {
        "city_id": 2940,
        "region_id": 6,
        "name_ar": "الصيحاني",
        "name_en": "As Sayhani",
        "center": [
            18.09065002,
            42.75283004
        ]
    },
    {
        "city_id": 2941,
        "region_id": 6,
        "name_ar": "البهيمة",
        "name_en": "Al Bihaymah",
        "center": [
            18.07777999,
            42.75255994
        ]
    },
    {
        "city_id": 2942,
        "region_id": 6,
        "name_ar": "القرعاء",
        "name_en": "Al Qar'a",
        "center": [
            18.07215001,
            42.7034
        ]
    },
    {
        "city_id": 2943,
        "region_id": 6,
        "name_ar": "الجر الصغير",
        "name_en": "Al Jarr As Saghir",
        "center": [
            18.05786001,
            42.72612004
        ]
    },
    {
        "city_id": 2944,
        "region_id": 6,
        "name_ar": "الشعف",
        "name_en": "Ash Sha'af",
        "center": [
            18.03390001,
            42.75472
        ]
    },
    {
        "city_id": 2945,
        "region_id": 6,
        "name_ar": "تمنية",
        "name_en": "Tamniyah",
        "center": [
            18.00678001,
            42.77954002
        ]
    },
    {
        "city_id": 2946,
        "region_id": 6,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            17.99717994,
            42.79070005
        ]
    },
    {
        "city_id": 2947,
        "region_id": 6,
        "name_ar": "آل علي",
        "name_en": "Al 'Ali",
        "center": [
            17.98992994,
            42.78030001
        ]
    },
    {
        "city_id": 2948,
        "region_id": 6,
        "name_ar": "عين الذيبة",
        "name_en": "'Ayn Adh Dhibah",
        "center": [
            18.28324004,
            42.38170004
        ]
    },
    {
        "city_id": 2949,
        "region_id": 6,
        "name_ar": "البارك",
        "name_en": "Al Barik",
        "center": [
            18.30446994,
            42.40283995
        ]
    },
    {
        "city_id": 2950,
        "region_id": 6,
        "name_ar": "قرضة",
        "name_en": "Qaradah",
        "center": [
            18.31384996,
            42.43140006
        ]
    },
    {
        "city_id": 2951,
        "region_id": 6,
        "name_ar": "آل زيدي",
        "name_en": "Al Zaydi",
        "center": [
            18.25817996,
            42.44586995
        ]
    },
    {
        "city_id": 2952,
        "region_id": 6,
        "name_ar": "حصن الجرين",
        "name_en": "Husn Al Jarin",
        "center": [
            18.26796998,
            42.42221001
        ]
    },
    {
        "city_id": 2953,
        "region_id": 6,
        "name_ar": "آل عاصم",
        "name_en": "Al 'Asim",
        "center": [
            18.29931998,
            42.44606996
        ]
    },
    {
        "city_id": 2954,
        "region_id": 6,
        "name_ar": "الجنفور",
        "name_en": "Al Janfur",
        "center": [
            18.46806999,
            42.67262006
        ]
    },
    {
        "city_id": 2955,
        "region_id": 6,
        "name_ar": "عرايس",
        "name_en": "'Arayis",
        "center": [
            18.44555001,
            42.67226995
        ]
    },
    {
        "city_id": 2956,
        "region_id": 6,
        "name_ar": "عمام",
        "name_en": "'Umam",
        "center": [
            18.02932001,
            42.38136999
        ]
    },
    {
        "city_id": 2957,
        "region_id": 6,
        "name_ar": "رهوة الغيناء",
        "name_en": "Rahwah Al Ghina",
        "center": [
            18.00360795,
            42.3870992
        ]
    },
    {
        "city_id": 2958,
        "region_id": 6,
        "name_ar": "شوحط",
        "name_en": "Shuhat",
        "center": [
            18.36327994,
            42.49610997
        ]
    },
    {
        "city_id": 2959,
        "region_id": 6,
        "name_ar": "منادرالعين",
        "name_en": "Manadir Al 'Ayn",
        "center": [
            18.34956005,
            42.49445002
        ]
    },
    {
        "city_id": 2960,
        "region_id": 6,
        "name_ar": "بني رزام",
        "name_en": "Bani Rizam",
        "center": [
            18.35428997,
            42.45937994
        ]
    },
    {
        "city_id": 2961,
        "region_id": 6,
        "name_ar": "الملاحة",
        "name_en": "Al Malahah",
        "center": [
            18.36761,
            42.46008002
        ]
    },
    {
        "city_id": 2962,
        "region_id": 6,
        "name_ar": "الطلحة",
        "name_en": "At Talhah",
        "center": [
            18.37224005,
            42.41974005
        ]
    },
    {
        "city_id": 2963,
        "region_id": 6,
        "name_ar": "شرمة",
        "name_en": "Sharmah",
        "center": [
            18.34879,
            42.37372004
        ]
    },
    {
        "city_id": 2964,
        "region_id": 6,
        "name_ar": "الحنق",
        "name_en": "Al Hanaq",
        "center": [
            18.37853004,
            42.54592003
        ]
    },
    {
        "city_id": 2965,
        "region_id": 6,
        "name_ar": "القرين",
        "name_en": "Al Qurayn",
        "center": [
            18.41050004,
            42.54655002
        ]
    },
    {
        "city_id": 2966,
        "region_id": 6,
        "name_ar": "آل مجمل",
        "name_en": "Al Mujammal",
        "center": [
            18.39138995,
            42.46847998
        ]
    },
    {
        "city_id": 2967,
        "region_id": 7,
        "name_ar": "بجدة",
        "name_en": "Bajdah",
        "center": [
            28.54410995,
            35.65845
        ]
    },
    {
        "city_id": 2968,
        "region_id": 6,
        "name_ar": "طبب",
        "name_en": "Tabab",
        "center": [
            18.37026003,
            42.37976006
        ]
    },
    {
        "city_id": 2969,
        "region_id": 6,
        "name_ar": "الشطاط",
        "name_en": "Al Shutat",
        "center": [
            18.29139995,
            42.49067006
        ]
    },
    {
        "city_id": 2970,
        "region_id": 6,
        "name_ar": "العبيدية",
        "name_en": "Al 'Abidiyah",
        "center": [
            17.96880999,
            43.14030995
        ]
    },
    {
        "city_id": 2971,
        "region_id": 6,
        "name_ar": "السبت",
        "name_en": "As Sabt",
        "center": [
            17.99762005,
            43.13379996
        ]
    },
    {
        "city_id": 2972,
        "region_id": 6,
        "name_ar": "حمالة",
        "name_en": "Himalah",
        "center": [
            17.99581002,
            43.09297002
        ]
    },
    {
        "city_id": 2973,
        "region_id": 6,
        "name_ar": "العقيق",
        "name_en": "Al Aqiq",
        "center": [
            17.97525996,
            43.12077995
        ]
    },
    {
        "city_id": 2974,
        "region_id": 6,
        "name_ar": "الوسط",
        "name_en": "Al Wasat",
        "center": [
            18.05346872,
            43.25044021
        ]
    },
    {
        "city_id": 2975,
        "region_id": 6,
        "name_ar": "آل بسام",
        "name_en": "Al Bassam",
        "center": [
            18.05788005,
            43.19169002
        ]
    },
    {
        "city_id": 2976,
        "region_id": 6,
        "name_ar": "آل دكين",
        "name_en": "Al Dukayn",
        "center": [
            18.02103997,
            43.23289997
        ]
    },
    {
        "city_id": 2977,
        "region_id": 6,
        "name_ar": "آل مهدي",
        "name_en": "Al Mahadi",
        "center": [
            18.07194998,
            43.15837003
        ]
    },
    {
        "city_id": 2978,
        "region_id": 6,
        "name_ar": "المصياد",
        "name_en": "Al Misyad",
        "center": [
            18.04767994,
            43.15407005
        ]
    },
    {
        "city_id": 2979,
        "region_id": 6,
        "name_ar": "الجزعة",
        "name_en": "Al Juz'ah",
        "center": [
            18.05998996,
            43.12633997
        ]
    },
    {
        "city_id": 2980,
        "region_id": 6,
        "name_ar": "آل مشدود",
        "name_en": "Al Mashdud",
        "center": [
            18.06453,
            43.10920006
        ]
    },
    {
        "city_id": 2981,
        "region_id": 6,
        "name_ar": "الجهمة",
        "name_en": "Al Jihmah",
        "center": [
            18.00938005,
            43.13313006
        ]
    },
    {
        "city_id": 2982,
        "region_id": 6,
        "name_ar": "العسران",
        "name_en": "Al 'Usran",
        "center": [
            18.04801002,
            43.05851002
        ]
    },
    {
        "city_id": 2983,
        "region_id": 6,
        "name_ar": "آل بحبيب",
        "name_en": "Al Bihabib",
        "center": [
            18.06585996,
            43.07313998
        ]
    },
    {
        "city_id": 2984,
        "region_id": 6,
        "name_ar": "آل قوشع",
        "name_en": "Al Qawsha'",
        "center": [
            18.09774001,
            43.08712005
        ]
    },
    {
        "city_id": 2985,
        "region_id": 6,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            18.08740995,
            43.11483997
        ]
    },
    {
        "city_id": 2986,
        "region_id": 4,
        "name_ar": "الدليمية",
        "name_en": "Ad Dilaymiyah",
        "center": [
            26.03617996,
            43.28592
        ]
    },
    {
        "city_id": 2987,
        "region_id": 4,
        "name_ar": "الفوارة",
        "name_en": "Al Fawwarah",
        "center": [
            26.06772003,
            42.65828006
        ]
    },
    {
        "city_id": 2988,
        "region_id": 4,
        "name_ar": "عقلة الصقور",
        "name_en": "Uqlat As Suqur",
        "center": [
            25.83349996,
            42.20796997
        ]
    },
    {
        "city_id": 2989,
        "region_id": 4,
        "name_ar": "الذيبية",
        "name_en": "Adh Dhibiyah",
        "center": [
            26.03124136,
            43.15138412
        ]
    },
    {
        "city_id": 2990,
        "region_id": 4,
        "name_ar": "قصر ابن عقيل",
        "name_en": "Qasr Ibn 'Uqayyil",
        "center": [
            25.84396997,
            43.37504006
        ]
    },
    {
        "city_id": 2991,
        "region_id": 4,
        "name_ar": "قطن",
        "name_en": "Qitan",
        "center": [
            25.97691001,
            42.36838
        ]
    },
    {
        "city_id": 2992,
        "region_id": 4,
        "name_ar": "البصيري",
        "name_en": "Al Basiri",
        "center": [
            25.21262,
            42.30442004
        ]
    },
    {
        "city_id": 2993,
        "region_id": 4,
        "name_ar": "الخريشاء",
        "name_en": "Al Khuraysha",
        "center": [
            25.41955973,
            43.38805902
        ]
    },
    {
        "city_id": 2994,
        "region_id": 4,
        "name_ar": "الدحلة",
        "name_en": "Ad Dahlah",
        "center": [
            25.40893648,
            43.3845547
        ]
    },
    {
        "city_id": 2995,
        "region_id": 4,
        "name_ar": "النقرة",
        "name_en": "An Nuqrah",
        "center": [
            25.58985995,
            41.45286005
        ]
    },
    {
        "city_id": 2996,
        "region_id": 4,
        "name_ar": "امباري",
        "name_en": "Embary",
        "center": [
            26.05959976,
            42.23439039
        ]
    },
    {
        "city_id": 2997,
        "region_id": 4,
        "name_ar": "الجفن",
        "name_en": "Al Jifn",
        "center": [
            25.65082998,
            41.61821994
        ]
    },
    {
        "city_id": 2998,
        "region_id": 4,
        "name_ar": "ديم",
        "name_en": "Daym",
        "center": [
            25.71249005,
            41.81499999
        ]
    },
    {
        "city_id": 2999,
        "region_id": 4,
        "name_ar": "الهميلية",
        "name_en": "Al Humayliyah",
        "center": [
            25.61,
            41.89053998
        ]
    },
    {
        "city_id": 3000,
        "region_id": 4,
        "name_ar": "عماير سعيدة",
        "name_en": "Amayir Si'idah",
        "center": [
            25.83627001,
            41.95714995
        ]
    },
    {
        "city_id": 3001,
        "region_id": 4,
        "name_ar": "ذوقان الركايا",
        "name_en": "Dhawqan Ar Rakaya",
        "center": [
            25.78153333,
            42.03105
        ]
    },
    {
        "city_id": 3002,
        "region_id": 4,
        "name_ar": "الضاحي",
        "name_en": "Ad Dahi",
        "center": [
            26.30319003,
            44.04695003
        ]
    },
    {
        "city_id": 3003,
        "region_id": 4,
        "name_ar": "الوهلان",
        "name_en": "Al Wahalan",
        "center": [
            26.10871005,
            43.92188
        ]
    },
    {
        "city_id": 3004,
        "region_id": 4,
        "name_ar": "العونية",
        "name_en": "Al 'Awniyah",
        "center": [
            26.09169005,
            43.91497006
        ]
    },
    {
        "city_id": 3005,
        "region_id": 4,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            26.07355999,
            43.92251001
        ]
    },
    {
        "city_id": 3006,
        "region_id": 4,
        "name_ar": "الأشرفية",
        "name_en": "Al Ashrafiyah",
        "center": [
            26.10743002,
            44.05465001
        ]
    },
    {
        "city_id": 3007,
        "region_id": 4,
        "name_ar": "مزرعة البسامية",
        "name_en": "Mazra'at Al Bassamiyah",
        "center": [
            26.10124,
            43.85155995
        ]
    },
    {
        "city_id": 3008,
        "region_id": 4,
        "name_ar": "الضلعة",
        "name_en": "Ad Dal'ah",
        "center": [
            25.97799004,
            43.96281996
        ]
    },
    {
        "city_id": 3009,
        "region_id": 4,
        "name_ar": "غدفاء",
        "name_en": "Ghadfa",
        "center": [
            26.13876999,
            43.89713997
        ]
    },
    {
        "city_id": 3010,
        "region_id": 4,
        "name_ar": "الغريبية",
        "name_en": "Al Ghuraybiyah",
        "center": [
            26.07692004,
            43.87666
        ]
    },
    {
        "city_id": 3011,
        "region_id": 4,
        "name_ar": "الفيحاء",
        "name_en": "Al Fayha",
        "center": [
            26.05873005,
            43.99655994
        ]
    },
    {
        "city_id": 3012,
        "region_id": 4,
        "name_ar": "أم غويفة",
        "name_en": "Umm Ghuwayfah",
        "center": [
            26.14163998,
            43.96775002
        ]
    },
    {
        "city_id": 3013,
        "region_id": 4,
        "name_ar": "الجناح",
        "name_en": "Al Janah",
        "center": [
            26.11695,
            43.97309006
        ]
    },
    {
        "city_id": 3014,
        "region_id": 4,
        "name_ar": "الحزم",
        "name_en": "Al Hazm",
        "center": [
            26.05198996,
            44.23975006
        ]
    },
    {
        "city_id": 3015,
        "region_id": 4,
        "name_ar": "رياض قناء",
        "name_en": "Riyad Qana",
        "center": [
            26.04920995,
            44.13427004
        ]
    },
    {
        "city_id": 3016,
        "region_id": 4,
        "name_ar": "المندسة",
        "name_en": "Al Mundassah",
        "center": [
            26.19234997,
            44.14223
        ]
    },
    {
        "city_id": 3017,
        "region_id": 4,
        "name_ar": "رفائع الحميمة",
        "name_en": "Ruf'ai' Al Humaymah",
        "center": [
            25.51323002,
            43.09992999
        ]
    },
    {
        "city_id": 3018,
        "region_id": 4,
        "name_ar": "مظيفر",
        "name_en": "Mudhayfir",
        "center": [
            25.38447,
            43.00149997
        ]
    },
    {
        "city_id": 3019,
        "region_id": 4,
        "name_ar": "العمودة",
        "name_en": "Al 'Amudah",
        "center": [
            25.36712999,
            42.87352002
        ]
    },
    {
        "city_id": 3020,
        "region_id": 4,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            25.53252999,
            42.70102994
        ]
    },
    {
        "city_id": 3021,
        "region_id": 4,
        "name_ar": "ابو طلح",
        "name_en": "Abu Talh",
        "center": [
            25.43383333,
            42.84271667
        ]
    },
    {
        "city_id": 3022,
        "region_id": 4,
        "name_ar": "مهيضة",
        "name_en": "Mihayyidah",
        "center": [
            25.41271003,
            42.81750006
        ]
    },
    {
        "city_id": 3023,
        "region_id": 4,
        "name_ar": "وادي النخيل",
        "name_en": "Wadi Al Nakhil",
        "center": [
            25.42615998,
            42.82986995
        ]
    },
    {
        "city_id": 3024,
        "region_id": 4,
        "name_ar": "فياضة",
        "name_en": "Fayyadah",
        "center": [
            25.51653002,
            42.72663004
        ]
    },
    {
        "city_id": 3025,
        "region_id": 4,
        "name_ar": "كحلة",
        "name_en": "Kahlah",
        "center": [
            25.47668995,
            42.68874996
        ]
    },
    {
        "city_id": 3026,
        "region_id": 4,
        "name_ar": "رفائع الحجرة",
        "name_en": "Ruf'ai' Al Hajrah",
        "center": [
            25.32936994,
            42.58729006
        ]
    },
    {
        "city_id": 3027,
        "region_id": 4,
        "name_ar": "مشاش ركيان",
        "name_en": "Mishash Rukayyan",
        "center": [
            25.35767005,
            42.58014996
        ]
    },
    {
        "city_id": 3028,
        "region_id": 4,
        "name_ar": "أبو عرداء",
        "name_en": "Abu 'Arda",
        "center": [
            25.97648005,
            42.91459
        ]
    },
    {
        "city_id": 3029,
        "region_id": 4,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            25.77879,
            43.04105995
        ]
    },
    {
        "city_id": 3030,
        "region_id": 4,
        "name_ar": "النبهانية",
        "name_en": "An Nabhaniyah",
        "center": [
            25.87207999,
            43.05837002
        ]
    },
    {
        "city_id": 3031,
        "region_id": 4,
        "name_ar": "ثادج",
        "name_en": "Thadij",
        "center": [
            25.85920001,
            42.81293
        ]
    },
    {
        "city_id": 3032,
        "region_id": 4,
        "name_ar": "ربيق",
        "name_en": "Rubayq",
        "center": [
            25.45389004,
            43.87836003
        ]
    },
    {
        "city_id": 3033,
        "region_id": 4,
        "name_ar": "سامودة",
        "name_en": "Samudah",
        "center": [
            25.42695004,
            43.89742001
        ]
    },
    {
        "city_id": 3034,
        "region_id": 4,
        "name_ar": "الملقاء",
        "name_en": "Al Malqa",
        "center": [
            25.38134003,
            43.96236002
        ]
    },
    {
        "city_id": 3035,
        "region_id": 4,
        "name_ar": "الخرماء",
        "name_en": "Al Kharma",
        "center": [
            25.58454995,
            44.06516005
        ]
    },
    {
        "city_id": 3036,
        "region_id": 4,
        "name_ar": "الخرماءالشمالية",
        "name_en": "Al Kharma Ash Shamaliyah",
        "center": [
            25.60658006,
            44.05661001
        ]
    },
    {
        "city_id": 3037,
        "region_id": 4,
        "name_ar": "الحيسونية",
        "name_en": "Al Haysuniyah",
        "center": [
            25.67070998,
            41.72157999
        ]
    },
    {
        "city_id": 3038,
        "region_id": 4,
        "name_ar": "القعير",
        "name_en": "Al Qu'ayyir",
        "center": [
            25.62155995,
            44.38360994
        ]
    },
    {
        "city_id": 3039,
        "region_id": 4,
        "name_ar": "العمار",
        "name_en": "Al 'Amar",
        "center": [
            25.57551006,
            44.31917001
        ]
    },
    {
        "city_id": 3040,
        "region_id": 3,
        "name_ar": "قريضة",
        "name_en": "Quraydah",
        "center": [
            24.42812999,
            39.67048999
        ]
    },
    {
        "city_id": 3041,
        "region_id": 3,
        "name_ar": "الجصة",
        "name_en": "Al Jissah",
        "center": [
            24.38257003,
            39.5995
        ]
    },
    {
        "city_id": 3042,
        "region_id": 3,
        "name_ar": "ابيار علي",
        "name_en": "Abyar Ali",
        "center": [
            24.40236998,
            39.54007004
        ]
    },
    {
        "city_id": 3043,
        "region_id": 3,
        "name_ar": "أبو كبير",
        "name_en": "Abu Kabir",
        "center": [
            24.39558997,
            39.48862997
        ]
    },
    {
        "city_id": 3044,
        "region_id": 3,
        "name_ar": "الدويخلة",
        "name_en": "Ad Duwaykhilah",
        "center": [
            24.51342002,
            39.66223006
        ]
    },
    {
        "city_id": 3045,
        "region_id": 3,
        "name_ar": "الوعيرة",
        "name_en": "Al Wu'ayrah",
        "center": [
            24.55275,
            39.67816
        ]
    },
    {
        "city_id": 3046,
        "region_id": 4,
        "name_ar": "ام جرفان",
        "name_en": "Umm Jarfan",
        "center": [
            25.58926576,
            42.78847721
        ]
    },
    {
        "city_id": 3047,
        "region_id": 3,
        "name_ar": "العيون",
        "name_en": "Al Uyun",
        "center": [
            24.55455001,
            39.57890998
        ]
    },
    {
        "city_id": 3048,
        "region_id": 3,
        "name_ar": "الخليل",
        "name_en": "Al Khulayl",
        "center": [
            24.59656002,
            39.56676001
        ]
    },
    {
        "city_id": 3049,
        "region_id": 3,
        "name_ar": "نعامين",
        "name_en": "Na'amin",
        "center": [
            24.57827003,
            39.68640006
        ]
    },
    {
        "city_id": 3050,
        "region_id": 3,
        "name_ar": "مليحة",
        "name_en": "Mulayhah",
        "center": [
            24.70326005,
            39.68140004
        ]
    },
    {
        "city_id": 3051,
        "region_id": 3,
        "name_ar": "العاقول",
        "name_en": "Al 'Aqul",
        "center": [
            24.53212005,
            39.78402
        ]
    },
    {
        "city_id": 3052,
        "region_id": 3,
        "name_ar": "الحار السفلى",
        "name_en": "Al Har As Sufla",
        "center": [
            24.50594996,
            39.91984002
        ]
    },
    {
        "city_id": 3053,
        "region_id": 3,
        "name_ar": "مفرحات",
        "name_en": "Mufarrihat",
        "center": [
            24.37565002,
            39.45468996
        ]
    },
    {
        "city_id": 3054,
        "region_id": 3,
        "name_ar": "القطيعاء",
        "name_en": "Al Qutay'a",
        "center": [
            24.60461004,
            39.77200006
        ]
    },
    {
        "city_id": 3055,
        "region_id": 3,
        "name_ar": "الفرع",
        "name_en": "Al Far'",
        "center": [
            24.23619006,
            39.12113005
        ]
    },
    {
        "city_id": 3056,
        "region_id": 3,
        "name_ar": "الفقارة",
        "name_en": "Al Fuqarah",
        "center": [
            24.19053005,
            39.14544001
        ]
    },
    {
        "city_id": 3057,
        "region_id": 3,
        "name_ar": "أرباق",
        "name_en": "Arbaq",
        "center": [
            24.21960003,
            39.15132004
        ]
    },
    {
        "city_id": 3058,
        "region_id": 3,
        "name_ar": "المليليح",
        "name_en": "Al Mulaylih",
        "center": [
            23.59723004,
            39.44208996
        ]
    },
    {
        "city_id": 3059,
        "region_id": 3,
        "name_ar": "المغرة",
        "name_en": "Al Magharah",
        "center": [
            24.89540006,
            40.21069994
        ]
    },
    {
        "city_id": 3060,
        "region_id": 3,
        "name_ar": "أبو نمصات",
        "name_en": "Abu Numasat",
        "center": [
            24.87757996,
            40.21540004
        ]
    },
    {
        "city_id": 3061,
        "region_id": 3,
        "name_ar": "دثير",
        "name_en": "Dithir",
        "center": [
            24.88595004,
            40.12874999
        ]
    },
    {
        "city_id": 3062,
        "region_id": 3,
        "name_ar": "العقيلة",
        "name_en": "Al 'Uqaylah",
        "center": [
            24.82848004,
            40.24578995
        ]
    },
    {
        "city_id": 3063,
        "region_id": 3,
        "name_ar": "العوينة",
        "name_en": "Al 'Uwaynah",
        "center": [
            24.64616998,
            39.88196005
        ]
    },
    {
        "city_id": 3064,
        "region_id": 3,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            24.73944003,
            39.84325
        ]
    },
    {
        "city_id": 3065,
        "region_id": 3,
        "name_ar": "الثعلة",
        "name_en": "Ath Tha'alah",
        "center": [
            24.68472994,
            39.84785994
        ]
    },
    {
        "city_id": 3066,
        "region_id": 3,
        "name_ar": "الحار العليا",
        "name_en": "Al Har Al 'Ulya",
        "center": [
            24.55660002,
            39.94438997
        ]
    },
    {
        "city_id": 3067,
        "region_id": 3,
        "name_ar": "المضيبعة",
        "name_en": "Al Mudaybi'ah",
        "center": [
            24.14603005,
            39.21616003
        ]
    },
    {
        "city_id": 3068,
        "region_id": 3,
        "name_ar": "السوسي",
        "name_en": "As Susi",
        "center": [
            24.06602997,
            39.33117
        ]
    },
    {
        "city_id": 3069,
        "region_id": 3,
        "name_ar": "الشلايل",
        "name_en": "Ash Shalayil",
        "center": [
            23.97484997,
            39.37217994
        ]
    },
    {
        "city_id": 3070,
        "region_id": 3,
        "name_ar": "أويدك",
        "name_en": "Uwaydik",
        "center": [
            24.06969994,
            39.34590002
        ]
    },
    {
        "city_id": 3071,
        "region_id": 3,
        "name_ar": "الغريض",
        "name_en": "Al Gharid",
        "center": [
            24.30859997,
            39.38417996
        ]
    },
    {
        "city_id": 3072,
        "region_id": 3,
        "name_ar": "الصيفي",
        "name_en": "As Sayfi",
        "center": [
            24.31767004,
            39.31325003
        ]
    },
    {
        "city_id": 3073,
        "region_id": 3,
        "name_ar": "الغصن",
        "name_en": "Al Ghusan",
        "center": [
            24.23728999,
            39.58055
        ]
    },
    {
        "city_id": 3074,
        "region_id": 3,
        "name_ar": "الظمو",
        "name_en": "Adh Dhamu",
        "center": [
            24.06027005,
            39.42865002
        ]
    },
    {
        "city_id": 3075,
        "region_id": 3,
        "name_ar": "الطرقية",
        "name_en": "Al Tarqiyah",
        "center": [
            23.91611999,
            39.32968999
        ]
    },
    {
        "city_id": 3076,
        "region_id": 3,
        "name_ar": "أم العيال",
        "name_en": "Umm Al 'Iyal",
        "center": [
            23.26906003,
            39.57064003
        ]
    },
    {
        "city_id": 3077,
        "region_id": 3,
        "name_ar": "الملبنة",
        "name_en": "Al Malbanah",
        "center": [
            23.19835003,
            39.54683999
        ]
    },
    {
        "city_id": 3078,
        "region_id": 3,
        "name_ar": "حنذ",
        "name_en": "Hanadh",
        "center": [
            23.34140002,
            39.85679002
        ]
    },
    {
        "city_id": 3079,
        "region_id": 3,
        "name_ar": "الهندية",
        "name_en": "Al Hindiyah",
        "center": [
            23.67144004,
            39.67934005
        ]
    },
    {
        "city_id": 3080,
        "region_id": 3,
        "name_ar": "المرير",
        "name_en": "Al Murayr",
        "center": [
            23.80520997,
            39.54648997
        ]
    },
    {
        "city_id": 3081,
        "region_id": 3,
        "name_ar": "الدحو",
        "name_en": "Ad Duhu",
        "center": [
            23.84622002,
            39.66227994
        ]
    },
    {
        "city_id": 3082,
        "region_id": 3,
        "name_ar": "النقيعاء",
        "name_en": "An Nuqay'a",
        "center": [
            23.88472005,
            39.72143997
        ]
    },
    {
        "city_id": 3083,
        "region_id": 3,
        "name_ar": "المشينية",
        "name_en": "Al Mushayniyah",
        "center": [
            23.85577001,
            39.68192001
        ]
    },
    {
        "city_id": 3084,
        "region_id": 3,
        "name_ar": "القافلة",
        "name_en": "Al Qafilah",
        "center": [
            23.87201006,
            39.65547997
        ]
    },
    {
        "city_id": 3085,
        "region_id": 3,
        "name_ar": "اللثامة",
        "name_en": "Al Luthamah",
        "center": [
            23.91945998,
            39.46612
        ]
    },
    {
        "city_id": 3086,
        "region_id": 3,
        "name_ar": "الملحة",
        "name_en": "Al Malhah",
        "center": [
            23.80606999,
            39.46344
        ]
    },
    {
        "city_id": 3087,
        "region_id": 3,
        "name_ar": "العيزاء",
        "name_en": "Al 'Ayza",
        "center": [
            23.79807998,
            39.55022
        ]
    },
    {
        "city_id": 3088,
        "region_id": 3,
        "name_ar": "النقرة",
        "name_en": "An Nuqrah",
        "center": [
            23.79438999,
            39.58592996
        ]
    },
    {
        "city_id": 3089,
        "region_id": 3,
        "name_ar": "البردية",
        "name_en": "Al Bardiyah",
        "center": [
            24.05319997,
            39.60833996
        ]
    },
    {
        "city_id": 3090,
        "region_id": 3,
        "name_ar": "العشيرة",
        "name_en": "Al 'Ushayrah",
        "center": [
            24.01816996,
            39.67151994
        ]
    },
    {
        "city_id": 3091,
        "region_id": 3,
        "name_ar": "القصيبة",
        "name_en": "Al Qisayyibah",
        "center": [
            23.05903994,
            39.30230997
        ]
    },
    {
        "city_id": 3092,
        "region_id": 3,
        "name_ar": "الشوامين",
        "name_en": "Ash Shuwamin",
        "center": [
            23.52457996,
            39.69993995
        ]
    },
    {
        "city_id": 3093,
        "region_id": 3,
        "name_ar": "الشفية",
        "name_en": "Ash Shufayyah",
        "center": [
            23.57684003,
            39.74497994
        ]
    },
    {
        "city_id": 3094,
        "region_id": 3,
        "name_ar": "تيتد",
        "name_en": "Taytad",
        "center": [
            24.83180995,
            39.00267
        ]
    },
    {
        "city_id": 3095,
        "region_id": 3,
        "name_ar": "البييرات",
        "name_en": "Al Buyayrat",
        "center": [
            24.75284995,
            38.99102
        ]
    },
    {
        "city_id": 3096,
        "region_id": 3,
        "name_ar": "هرمة",
        "name_en": "Hurumah",
        "center": [
            24.58572004,
            40.33185001
        ]
    },
    {
        "city_id": 3097,
        "region_id": 3,
        "name_ar": "العثيا",
        "name_en": "Al 'Uthayya",
        "center": [
            24.45294004,
            40.47246997
        ]
    },
    {
        "city_id": 3098,
        "region_id": 7,
        "name_ar": "شقري",
        "name_en": "Shiqri",
        "center": [
            28.02041446,
            36.00411797
        ]
    },
    {
        "city_id": 3099,
        "region_id": 3,
        "name_ar": "شجوى",
        "name_en": "Shajwa",
        "center": [
            25.07207,
            38.99179004
        ]
    },
    {
        "city_id": 3100,
        "region_id": 3,
        "name_ar": "البوير",
        "name_en": "Al Buwair",
        "center": [
            24.95571004,
            38.98673998
        ]
    },
    {
        "city_id": 3101,
        "region_id": 3,
        "name_ar": "الشقرة",
        "name_en": "Ash Shuqrah",
        "center": [
            24.75646004,
            40.27969998
        ]
    },
    {
        "city_id": 3102,
        "region_id": 3,
        "name_ar": "الصويدرة",
        "name_en": "As Suwaydirah",
        "center": [
            24.72895996,
            40.15611998
        ]
    },
    {
        "city_id": 3103,
        "region_id": 3,
        "name_ar": "الفريش",
        "name_en": "Al Furaysh",
        "center": [
            24.21605,
            39.28414002
        ]
    },
    {
        "city_id": 3104,
        "region_id": 3,
        "name_ar": "الريان",
        "name_en": "Ar Rayyan",
        "center": [
            23.44353,
            39.73922004
        ]
    },
    {
        "city_id": 3105,
        "region_id": 3,
        "name_ar": "المليليح",
        "name_en": "Al Mulaylih",
        "center": [
            24.81134003,
            39.16576995
        ]
    },
    {
        "city_id": 3106,
        "region_id": 3,
        "name_ar": "الرصيعة",
        "name_en": "Ar Rasi'ah",
        "center": [
            24.69974,
            39.81550006
        ]
    },
    {
        "city_id": 3107,
        "region_id": 3,
        "name_ar": "ابيار الماشي",
        "name_en": "Abyar Al Mashi",
        "center": [
            24.21268999,
            39.55383
        ]
    },
    {
        "city_id": 3108,
        "region_id": 3,
        "name_ar": "رواوة",
        "name_en": "Ruwawah",
        "center": [
            24.13665006,
            39.58123002
        ]
    },
    {
        "city_id": 3109,
        "region_id": 3,
        "name_ar": "الجفر",
        "name_en": "Al Jafr",
        "center": [
            24.39985002,
            39.15364999
        ]
    },
    {
        "city_id": 3110,
        "region_id": 3,
        "name_ar": "ابو ضباع",
        "name_en": "Abu Diba'",
        "center": [
            23.27414005,
            39.57465998
        ]
    },
    {
        "city_id": 3111,
        "region_id": 3,
        "name_ar": "المضيق",
        "name_en": "Al Madiq",
        "center": [
            23.32347,
            39.61437995
        ]
    },
    {
        "city_id": 3112,
        "region_id": 3,
        "name_ar": "الاكحل",
        "name_en": "Al Akhal",
        "center": [
            23.31741006,
            39.8569
        ]
    },
    {
        "city_id": 3113,
        "region_id": 3,
        "name_ar": "اليتمة",
        "name_en": "Al Yitimah",
        "center": [
            23.81588997,
            39.64382997
        ]
    },
    {
        "city_id": 3114,
        "region_id": 3,
        "name_ar": "الفقير",
        "name_en": "Al Faqir",
        "center": [
            23.42661995,
            39.70473002
        ]
    },
    {
        "city_id": 3115,
        "region_id": 3,
        "name_ar": "المندسة",
        "name_en": "Al Mundassah",
        "center": [
            24.63929996,
            39.32174999
        ]
    },
    {
        "city_id": 3116,
        "region_id": 3,
        "name_ar": "بواط",
        "name_en": "Buwat",
        "center": [
            24.72895995,
            39.20831
        ]
    },
    {
        "city_id": 3117,
        "region_id": 3,
        "name_ar": "العصيلب",
        "name_en": "Al 'Usaylib",
        "center": [
            24.77313005,
            39.17969004
        ]
    },
    {
        "city_id": 3118,
        "region_id": 3,
        "name_ar": "الجفدور",
        "name_en": "Al Jifdur",
        "center": [
            24.85603994,
            39.16620995
        ]
    },
    {
        "city_id": 3119,
        "region_id": 4,
        "name_ar": "مسكة",
        "name_en": "Miskah",
        "center": [
            24.81863996,
            42.92311003
        ]
    },
    {
        "city_id": 3120,
        "region_id": 4,
        "name_ar": "أم المحاش",
        "name_en": "Umm Al Mahash",
        "center": [
            24.90120998,
            42.67714006
        ]
    },
    {
        "city_id": 3121,
        "region_id": 4,
        "name_ar": "عيدة",
        "name_en": "'Idah",
        "center": [
            24.80637005,
            42.71176005
        ]
    },
    {
        "city_id": 3122,
        "region_id": 4,
        "name_ar": "الرفائع",
        "name_en": "Ar Rafai'",
        "center": [
            24.80812994,
            42.85864996
        ]
    },
    {
        "city_id": 3123,
        "region_id": 4,
        "name_ar": "صميعر",
        "name_en": "Sumayir",
        "center": [
            24.86971996,
            42.90296
        ]
    },
    {
        "city_id": 3124,
        "region_id": 1,
        "name_ar": "فيضة سلام",
        "name_en": "Faydat Salam",
        "center": [
            24.78583995,
            43.13987996
        ]
    },
    {
        "city_id": 3125,
        "region_id": 4,
        "name_ar": "طفيلة",
        "name_en": "Tufaylah",
        "center": [
            24.66511999,
            43.03930001
        ]
    },
    {
        "city_id": 3126,
        "region_id": 4,
        "name_ar": "حليوة",
        "name_en": "Hulaywah",
        "center": [
            24.60314998,
            43.13404999
        ]
    },
    {
        "city_id": 3127,
        "region_id": 4,
        "name_ar": "هرمول",
        "name_en": "Hurmul",
        "center": [
            24.76079006,
            43.2013
        ]
    },
    {
        "city_id": 3128,
        "region_id": 1,
        "name_ar": "روضة عسعس",
        "name_en": "Rawdat 'As'as",
        "center": [
            24.54600005,
            42.95798999
        ]
    },
    {
        "city_id": 3129,
        "region_id": 4,
        "name_ar": "المطيوي",
        "name_en": "Al Mutaywi",
        "center": [
            24.71413005,
            42.89482002
        ]
    },
    {
        "city_id": 3130,
        "region_id": 4,
        "name_ar": "بدائع هويشلة",
        "name_en": "Badai' Huwayshilah",
        "center": [
            24.62256002,
            42.73203006
        ]
    },
    {
        "city_id": 3131,
        "region_id": 1,
        "name_ar": "الكفية",
        "name_en": "Al Kuffiyah",
        "center": [
            24.52883005,
            42.86974003
        ]
    },
    {
        "city_id": 3132,
        "region_id": 4,
        "name_ar": "بقيعاء الجنوبية",
        "name_en": "Buqay'a Al Janubiyah",
        "center": [
            25.04919001,
            42.99679998
        ]
    },
    {
        "city_id": 3133,
        "region_id": 4,
        "name_ar": "الرفايع النجج",
        "name_en": "Ar Rufayi' Al Najh",
        "center": [
            24.91573005,
            42.40491001
        ]
    },
    {
        "city_id": 3134,
        "region_id": 4,
        "name_ar": "الظاهرية",
        "name_en": "Adh Dhahiriyah",
        "center": [
            24.92778998,
            42.41552002
        ]
    },
    {
        "city_id": 3135,
        "region_id": 4,
        "name_ar": "المندسة",
        "name_en": "Al Mundassah",
        "center": [
            24.96528,
            42.40788997
        ]
    },
    {
        "city_id": 3136,
        "region_id": 4,
        "name_ar": "العقلة",
        "name_en": "Al 'Uqlah",
        "center": [
            24.98648997,
            42.41325003
        ]
    },
    {
        "city_id": 3137,
        "region_id": 4,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            24.90852004,
            42.17428007
        ]
    },
    {
        "city_id": 3138,
        "region_id": 1,
        "name_ar": "الضبعية",
        "name_en": "Ad Dubay'ah",
        "center": [
            24.67555998,
            42.43076001
        ]
    },
    {
        "city_id": 3139,
        "region_id": 4,
        "name_ar": "بدائع الضبعية",
        "name_en": "Badai Ad Dib'iyah",
        "center": [
            24.74008998,
            42.41085
        ]
    },
    {
        "city_id": 3140,
        "region_id": 4,
        "name_ar": "جفرة الجديدة",
        "name_en": "Jafrat Al Jadidah",
        "center": [
            24.73403006,
            42.53326995
        ]
    },
    {
        "city_id": 3141,
        "region_id": 4,
        "name_ar": "جفرة",
        "name_en": "Jafrah",
        "center": [
            24.69181999,
            42.54288
        ]
    },
    {
        "city_id": 3142,
        "region_id": 4,
        "name_ar": "الحمادة",
        "name_en": "Al Hamadah",
        "center": [
            25.01211995,
            42.41977997
        ]
    },
    {
        "city_id": 3143,
        "region_id": 4,
        "name_ar": "بدائع مشرفة",
        "name_en": "Badai' Mushrifah",
        "center": [
            25.05516003,
            42.69763998
        ]
    },
    {
        "city_id": 3144,
        "region_id": 4,
        "name_ar": "نجخ الجنوبي",
        "name_en": "Najkh Al Janubi",
        "center": [
            25.00009997,
            42.67241001
        ]
    },
    {
        "city_id": 3145,
        "region_id": 4,
        "name_ar": "نجخ الشمالي",
        "name_en": "Najkh Al Shamali",
        "center": [
            25.01543005,
            42.67493998
        ]
    },
    {
        "city_id": 3146,
        "region_id": 4,
        "name_ar": "القويعية",
        "name_en": "Al Quway'iyah",
        "center": [
            25.36755998,
            42.46907
        ]
    },
    {
        "city_id": 3147,
        "region_id": 4,
        "name_ar": "صعينين",
        "name_en": "Su'aynin",
        "center": [
            25.18898997,
            42.53903999
        ]
    },
    {
        "city_id": 3148,
        "region_id": 4,
        "name_ar": "ليم",
        "name_en": "Laym",
        "center": [
            24.89341001,
            43.01796996
        ]
    },
    {
        "city_id": 3149,
        "region_id": 4,
        "name_ar": "السليسية",
        "name_en": "As Sulaysiyah",
        "center": [
            24.94607,
            42.95647998
        ]
    },
    {
        "city_id": 3150,
        "region_id": 1,
        "name_ar": "فيضة نومان",
        "name_en": "Faydat Noman",
        "center": [
            24.45428333,
            42.93181667
        ]
    },
    {
        "city_id": 3151,
        "region_id": 4,
        "name_ar": "ضرية",
        "name_en": "Dariyah",
        "center": [
            24.71292004,
            42.93423003
        ]
    },
    {
        "city_id": 3152,
        "region_id": 4,
        "name_ar": "الصمعورية",
        "name_en": "As Sum'uriyah",
        "center": [
            24.83869003,
            42.85982997
        ]
    },
    {
        "city_id": 3153,
        "region_id": 4,
        "name_ar": "سلام",
        "name_en": "Salam",
        "center": [
            24.72979995,
            43.12951996
        ]
    },
    {
        "city_id": 3154,
        "region_id": 4,
        "name_ar": "العاقر",
        "name_en": "Al 'Aqir",
        "center": [
            25.11245997,
            42.64011002
        ]
    },
    {
        "city_id": 3155,
        "region_id": 4,
        "name_ar": "بدائع ريمان",
        "name_en": "Badai' Riman",
        "center": [
            25.08893996,
            42.69410005
        ]
    },
    {
        "city_id": 3156,
        "region_id": 4,
        "name_ar": "بدائع الضبطان",
        "name_en": "Badai' Ad Dubtan",
        "center": [
            24.96737998,
            42.93583994
        ]
    },
    {
        "city_id": 3157,
        "region_id": 4,
        "name_ar": "البعجاء",
        "name_en": "Al Ba'ja",
        "center": [
            25.20249999,
            42.22214
        ]
    },
    {
        "city_id": 3158,
        "region_id": 1,
        "name_ar": "الحريق",
        "name_en": "Al Hariq",
        "center": [
            23.61667004,
            46.51667005
        ]
    },
    {
        "city_id": 3159,
        "region_id": 1,
        "name_ar": "نعام",
        "name_en": "Na'am",
        "center": [
            23.61717535,
            46.63630737
        ]
    },
    {
        "city_id": 3160,
        "region_id": 1,
        "name_ar": "حوطة الحلوة",
        "name_en": "Hawtat Al Hilwah",
        "center": [
            23.46537999,
            46.82534006
        ]
    },
    {
        "city_id": 3161,
        "region_id": 1,
        "name_ar": "حوطة بني تميم",
        "name_en": "Hawtat Bani Tamim",
        "center": [
            23.49761003,
            46.86429996
        ]
    },
    {
        "city_id": 3162,
        "region_id": 1,
        "name_ar": "اسفل الباطن",
        "name_en": "Asfal Al Batin",
        "center": [
            23.54982002,
            46.84842003
        ]
    },
    {
        "city_id": 3163,
        "region_id": 1,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            23.49976001,
            46.81001995
        ]
    },
    {
        "city_id": 3164,
        "region_id": 1,
        "name_ar": "المثعب",
        "name_en": "Al Mith'ab",
        "center": [
            23.28421999,
            46.85017994
        ]
    },
    {
        "city_id": 3165,
        "region_id": 1,
        "name_ar": "الحلوة",
        "name_en": "Al Hilwah",
        "center": [
            23.43023002,
            46.79690001
        ]
    },
    {
        "city_id": 3166,
        "region_id": 1,
        "name_ar": "الحيطان",
        "name_en": "Al Haytan",
        "center": [
            23.46448995,
            46.83336002
        ]
    },
    {
        "city_id": 3167,
        "region_id": 1,
        "name_ar": "وادي البرك",
        "name_en": "Wadi Al Bark",
        "center": [
            23.22783333,
            46.38908333
        ]
    },
    {
        "city_id": 3168,
        "region_id": 1,
        "name_ar": "الشكرة",
        "name_en": "Ash Shukrah",
        "center": [
            23.25208995,
            46.66271005
        ]
    },
    {
        "city_id": 3169,
        "region_id": 1,
        "name_ar": "الفيصلية",
        "name_en": "Al Faysaliyah",
        "center": [
            22.27361,
            46.68866994
        ]
    },
    {
        "city_id": 3170,
        "region_id": 1,
        "name_ar": "النايفية",
        "name_en": "An Naifiyah",
        "center": [
            22.41538998,
            46.67957997
        ]
    },
    {
        "city_id": 3171,
        "region_id": 1,
        "name_ar": "القطين",
        "name_en": "Al Qatin",
        "center": [
            22.23568997,
            46.79518993
        ]
    },
    {
        "city_id": 3172,
        "region_id": 1,
        "name_ar": "الخرفة",
        "name_en": "Al Kharfah",
        "center": [
            22.2282,
            46.6981
        ]
    },
    {
        "city_id": 3173,
        "region_id": 1,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            22.21066667,
            46.68641667
        ]
    },
    {
        "city_id": 3174,
        "region_id": 1,
        "name_ar": "ليلى",
        "name_en": "Layla",
        "center": [
            22.28636003,
            46.73165997
        ]
    },
    {
        "city_id": 3175,
        "region_id": 1,
        "name_ar": "سويدانا",
        "name_en": "Swidana",
        "center": [
            22.09198333,
            46.7023
        ]
    },
    {
        "city_id": 3176,
        "region_id": 1,
        "name_ar": "مروان",
        "name_en": "Marwan",
        "center": [
            22.06435,
            46.67258333
        ]
    },
    {
        "city_id": 3177,
        "region_id": 1,
        "name_ar": "واسط",
        "name_en": "Wasit",
        "center": [
            22.36926005,
            46.25592998
        ]
    },
    {
        "city_id": 3178,
        "region_id": 1,
        "name_ar": "الحمر",
        "name_en": "Al Hamr",
        "center": [
            22.43332999,
            46.19999998
        ]
    },
    {
        "city_id": 3179,
        "region_id": 1,
        "name_ar": "البديع الجنوبى",
        "name_en": "Al Badi' Al Janubi",
        "center": [
            21.99721667,
            46.5566
        ]
    },
    {
        "city_id": 3180,
        "region_id": 1,
        "name_ar": "البديع الشمالي",
        "name_en": "Al Badi' Ash Shamali",
        "center": [
            22.04531081,
            46.57416601
        ]
    },
    {
        "city_id": 3181,
        "region_id": 1,
        "name_ar": "الهدار",
        "name_en": "Al Haddar",
        "center": [
            21.96242996,
            46.08131993
        ]
    },
    {
        "city_id": 3182,
        "region_id": 1,
        "name_ar": "ساقي الناهض",
        "name_en": "Saqi An Nahid",
        "center": [
            21.98999994,
            46.64175
        ]
    },
    {
        "city_id": 3183,
        "region_id": 1,
        "name_ar": "الغيل",
        "name_en": "Al Ghayl",
        "center": [
            22.60694999,
            46.41439002
        ]
    },
    {
        "city_id": 3184,
        "region_id": 1,
        "name_ar": "ستارة",
        "name_en": "Sitarah",
        "center": [
            22.62000997,
            46.30614997
        ]
    },
    {
        "city_id": 3185,
        "region_id": 1,
        "name_ar": "حراضة",
        "name_en": "Haradah",
        "center": [
            22.73834994,
            46.3069
        ]
    },
    {
        "city_id": 3186,
        "region_id": 2,
        "name_ar": "الفرعة",
        "name_en": "Al Far'ah",
        "center": [
            21.25530004,
            42.96974997
        ]
    },
    {
        "city_id": 3187,
        "region_id": 2,
        "name_ar": "العثيثي",
        "name_en": "Al 'Uthaythi",
        "center": [
            21.24970006,
            42.94200997
        ]
    },
    {
        "city_id": 3188,
        "region_id": 2,
        "name_ar": "ا لحفائر",
        "name_en": "Al Hafa'ir",
        "center": [
            21.26448006,
            42.98176004
        ]
    },
    {
        "city_id": 3189,
        "region_id": 2,
        "name_ar": "السلم",
        "name_en": "As Salam",
        "center": [
            21.25131994,
            42.82159003
        ]
    },
    {
        "city_id": 3190,
        "region_id": 2,
        "name_ar": "القاعية",
        "name_en": "Al Qa'iyah",
        "center": [
            21.24726996,
            42.80394995
        ]
    },
    {
        "city_id": 3191,
        "region_id": 2,
        "name_ar": "القوامة",
        "name_en": "Al Quwamah",
        "center": [
            20.75186995,
            41.69895003
        ]
    },
    {
        "city_id": 3192,
        "region_id": 2,
        "name_ar": "الغافة",
        "name_en": "Al Ghafah",
        "center": [
            20.95555005,
            42.44508994
        ]
    },
    {
        "city_id": 3193,
        "region_id": 2,
        "name_ar": "الحدة",
        "name_en": "Al Hiddah",
        "center": [
            21.06363006,
            42.44677995
        ]
    },
    {
        "city_id": 3194,
        "region_id": 2,
        "name_ar": "المغراء",
        "name_en": "Al Maghara",
        "center": [
            21.07003997,
            42.41969001
        ]
    },
    {
        "city_id": 3195,
        "region_id": 2,
        "name_ar": "العفيرية",
        "name_en": "Al 'Ufayriyah",
        "center": [
            20.55929005,
            42.13947005
        ]
    },
    {
        "city_id": 3196,
        "region_id": 2,
        "name_ar": "أبو ملوح",
        "name_en": "Abu Miluh",
        "center": [
            20.64717004,
            42.16180995
        ]
    },
    {
        "city_id": 3197,
        "region_id": 2,
        "name_ar": "النغر",
        "name_en": "An Naghar",
        "center": [
            21.19994005,
            42.72106995
        ]
    },
    {
        "city_id": 3198,
        "region_id": 2,
        "name_ar": "السدر",
        "name_en": "As Sadr",
        "center": [
            21.20628001,
            42.73449999
        ]
    },
    {
        "city_id": 3199,
        "region_id": 2,
        "name_ar": "الجر ثمية",
        "name_en": "Al Jarr Thamiyyah",
        "center": [
            21.18562995,
            42.72701994
        ]
    },
    {
        "city_id": 3200,
        "region_id": 2,
        "name_ar": "الحجف",
        "name_en": "Al Hajf",
        "center": [
            21.17636006,
            42.72410999
        ]
    },
    {
        "city_id": 3201,
        "region_id": 12,
        "name_ar": "إبن غوف",
        "name_en": "Ibn Ghuf",
        "center": [
            20.11767005,
            41.22825006
        ]
    },
    {
        "city_id": 3202,
        "region_id": 12,
        "name_ar": "الميفا",
        "name_en": "Al Mifa",
        "center": [
            20.10641998,
            41.16095004
        ]
    },
    {
        "city_id": 3203,
        "region_id": 12,
        "name_ar": "القرن",
        "name_en": "Al Qarn",
        "center": [
            20.09709999,
            41.21584004
        ]
    },
    {
        "city_id": 3204,
        "region_id": 12,
        "name_ar": "الامرة",
        "name_en": "Al Umrah",
        "center": [
            20.06955999,
            41.23417002
        ]
    },
    {
        "city_id": 3205,
        "region_id": 12,
        "name_ar": "النجيل",
        "name_en": "An Najil",
        "center": [
            20.06978994,
            41.12690999
        ]
    },
    {
        "city_id": 3206,
        "region_id": 12,
        "name_ar": "الطيف",
        "name_en": "At Tayf",
        "center": [
            20.02500001,
            41.21529
        ]
    },
    {
        "city_id": 3207,
        "region_id": 12,
        "name_ar": "السمعة",
        "name_en": "As Sama'ah",
        "center": [
            20.01307005,
            41.16819997
        ]
    },
    {
        "city_id": 3208,
        "region_id": 12,
        "name_ar": "نابر",
        "name_en": "Nabir",
        "center": [
            20.13310997,
            41.08733997
        ]
    },
    {
        "city_id": 3209,
        "region_id": 12,
        "name_ar": "الضاحي",
        "name_en": "Ad Dahi",
        "center": [
            20.17141,
            41.16297
        ]
    },
    {
        "city_id": 3210,
        "region_id": 12,
        "name_ar": "الزرعة",
        "name_en": "Az Zira'ah",
        "center": [
            20.16308006,
            41.16321997
        ]
    },
    {
        "city_id": 3211,
        "region_id": 12,
        "name_ar": "الاشيرة",
        "name_en": "Al Ishayrah",
        "center": [
            20.01545006,
            41.31588995
        ]
    },
    {
        "city_id": 3212,
        "region_id": 12,
        "name_ar": "الصور",
        "name_en": "As Sur",
        "center": [
            19.85437997,
            41.27927994
        ]
    },
    {
        "city_id": 3213,
        "region_id": 12,
        "name_ar": "فرعة العطاردة",
        "name_en": "Fara't Al 'Atardah",
        "center": [
            19.76284994,
            41.28703005
        ]
    },
    {
        "city_id": 3214,
        "region_id": 12,
        "name_ar": "القهب",
        "name_en": "Al Qahab",
        "center": [
            19.82784002,
            41.28975002
        ]
    },
    {
        "city_id": 3215,
        "region_id": 12,
        "name_ar": "الحصحص",
        "name_en": "Al Hashas",
        "center": [
            19.79781995,
            41.23627995
        ]
    },
    {
        "city_id": 3216,
        "region_id": 12,
        "name_ar": "قراما",
        "name_en": "Qurama",
        "center": [
            19.75712003,
            41.28030004
        ]
    },
    {
        "city_id": 3217,
        "region_id": 12,
        "name_ar": "العياش",
        "name_en": "Al 'Ayyash",
        "center": [
            19.89233004,
            41.44865999
        ]
    },
    {
        "city_id": 3218,
        "region_id": 12,
        "name_ar": "آل سعيد",
        "name_en": "Al Sa'id",
        "center": [
            19.87206004,
            41.41702999
        ]
    },
    {
        "city_id": 3219,
        "region_id": 12,
        "name_ar": "الغصنة",
        "name_en": "Al Ghasanah",
        "center": [
            19.89848002,
            41.37391003
        ]
    },
    {
        "city_id": 3220,
        "region_id": 12,
        "name_ar": "قلوة",
        "name_en": "Qilwah",
        "center": [
            19.94802994,
            41.23936004
        ]
    },
    {
        "city_id": 3221,
        "region_id": 12,
        "name_ar": "الشعراء",
        "name_en": "Ash Sha'ra'",
        "center": [
            20.06661998,
            41.18672001
        ]
    },
    {
        "city_id": 3222,
        "region_id": 12,
        "name_ar": "نيرا",
        "name_en": "Nira",
        "center": [
            19.83334002,
            41.28386003
        ]
    },
    {
        "city_id": 3223,
        "region_id": 12,
        "name_ar": "الجوة",
        "name_en": "Al Jawwah",
        "center": [
            19.91842994,
            41.44249
        ]
    },
    {
        "city_id": 3224,
        "region_id": 12,
        "name_ar": "الفرع",
        "name_en": "Al Far'",
        "center": [
            19.70456995,
            41.34529003
        ]
    },
    {
        "city_id": 3225,
        "region_id": 12,
        "name_ar": "الهتافرة",
        "name_en": "Al Hatafirah",
        "center": [
            19.55012997,
            41.51001
        ]
    },
    {
        "city_id": 3226,
        "region_id": 2,
        "name_ar": "القريع",
        "name_en": "Al Qari'",
        "center": [
            19.52892997,
            41.54551995
        ]
    },
    {
        "city_id": 3227,
        "region_id": 12,
        "name_ar": "المسودة",
        "name_en": "Al Maswadah",
        "center": [
            19.66953995,
            41.49685999
        ]
    },
    {
        "city_id": 3228,
        "region_id": 12,
        "name_ar": "الحشو",
        "name_en": "Al Hashu",
        "center": [
            19.61773996,
            41.52378005
        ]
    },
    {
        "city_id": 3229,
        "region_id": 2,
        "name_ar": "فرعة بني سهيم",
        "name_en": "Fara't Bani Suhaym",
        "center": [
            19.58439002,
            41.54926005
        ]
    },
    {
        "city_id": 3230,
        "region_id": 2,
        "name_ar": "العقدة",
        "name_en": "Al 'Uqdah",
        "center": [
            19.54183003,
            41.10371003
        ]
    },
    {
        "city_id": 3231,
        "region_id": 2,
        "name_ar": "العواصية",
        "name_en": "Al 'Awasiyah",
        "center": [
            19.58526006,
            41.14843999
        ]
    },
    {
        "city_id": 3232,
        "region_id": 12,
        "name_ar": "القصيباء",
        "name_en": "Al Qusayba",
        "center": [
            19.54629997,
            41.35027005
        ]
    },
    {
        "city_id": 3233,
        "region_id": 12,
        "name_ar": "الرهوة",
        "name_en": "Ar Rahwah",
        "center": [
            19.57922997,
            41.50665994
        ]
    },
    {
        "city_id": 3234,
        "region_id": 12,
        "name_ar": "الحصن",
        "name_en": "Al Husn",
        "center": [
            19.56988999,
            41.51467001
        ]
    },
    {
        "city_id": 3235,
        "region_id": 12,
        "name_ar": "غامد الزناد",
        "name_en": "Ghamid Az Zinad",
        "center": [
            19.59624604,
            41.52280908
        ]
    },
    {
        "city_id": 3236,
        "region_id": 12,
        "name_ar": "المخواة",
        "name_en": "Al Mukhwah",
        "center": [
            19.78651003,
            41.43847997
        ]
    },
    {
        "city_id": 3237,
        "region_id": 12,
        "name_ar": "نصبة",
        "name_en": "Nusubah",
        "center": [
            19.64934996,
            41.47176005
        ]
    },
    {
        "city_id": 3238,
        "region_id": 12,
        "name_ar": "ناوان",
        "name_en": "Nawan",
        "center": [
            19.54093,
            41.17223003
        ]
    },
    {
        "city_id": 3239,
        "region_id": 6,
        "name_ar": "العرق",
        "name_en": "Al Arq",
        "center": [
            19.22589002,
            42.08835996
        ]
    },
    {
        "city_id": 3240,
        "region_id": 6,
        "name_ar": "كعب",
        "name_en": "Ka'b",
        "center": [
            19.18151997,
            42.12768005
        ]
    },
    {
        "city_id": 3241,
        "region_id": 6,
        "name_ar": "الخاضرة",
        "name_en": "Al Khadirah",
        "center": [
            19.15123998,
            42.14172002
        ]
    },
    {
        "city_id": 3242,
        "region_id": 6,
        "name_ar": "القرن الأبيض",
        "name_en": "Al Qarn Al Abyad",
        "center": [
            19.15323994,
            42.20102005
        ]
    },
    {
        "city_id": 3243,
        "region_id": 6,
        "name_ar": "الدحض",
        "name_en": "Ad Dahid",
        "center": [
            19.11626,
            42.20361004
        ]
    },
    {
        "city_id": 3244,
        "region_id": 6,
        "name_ar": "الظهارة",
        "name_en": "Adh Dhaharah",
        "center": [
            19.05155998,
            42.12875003
        ]
    },
    {
        "city_id": 3245,
        "region_id": 6,
        "name_ar": "مخدرة",
        "name_en": "Makhdarah",
        "center": [
            19.21022,
            42.16434005
        ]
    },
    {
        "city_id": 3246,
        "region_id": 6,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            19.22104001,
            42.07810005
        ]
    },
    {
        "city_id": 3247,
        "region_id": 6,
        "name_ar": "القرية",
        "name_en": "Al Qurayyah",
        "center": [
            19.26692995,
            42.10156998
        ]
    },
    {
        "city_id": 3248,
        "region_id": 6,
        "name_ar": "بني مليح",
        "name_en": "Bani Mulayh",
        "center": [
            19.20013999,
            42.07862002
        ]
    },
    {
        "city_id": 3249,
        "region_id": 6,
        "name_ar": "وادي الغيل",
        "name_en": "Wadi Al Ghayl",
        "center": [
            19.1619,
            42.07947005
        ]
    },
    {
        "city_id": 3250,
        "region_id": 6,
        "name_ar": "مليح",
        "name_en": "Mulayh",
        "center": [
            19.01326004,
            42.14258996
        ]
    },
    {
        "city_id": 3251,
        "region_id": 6,
        "name_ar": "ربوع السرو",
        "name_en": "Rubu' As Sarw",
        "center": [
            19.30350003,
            42.08344997
        ]
    },
    {
        "city_id": 3252,
        "region_id": 6,
        "name_ar": "آل بو خشيف",
        "name_en": "Al Bukhishayf",
        "center": [
            18.68379003,
            42.38276001
        ]
    },
    {
        "city_id": 3253,
        "region_id": 6,
        "name_ar": "بهوان",
        "name_en": "Bahwan",
        "center": [
            18.69277006,
            42.41334
        ]
    },
    {
        "city_id": 3254,
        "region_id": 6,
        "name_ar": "الضاربين",
        "name_en": "Ad Daribayn",
        "center": [
            18.67410002,
            42.43819
        ]
    },
    {
        "city_id": 3255,
        "region_id": 6,
        "name_ar": "آل مخلد",
        "name_en": "Al Makhlad",
        "center": [
            18.66060003,
            42.40194998
        ]
    },
    {
        "city_id": 3256,
        "region_id": 6,
        "name_ar": "آل عباس",
        "name_en": "Al 'Abbas",
        "center": [
            18.65951997,
            42.41637004
        ]
    },
    {
        "city_id": 3257,
        "region_id": 6,
        "name_ar": "آل مضرة",
        "name_en": "Al Midrah",
        "center": [
            18.65435999,
            42.42606995
        ]
    },
    {
        "city_id": 3258,
        "region_id": 6,
        "name_ar": "غاشرة",
        "name_en": "Ghashirah",
        "center": [
            18.74709995,
            42.24908997
        ]
    },
    {
        "city_id": 3259,
        "region_id": 6,
        "name_ar": "ذبوب",
        "name_en": "Dhabub",
        "center": [
            18.74379999,
            42.26261996
        ]
    },
    {
        "city_id": 3260,
        "region_id": 6,
        "name_ar": "مجالد",
        "name_en": "Mijalid",
        "center": [
            18.70435998,
            42.26775005
        ]
    },
    {
        "city_id": 3261,
        "region_id": 6,
        "name_ar": "آل سخيطة",
        "name_en": "Al Sakhaytah",
        "center": [
            18.68643995,
            42.23496999
        ]
    },
    {
        "city_id": 3262,
        "region_id": 6,
        "name_ar": "عبالة",
        "name_en": "'Aballah",
        "center": [
            18.67594996,
            42.26784004
        ]
    },
    {
        "city_id": 3263,
        "region_id": 6,
        "name_ar": "آل عبيد",
        "name_en": "Al 'Ubayd",
        "center": [
            18.65895999,
            42.23744999
        ]
    },
    {
        "city_id": 3264,
        "region_id": 6,
        "name_ar": "آل مشاعر",
        "name_en": "Al Misha'ir",
        "center": [
            18.63359003,
            42.30664006
        ]
    },
    {
        "city_id": 3265,
        "region_id": 6,
        "name_ar": "مسفرة",
        "name_en": "Misfirah",
        "center": [
            18.53147998,
            42.45818001
        ]
    },
    {
        "city_id": 3266,
        "region_id": 6,
        "name_ar": "آل فرش",
        "name_en": "Al Farsh",
        "center": [
            18.54359,
            42.41380996
        ]
    },
    {
        "city_id": 3267,
        "region_id": 6,
        "name_ar": "الحفاة",
        "name_en": "Al Hufah",
        "center": [
            18.54653994,
            42.39844999
        ]
    },
    {
        "city_id": 3268,
        "region_id": 6,
        "name_ar": "الصرة",
        "name_en": "As Surrah",
        "center": [
            18.55495001,
            42.38725005
        ]
    },
    {
        "city_id": 3269,
        "region_id": 6,
        "name_ar": "حوراء",
        "name_en": "Hawra",
        "center": [
            18.87918998,
            42.27045004
        ]
    },
    {
        "city_id": 3270,
        "region_id": 6,
        "name_ar": "القرن والجهيفة",
        "name_en": "Al Qarn Wal Juhaifah",
        "center": [
            18.86225479,
            42.27649066
        ]
    },
    {
        "city_id": 3271,
        "region_id": 6,
        "name_ar": "كبدة",
        "name_en": "Kubadah",
        "center": [
            18.81446995,
            42.25349998
        ]
    },
    {
        "city_id": 3272,
        "region_id": 6,
        "name_ar": "العينين",
        "name_en": "Al 'Aynayn",
        "center": [
            18.79296003,
            42.24336
        ]
    },
    {
        "city_id": 3273,
        "region_id": 6,
        "name_ar": "تنومة",
        "name_en": "Tanumah",
        "center": [
            18.96360999,
            42.16605994
        ]
    },
    {
        "city_id": 3274,
        "region_id": 6,
        "name_ar": "الواديين",
        "name_en": "Al Wadiyayn",
        "center": [
            18.62095997,
            42.47530001
        ]
    },
    {
        "city_id": 3275,
        "region_id": 6,
        "name_ar": "بللسمر",
        "name_en": "Billasmar",
        "center": [
            18.77344996,
            42.27242002
        ]
    },
    {
        "city_id": 3276,
        "region_id": 6,
        "name_ar": "آل لجم",
        "name_en": "Al Lajam",
        "center": [
            18.82701006,
            42.27042005
        ]
    },
    {
        "city_id": 3277,
        "region_id": 6,
        "name_ar": "الاثنين",
        "name_en": "Al Ithnayn",
        "center": [
            18.77359996,
            42.25136996
        ]
    },
    {
        "city_id": 3278,
        "region_id": 6,
        "name_ar": "آل غلفق",
        "name_en": "Al Ghalfaq",
        "center": [
            18.53279995,
            42.44216003
        ]
    },
    {
        "city_id": 3279,
        "region_id": 6,
        "name_ar": "سحيبان",
        "name_en": "Suhayban",
        "center": [
            18.29221004,
            43.20291998
        ]
    },
    {
        "city_id": 3280,
        "region_id": 6,
        "name_ar": "العمارة",
        "name_en": "Al 'Ammarah",
        "center": [
            18.31969995,
            43.20110996
        ]
    },
    {
        "city_id": 3281,
        "region_id": 6,
        "name_ar": "قيان",
        "name_en": "Qiyan",
        "center": [
            18.43502997,
            43.32412999
        ]
    },
    {
        "city_id": 3282,
        "region_id": 6,
        "name_ar": "الغرس",
        "name_en": "Al Ghars",
        "center": [
            18.50344998,
            43.35484001
        ]
    },
    {
        "city_id": 3283,
        "region_id": 6,
        "name_ar": "الحكيمة",
        "name_en": "Al Hakimah",
        "center": [
            18.51208006,
            43.37152006
        ]
    },
    {
        "city_id": 3284,
        "region_id": 6,
        "name_ar": "الرقوة",
        "name_en": "Ar Raqwah",
        "center": [
            18.52315004,
            43.36947003
        ]
    },
    {
        "city_id": 3285,
        "region_id": 6,
        "name_ar": "آل الجلدة",
        "name_en": "Al Al Jildah",
        "center": [
            18.51073005,
            43.21709003
        ]
    },
    {
        "city_id": 3286,
        "region_id": 6,
        "name_ar": "مشروفة",
        "name_en": "Mashrufah",
        "center": [
            18.51872001,
            43.21698998
        ]
    },
    {
        "city_id": 3287,
        "region_id": 6,
        "name_ar": "لاهمة",
        "name_en": "Lahmah",
        "center": [
            18.53685997,
            43.21148006
        ]
    },
    {
        "city_id": 3288,
        "region_id": 6,
        "name_ar": "آل فهيد",
        "name_en": "Al Fuhayd",
        "center": [
            18.52669996,
            43.21592995
        ]
    },
    {
        "city_id": 3289,
        "region_id": 6,
        "name_ar": "الحدباء",
        "name_en": "Al Hadba",
        "center": [
            18.58213005,
            43.21086995
        ]
    },
    {
        "city_id": 3290,
        "region_id": 6,
        "name_ar": "آل صنيج",
        "name_en": "Al Sunayj",
        "center": [
            18.61721996,
            43.21232003
        ]
    },
    {
        "city_id": 3291,
        "region_id": 6,
        "name_ar": "آل عرفان",
        "name_en": "Al 'Urfan",
        "center": [
            18.63948996,
            43.21778998
        ]
    },
    {
        "city_id": 3292,
        "region_id": 6,
        "name_ar": "آل كشيم",
        "name_en": "Al Kushaym",
        "center": [
            18.65662,
            43.20266995
        ]
    },
    {
        "city_id": 3293,
        "region_id": 6,
        "name_ar": "الحذيان",
        "name_en": "Al Hadhyan",
        "center": [
            18.57783995,
            43.37792998
        ]
    },
    {
        "city_id": 3294,
        "region_id": 6,
        "name_ar": "العرفان",
        "name_en": "Al 'Urfan",
        "center": [
            18.58067004,
            43.39276994
        ]
    },
    {
        "city_id": 3295,
        "region_id": 6,
        "name_ar": "حافظ",
        "name_en": "Hafidh",
        "center": [
            18.58963004,
            43.39939006
        ]
    },
    {
        "city_id": 3296,
        "region_id": 6,
        "name_ar": "العلوبي",
        "name_en": "Al 'Ulubi",
        "center": [
            18.67044998,
            43.40178002
        ]
    },
    {
        "city_id": 3297,
        "region_id": 6,
        "name_ar": "الرمضة",
        "name_en": "Ar Rumadah",
        "center": [
            18.55811997,
            43.40072001
        ]
    },
    {
        "city_id": 3298,
        "region_id": 6,
        "name_ar": "العرين",
        "name_en": "Al 'Arin",
        "center": [
            18.56784996,
            43.39196995
        ]
    },
    {
        "city_id": 3299,
        "region_id": 6,
        "name_ar": "فرعة طريب",
        "name_en": "Turaib",
        "center": [
            18.58333001,
            43.21667001
        ]
    },
    {
        "city_id": 3300,
        "region_id": 6,
        "name_ar": "الزهرة",
        "name_en": "Az Zahrah",
        "center": [
            18.10306003,
            43.11803006
        ]
    },
    {
        "city_id": 3301,
        "region_id": 6,
        "name_ar": "آل معدي",
        "name_en": "Al Ma'addi",
        "center": [
            18.12142003,
            43.12192994
        ]
    },
    {
        "city_id": 3302,
        "region_id": 6,
        "name_ar": "الغلقة",
        "name_en": "Al Ghiliqah",
        "center": [
            18.14490994,
            43.11818006
        ]
    },
    {
        "city_id": 3303,
        "region_id": 6,
        "name_ar": "الجلدة",
        "name_en": "Al Jildah",
        "center": [
            18.16248006,
            43.09377
        ]
    },
    {
        "city_id": 3304,
        "region_id": 6,
        "name_ar": "آل قنبة",
        "name_en": "Al Qunbah",
        "center": [
            18.16463003,
            43.08445998
        ]
    },
    {
        "city_id": 3305,
        "region_id": 6,
        "name_ar": "الربعة",
        "name_en": "Ar Riba'ah",
        "center": [
            18.18537997,
            43.04755002
        ]
    },
    {
        "city_id": 3306,
        "region_id": 6,
        "name_ar": "الوهابة",
        "name_en": "Al Wahabah",
        "center": [
            18.17421995,
            43.06041003
        ]
    },
    {
        "city_id": 3307,
        "region_id": 6,
        "name_ar": "آل سعيدة",
        "name_en": "Al Sa'idah",
        "center": [
            18.09227994,
            43.25260003
        ]
    },
    {
        "city_id": 3308,
        "region_id": 6,
        "name_ar": "آل كولت",
        "name_en": "Al Kulat",
        "center": [
            18.21903001,
            43.16943003
        ]
    },
    {
        "city_id": 3309,
        "region_id": 6,
        "name_ar": "آل جلال",
        "name_en": "Al Jallal",
        "center": [
            18.234,
            43.19651002
        ]
    },
    {
        "city_id": 3310,
        "region_id": 6,
        "name_ar": "آل محي",
        "name_en": "Al Mihi",
        "center": [
            18.24697002,
            43.20447999
        ]
    },
    {
        "city_id": 3311,
        "region_id": 6,
        "name_ar": "الحدباء",
        "name_en": "Al Hadba",
        "center": [
            18.25553996,
            43.21585995
        ]
    },
    {
        "city_id": 3312,
        "region_id": 6,
        "name_ar": "الحنجور",
        "name_en": "Al Hunjur",
        "center": [
            18.26667004,
            43.21858002
        ]
    },
    {
        "city_id": 3313,
        "region_id": 6,
        "name_ar": "الحنو",
        "name_en": "Al Hinu",
        "center": [
            18.27341996,
            43.22710998
        ]
    },
    {
        "city_id": 3314,
        "region_id": 6,
        "name_ar": "المنابية",
        "name_en": "Al Manabiyah",
        "center": [
            18.31858003,
            43.25524999
        ]
    },
    {
        "city_id": 3315,
        "region_id": 6,
        "name_ar": "الزهيد",
        "name_en": "Az Zuhayd",
        "center": [
            18.30177005,
            43.29760997
        ]
    },
    {
        "city_id": 3316,
        "region_id": 6,
        "name_ar": "المحزمة",
        "name_en": "Al Muhazmah",
        "center": [
            18.14730005,
            43.08200005
        ]
    },
    {
        "city_id": 3317,
        "region_id": 6,
        "name_ar": "الدربين",
        "name_en": "Ad Darbayn",
        "center": [
            17.99668994,
            42.98054999
        ]
    },
    {
        "city_id": 3318,
        "region_id": 10,
        "name_ar": "الشعاقة",
        "name_en": "Ash Sha'aqah",
        "center": [
            17.49006006,
            43.19526997
        ]
    },
    {
        "city_id": 3319,
        "region_id": 6,
        "name_ar": "عدن",
        "name_en": "'Adan",
        "center": [
            17.75372001,
            43.25744
        ]
    },
    {
        "city_id": 3320,
        "region_id": 6,
        "name_ar": "الغول",
        "name_en": "Al Ghawl",
        "center": [
            17.74290006,
            43.32896001
        ]
    },
    {
        "city_id": 3321,
        "region_id": 6,
        "name_ar": "درامة",
        "name_en": "Diramah",
        "center": [
            17.93928998,
            43.15212002
        ]
    },
    {
        "city_id": 3322,
        "region_id": 6,
        "name_ar": "آل الخلف",
        "name_en": "Al Al Khalaf",
        "center": [
            17.95241999,
            43.13025994
        ]
    },
    {
        "city_id": 3323,
        "region_id": 6,
        "name_ar": "آل مانع",
        "name_en": "Al Mani'",
        "center": [
            17.95407997,
            43.22131004
        ]
    },
    {
        "city_id": 3324,
        "region_id": 6,
        "name_ar": "نقعة",
        "name_en": "Naq'ah",
        "center": [
            17.97255995,
            43.29931004
        ]
    },
    {
        "city_id": 3325,
        "region_id": 6,
        "name_ar": "آل غبران",
        "name_en": "Al Ghubran",
        "center": [
            18.02522996,
            43.34068002
        ]
    },
    {
        "city_id": 3326,
        "region_id": 6,
        "name_ar": "الفقاعيس",
        "name_en": "Al Fuqa'is",
        "center": [
            18.03224004,
            43.29800004
        ]
    },
    {
        "city_id": 3327,
        "region_id": 6,
        "name_ar": "الحريقة",
        "name_en": "Al Hariqah",
        "center": [
            18.33373001,
            43.29864002
        ]
    },
    {
        "city_id": 3328,
        "region_id": 6,
        "name_ar": "سراة عبيدة",
        "name_en": "Sarat Abidah",
        "center": [
            18.08422994,
            43.14460004
        ]
    },
    {
        "city_id": 3329,
        "region_id": 6,
        "name_ar": "العطفة",
        "name_en": "Al 'Utfah",
        "center": [
            18.06651005,
            43.20625995
        ]
    },
    {
        "city_id": 3330,
        "region_id": 6,
        "name_ar": "الفرشة",
        "name_en": "Al Farshah",
        "center": [
            17.75551002,
            43.16240996
        ]
    },
    {
        "city_id": 3331,
        "region_id": 6,
        "name_ar": "الربوعة",
        "name_en": "Ar Rabuah",
        "center": [
            17.56665998,
            43.32775994
        ]
    },
    {
        "city_id": 3332,
        "region_id": 6,
        "name_ar": "الجوة",
        "name_en": "Al Jawwah",
        "center": [
            17.91014003,
            43.24066004
        ]
    },
    {
        "city_id": 3333,
        "region_id": 6,
        "name_ar": "عرضين",
        "name_en": "Ardayn",
        "center": [
            17.97659996,
            43.20034996
        ]
    },
    {
        "city_id": 3334,
        "region_id": 11,
        "name_ar": "ام الوهط",
        "name_en": "Umm Al Whaht",
        "center": [
            18.23147994,
            45.53539006
        ]
    },
    {
        "city_id": 3335,
        "region_id": 11,
        "name_ar": "المنخلي",
        "name_en": "Al Minkhali",
        "center": [
            18.02900998,
            45.76924004
        ]
    },
    {
        "city_id": 3336,
        "region_id": 11,
        "name_ar": "خد قيس",
        "name_en": "Khad Qays",
        "center": [
            17.89882003,
            43.71211995
        ]
    },
    {
        "city_id": 3337,
        "region_id": 11,
        "name_ar": "الحمضة",
        "name_en": "Al Hamdah",
        "center": [
            17.83949999,
            43.73000998
        ]
    },
    {
        "city_id": 3338,
        "region_id": 11,
        "name_ar": "تريمة",
        "name_en": "Tirimah",
        "center": [
            17.89307001,
            43.92418995
        ]
    },
    {
        "city_id": 3339,
        "region_id": 11,
        "name_ar": "الظاهرة",
        "name_en": "Adh Dhahirah",
        "center": [
            17.58398002,
            43.75798999
        ]
    },
    {
        "city_id": 3340,
        "region_id": 11,
        "name_ar": "رضية",
        "name_en": "Rudayyah",
        "center": [
            17.72153996,
            43.77467006
        ]
    },
    {
        "city_id": 3341,
        "region_id": 11,
        "name_ar": "حزامة",
        "name_en": "Hazamah",
        "center": [
            17.74601,
            43.80921994
        ]
    },
    {
        "city_id": 3342,
        "region_id": 11,
        "name_ar": "بدر الجنوب",
        "name_en": "Badr Al Janub",
        "center": [
            17.88495994,
            43.73350005
        ]
    },
    {
        "city_id": 3343,
        "region_id": 11,
        "name_ar": "الحرشف",
        "name_en": "Al Harshaf",
        "center": [
            17.66936997,
            43.88603999
        ]
    },
    {
        "city_id": 3344,
        "region_id": 11,
        "name_ar": "هدادة",
        "name_en": "Hadadah",
        "center": [
            17.60054997,
            43.77188999
        ]
    },
    {
        "city_id": 3345,
        "region_id": 11,
        "name_ar": "الخانق",
        "name_en": "Al Khaniq",
        "center": [
            17.72458004,
            43.76140006
        ]
    },
    {
        "city_id": 3346,
        "region_id": 11,
        "name_ar": "الجفة",
        "name_en": "Al Jifah",
        "center": [
            17.76230002,
            43.90543006
        ]
    },
    {
        "city_id": 3347,
        "region_id": 11,
        "name_ar": "شرورة",
        "name_en": "Sharurah",
        "center": [
            17.4997518,
            47.18864332
        ]
    },
    {
        "city_id": 3348,
        "region_id": 11,
        "name_ar": "شقة الكناور",
        "name_en": "Shiqqat Al Kanawir",
        "center": [
            17.39971996,
            46.19288002
        ]
    },
    {
        "city_id": 3349,
        "region_id": 11,
        "name_ar": "التماني",
        "name_en": "At Tamani",
        "center": [
            17.72809998,
            46.15633003
        ]
    },
    {
        "city_id": 3350,
        "region_id": 11,
        "name_ar": "الوديعة",
        "name_en": "Al Wadi'ah",
        "center": [
            17.05622998,
            47.11780996
        ]
    },
    {
        "city_id": 3351,
        "region_id": 6,
        "name_ar": "المجمع",
        "name_en": "Al Majma'",
        "center": [
            17.97137005,
            43.589
        ]
    },
    {
        "city_id": 3352,
        "region_id": 6,
        "name_ar": "شيبة مسورة",
        "name_en": "Shaybat Miswarah",
        "center": [
            17.76080996,
            43.3928
        ]
    },
    {
        "city_id": 3353,
        "region_id": 6,
        "name_ar": "آل ثابت",
        "name_en": "Al Thabit",
        "center": [
            17.74155001,
            43.49113995
        ]
    },
    {
        "city_id": 3354,
        "region_id": 6,
        "name_ar": "الجربة",
        "name_en": "Al Jirbah",
        "center": [
            17.67246995,
            43.42670002
        ]
    },
    {
        "city_id": 3355,
        "region_id": 6,
        "name_ar": "الغيل",
        "name_en": "Al Ghayl",
        "center": [
            17.73637999,
            43.53297
        ]
    },
    {
        "city_id": 3356,
        "region_id": 6,
        "name_ar": "المجزعة",
        "name_en": "Al Majza'ah",
        "center": [
            17.65234998,
            43.56171006
        ]
    },
    {
        "city_id": 3357,
        "region_id": 6,
        "name_ar": "آل عليا",
        "name_en": "Al 'Alya",
        "center": [
            17.79328005,
            43.55396997
        ]
    },
    {
        "city_id": 3358,
        "region_id": 6,
        "name_ar": "آل بيضاء",
        "name_en": "Al Bayda",
        "center": [
            17.82783994,
            43.54531002
        ]
    },
    {
        "city_id": 3359,
        "region_id": 6,
        "name_ar": "آل معمر",
        "name_en": "Al Mu'ammar",
        "center": [
            17.83944999,
            43.55159005
        ]
    },
    {
        "city_id": 3360,
        "region_id": 6,
        "name_ar": "الملحة",
        "name_en": "Al Malhah",
        "center": [
            17.74348995,
            43.57960995
        ]
    },
    {
        "city_id": 3361,
        "region_id": 6,
        "name_ar": "الحاجر",
        "name_en": "Al Hajir",
        "center": [
            17.50058998,
            43.63273005
        ]
    },
    {
        "city_id": 3362,
        "region_id": 6,
        "name_ar": "علب",
        "name_en": "Alb",
        "center": [
            17.55606,
            43.46440997
        ]
    },
    {
        "city_id": 3363,
        "region_id": 6,
        "name_ar": "الملطاء",
        "name_en": "Al Malta",
        "center": [
            17.59918004,
            43.46353995
        ]
    },
    {
        "city_id": 3364,
        "region_id": 6,
        "name_ar": "الرهوة",
        "name_en": "Ar Rahwah",
        "center": [
            17.56808006,
            43.42644003
        ]
    },
    {
        "city_id": 3365,
        "region_id": 6,
        "name_ar": "المجازة",
        "name_en": "Al Mijazah",
        "center": [
            17.51567003,
            43.57533002
        ]
    },
    {
        "city_id": 3366,
        "region_id": 6,
        "name_ar": "بن لكرم",
        "name_en": "Bin Lakram",
        "center": [
            17.9746,
            43.42056995
        ]
    },
    {
        "city_id": 3367,
        "region_id": 6,
        "name_ar": "السلاطين",
        "name_en": "As Salatin",
        "center": [
            17.98142998,
            43.48095004
        ]
    },
    {
        "city_id": 3368,
        "region_id": 6,
        "name_ar": "المحجر",
        "name_en": "Al Mahjar",
        "center": [
            17.92756005,
            43.39014998
        ]
    },
    {
        "city_id": 3369,
        "region_id": 6,
        "name_ar": "الوسط",
        "name_en": "Al Wasat",
        "center": [
            17.88783005,
            43.37912003
        ]
    },
    {
        "city_id": 3370,
        "region_id": 6,
        "name_ar": "العقدة",
        "name_en": "Al 'Uqdah",
        "center": [
            17.92201998,
            43.48248002
        ]
    },
    {
        "city_id": 3371,
        "region_id": 6,
        "name_ar": "آل الأشعث",
        "name_en": "Al Al Ash'ath",
        "center": [
            17.84078998,
            43.40823005
        ]
    },
    {
        "city_id": 3372,
        "region_id": 6,
        "name_ar": "العنثري",
        "name_en": "Al 'Anthari",
        "center": [
            17.81252002,
            43.40411002
        ]
    },
    {
        "city_id": 3373,
        "region_id": 6,
        "name_ar": "آل عمران",
        "name_en": "Al 'Imran",
        "center": [
            17.86383999,
            43.37382997
        ]
    },
    {
        "city_id": 3374,
        "region_id": 6,
        "name_ar": "آل جحالي",
        "name_en": "Al Jihali",
        "center": [
            17.95356006,
            43.52058005
        ]
    },
    {
        "city_id": 3375,
        "region_id": 6,
        "name_ar": "العرف",
        "name_en": "Al 'Araf",
        "center": [
            17.97778996,
            43.52824004
        ]
    },
    {
        "city_id": 3376,
        "region_id": 6,
        "name_ar": "دهر",
        "name_en": "Dihir",
        "center": [
            18.01061999,
            43.45201001
        ]
    },
    {
        "city_id": 3377,
        "region_id": 6,
        "name_ar": "الحظيرة",
        "name_en": "Al Hadhirah",
        "center": [
            18.00466995,
            43.44574006
        ]
    },
    {
        "city_id": 3378,
        "region_id": 6,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            18.00763,
            43.46885997
        ]
    },
    {
        "city_id": 3379,
        "region_id": 6,
        "name_ar": "علاف",
        "name_en": "'Allaf",
        "center": [
            18.00735997,
            43.48641997
        ]
    },
    {
        "city_id": 3380,
        "region_id": 6,
        "name_ar": "آل يعلى",
        "name_en": "Al Ya'la",
        "center": [
            18.02563998,
            43.48206999
        ]
    },
    {
        "city_id": 3381,
        "region_id": 6,
        "name_ar": "ظهران الجنوب",
        "name_en": "Dhahran Al Janub",
        "center": [
            17.66975999,
            43.50987006
        ]
    },
    {
        "city_id": 3382,
        "region_id": 6,
        "name_ar": "الطلحة",
        "name_en": "At Talhah",
        "center": [
            17.76587001,
            43.51873004
        ]
    },
    {
        "city_id": 3383,
        "region_id": 6,
        "name_ar": "الحرجة",
        "name_en": "Al Harajah",
        "center": [
            17.92826,
            43.37055999
        ]
    },
    {
        "city_id": 3384,
        "region_id": 6,
        "name_ar": "الكولة",
        "name_en": "Al Kulah",
        "center": [
            17.98160995,
            43.35709004
        ]
    },
    {
        "city_id": 3385,
        "region_id": 6,
        "name_ar": "القصب",
        "name_en": "Al Qasab",
        "center": [
            18.06730995,
            43.55873995
        ]
    },
    {
        "city_id": 3386,
        "region_id": 6,
        "name_ar": "حمران",
        "name_en": "Humran",
        "center": [
            18.09998004,
            43.57489003
        ]
    },
    {
        "city_id": 3387,
        "region_id": 6,
        "name_ar": "آل لهوة",
        "name_en": "Al Lahwah",
        "center": [
            18.00929994,
            43.53487996
        ]
    },
    {
        "city_id": 3388,
        "region_id": 11,
        "name_ar": "الهويمل",
        "name_en": "Al Huwaymil",
        "center": [
            17.40319996,
            45.80174995
        ]
    },
    {
        "city_id": 3389,
        "region_id": 11,
        "name_ar": "بئر خباش",
        "name_en": "Bir Khubash",
        "center": [
            17.55420999,
            44.71371996
        ]
    },
    {
        "city_id": 3390,
        "region_id": 11,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            17.54697002,
            44.45604003
        ]
    },
    {
        "city_id": 3391,
        "region_id": 11,
        "name_ar": "قابل منيف",
        "name_en": "Qabil Minif",
        "center": [
            17.85273006,
            44.01437005
        ]
    },
    {
        "city_id": 3392,
        "region_id": 11,
        "name_ar": "الهويد",
        "name_en": "Al Hawid",
        "center": [
            17.81436005,
            44.00245004
        ]
    },
    {
        "city_id": 3393,
        "region_id": 11,
        "name_ar": "الحجف",
        "name_en": "Al Hajf",
        "center": [
            17.87670005,
            44.16858
        ]
    },
    {
        "city_id": 3394,
        "region_id": 11,
        "name_ar": "الدواس",
        "name_en": "Ad Dawas",
        "center": [
            17.88654003,
            44.17016001
        ]
    },
    {
        "city_id": 3395,
        "region_id": 11,
        "name_ar": "لاهومة",
        "name_en": "Lahumah",
        "center": [
            17.84568006,
            44.27669997
        ]
    },
    {
        "city_id": 3396,
        "region_id": 11,
        "name_ar": "حبونا",
        "name_en": "Hubuna",
        "center": [
            17.84068001,
            44.01283004
        ]
    },
    {
        "city_id": 3397,
        "region_id": 11,
        "name_ar": "الحصينية",
        "name_en": "Al Husayniyah",
        "center": [
            17.81576002,
            44.44388001
        ]
    },
    {
        "city_id": 3398,
        "region_id": 10,
        "name_ar": "قرار",
        "name_en": "Qarar",
        "center": [
            17.73243998,
            42.29262996
        ]
    },
    {
        "city_id": 3399,
        "region_id": 10,
        "name_ar": "الكدارة",
        "name_en": "Al Kadarah",
        "center": [
            17.76426001,
            42.33568998
        ]
    },
    {
        "city_id": 3400,
        "region_id": 10,
        "name_ar": "الهجنبة",
        "name_en": "Al Hajanbah",
        "center": [
            17.75805005,
            41.97652998
        ]
    },
    {
        "city_id": 3401,
        "region_id": 10,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            17.72909998,
            42.06984996
        ]
    },
    {
        "city_id": 3402,
        "region_id": 10,
        "name_ar": "الدرب",
        "name_en": "Ad Darb",
        "center": [
            17.74142997,
            42.28268995
        ]
    },
    {
        "city_id": 3403,
        "region_id": 10,
        "name_ar": "ابو السداد",
        "name_en": "Abu As Sadad",
        "center": [
            17.72608994,
            42.23406005
        ]
    },
    {
        "city_id": 3404,
        "region_id": 10,
        "name_ar": "الشقيق",
        "name_en": "Ash Shaqiq",
        "center": [
            17.72438995,
            42.02417999
        ]
    },
    {
        "city_id": 3405,
        "region_id": 10,
        "name_ar": "الحروف",
        "name_en": "Al Huruf",
        "center": [
            17.64996003,
            42.21887001
        ]
    },
    {
        "city_id": 3406,
        "region_id": 10,
        "name_ar": "عتود",
        "name_en": "'Itwad",
        "center": [
            17.62203005,
            42.19876996
        ]
    },
    {
        "city_id": 3407,
        "region_id": 10,
        "name_ar": "رملان",
        "name_en": "Ramlan",
        "center": [
            17.63981004,
            42.27195996
        ]
    },
    {
        "city_id": 3408,
        "region_id": 10,
        "name_ar": "المنجارة",
        "name_en": "Al Minjarah",
        "center": [
            17.56715001,
            42.18325002
        ]
    },
    {
        "city_id": 3409,
        "region_id": 10,
        "name_ar": "الدولة",
        "name_en": "Ad Dawlah",
        "center": [
            17.54900998,
            42.61148002
        ]
    },
    {
        "city_id": 3410,
        "region_id": 10,
        "name_ar": "مسلية",
        "name_en": "Misliyah",
        "center": [
            17.46054995,
            42.55722001
        ]
    },
    {
        "city_id": 3411,
        "region_id": 10,
        "name_ar": "الفطيحة",
        "name_en": "Al Fatihah",
        "center": [
            17.57868002,
            42.62880999
        ]
    },
    {
        "city_id": 3412,
        "region_id": 11,
        "name_ar": "الفيصلية",
        "name_en": "Al Faysaliyah",
        "center": [
            17.54029006,
            44.21428004
        ]
    },
    {
        "city_id": 3413,
        "region_id": 11,
        "name_ar": "معمر ريمان",
        "name_en": "Ma'mar Riman",
        "center": [
            17.56933998,
            44.39545004
        ]
    },
    {
        "city_id": 3414,
        "region_id": 11,
        "name_ar": "دوح",
        "name_en": "Dawwah",
        "center": [
            17.67843997,
            43.93959004
        ]
    },
    {
        "city_id": 3415,
        "region_id": 11,
        "name_ar": "النقعاء",
        "name_en": "An Naq'a",
        "center": [
            17.71682004,
            43.95805003
        ]
    },
    {
        "city_id": 3416,
        "region_id": 11,
        "name_ar": "نقعاء حتروش",
        "name_en": "An Naq'a Hatrush",
        "center": [
            17.79148001,
            43.99652006
        ]
    },
    {
        "city_id": 3417,
        "region_id": 11,
        "name_ar": "نجران",
        "name_en": "Najran",
        "center": [
            17.5408618,
            44.2663834
        ]
    },
    {
        "city_id": 3418,
        "region_id": 11,
        "name_ar": "بئر عسكر",
        "name_en": "Bi'r 'Askar",
        "center": [
            17.57537003,
            44.04287006
        ]
    },
    {
        "city_id": 3419,
        "region_id": 11,
        "name_ar": "نهوقة",
        "name_en": "Nahuqah",
        "center": [
            17.46881002,
            44.11796002
        ]
    },
    {
        "city_id": 3420,
        "region_id": 11,
        "name_ar": "ال شهي",
        "name_en": "Al Shahi",
        "center": [
            17.50919995,
            44.21168999
        ]
    },
    {
        "city_id": 3421,
        "region_id": 11,
        "name_ar": "رجلاء",
        "name_en": "Rijla'",
        "center": [
            17.50296002,
            44.22309004
        ]
    },
    {
        "city_id": 3422,
        "region_id": 11,
        "name_ar": "آل سوار",
        "name_en": "Alsuwar",
        "center": [
            17.50043999,
            44.12595003
        ]
    },
    {
        "city_id": 3423,
        "region_id": 11,
        "name_ar": "المجمع",
        "name_en": "Al Majma'",
        "center": [
            17.76202002,
            43.97140999
        ]
    },
    {
        "city_id": 3424,
        "region_id": 11,
        "name_ar": "البرك",
        "name_en": "Al Birk",
        "center": [
            17.56269994,
            44.32055995
        ]
    },
    {
        "city_id": 3425,
        "region_id": 11,
        "name_ar": "العريسة",
        "name_en": "Al 'Arayyisah",
        "center": [
            17.55788003,
            44.30582994
        ]
    },
    {
        "city_id": 3426,
        "region_id": 10,
        "name_ar": "رخية",
        "name_en": "Rakhyah",
        "center": [
            17.60752002,
            42.87007001
        ]
    },
    {
        "city_id": 3427,
        "region_id": 10,
        "name_ar": "الريث",
        "name_en": "Ar Rayth",
        "center": [
            17.60221994,
            42.85833001
        ]
    },
    {
        "city_id": 3428,
        "region_id": 10,
        "name_ar": "الرهوة",
        "name_en": "Ar Rahwah",
        "center": [
            17.63747004,
            42.89986001
        ]
    },
    {
        "city_id": 3429,
        "region_id": 10,
        "name_ar": "عثوان",
        "name_en": "'Athwan",
        "center": [
            17.33067995,
            43.17868994
        ]
    },
    {
        "city_id": 3430,
        "region_id": 10,
        "name_ar": "القعقاع",
        "name_en": "Al Qa'qa'",
        "center": [
            17.32971004,
            43.15012998
        ]
    },
    {
        "city_id": 3431,
        "region_id": 10,
        "name_ar": "الشملاة",
        "name_en": "Ash Shamlah",
        "center": [
            17.31041996,
            43.16881006
        ]
    },
    {
        "city_id": 3432,
        "region_id": 10,
        "name_ar": "السهية",
        "name_en": "As Suhayyah",
        "center": [
            17.28296002,
            43.22192994
        ]
    },
    {
        "city_id": 3433,
        "region_id": 10,
        "name_ar": "عراب",
        "name_en": "'Irab",
        "center": [
            17.41646998,
            43.20455996
        ]
    },
    {
        "city_id": 3434,
        "region_id": 10,
        "name_ar": "الخطوة",
        "name_en": "Al Khutwah",
        "center": [
            17.37809999,
            43.13982004
        ]
    },
    {
        "city_id": 3435,
        "region_id": 10,
        "name_ar": "الحناية",
        "name_en": "Al Hinnayah",
        "center": [
            17.24690998,
            43.02037997
        ]
    },
    {
        "city_id": 3436,
        "region_id": 10,
        "name_ar": "النفيعة",
        "name_en": "An Nafi'ah",
        "center": [
            17.25939998,
            43.08631003
        ]
    },
    {
        "city_id": 3437,
        "region_id": 10,
        "name_ar": "زوزاء",
        "name_en": "Zawza",
        "center": [
            17.32039003,
            43.04357996
        ]
    },
    {
        "city_id": 3438,
        "region_id": 10,
        "name_ar": "الركبة",
        "name_en": "Ar Rukbah",
        "center": [
            17.26283001,
            43.20328994
        ]
    },
    {
        "city_id": 3439,
        "region_id": 10,
        "name_ar": "العزة",
        "name_en": "Al 'Izzah",
        "center": [
            17.25864001,
            43.18224996
        ]
    },
    {
        "city_id": 3440,
        "region_id": 10,
        "name_ar": "خويعمة",
        "name_en": "Khuway'imah",
        "center": [
            17.23441001,
            43.18887005
        ]
    },
    {
        "city_id": 3441,
        "region_id": 10,
        "name_ar": "الدخرة",
        "name_en": "Ad Dikarah",
        "center": [
            17.24019998,
            43.11580995
        ]
    },
    {
        "city_id": 3442,
        "region_id": 10,
        "name_ar": "الخشعة",
        "name_en": "Al Khashah",
        "center": [
            17.23667996,
            43.07969003
        ]
    },
    {
        "city_id": 3443,
        "region_id": 10,
        "name_ar": "الكوابسة",
        "name_en": "Al Kawabisar",
        "center": [
            17.19891997,
            43.08466
        ]
    },
    {
        "city_id": 3444,
        "region_id": 10,
        "name_ar": "الهيجاء",
        "name_en": "Al Hayja",
        "center": [
            17.18144001,
            43.10077004
        ]
    },
    {
        "city_id": 3445,
        "region_id": 10,
        "name_ar": "اليمانية",
        "name_en": "Al Yamaniyah",
        "center": [
            17.44548996,
            43.03661004
        ]
    },
    {
        "city_id": 3446,
        "region_id": 10,
        "name_ar": "فيفاء",
        "name_en": "Fayfa",
        "center": [
            17.25683001,
            43.10539004
        ]
    },
    {
        "city_id": 3447,
        "region_id": 10,
        "name_ar": "الدائر",
        "name_en": "Ad Dair",
        "center": [
            17.33246004,
            43.13627995
        ]
    },
    {
        "city_id": 3448,
        "region_id": 10,
        "name_ar": "عيبان",
        "name_en": "'Aiban",
        "center": [
            17.27649999,
            43.05070005
        ]
    },
    {
        "city_id": 3449,
        "region_id": 10,
        "name_ar": "الطرف",
        "name_en": "At Taraf",
        "center": [
            17.48584995,
            43.02827006
        ]
    },
    {
        "city_id": 3450,
        "region_id": 10,
        "name_ar": "ظاهرة الصفا",
        "name_en": "Dhahirat As Safa",
        "center": [
            17.33339002,
            42.96780999
        ]
    },
    {
        "city_id": 3451,
        "region_id": 10,
        "name_ar": "القاع",
        "name_en": "Al Qa'",
        "center": [
            17.28640003,
            42.96661997
        ]
    },
    {
        "city_id": 3452,
        "region_id": 10,
        "name_ar": "القتب",
        "name_en": "Al Qatab",
        "center": [
            17.43130997,
            42.93508999
        ]
    },
    {
        "city_id": 3453,
        "region_id": 10,
        "name_ar": "الهياج",
        "name_en": "Al Hiyaj",
        "center": [
            17.41690001,
            42.90126994
        ]
    },
    {
        "city_id": 3454,
        "region_id": 10,
        "name_ar": "العقدة",
        "name_en": "Al 'Uqdah",
        "center": [
            17.38044004,
            42.85822996
        ]
    },
    {
        "city_id": 3455,
        "region_id": 10,
        "name_ar": "العيدابي",
        "name_en": "Al 'Aydabi",
        "center": [
            17.23547006,
            42.94461998
        ]
    },
    {
        "city_id": 3456,
        "region_id": 10,
        "name_ar": "مقزع",
        "name_en": "Muqza'",
        "center": [
            17.53192999,
            42.77962002
        ]
    },
    {
        "city_id": 3457,
        "region_id": 10,
        "name_ar": "هروب",
        "name_en": "Harub",
        "center": [
            17.43742996,
            42.89812995
        ]
    },
    {
        "city_id": 3458,
        "region_id": 10,
        "name_ar": "الشريعة",
        "name_en": "Ash Shari'ah",
        "center": [
            17.40156996,
            42.53414995
        ]
    },
    {
        "city_id": 3459,
        "region_id": 10,
        "name_ar": "الحجروف",
        "name_en": "Al Hajruf",
        "center": [
            17.44577,
            42.46351002
        ]
    },
    {
        "city_id": 3460,
        "region_id": 10,
        "name_ar": "نورة",
        "name_en": "Nurah",
        "center": [
            17.19255,
            42.49776667
        ]
    },
    {
        "city_id": 3461,
        "region_id": 10,
        "name_ar": "الأثلة",
        "name_en": "Al Athlah",
        "center": [
            17.16906667,
            42.52046667
        ]
    },
    {
        "city_id": 3462,
        "region_id": 10,
        "name_ar": "بيش",
        "name_en": "Bish",
        "center": [
            17.37888997,
            42.54643005
        ]
    },
    {
        "city_id": 3463,
        "region_id": 10,
        "name_ar": "الحضن",
        "name_en": "Al Hadan",
        "center": [
            17.42732001,
            42.58161004
        ]
    },
    {
        "city_id": 3464,
        "region_id": 10,
        "name_ar": "قوز الجعافره",
        "name_en": "Qouz Al Jaafrah",
        "center": [
            17.14082003,
            42.44159996
        ]
    },
    {
        "city_id": 3465,
        "region_id": 10,
        "name_ar": "الحقو",
        "name_en": "Al Haqu",
        "center": [
            17.52004006,
            42.70138006
        ]
    },
    {
        "city_id": 3466,
        "region_id": 10,
        "name_ar": "القوام",
        "name_en": "Al Quwam",
        "center": [
            17.49173998,
            42.69533006
        ]
    },
    {
        "city_id": 3467,
        "region_id": 10,
        "name_ar": "المطعن",
        "name_en": "Al Mat'an",
        "center": [
            17.42948,
            42.54863999
        ]
    },
    {
        "city_id": 3468,
        "region_id": 10,
        "name_ar": "العداية",
        "name_en": "Al 'Addayah",
        "center": [
            17.1673,
            42.54741667
        ]
    },
    {
        "city_id": 3469,
        "region_id": 10,
        "name_ar": "الباحر",
        "name_en": "Al Bahir",
        "center": [
            17.12521667,
            42.6014
        ]
    },
    {
        "city_id": 3470,
        "region_id": 10,
        "name_ar": "المعترض",
        "name_en": "Al Mu'tarid",
        "center": [
            17.13272996,
            42.69077001
        ]
    },
    {
        "city_id": 3471,
        "region_id": 10,
        "name_ar": "نخلان",
        "name_en": "Nakhlan",
        "center": [
            17.21081996,
            42.65637004
        ]
    },
    {
        "city_id": 3472,
        "region_id": 10,
        "name_ar": "الغرا",
        "name_en": "Al Ghara",
        "center": [
            17.10308333,
            42.61575
        ]
    },
    {
        "city_id": 3473,
        "region_id": 10,
        "name_ar": "العبادلة",
        "name_en": "Al 'Abadilah",
        "center": [
            17.33714004,
            42.48776997
        ]
    },
    {
        "city_id": 3474,
        "region_id": 10,
        "name_ar": "العريش",
        "name_en": "Al 'Arish",
        "center": [
            17.14036001,
            42.72399999
        ]
    },
    {
        "city_id": 3475,
        "region_id": 10,
        "name_ar": "مشلحة",
        "name_en": "Mushallahah",
        "center": [
            17.33593005,
            42.76518997
        ]
    },
    {
        "city_id": 3476,
        "region_id": 10,
        "name_ar": "الرايغة",
        "name_en": "Ar Rayighah",
        "center": [
            17.32779998,
            42.83327004
        ]
    },
    {
        "city_id": 3477,
        "region_id": 10,
        "name_ar": "الملحاة",
        "name_en": "Al Malha",
        "center": [
            17.26210003,
            42.59358997
        ]
    },
    {
        "city_id": 3478,
        "region_id": 10,
        "name_ar": "الدهناء",
        "name_en": "Ad Dahna",
        "center": [
            17.24923003,
            42.51868997
        ]
    },
    {
        "city_id": 3479,
        "region_id": 10,
        "name_ar": "صبيا",
        "name_en": "Sabya",
        "center": [
            17.14780001,
            42.63250999
        ]
    },
    {
        "city_id": 3480,
        "region_id": 10,
        "name_ar": "قائم الدش",
        "name_en": "Qa'im Ad Dashsh",
        "center": [
            17.34485006,
            42.60034001
        ]
    },
    {
        "city_id": 3481,
        "region_id": 10,
        "name_ar": "صبيا الجديدة",
        "name_en": "Sabya Al Jadidah",
        "center": [
            17.17283001,
            42.72109999
        ]
    },
    {
        "city_id": 3482,
        "region_id": 10,
        "name_ar": "الكدمي",
        "name_en": "Al Kudmi",
        "center": [
            17.26817995,
            42.76899001
        ]
    },
    {
        "city_id": 3483,
        "region_id": 10,
        "name_ar": "العشة",
        "name_en": "Al Ashah",
        "center": [
            17.2307,
            42.55776667
        ]
    },
    {
        "city_id": 3484,
        "region_id": 10,
        "name_ar": "السلام العليا",
        "name_en": "As Salam Al 'Ulya",
        "center": [
            17.31811996,
            42.51555003
        ]
    },
    {
        "city_id": 3485,
        "region_id": 10,
        "name_ar": "ابو القعايد",
        "name_en": "Abu Alqa'ayid",
        "center": [
            17.26868994,
            42.63246002
        ]
    },
    {
        "city_id": 3486,
        "region_id": 10,
        "name_ar": "ابو السلع",
        "name_en": "Abu As Sala'",
        "center": [
            17.23990996,
            42.60969998
        ]
    },
    {
        "city_id": 3487,
        "region_id": 10,
        "name_ar": "العالية",
        "name_en": "Al 'Aliyah",
        "center": [
            17.26759999,
            42.54539
        ]
    },
    {
        "city_id": 3488,
        "region_id": 10,
        "name_ar": "غوان",
        "name_en": "Ghawwan",
        "center": [
            17.32227996,
            42.60411994
        ]
    },
    {
        "city_id": 3489,
        "region_id": 10,
        "name_ar": "الحسيني",
        "name_en": "Al Husayni",
        "center": [
            17.15255995,
            42.68562004
        ]
    },
    {
        "city_id": 3490,
        "region_id": 10,
        "name_ar": "الظبية",
        "name_en": "Al Dhabyah",
        "center": [
            17.11116667,
            42.65553333
        ]
    },
    {
        "city_id": 3491,
        "region_id": 10,
        "name_ar": "الجمالة",
        "name_en": "Al Jammalah",
        "center": [
            17.18276667,
            42.57758333
        ]
    },
    {
        "city_id": 3492,
        "region_id": 10,
        "name_ar": "السبخة",
        "name_en": "Al Sabakhah",
        "center": [
            17.08377005,
            42.52522003
        ]
    },
    {
        "city_id": 3493,
        "region_id": 10,
        "name_ar": "الفقرة نجران",
        "name_en": "Al Faqrah Najran",
        "center": [
            17.09846995,
            42.56645994
        ]
    },
    {
        "city_id": 3494,
        "region_id": 10,
        "name_ar": "خبت سعيدة",
        "name_en": "Khabt Sa'idah",
        "center": [
            17.04770004,
            42.76212995
        ]
    },
    {
        "city_id": 3495,
        "region_id": 10,
        "name_ar": "الحمي",
        "name_en": "Al Hima",
        "center": [
            17.15143,
            42.87524997
        ]
    },
    {
        "city_id": 3496,
        "region_id": 10,
        "name_ar": "السليل",
        "name_en": "As Sulayyil",
        "center": [
            17.11998001,
            42.78299006
        ]
    },
    {
        "city_id": 3497,
        "region_id": 10,
        "name_ar": "الجهو",
        "name_en": "Al Jahw",
        "center": [
            17.12694005,
            42.85174005
        ]
    },
    {
        "city_id": 3498,
        "region_id": 10,
        "name_ar": "القمري",
        "name_en": "Al Qamri",
        "center": [
            17.06894996,
            42.78960995
        ]
    },
    {
        "city_id": 3499,
        "region_id": 10,
        "name_ar": "ضمد",
        "name_en": "Damad",
        "center": [
            17.10344005,
            42.78043001
        ]
    },
    {
        "city_id": 3500,
        "region_id": 10,
        "name_ar": "الخضيرة",
        "name_en": "Al Khudayrah",
        "center": [
            17.07751001,
            42.75582003
        ]
    },
    {
        "city_id": 3501,
        "region_id": 10,
        "name_ar": "الشقيري",
        "name_en": "Alshuqayri",
        "center": [
            17.13001004,
            42.82402
        ]
    },
    {
        "city_id": 3502,
        "region_id": 10,
        "name_ar": "زبارة رشيد",
        "name_en": "Zabarat Rashid",
        "center": [
            16.94364998,
            42.91253996
        ]
    },
    {
        "city_id": 3503,
        "region_id": 10,
        "name_ar": "قنبورة",
        "name_en": "Qanbura",
        "center": [
            16.99478005,
            42.85368001
        ]
    },
    {
        "city_id": 3504,
        "region_id": 10,
        "name_ar": "بحرة",
        "name_en": "Bahrah",
        "center": [
            16.92631002,
            42.77246005
        ]
    },
    {
        "city_id": 3505,
        "region_id": 10,
        "name_ar": "القائم",
        "name_en": "Al Qaim",
        "center": [
            16.88828996,
            42.77212004
        ]
    },
    {
        "city_id": 3506,
        "region_id": 10,
        "name_ar": "المحصام",
        "name_en": "Al Muhsam",
        "center": [
            16.94681667,
            42.71983333
        ]
    },
    {
        "city_id": 3507,
        "region_id": 10,
        "name_ar": "الحجاجة",
        "name_en": "Al Hajajah",
        "center": [
            16.96020004,
            42.91861006
        ]
    },
    {
        "city_id": 3508,
        "region_id": 10,
        "name_ar": "الجربة",
        "name_en": "Al Jirbah",
        "center": [
            16.93400995,
            42.87848999
        ]
    },
    {
        "city_id": 3509,
        "region_id": 10,
        "name_ar": "السادلية",
        "name_en": "As Sadiliyah",
        "center": [
            16.93826002,
            42.83598999
        ]
    },
    {
        "city_id": 3510,
        "region_id": 10,
        "name_ar": "مريخية",
        "name_en": "Muraykhiyah",
        "center": [
            16.94120004,
            42.78782995
        ]
    },
    {
        "city_id": 3511,
        "region_id": 10,
        "name_ar": "العروس",
        "name_en": "Al 'Arus",
        "center": [
            16.90245,
            42.84670003
        ]
    },
    {
        "city_id": 3512,
        "region_id": 10,
        "name_ar": "الخزنة",
        "name_en": "Al Khuznah",
        "center": [
            16.87864004,
            42.80403001
        ]
    },
    {
        "city_id": 3513,
        "region_id": 10,
        "name_ar": "العسيلة",
        "name_en": "Al 'Usaylah",
        "center": [
            16.91858005,
            42.74388004
        ]
    },
    {
        "city_id": 3514,
        "region_id": 10,
        "name_ar": "سد ملاكي",
        "name_en": "Sadd Malaki",
        "center": [
            17.05086002,
            42.95893006
        ]
    },
    {
        "city_id": 3515,
        "region_id": 10,
        "name_ar": "الكتيفة",
        "name_en": "Al Kutayfah",
        "center": [
            17.08993997,
            43.04220994
        ]
    },
    {
        "city_id": 3516,
        "region_id": 10,
        "name_ar": "السيبة",
        "name_en": "As Syabah",
        "center": [
            17.11306995,
            43.08271002
        ]
    },
    {
        "city_id": 3517,
        "region_id": 10,
        "name_ar": "المرزوق",
        "name_en": "Al Marzuq",
        "center": [
            17.10170001,
            43.05422998
        ]
    },
    {
        "city_id": 3518,
        "region_id": 10,
        "name_ar": "الحريقة",
        "name_en": "Al Hariqah",
        "center": [
            17.13262,
            43.00697005
        ]
    },
    {
        "city_id": 3519,
        "region_id": 10,
        "name_ar": "الرد",
        "name_en": "Ar Radd",
        "center": [
            17.14697002,
            42.98647003
        ]
    },
    {
        "city_id": 3520,
        "region_id": 10,
        "name_ar": "دودة",
        "name_en": "Dudah",
        "center": [
            16.92839,
            42.95456002
        ]
    },
    {
        "city_id": 3521,
        "region_id": 10,
        "name_ar": "الدوشية",
        "name_en": "Ad Dawshiyah",
        "center": [
            16.92100004,
            42.94961
        ]
    },
    {
        "city_id": 3522,
        "region_id": 10,
        "name_ar": "أم الحجل",
        "name_en": "Umm Al Hajal",
        "center": [
            16.88337999,
            42.91916
        ]
    },
    {
        "city_id": 3523,
        "region_id": 10,
        "name_ar": "المقيدر",
        "name_en": "Al Muqaydir",
        "center": [
            16.87333003,
            42.89905999
        ]
    },
    {
        "city_id": 3524,
        "region_id": 10,
        "name_ar": "السلامة",
        "name_en": "As Salamah",
        "center": [
            16.97401998,
            42.75187005
        ]
    },
    {
        "city_id": 3525,
        "region_id": 10,
        "name_ar": "ابو عريش",
        "name_en": "Abu Arish",
        "center": [
            16.96509999,
            42.83113998
        ]
    },
    {
        "city_id": 3526,
        "region_id": 10,
        "name_ar": "الحميرة",
        "name_en": "Al Humayrah",
        "center": [
            17.14266006,
            43.05227998
        ]
    },
    {
        "city_id": 3527,
        "region_id": 10,
        "name_ar": "فلس",
        "name_en": "Falas",
        "center": [
            17.05457996,
            42.85030003
        ]
    },
    {
        "city_id": 3528,
        "region_id": 10,
        "name_ar": "حاكمة",
        "name_en": "Hakimah",
        "center": [
            17.00969995,
            42.83878003
        ]
    },
    {
        "city_id": 3529,
        "region_id": 10,
        "name_ar": "الصيابة",
        "name_en": "As Sayyabah",
        "center": [
            17.09766995,
            43.13300994
        ]
    },
    {
        "city_id": 3530,
        "region_id": 10,
        "name_ar": "العباسية",
        "name_en": "Al 'Abbasiyah",
        "center": [
            17.07885004,
            43.13960995
        ]
    },
    {
        "city_id": 3531,
        "region_id": 10,
        "name_ar": "الكروس",
        "name_en": "Al Kurus",
        "center": [
            17.04356995,
            43.14643003
        ]
    },
    {
        "city_id": 3532,
        "region_id": 10,
        "name_ar": "المبيت",
        "name_en": "Al Mubayyat",
        "center": [
            17.05484997,
            43.03566006
        ]
    },
    {
        "city_id": 3533,
        "region_id": 10,
        "name_ar": "السرداح",
        "name_en": "As Sirdah",
        "center": [
            16.60192005,
            43.11756004
        ]
    },
    {
        "city_id": 3534,
        "region_id": 10,
        "name_ar": "المعزاب",
        "name_en": "Al Mi'zab",
        "center": [
            16.58098997,
            43.10080002
        ]
    },
    {
        "city_id": 3535,
        "region_id": 10,
        "name_ar": "السودي",
        "name_en": "As Sawadi",
        "center": [
            16.70528001,
            43.07022999
        ]
    },
    {
        "city_id": 3536,
        "region_id": 10,
        "name_ar": "الحلحلة",
        "name_en": "Al Halhalah",
        "center": [
            16.78455998,
            43.01345002
        ]
    },
    {
        "city_id": 3537,
        "region_id": 10,
        "name_ar": "وعلان",
        "name_en": "Wa'lan",
        "center": [
            16.55433999,
            43.04861999
        ]
    },
    {
        "city_id": 3538,
        "region_id": 10,
        "name_ar": "البيسري",
        "name_en": "Al Baysuri",
        "center": [
            16.55857995,
            42.76531997
        ]
    },
    {
        "city_id": 3539,
        "region_id": 10,
        "name_ar": "ديحمة",
        "name_en": "Dayhamah",
        "center": [
            16.53773003,
            42.79300999
        ]
    },
    {
        "city_id": 3540,
        "region_id": 10,
        "name_ar": "الخلايف",
        "name_en": "Al Khalayif",
        "center": [
            16.56305002,
            42.78191003
        ]
    },
    {
        "city_id": 3541,
        "region_id": 10,
        "name_ar": "الشنامرة",
        "name_en": "Al Shanamirah",
        "center": [
            16.5764469,
            42.76816842
        ]
    },
    {
        "city_id": 3542,
        "region_id": 10,
        "name_ar": "صامطة",
        "name_en": "Samtah",
        "center": [
            16.60519001,
            42.94083001
        ]
    },
    {
        "city_id": 3543,
        "region_id": 10,
        "name_ar": "الجرادية",
        "name_en": "Al Juradiyah",
        "center": [
            16.58225997,
            42.91386001
        ]
    },
    {
        "city_id": 3544,
        "region_id": 10,
        "name_ar": "ابو حجر الاسفل",
        "name_en": "Abu Hajar Al Asfal",
        "center": [
            16.67900999,
            43.01485006
        ]
    },
    {
        "city_id": 3545,
        "region_id": 10,
        "name_ar": "الدغارير",
        "name_en": "Ad Dagharir",
        "center": [
            16.67510001,
            42.96024
        ]
    },
    {
        "city_id": 3546,
        "region_id": 10,
        "name_ar": "حاكمة",
        "name_en": "Hakimah",
        "center": [
            16.68516995,
            42.97816005
        ]
    },
    {
        "city_id": 3547,
        "region_id": 10,
        "name_ar": "حاكمة الدغارير",
        "name_en": "Hakimah Ad Dagharir",
        "center": [
            16.69412004,
            42.98117997
        ]
    },
    {
        "city_id": 3548,
        "region_id": 10,
        "name_ar": "القفل",
        "name_en": "Al Qufl",
        "center": [
            16.67005004,
            43.08954
        ]
    },
    {
        "city_id": 3549,
        "region_id": 10,
        "name_ar": "السر",
        "name_en": "As Sirr",
        "center": [
            16.66829002,
            43.12380998
        ]
    },
    {
        "city_id": 3550,
        "region_id": 10,
        "name_ar": "اللقية",
        "name_en": "Al Laqyah",
        "center": [
            16.66346004,
            43.04215
        ]
    },
    {
        "city_id": 3551,
        "region_id": 10,
        "name_ar": "ابو حجر الأعلى",
        "name_en": "Abu Hajar Al A'la",
        "center": [
            16.68578005,
            43.02845999
        ]
    },
    {
        "city_id": 3552,
        "region_id": 10,
        "name_ar": "النجامية",
        "name_en": "An Nujamiyah",
        "center": [
            16.55704998,
            42.95518997
        ]
    },
    {
        "city_id": 3553,
        "region_id": 10,
        "name_ar": "شعب الذئب",
        "name_en": "Shi'b Adh Dhib",
        "center": [
            16.54954996,
            42.98417998
        ]
    },
    {
        "city_id": 3554,
        "region_id": 10,
        "name_ar": "الخوجرة",
        "name_en": "Al Khawjarah",
        "center": [
            16.53192996,
            43.01717003
        ]
    },
    {
        "city_id": 3555,
        "region_id": 10,
        "name_ar": "الطوال",
        "name_en": "At Tuwal",
        "center": [
            16.52890998,
            42.96813002
        ]
    },
    {
        "city_id": 3556,
        "region_id": 10,
        "name_ar": "المجنة",
        "name_en": "Al Mijannah",
        "center": [
            16.55729003,
            43.00894997
        ]
    },
    {
        "city_id": 3558,
        "region_id": 10,
        "name_ar": "الجاظع",
        "name_en": "Al Jadhi'",
        "center": [
            16.64569996,
            42.99245996
        ]
    },
    {
        "city_id": 3559,
        "region_id": 10,
        "name_ar": "الركوبة",
        "name_en": "Ar Rukubah",
        "center": [
            16.61977999,
            42.97202996
        ]
    },
    {
        "city_id": 3560,
        "region_id": 10,
        "name_ar": "مجعر",
        "name_en": "Muj'ur",
        "center": [
            16.60862998,
            42.99642
        ]
    },
    {
        "city_id": 3561,
        "region_id": 10,
        "name_ar": "الموسم",
        "name_en": "Al Muwassam",
        "center": [
            16.42073004,
            42.82269006
        ]
    },
    {
        "city_id": 3562,
        "region_id": 11,
        "name_ar": "الخرخير",
        "name_en": "Al Kharkhir",
        "center": [
            18.85879002,
            51.13473964
        ]
    },
    {
        "city_id": 3563,
        "region_id": 10,
        "name_ar": "أبو طوق",
        "name_en": "Abu Tawq",
        "center": [
            16.93173998,
            41.92320999
        ]
    },
    {
        "city_id": 3564,
        "region_id": 10,
        "name_ar": "العقيل",
        "name_en": "Al 'Uqail",
        "center": [
            16.85119002,
            41.93014996
        ]
    },
    {
        "city_id": 3565,
        "region_id": 10,
        "name_ar": "ختب",
        "name_en": "Khatb",
        "center": [
            16.87848,
            41.85912001
        ]
    },
    {
        "city_id": 3566,
        "region_id": 10,
        "name_ar": "صير",
        "name_en": "Sir",
        "center": [
            16.83661004,
            41.81526997
        ]
    },
    {
        "city_id": 3567,
        "region_id": 10,
        "name_ar": "القصار",
        "name_en": "Al Qsar",
        "center": [
            16.66901001,
            42.15136001
        ]
    },
    {
        "city_id": 3568,
        "region_id": 10,
        "name_ar": "المحرق",
        "name_en": "Al Muharq",
        "center": [
            16.65468996,
            42.15849002
        ]
    },
    {
        "city_id": 3569,
        "region_id": 10,
        "name_ar": "جنابه",
        "name_en": "Gnaba",
        "center": [
            16.674,
            42.11876005
        ]
    },
    {
        "city_id": 3570,
        "region_id": 10,
        "name_ar": "الميناء الجديد",
        "name_en": "New Port",
        "center": [
            16.70225,
            42.18366996
        ]
    },
    {
        "city_id": 3571,
        "region_id": 10,
        "name_ar": "فرسان",
        "name_en": "Farasan",
        "center": [
            16.70908999,
            42.12692995
        ]
    },
    {
        "city_id": 3572,
        "region_id": 3,
        "name_ar": "أم صمدين",
        "name_en": "Umm Sumdayn",
        "center": [
            24.04238998,
            38.09692003
        ]
    },
    {
        "city_id": 3573,
        "region_id": 3,
        "name_ar": "المشران",
        "name_en": "Al Mishran",
        "center": [
            24.14648001,
            37.93339001
        ]
    },
    {
        "city_id": 3581,
        "region_id": 7,
        "name_ar": "بئر بن هرماس",
        "name_en": "Bir Ibn Hermas",
        "center": [
            28.85497997,
            36.26924004
        ]
    },
    {
        "city_id": 3582,
        "region_id": 5,
        "name_ar": "الحليسية",
        "name_en": "Al Hulaysiyah",
        "center": [
            26.58425995,
            48.67536994
        ]
    },
    {
        "city_id": 3583,
        "region_id": 5,
        "name_ar": "راس ام قصبة",
        "name_en": "Ras Umm Qusbah",
        "center": [
            28.50891005,
            48.47135993
        ]
    },
    {
        "city_id": 3584,
        "region_id": 10,
        "name_ar": "خبت البقر",
        "name_en": "Khabt Al Baqar",
        "center": [
            17.02036001,
            43.09668996
        ]
    },
    {
        "city_id": 3585,
        "region_id": 10,
        "name_ar": "الحنبة",
        "name_en": "Al Hanabah",
        "center": [
            17.01430003,
            43.05306999
        ]
    },
    {
        "city_id": 3586,
        "region_id": 10,
        "name_ar": "عرق",
        "name_en": "Irq",
        "center": [
            16.96303002,
            43.04936997
        ]
    },
    {
        "city_id": 3587,
        "region_id": 10,
        "name_ar": "أبو العشرة",
        "name_en": "Abu Al 'Usharah",
        "center": [
            16.91466996,
            43.08109005
        ]
    },
    {
        "city_id": 3588,
        "region_id": 10,
        "name_ar": "جرار",
        "name_en": "Jarrar",
        "center": [
            16.91880999,
            43.11813002
        ]
    },
    {
        "city_id": 3589,
        "region_id": 10,
        "name_ar": "العيشة",
        "name_en": "Al 'Ayshah",
        "center": [
            17.06130999,
            43.07908997
        ]
    },
    {
        "city_id": 3590,
        "region_id": 10,
        "name_ar": "جبل عبادل",
        "name_en": "Jabal 'Abadil",
        "center": [
            17.05519005,
            43.12686001
        ]
    },
    {
        "city_id": 3591,
        "region_id": 10,
        "name_ar": "البحثة",
        "name_en": "Al Bihthah",
        "center": [
            16.94203999,
            43.03066995
        ]
    },
    {
        "city_id": 3592,
        "region_id": 10,
        "name_ar": "المجازيع",
        "name_en": "Al Mijazi",
        "center": [
            17.05047004,
            43.21098001
        ]
    },
    {
        "city_id": 3593,
        "region_id": 10,
        "name_ar": "المسكية",
        "name_en": "Al Maskiyah",
        "center": [
            17.00663004,
            43.16783994
        ]
    },
    {
        "city_id": 3594,
        "region_id": 10,
        "name_ar": "حمية",
        "name_en": "Hamayah",
        "center": [
            16.97283997,
            43.14803002
        ]
    },
    {
        "city_id": 3595,
        "region_id": 10,
        "name_ar": "السحار",
        "name_en": "As Sahhar",
        "center": [
            16.94432001,
            43.15061995
        ]
    },
    {
        "city_id": 3596,
        "region_id": 10,
        "name_ar": "القصبة",
        "name_en": "Al Qasabah",
        "center": [
            16.96924004,
            43.12096
        ]
    },
    {
        "city_id": 3597,
        "region_id": 10,
        "name_ar": "العارضة",
        "name_en": "Al 'Aridah",
        "center": [
            17.03897,
            43.08800005
        ]
    },
    {
        "city_id": 3598,
        "region_id": 5,
        "name_ar": "سنابس",
        "name_en": "Sanabis",
        "center": [
            26.57672006,
            50.09158984
        ]
    },
    {
        "city_id": 3599,
        "region_id": 10,
        "name_ar": "قيس",
        "name_en": "Qays",
        "center": [
            17.02976998,
            43.21108006
        ]
    },
    {
        "city_id": 3600,
        "region_id": 10,
        "name_ar": "الوحلة",
        "name_en": "Al Wahlah",
        "center": [
            16.79192995,
            42.71615995
        ]
    },
    {
        "city_id": 3601,
        "region_id": 10,
        "name_ar": "العشوة",
        "name_en": "Al 'Ishwah",
        "center": [
            16.96415998,
            42.65712001
        ]
    },
    {
        "city_id": 3602,
        "region_id": 10,
        "name_ar": "الفقهاء",
        "name_en": "Al Fuqaha",
        "center": [
            16.91759004,
            42.67216999
        ]
    },
    {
        "city_id": 3603,
        "region_id": 10,
        "name_ar": "دحيقة",
        "name_en": "Duhayqah",
        "center": [
            16.93130994,
            42.61101001
        ]
    },
    {
        "city_id": 3604,
        "region_id": 10,
        "name_ar": "الشواجرة",
        "name_en": "Ash Shawajirah",
        "center": [
            16.99457003,
            42.61822996
        ]
    },
    {
        "city_id": 3605,
        "region_id": 10,
        "name_ar": "بخشة",
        "name_en": "Bakhshah",
        "center": [
            16.89943994,
            42.64273002
        ]
    },
    {
        "city_id": 3606,
        "region_id": 10,
        "name_ar": "الاساملة",
        "name_en": "Al Asamilah",
        "center": [
            16.86698998,
            42.75978996
        ]
    },
    {
        "city_id": 3607,
        "region_id": 10,
        "name_ar": "الخلفة",
        "name_en": "Al Khalfah",
        "center": [
            16.82100998,
            42.78283005
        ]
    },
    {
        "city_id": 3608,
        "region_id": 10,
        "name_ar": "جاضع المحاضين",
        "name_en": "Jadi' Al Mahadin",
        "center": [
            16.83841005,
            42.76419003
        ]
    },
    {
        "city_id": 3609,
        "region_id": 10,
        "name_ar": "الخمس",
        "name_en": "Al Khums",
        "center": [
            16.76897001,
            42.77827004
        ]
    },
    {
        "city_id": 3610,
        "region_id": 10,
        "name_ar": "مستورة",
        "name_en": "Masturah",
        "center": [
            16.71443003,
            42.80418
        ]
    },
    {
        "city_id": 3611,
        "region_id": 10,
        "name_ar": "السداد",
        "name_en": "As Sudad",
        "center": [
            16.68524001,
            42.80845
        ]
    },
    {
        "city_id": 3612,
        "region_id": 10,
        "name_ar": "الزهبين",
        "name_en": "Az Zahabayn",
        "center": [
            16.69519003,
            42.75729994
        ]
    },
    {
        "city_id": 3613,
        "region_id": 10,
        "name_ar": "صنبة",
        "name_en": "Sanbah",
        "center": [
            17.02481999,
            42.69965001
        ]
    },
    {
        "city_id": 3614,
        "region_id": 7,
        "name_ar": "البدع",
        "name_en": "Al Bada'",
        "center": [
            28.51118997,
            35.00763
        ]
    },
    {
        "city_id": 3615,
        "region_id": 10,
        "name_ar": "المعبوج",
        "name_en": "Al Ma'buj",
        "center": [
            16.89687998,
            42.60613001
        ]
    },
    {
        "city_id": 3616,
        "region_id": 10,
        "name_ar": "الخصاوية",
        "name_en": "Al Khasawiyah",
        "center": [
            16.94400006,
            42.64703
        ]
    },
    {
        "city_id": 3617,
        "region_id": 10,
        "name_ar": "المضاية",
        "name_en": "Al Madayah",
        "center": [
            16.77000004,
            42.73387996
        ]
    },
    {
        "city_id": 3618,
        "region_id": 10,
        "name_ar": "البديع والقرفي",
        "name_en": "Al Badi' Wal Qarafi",
        "center": [
            16.98834997,
            42.77643005
        ]
    },
    {
        "city_id": 3619,
        "region_id": 10,
        "name_ar": "مزهرة",
        "name_en": "Mizhirah",
        "center": [
            16.82590001,
            42.73394002
        ]
    },
    {
        "city_id": 3620,
        "region_id": 10,
        "name_ar": "الكربوص",
        "name_en": "Al Karbus",
        "center": [
            16.87325005,
            42.63485
        ]
    },
    {
        "city_id": 3621,
        "region_id": 10,
        "name_ar": "الواصلي",
        "name_en": "Al Wasili",
        "center": [
            16.94517998,
            42.69535001
        ]
    },
    {
        "city_id": 3622,
        "region_id": 10,
        "name_ar": "الريان",
        "name_en": "Ar Rayyan",
        "center": [
            16.97762,
            42.70179999
        ]
    },
    {
        "city_id": 3623,
        "region_id": 10,
        "name_ar": "قامزة",
        "name_en": "Qamizah",
        "center": [
            16.75667006,
            43.12131
        ]
    },
    {
        "city_id": 3624,
        "region_id": 10,
        "name_ar": "شهرين",
        "name_en": "Shahrayn",
        "center": [
            16.79977004,
            43.10305994
        ]
    },
    {
        "city_id": 3625,
        "region_id": 10,
        "name_ar": "المروة",
        "name_en": "Al Marwah",
        "center": [
            16.80207999,
            43.12800994
        ]
    },
    {
        "city_id": 3626,
        "region_id": 10,
        "name_ar": "الظهر",
        "name_en": "Adh Dhahar",
        "center": [
            16.80645998,
            43.19847998
        ]
    },
    {
        "city_id": 3627,
        "region_id": 10,
        "name_ar": "العقم",
        "name_en": "Al 'Aqum",
        "center": [
            16.76589999,
            43.21898998
        ]
    },
    {
        "city_id": 3628,
        "region_id": 10,
        "name_ar": "الصبخاية",
        "name_en": "As Subkhayah",
        "center": [
            16.73787004,
            43.21935997
        ]
    },
    {
        "city_id": 3629,
        "region_id": 10,
        "name_ar": "جلاح",
        "name_en": "Jilah",
        "center": [
            16.70554003,
            43.20802005
        ]
    },
    {
        "city_id": 3630,
        "region_id": 10,
        "name_ar": "الراحة",
        "name_en": "Ar Rahah",
        "center": [
            16.72854004,
            43.15499003
        ]
    },
    {
        "city_id": 3631,
        "region_id": 10,
        "name_ar": "المهدف",
        "name_en": "Al Mihdaf",
        "center": [
            16.80536994,
            43.10631998
        ]
    },
    {
        "city_id": 3632,
        "region_id": 10,
        "name_ar": "مخشوش",
        "name_en": "Makhshush",
        "center": [
            16.86326003,
            43.11282997
        ]
    },
    {
        "city_id": 3633,
        "region_id": 10,
        "name_ar": "الخوبة",
        "name_en": "Al Khawbah",
        "center": [
            16.78845,
            43.22026995
        ]
    },
    {
        "city_id": 3634,
        "region_id": 10,
        "name_ar": "القحمة",
        "name_en": "Al Qahmah",
        "center": [
            16.86399005,
            42.96712003
        ]
    },
    {
        "city_id": 3635,
        "region_id": 10,
        "name_ar": "الخشل",
        "name_en": "Al Khashal",
        "center": [
            16.87938001,
            43.13853002
        ]
    },
    {
        "city_id": 3636,
        "region_id": 10,
        "name_ar": "الجابري",
        "name_en": "Al Jabiri",
        "center": [
            16.84211,
            43.18459994
        ]
    },
    {
        "city_id": 3637,
        "region_id": 10,
        "name_ar": "جحا",
        "name_en": "Juha",
        "center": [
            16.66761003,
            42.89478995
        ]
    },
    {
        "city_id": 3638,
        "region_id": 10,
        "name_ar": "السر",
        "name_en": "As Sirr",
        "center": [
            16.73585998,
            42.89664
        ]
    },
    {
        "city_id": 3639,
        "region_id": 10,
        "name_ar": "الهجنبة",
        "name_en": "Al Hajanbah",
        "center": [
            16.75801995,
            42.99270998
        ]
    },
    {
        "city_id": 3640,
        "region_id": 10,
        "name_ar": "الشطيفية",
        "name_en": "Ash Shutayfiyah",
        "center": [
            16.67029005,
            42.87274994
        ]
    },
    {
        "city_id": 3641,
        "region_id": 10,
        "name_ar": "الحصامة",
        "name_en": "Al Hassamah",
        "center": [
            16.68418996,
            42.92286995
        ]
    },
    {
        "city_id": 3642,
        "region_id": 10,
        "name_ar": "الخضراء الشمالية",
        "name_en": "Al Khadra Ash Shamaliyah",
        "center": [
            16.70369002,
            42.91586997
        ]
    },
    {
        "city_id": 3643,
        "region_id": 10,
        "name_ar": "السويدية",
        "name_en": "Al Suwaydiyah",
        "center": [
            16.74360999,
            42.84038999
        ]
    },
    {
        "city_id": 3644,
        "region_id": 10,
        "name_ar": "رعشة",
        "name_en": "Rashah",
        "center": [
            16.78050996,
            42.84610996
        ]
    },
    {
        "city_id": 3645,
        "region_id": 10,
        "name_ar": "المجامة",
        "name_en": "Al Mujammah",
        "center": [
            16.72618004,
            42.85730995
        ]
    },
    {
        "city_id": 3646,
        "region_id": 10,
        "name_ar": "المخشلية",
        "name_en": "Al Mukhashshaliyah",
        "center": [
            16.78367996,
            42.95202002
        ]
    },
    {
        "city_id": 3647,
        "region_id": 10,
        "name_ar": "الحامضة",
        "name_en": "Al Hamidah",
        "center": [
            16.76666996,
            42.91305999
        ]
    },
    {
        "city_id": 3648,
        "region_id": 10,
        "name_ar": "الجعدية",
        "name_en": "Al Ja'diyah",
        "center": [
            16.80425005,
            42.98279996
        ]
    },
    {
        "city_id": 3649,
        "region_id": 10,
        "name_ar": "المحامل",
        "name_en": "Al Mahamil",
        "center": [
            16.80435998,
            42.89317004
        ]
    },
    {
        "city_id": 3650,
        "region_id": 10,
        "name_ar": "الحصمة",
        "name_en": "Al Hasamah",
        "center": [
            16.84504995,
            42.98145995
        ]
    },
    {
        "city_id": 3651,
        "region_id": 10,
        "name_ar": "حاكمة",
        "name_en": "Hakimah",
        "center": [
            16.71723999,
            42.97234999
        ]
    },
    {
        "city_id": 3652,
        "region_id": 10,
        "name_ar": "احد المسارحة",
        "name_en": "Ahad Al Musarihah",
        "center": [
            16.70809996,
            42.95145998
        ]
    },
    {
        "city_id": 3653,
        "region_id": 10,
        "name_ar": "الحجفار",
        "name_en": "Al Hijfar",
        "center": [
            16.54438333,
            42.84905
        ]
    },
    {
        "city_id": 3654,
        "region_id": 10,
        "name_ar": "الطاهرية",
        "name_en": "At Tahiriyah",
        "center": [
            16.6564,
            42.7776
        ]
    },
    {
        "city_id": 3655,
        "region_id": 10,
        "name_ar": "الحضرور",
        "name_en": "Al Hadrur",
        "center": [
            16.54367674,
            42.86784403
        ]
    },
    {
        "city_id": 3656,
        "region_id": 10,
        "name_ar": "الدريعية",
        "name_en": "Ad Duray'iyah",
        "center": [
            16.58399005,
            42.84304999
        ]
    },
    {
        "city_id": 3657,
        "region_id": 10,
        "name_ar": "البدوي",
        "name_en": "Al Badawi",
        "center": [
            16.63672994,
            42.87433006
        ]
    },
    {
        "city_id": 3658,
        "region_id": 10,
        "name_ar": "الهلية",
        "name_en": "Al Halliyah",
        "center": [
            16.63151,
            42.85102995
        ]
    },
    {
        "city_id": 3659,
        "region_id": 10,
        "name_ar": "الحنيني",
        "name_en": "Al Hanini",
        "center": [
            16.59003004,
            42.81785005
        ]
    },
    {
        "city_id": 3660,
        "region_id": 10,
        "name_ar": "قمعة",
        "name_en": "Qama'ah",
        "center": [
            16.58505996,
            42.76918002
        ]
    },
    {
        "city_id": 3661,
        "region_id": 10,
        "name_ar": "المنجارة",
        "name_en": "Al Minjarah",
        "center": [
            16.71938996,
            43.01484003
        ]
    },
    {
        "city_id": 3662,
        "region_id": 10,
        "name_ar": "المقرقم",
        "name_en": "Al Maqarqam",
        "center": [
            16.73193249,
            43.03455294
        ]
    },
    {
        "city_id": 3663,
        "region_id": 10,
        "name_ar": "المحطة",
        "name_en": "Al Mahattah",
        "center": [
            16.70536996,
            43.10663995
        ]
    },
    {
        "city_id": 3664,
        "region_id": 10,
        "name_ar": "الحقلة",
        "name_en": "Al Haqlah",
        "center": [
            16.64273998,
            43.07087995
        ]
    },
    {
        "city_id": 3665,
        "region_id": 10,
        "name_ar": "أبو الرديف",
        "name_en": "Abu Ar Radif",
        "center": [
            16.62102997,
            43.13498996
        ]
    },
    {
        "city_id": 3666,
        "region_id": 2,
        "name_ar": "مدينة الملك عبدالله الاقتصادية",
        "name_en": "King Abdullah Economic City",
        "center": [
            22.46083839,
            39.13119236
        ]
    },
    {
        "city_id": 3667,
        "region_id": 10,
        "name_ar": "الخارش",
        "name_en": "Al Kharish",
        "center": [
            16.64530293,
            42.94933413
        ]
    },
    {
        "city_id": 3668,
        "region_id": 10,
        "name_ar": "السهي",
        "name_en": "As Sahi",
        "center": [
            16.51721339,
            42.82780841
        ]
    },
    {
        "city_id": 3669,
        "region_id": 10,
        "name_ar": "رمادا",
        "name_en": "Ramada",
        "center": [
            16.70021213,
            43.02139135
        ]
    },
    {
        "city_id": 3670,
        "region_id": 10,
        "name_ar": "روان",
        "name_en": "Rawan",
        "center": [
            17.0094944,
            42.99304505
        ]
    },
    {
        "city_id": 3671,
        "region_id": 5,
        "name_ar": "هجرة شهيل",
        "name_en": "Hijrat Shuhayl",
        "center": [
            26.03715802,
            49.42737194
        ]
    },
    {
        "city_id": 3672,
        "region_id": 1,
        "name_ar": "البرزة",
        "name_en": "Al Barzah",
        "center": [
            26.67568611,
            45.339025
        ]
    },
    {
        "city_id": 3673,
        "region_id": 1,
        "name_ar": "أم سدرة",
        "name_en": "Umm Sidrah",
        "center": [
            26.21758333,
            45.38951389
        ]
    },
    {
        "city_id": 3674,
        "region_id": 1,
        "name_ar": "مشذوبة",
        "name_en": "Mashdhubah",
        "center": [
            27.34261111,
            45.02031389
        ]
    },
    {
        "city_id": 3675,
        "region_id": 1,
        "name_ar": "المفيجر",
        "name_en": "Al Mufaijir",
        "center": [
            23.61337209,
            46.56934287
        ]
    },
    {
        "city_id": 3676,
        "region_id": 6,
        "name_ar": "وادي الحياة",
        "name_en": "Wadi Al Hayat",
        "center": [
            17.61041598,
            43.06878885
        ]
    },
    {
        "city_id": 3677,
        "region_id": 5,
        "name_ar": "الاحساء",
        "name_en": "Al Ahsa",
        "center": [
            25.39574461,
            49.6162808
        ]
    },
    {
        "city_id": 3678,
        "region_id": 6,
        "name_ar": "تندحة",
        "name_en": "Tendaha",
        "center": [
            18.35717506,
            42.83458859
        ]
    },
    {
        "city_id": 3679,
        "region_id": 9,
        "name_ar": "السليمانية",
        "name_en": "As Sulaimaniyah",
        "center": [
            30.55481317,
            41.14428938
        ]
    },
    {
        "city_id": 3680,
        "region_id": 6,
        "name_ar": "الواديين",
        "name_en": "Al Wadiyayn",
        "center": [
            18.10284383,
            42.82440111
        ]
    },
    {
        "city_id": 3681,
        "region_id": 6,
        "name_ar": "الفيض",
        "name_en": "Al Fayd",
        "center": [
            18.0194632,
            43.45829137
        ]
    },
    {
        "city_id": 3682,
        "region_id": 6,
        "name_ar": "ختبة",
        "name_en": "Khatbah",
        "center": [
            19.19409002,
            41.96507129
        ]
    },
    {
        "city_id": 3683,
        "region_id": 1,
        "name_ar": "مشرفة",
        "name_en": "Mushrifah",
        "center": [
            26.40013612,
            45.10936277
        ]
    },
    {
        "city_id": 3684,
        "region_id": 2,
        "name_ar": "اضم",
        "name_en": "Adham",
        "center": [
            20.45930658,
            40.88707479
        ]
    },
    {
        "city_id": 3685,
        "region_id": 8,
        "name_ar": "الخلصة",
        "name_en": "Al Khlusah",
        "center": [
            27.19292654,
            42.16402136
        ]
    },
    {
        "city_id": 3686,
        "region_id": 5,
        "name_ar": "السيح",
        "name_en": "As Seeh",
        "center": [
            25.31513939,
            49.88167745
        ]
    },
    {
        "city_id": 3687,
        "region_id": 6,
        "name_ar": "حسوة",
        "name_en": "Hiswah",
        "center": [
            18.13805735,
            42.31956814
        ]
    },
    {
        "city_id": 3688,
        "region_id": 6,
        "name_ar": "الفرعين",
        "name_en": "Al Faraain",
        "center": [
            18.14306521,
            42.96521251
        ]
    },
    {
        "city_id": 3689,
        "region_id": 6,
        "name_ar": "بللحمر",
        "name_en": "Billahmar",
        "center": [
            18.63462088,
            42.32399461
        ]
    },
    {
        "city_id": 3690,
        "region_id": 6,
        "name_ar": "بحر ابو سكينة",
        "name_en": "Bahr Abu Sukaynah",
        "center": [
            18.34143783,
            41.91749318
        ]
    },
    {
        "city_id": 3691,
        "region_id": 1,
        "name_ar": "العمق",
        "name_en": "Al Umaq",
        "center": [
            23.22993344,
            45.55411328
        ]
    },
    {
        "city_id": 3692,
        "region_id": 6,
        "name_ar": "يعرى",
        "name_en": "Yaara",
        "center": [
            18.70248081,
            42.98022007
        ]
    },
    {
        "city_id": 3693,
        "region_id": 6,
        "name_ar": "العيش",
        "name_en": "Al Aysh",
        "center": [
            18.38975762,
            42.89154856
        ]
    },
    {
        "city_id": 3694,
        "region_id": 7,
        "name_ar": "جزيرة صنافير",
        "name_en": "Sanafir Island",
        "center": [
            27.94555451,
            34.70548518
        ]
    },
    {
        "city_id": 3695,
        "region_id": 7,
        "name_ar": "جزيرة تيران",
        "name_en": "Tiran Island",
        "center": [
            27.94113811,
            34.55863993
        ]
    },
    {
        "city_id": 3696,
        "region_id": 3,
        "name_ar": "سليلة جهينة",
        "name_en": "Salilat Juhaynah",
        "center": [
            25.54136003,
            38.40274001
        ]
    },
    {
        "city_id": 3697,
        "region_id": 6,
        "name_ar": "المسقي",
        "name_en": "Al Masqi",
        "center": [
            18.0429524,
            42.74143761
        ]
    },
    {
        "city_id": 3698,
        "region_id": 1,
        "name_ar": "الصفوية",
        "name_en": "As Safwiyah",
        "center": [
            24.41436079,
            42.68626315
        ]
    },
    {
        "city_id": 3699,
        "region_id": 10,
        "name_ar": "آل علي",
        "name_en": "Al 'Ali",
        "center": [
            17.37425738,
            43.11966732
        ]
    },
    {
        "city_id": 3700,
        "region_id": 5,
        "name_ar": "جواثا",
        "name_en": "Jawatha",
        "center": [
            25.44438091,
            49.65727811
        ]
    },
    {
        "city_id": 3701,
        "region_id": 13,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            30.06283872,
            40.33300024
        ]
    },
    {
        "city_id": 3702,
        "region_id": 5,
        "name_ar": "رأس الخير",
        "name_en": "Ras Al Khair",
        "center": [
            27.48027113,
            49.26031922
        ]
    },
    {
        "city_id": 3703,
        "region_id": 3,
        "name_ar": "البريكة",
        "name_en": "Al Buraykah",
        "center": [
            27.33025,
            37.78658333
        ]
    },
    {
        "city_id": 3704,
        "region_id": 3,
        "name_ar": "منطقة الصناعات الخفيفة",
        "name_en": "Light Industrial Zone",
        "center": [
            24.00478817,
            38.26229608
        ]
    },
    {
        "city_id": 3705,
        "region_id": 8,
        "name_ar": "شعيب الصقعاء",
        "name_en": "Shuaib As Saqa'a",
        "center": [
            25.69843276,
            41.00513363
        ]
    },
    {
        "city_id": 3706,
        "region_id": 8,
        "name_ar": "مشاش ابن جازي",
        "name_en": "Mashash Ibn Jazi",
        "center": [
            26.34675319,
            41.89555099
        ]
    },
    {
        "city_id": 3707,
        "region_id": 8,
        "name_ar": "فيضة السمار",
        "name_en": "Faydat As Sammar",
        "center": [
            26.21793807,
            41.80090355
        ]
    },
    {
        "city_id": 3708,
        "region_id": 7,
        "name_ar": "ذرفي",
        "name_en": "Dharfi",
        "center": [
            25.65473333,
            37.22236667
        ]
    },
    {
        "city_id": 3709,
        "region_id": 11,
        "name_ar": "المشعلية",
        "name_en": "Al Mishaliyah",
        "center": [
            17.76041667,
            44.44603333
        ]
    },
    {
        "city_id": 3710,
        "region_id": 8,
        "name_ar": "الخوي",
        "name_en": "Al Khawi",
        "center": [
            27.22738333,
            42.21323333
        ]
    },
    {
        "city_id": 3711,
        "region_id": 6,
        "name_ar": "آل رحمة",
        "name_en": "Al Rahmah",
        "center": [
            19.20531951,
            42.0667846
        ]
    },
    {
        "city_id": 3712,
        "region_id": 2,
        "name_ar": "السدين",
        "name_en": "As Saddain",
        "center": [
            20.66751667,
            40.98631667
        ]
    },
    {
        "city_id": 3753,
        "region_id": 1,
        "name_ar": "الوسيطاء",
        "name_en": "Al Wusayta",
        "center": [
            24.19898333,
            47.30336667
        ]
    },
    {
        "city_id": 3755,
        "region_id": 1,
        "name_ar": "الضبيعة",
        "name_en": "Al Dubayah",
        "center": [
            24.09863333,
            47.17221667
        ]
    },
    {
        "city_id": 3771,
        "region_id": 1,
        "name_ar": "العزيزيه",
        "name_en": "Al Aziziyah",
        "center": [
            23.82475,
            46.96278333
        ]
    },
    {
        "city_id": 3788,
        "region_id": 1,
        "name_ar": "شراف",
        "name_en": "Sharaf",
        "center": [
            25.18236667,
            44.50843333
        ]
    },
    {
        "city_id": 3794,
        "region_id": 1,
        "name_ar": "الحبابيه",
        "name_en": "Al Hababiyah",
        "center": [
            25.25013333,
            44.34838333
        ]
    },
    {
        "city_id": 3813,
        "region_id": 1,
        "name_ar": "المغمي",
        "name_en": "Al Maghmi",
        "center": [
            24.89398333,
            43.89885
        ]
    },
    {
        "city_id": 3874,
        "region_id": 1,
        "name_ar": "الطرفية",
        "name_en": "Al Tarafiyyah",
        "center": [
            24.4805,
            43.64316667
        ]
    },
    {
        "city_id": 3901,
        "region_id": 1,
        "name_ar": "السدريه",
        "name_en": "As Sadryah",
        "center": [
            24.4943,
            43.68115
        ]
    },
    {
        "city_id": 3902,
        "region_id": 1,
        "name_ar": "الهويديه",
        "name_en": "Al Huwaydyah",
        "center": [
            24.51635,
            43.66535
        ]
    },
    {
        "city_id": 3903,
        "region_id": 1,
        "name_ar": "العناديه",
        "name_en": "Al Enadyah",
        "center": [
            24.52175,
            43.68493333
        ]
    },
    {
        "city_id": 3905,
        "region_id": 1,
        "name_ar": "نعام",
        "name_en": "Na'am",
        "center": [
            24.55553333,
            43.5819
        ]
    },
    {
        "city_id": 3945,
        "region_id": 1,
        "name_ar": "ابو سدر",
        "name_en": "Abu Sidr",
        "center": [
            24.94218333,
            44.65223333
        ]
    },
    {
        "city_id": 3946,
        "region_id": 1,
        "name_ar": "مشرفة الكراشمه",
        "name_en": "Mushrifah Al Krashmah",
        "center": [
            24.92448333,
            44.66353333
        ]
    },
    {
        "city_id": 3996,
        "region_id": 1,
        "name_ar": "المطاوي",
        "name_en": "Al Mutawi",
        "center": [
            25.36029231,
            44.52825872
        ]
    },
    {
        "city_id": 4019,
        "region_id": 1,
        "name_ar": "ابو عشر",
        "name_en": "Abu Ashr",
        "center": [
            24.67448333,
            43.74525
        ]
    },
    {
        "city_id": 4021,
        "region_id": 4,
        "name_ar": "الناشرية",
        "name_en": "Al Nashiriyah",
        "center": [
            25.35241667,
            43.92525
        ]
    },
    {
        "city_id": 4028,
        "region_id": 1,
        "name_ar": "الحيد",
        "name_en": "Al Hayd",
        "center": [
            24.87286667,
            43.79973333
        ]
    },
    {
        "city_id": 4050,
        "region_id": 1,
        "name_ar": "خريمان",
        "name_en": "Khuraiman",
        "center": [
            25.4534,
            44.15598333
        ]
    },
    {
        "city_id": 4080,
        "region_id": 1,
        "name_ar": "الراجحية",
        "name_en": "Al Rajhiyah",
        "center": [
            25.29482202,
            44.15417935
        ]
    },
    {
        "city_id": 4088,
        "region_id": 1,
        "name_ar": "السيح",
        "name_en": "As Seeh",
        "center": [
            24.89151667,
            44.73921667
        ]
    },
    {
        "city_id": 4092,
        "region_id": 1,
        "name_ar": "الصالحية",
        "name_en": "As Salhiyah",
        "center": [
            24.5004,
            43.59133333
        ]
    },
    {
        "city_id": 4118,
        "region_id": 1,
        "name_ar": "برزان",
        "name_en": "Barzan",
        "center": [
            26.57101667,
            45.11271667
        ]
    },
    {
        "city_id": 4129,
        "region_id": 1,
        "name_ar": "حنيدر",
        "name_en": "Hunaidir",
        "center": [
            26.66085,
            44.96026667
        ]
    },
    {
        "city_id": 4131,
        "region_id": 1,
        "name_ar": "الجنوبية بسدير",
        "name_en": "Southern Sudair",
        "center": [
            25.58401667,
            45.61235
        ]
    },
    {
        "city_id": 4396,
        "region_id": 1,
        "name_ar": "الوسيطا",
        "name_en": "Al Wasita",
        "center": [
            23.58786667,
            44.76138333
        ]
    },
    {
        "city_id": 4574,
        "region_id": 1,
        "name_ar": "الجلة الجنوبي",
        "name_en": "Jellah Al Janubi",
        "center": [
            24.33259515,
            45.81865001
        ]
    },
    {
        "city_id": 4594,
        "region_id": 1,
        "name_ar": "دهو",
        "name_en": "Daho",
        "center": [
            21.12903333,
            44.47583333
        ]
    },
    {
        "city_id": 4604,
        "region_id": 1,
        "name_ar": "السلام",
        "name_en": "As Salam",
        "center": [
            21.73146667,
            44.62056667
        ]
    },
    {
        "city_id": 4620,
        "region_id": 1,
        "name_ar": "قمران",
        "name_en": "Qamran",
        "center": [
            22.04763333,
            44.60975
        ]
    },
    {
        "city_id": 4621,
        "region_id": 1,
        "name_ar": "ام سليم",
        "name_en": "Umm Sulaim",
        "center": [
            22.2895,
            45.13418333
        ]
    },
    {
        "city_id": 4632,
        "region_id": 1,
        "name_ar": "صيحة",
        "name_en": "Sayha",
        "center": [
            22.15906667,
            44.85056667
        ]
    },
    {
        "city_id": 4636,
        "region_id": 1,
        "name_ar": "بلثقاء",
        "name_en": "Balthaqa",
        "center": [
            21.65683333,
            43.98003333
        ]
    },
    {
        "city_id": 4643,
        "region_id": 1,
        "name_ar": "الجبيلة",
        "name_en": "Al Jubailah",
        "center": [
            22.2638,
            46.65296667
        ]
    },
    {
        "city_id": 4644,
        "region_id": 1,
        "name_ar": "الفريشة",
        "name_en": "Al Farishah",
        "center": [
            22.3528,
            46.6687
        ]
    },
    {
        "city_id": 4670,
        "region_id": 1,
        "name_ar": "الصغو",
        "name_en": "Al Saghu",
        "center": [
            22.20466667,
            46.68448333
        ]
    },
    {
        "city_id": 4678,
        "region_id": 1,
        "name_ar": "وسيلة",
        "name_en": "Wasilah",
        "center": [
            22.37215,
            46.76291667
        ]
    },
    {
        "city_id": 4680,
        "region_id": 1,
        "name_ar": "العجلية",
        "name_en": "Al Ajiliyyah",
        "center": [
            21.42925,
            46.11661667
        ]
    },
    {
        "city_id": 4684,
        "region_id": 1,
        "name_ar": "الفرشة",
        "name_en": "Al Farshah",
        "center": [
            22.3279,
            46.82816667
        ]
    },
    {
        "city_id": 4729,
        "region_id": 1,
        "name_ar": "الجوى",
        "name_en": "Al Jawa",
        "center": [
            26.43278333,
            44.6992
        ]
    },
    {
        "city_id": 4748,
        "region_id": 1,
        "name_ar": "ام شيح",
        "name_en": "Umm Sheih",
        "center": [
            26.78355,
            44.46201667
        ]
    },
    {
        "city_id": 4765,
        "region_id": 1,
        "name_ar": "الحيانية",
        "name_en": "Al Hayaniyah",
        "center": [
            22.9854,
            46.09676667
        ]
    },
    {
        "city_id": 4785,
        "region_id": 1,
        "name_ar": "بيضاء نثيل",
        "name_en": "Baydaa Nathil",
        "center": [
            23.89153333,
            42.66938333
        ]
    },
    {
        "city_id": 4790,
        "region_id": 1,
        "name_ar": "النباه",
        "name_en": "Al Nabah",
        "center": [
            23.8793,
            42.8008
        ]
    },
    {
        "city_id": 4807,
        "region_id": 1,
        "name_ar": "صالحية كف",
        "name_en": "Salhiyat Kaf",
        "center": [
            24.44328333,
            42.91326667
        ]
    },
    {
        "city_id": 4815,
        "region_id": 1,
        "name_ar": "المصيفقيه",
        "name_en": "Al Musayfiqih",
        "center": [
            23.74373333,
            43.10215
        ]
    },
    {
        "city_id": 4816,
        "region_id": 1,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            23.71618333,
            43.07963333
        ]
    },
    {
        "city_id": 4837,
        "region_id": 1,
        "name_ar": "الباينيه",
        "name_en": "Al Baynih",
        "center": [
            24.17691667,
            42.85846667
        ]
    },
    {
        "city_id": 4841,
        "region_id": 1,
        "name_ar": "الروضة",
        "name_en": "Ar Rawdah",
        "center": [
            24.21108333,
            42.92111667
        ]
    },
    {
        "city_id": 4848,
        "region_id": 1,
        "name_ar": "النزهة",
        "name_en": "An Nuzhah",
        "center": [
            24.1271,
            42.92416667
        ]
    },
    {
        "city_id": 4865,
        "region_id": 1,
        "name_ar": "الجامعية",
        "name_en": "Al Jamieyah",
        "center": [
            24.47423333,
            42.1648
        ]
    },
    {
        "city_id": 4873,
        "region_id": 1,
        "name_ar": "رفايع المزينى",
        "name_en": "Ruf'ai' Al Muzaini",
        "center": [
            24.39933333,
            43.26886667
        ]
    },
    {
        "city_id": 4885,
        "region_id": 1,
        "name_ar": "بشاير",
        "name_en": "Bashayir",
        "center": [
            23.71688333,
            42.18986667
        ]
    },
    {
        "city_id": 4910,
        "region_id": 1,
        "name_ar": "دارة المردمة",
        "name_en": "Darat Al Mardamah",
        "center": [
            23.68236974,
            43.11667128
        ]
    },
    {
        "city_id": 4947,
        "region_id": 1,
        "name_ar": "الجافورة",
        "name_en": "Al Jaforah",
        "center": [
            24.50951667,
            45.8843
        ]
    },
    {
        "city_id": 4972,
        "region_id": 1,
        "name_ar": "الحفيرة",
        "name_en": "Al Hufayrah",
        "center": [
            25.9215,
            46.52533333
        ]
    },
    {
        "city_id": 4997,
        "region_id": 1,
        "name_ar": "القرينه",
        "name_en": "Al Qurainah",
        "center": [
            25.11086815,
            46.1901374
        ]
    },
    {
        "city_id": 5001,
        "region_id": 1,
        "name_ar": "غيانه وحرقان",
        "name_en": "Ghianah Wahurqan",
        "center": [
            25.08175,
            46.28448333
        ]
    },
    {
        "city_id": 5022,
        "region_id": 1,
        "name_ar": "العبدليه",
        "name_en": "Al Abdaliyah",
        "center": [
            25.85815,
            44.72295
        ]
    },
    {
        "city_id": 5080,
        "region_id": 2,
        "name_ar": "الغبان",
        "name_en": "Al Ghobban",
        "center": [
            21.48006667,
            40.09956667
        ]
    },
    {
        "city_id": 5164,
        "region_id": 2,
        "name_ar": "الصدر",
        "name_en": "As Sadr",
        "center": [
            21.5226,
            40.16188333
        ]
    },
    {
        "city_id": 5181,
        "region_id": 2,
        "name_ar": "المربع",
        "name_en": "Al Murabba'",
        "center": [
            21.47961667,
            40.08815
        ]
    },
    {
        "city_id": 5571,
        "region_id": 2,
        "name_ar": "اعلى وادي عرضة",
        "name_en": "Aala Wadi Ardah",
        "center": [
            21.16528333,
            40.38455
        ]
    },
    {
        "city_id": 5608,
        "region_id": 2,
        "name_ar": "ام سدرة (البدايع)",
        "name_en": "Umm Sidrah (Al Badayie)",
        "center": [
            21.34473333,
            40.82685
        ]
    },
    {
        "city_id": 5642,
        "region_id": 2,
        "name_ar": "قهوة العبد",
        "name_en": "Qahwat Al Abd",
        "center": [
            21.1753,
            40.70381667
        ]
    },
    {
        "city_id": 5730,
        "region_id": 2,
        "name_ar": "العقيق",
        "name_en": "Al Aqiq",
        "center": [
            22.18369809,
            40.8040586
        ]
    },
    {
        "city_id": 5731,
        "region_id": 2,
        "name_ar": "دغبج",
        "name_en": "Dughbaj",
        "center": [
            22.37856667,
            40.71233333
        ]
    },
    {
        "city_id": 5877,
        "region_id": 2,
        "name_ar": "البيضين",
        "name_en": "Al Baydain",
        "center": [
            18.69188333,
            41.3712
        ]
    },
    {
        "city_id": 5879,
        "region_id": 2,
        "name_ar": "الخضراء",
        "name_en": "Al Khadraa",
        "center": [
            18.6982,
            41.37263333
        ]
    },
    {
        "city_id": 5959,
        "region_id": 2,
        "name_ar": "الوطاة",
        "name_en": "Al Watah",
        "center": [
            19.4105,
            41.014
        ]
    },
    {
        "city_id": 6045,
        "region_id": 2,
        "name_ar": "منذر البحيرة",
        "name_en": "Mundhir Al Buhayrah",
        "center": [
            19.19281667,
            41.52356667
        ]
    },
    {
        "city_id": 6051,
        "region_id": 2,
        "name_ar": "حرف المروة",
        "name_en": "Harf Al Marwah",
        "center": [
            19.18553333,
            41.51686667
        ]
    },
    {
        "city_id": 6052,
        "region_id": 2,
        "name_ar": "فريدة الصلة",
        "name_en": "Faridat Al Silah",
        "center": [
            19.1894,
            41.52871667
        ]
    },
    {
        "city_id": 6137,
        "region_id": 2,
        "name_ar": "الطراحية",
        "name_en": "Al Tarahiyyah",
        "center": [
            19.67017577,
            40.87798354
        ]
    },
    {
        "city_id": 6138,
        "region_id": 2,
        "name_ar": "المساعيد",
        "name_en": "Al Masaid",
        "center": [
            19.66453349,
            40.86578458
        ]
    },
    {
        "city_id": 6175,
        "region_id": 2,
        "name_ar": "الفلحة",
        "name_en": "Al Falhah",
        "center": [
            18.66578333,
            41.3531
        ]
    },
    {
        "city_id": 6302,
        "region_id": 2,
        "name_ar": "ضهياء",
        "name_en": "Dahyaa",
        "center": [
            20.3739,
            40.61131667
        ]
    },
    {
        "city_id": 6778,
        "region_id": 2,
        "name_ar": "حفار",
        "name_en": "Haffar",
        "center": [
            19.71695,
            40.86106667
        ]
    },
    {
        "city_id": 6907,
        "region_id": 2,
        "name_ar": "الصغو",
        "name_en": "Al Saghu",
        "center": [
            21.84583333,
            39.45306667
        ]
    },
    {
        "city_id": 7035,
        "region_id": 2,
        "name_ar": "غران",
        "name_en": "Gharan",
        "center": [
            21.97338388,
            39.36740006
        ]
    },
    {
        "city_id": 7642,
        "region_id": 2,
        "name_ar": "الركنة",
        "name_en": "Al Raknah",
        "center": [
            23.34291667,
            41.73498333
        ]
    },
    {
        "city_id": 7680,
        "region_id": 2,
        "name_ar": "الشباشبة",
        "name_en": "Al Shabashibah",
        "center": [
            20.82861667,
            40.86601667
        ]
    },
    {
        "city_id": 8238,
        "region_id": 2,
        "name_ar": "الغريسة",
        "name_en": "Al Gharisah",
        "center": [
            20.55935,
            41.08516667
        ]
    },
    {
        "city_id": 8653,
        "region_id": 2,
        "name_ar": "المطحنه",
        "name_en": "Al Mathanah",
        "center": [
            19.69235,
            41.71051667
        ]
    },
    {
        "city_id": 8654,
        "region_id": 2,
        "name_ar": "الجناح",
        "name_en": "Al Janah",
        "center": [
            19.68456667,
            41.71026667
        ]
    },
    {
        "city_id": 8749,
        "region_id": 2,
        "name_ar": "مشرف",
        "name_en": "Mushrif",
        "center": [
            19.42468333,
            41.84778333
        ]
    },
    {
        "city_id": 9176,
        "region_id": 2,
        "name_ar": "دقم الذنيب",
        "name_en": "Daqm Al Dhanib",
        "center": [
            20.35681667,
            40.91356667
        ]
    },
    {
        "city_id": 9594,
        "region_id": 3,
        "name_ar": "الرذايا",
        "name_en": "Al Radhaya",
        "center": [
            24.6188722,
            39.92880575
        ]
    },
    {
        "city_id": 9605,
        "region_id": 3,
        "name_ar": "ينبع الصناعية",
        "name_en": "Yanbu Al Sinaiyah",
        "center": [
            24.01064515,
            38.26633335
        ]
    },
    {
        "city_id": 9666,
        "region_id": 3,
        "name_ar": "تلعة نزة",
        "name_en": "Tal'ah Nazah",
        "center": [
            24.4238,
            38.26081667
        ]
    },
    {
        "city_id": 9812,
        "region_id": 3,
        "name_ar": "العذيب",
        "name_en": "Al Adhib",
        "center": [
            26.73861667,
            37.94766667
        ]
    },
    {
        "city_id": 9814,
        "region_id": 3,
        "name_ar": "قراقر",
        "name_en": "Qaraqir",
        "center": [
            26.73951667,
            37.89286667
        ]
    },
    {
        "city_id": 9906,
        "region_id": 3,
        "name_ar": "آبار الطويرفة",
        "name_en": "Abar Al Tuwairqiyyah",
        "center": [
            23.5208,
            41.34365
        ]
    },
    {
        "city_id": 9936,
        "region_id": 3,
        "name_ar": "الروزه",
        "name_en": "Al Roozah",
        "center": [
            23.31146667,
            40.25726667
        ]
    },
    {
        "city_id": 10064,
        "region_id": 3,
        "name_ar": "السريحية",
        "name_en": "Al Suraihiyah",
        "center": [
            23.89023333,
            42.05705
        ]
    },
    {
        "city_id": 10351,
        "region_id": 3,
        "name_ar": "رحبة الحسنى",
        "name_en": "Rahbat Al Husna",
        "center": [
            25.59026667,
            39.43083333
        ]
    },
    {
        "city_id": 10364,
        "region_id": 3,
        "name_ar": "الرفيعة",
        "name_en": "Ar Rafi'ah",
        "center": [
            26.14425,
            39.4324
        ]
    },
    {
        "city_id": 10366,
        "region_id": 3,
        "name_ar": "المجرذية",
        "name_en": "Al Majradiyah",
        "center": [
            26.03256667,
            39.44471667
        ]
    },
    {
        "city_id": 10367,
        "region_id": 3,
        "name_ar": "ضويل",
        "name_en": "Duwail",
        "center": [
            26.05846667,
            39.42481667
        ]
    },
    {
        "city_id": 10437,
        "region_id": 3,
        "name_ar": "صبحا الجحفه",
        "name_en": "Sabha Al Jahfah",
        "center": [
            25.2106,
            40.85438333
        ]
    },
    {
        "city_id": 10444,
        "region_id": 3,
        "name_ar": "بدائع الحناحنه",
        "name_en": "Badai' Al Hanahanah",
        "center": [
            25.12726667,
            41.21105
        ]
    },
    {
        "city_id": 10445,
        "region_id": 3,
        "name_ar": "بدائع العوض",
        "name_en": "Badai' Al Awd",
        "center": [
            25.09423333,
            41.18046667
        ]
    },
    {
        "city_id": 10456,
        "region_id": 3,
        "name_ar": "بطحى",
        "name_en": "Batha",
        "center": [
            25.02386667,
            41.91403333
        ]
    },
    {
        "city_id": 10475,
        "region_id": 3,
        "name_ar": "ملح",
        "name_en": "Malah",
        "center": [
            23.49687848,
            39.89678335
        ]
    },
    {
        "city_id": 10706,
        "region_id": 4,
        "name_ar": "الجديدات",
        "name_en": "Al Jadidat",
        "center": [
            26.19195,
            43.79113333
        ]
    },
    {
        "city_id": 10723,
        "region_id": 4,
        "name_ar": "مبهل",
        "name_en": "Mabhal",
        "center": [
            25.22011667,
            43.0829
        ]
    },
    {
        "city_id": 10724,
        "region_id": 4,
        "name_ar": "الحجره",
        "name_en": "Al Hiijrah",
        "center": [
            25.43098333,
            43.27573333
        ]
    },
    {
        "city_id": 10742,
        "region_id": 4,
        "name_ar": "العرداء",
        "name_en": "Al Ardaa",
        "center": [
            25.73616667,
            43.30518333
        ]
    },
    {
        "city_id": 10772,
        "region_id": 4,
        "name_ar": "حريفيات درعه",
        "name_en": "Harifiyat Dareih",
        "center": [
            25.33265,
            43.55685
        ]
    },
    {
        "city_id": 10784,
        "region_id": 4,
        "name_ar": "المكيلي",
        "name_en": "Al Makili",
        "center": [
            25.87201667,
            44.07821667
        ]
    },
    {
        "city_id": 10808,
        "region_id": 4,
        "name_ar": "الاحمدية",
        "name_en": "Al Ahmadiyyah",
        "center": [
            25.76263333,
            43.78853333
        ]
    },
    {
        "city_id": 10809,
        "region_id": 4,
        "name_ar": "عين ابن فهيد",
        "name_en": "'Ayn  Ibn Fuhayd",
        "center": [
            26.7761,
            44.21718333
        ]
    },
    {
        "city_id": 10824,
        "region_id": 4,
        "name_ar": "تلعة رشيد",
        "name_en": "Tal'ah Rashid",
        "center": [
            25.51088333,
            42.82313333
        ]
    },
    {
        "city_id": 10826,
        "region_id": 4,
        "name_ar": "كفت",
        "name_en": "Kofat",
        "center": [
            25.41413333,
            42.9167
        ]
    },
    {
        "city_id": 10827,
        "region_id": 4,
        "name_ar": "النويصفة",
        "name_en": "Al Nuwaisifah",
        "center": [
            25.42135,
            42.8814
        ]
    },
    {
        "city_id": 10828,
        "region_id": 4,
        "name_ar": "الصحاف",
        "name_en": "As Sahaf",
        "center": [
            25.43611667,
            42.87005
        ]
    },
    {
        "city_id": 10829,
        "region_id": 4,
        "name_ar": "مشرفة عمودان",
        "name_en": "Mushrifah Amudan",
        "center": [
            25.408,
            42.91926667
        ]
    },
    {
        "city_id": 10831,
        "region_id": 4,
        "name_ar": "الاخيضر",
        "name_en": "Al Ukhaydir",
        "center": [
            25.52623333,
            42.88128333
        ]
    },
    {
        "city_id": 10832,
        "region_id": 4,
        "name_ar": "فيضة السلمات",
        "name_en": "Faydat Al Salmat",
        "center": [
            25.58458333,
            42.81866667
        ]
    },
    {
        "city_id": 10833,
        "region_id": 4,
        "name_ar": "الخريشاء",
        "name_en": "Al Khuraysha",
        "center": [
            25.58505,
            42.827
        ]
    },
    {
        "city_id": 10835,
        "region_id": 4,
        "name_ar": "العازمية",
        "name_en": "Al 'Azimiyah",
        "center": [
            25.59063333,
            42.75908333
        ]
    },
    {
        "city_id": 10842,
        "region_id": 4,
        "name_ar": "ابو قليبات",
        "name_en": "Abu Qaleebat",
        "center": [
            25.52233333,
            42.67198333
        ]
    },
    {
        "city_id": 10843,
        "region_id": 4,
        "name_ar": "الجحفة",
        "name_en": "Al Juhfah",
        "center": [
            25.42911667,
            42.81008333
        ]
    },
    {
        "city_id": 10845,
        "region_id": 4,
        "name_ar": "قراضية",
        "name_en": "Qaradiyyah",
        "center": [
            25.42363333,
            42.77806667
        ]
    },
    {
        "city_id": 10849,
        "region_id": 4,
        "name_ar": "الخنقة",
        "name_en": "Al Khanqah",
        "center": [
            25.31005,
            42.72455
        ]
    },
    {
        "city_id": 10850,
        "region_id": 4,
        "name_ar": "ضمينة",
        "name_en": "Daminah",
        "center": [
            25.312,
            42.73158333
        ]
    },
    {
        "city_id": 10852,
        "region_id": 4,
        "name_ar": "الديرية",
        "name_en": "Ad Dirirah",
        "center": [
            25.25741667,
            42.8366
        ]
    },
    {
        "city_id": 10853,
        "region_id": 4,
        "name_ar": "ملحة",
        "name_en": "Malhah",
        "center": [
            25.30436667,
            42.88345
        ]
    },
    {
        "city_id": 10867,
        "region_id": 4,
        "name_ar": "اباالحياص",
        "name_en": "Aba Al Hayas",
        "center": [
            25.5245,
            42.8319
        ]
    },
    {
        "city_id": 10868,
        "region_id": 4,
        "name_ar": "ابو طرفاء",
        "name_en": "Abu Tarfa",
        "center": [
            25.514,
            42.85358333
        ]
    },
    {
        "city_id": 10870,
        "region_id": 4,
        "name_ar": "اللغفية",
        "name_en": "Al Laghfiyyah",
        "center": [
            25.52188333,
            42.55868333
        ]
    },
    {
        "city_id": 10872,
        "region_id": 4,
        "name_ar": "المرموثة",
        "name_en": "Al Marmuthah",
        "center": [
            25.55005,
            42.83408333
        ]
    },
    {
        "city_id": 10873,
        "region_id": 4,
        "name_ar": "المرموثة الشمالية",
        "name_en": "Al Marmuthah Ash Shamaliyah",
        "center": [
            25.56565,
            42.82938333
        ]
    },
    {
        "city_id": 10879,
        "region_id": 4,
        "name_ar": "مازونة",
        "name_en": "Mazunah",
        "center": [
            25.32306667,
            42.63368333
        ]
    },
    {
        "city_id": 10880,
        "region_id": 4,
        "name_ar": "الصلبيه",
        "name_en": "Al Salbiyah",
        "center": [
            26.84703333,
            43.0061
        ]
    },
    {
        "city_id": 10889,
        "region_id": 4,
        "name_ar": "الكدادية",
        "name_en": "Al Kadadiyah",
        "center": [
            27.28337447,
            43.33625752
        ]
    },
    {
        "city_id": 10908,
        "region_id": 4,
        "name_ar": "ابو حمادة",
        "name_en": "Abu Hamadah",
        "center": [
            25.94123333,
            42.01711667
        ]
    },
    {
        "city_id": 10917,
        "region_id": 4,
        "name_ar": "شقران الحاجر",
        "name_en": "Ash Shuqran Al Hajr",
        "center": [
            25.95126667,
            41.9533
        ]
    },
    {
        "city_id": 10919,
        "region_id": 4,
        "name_ar": "الرمثية",
        "name_en": "Al Ramthiyyah",
        "center": [
            24.73838333,
            42.95748333
        ]
    },
    {
        "city_id": 10934,
        "region_id": 4,
        "name_ar": "ام سلم",
        "name_en": "Umm Salam",
        "center": [
            24.98295,
            42.72968333
        ]
    },
    {
        "city_id": 10939,
        "region_id": 4,
        "name_ar": "الفايزية",
        "name_en": "Al Fayziyah",
        "center": [
            24.81556667,
            43.12981667
        ]
    },
    {
        "city_id": 10953,
        "region_id": 4,
        "name_ar": "فيضة الريشية",
        "name_en": "Faydat Al Resheyah",
        "center": [
            25.05105,
            42.38533333
        ]
    },
    {
        "city_id": 11040,
        "region_id": 5,
        "name_ar": "هجرة فضيلة",
        "name_en": "Hijrat Fudailah",
        "center": [
            24.53753333,
            49.33323333
        ]
    },
    {
        "city_id": 11046,
        "region_id": 5,
        "name_ar": "السالمية",
        "name_en": "As Salmiyah",
        "center": [
            24.35393333,
            49.40768333
        ]
    },
    {
        "city_id": 11050,
        "region_id": 5,
        "name_ar": "مدينة الملك خالد العسكرية",
        "name_en": "King Khalid Military City",
        "center": [
            27.96691667,
            45.54083333
        ]
    },
    {
        "city_id": 11051,
        "region_id": 5,
        "name_ar": "ابو طوطاحه البرازي",
        "name_en": "Abu Tutahah Al Barazi",
        "center": [
            28.8081,
            45.12181667
        ]
    },
    {
        "city_id": 11054,
        "region_id": 5,
        "name_ar": "الرقعى",
        "name_en": "Ar Ruq'i",
        "center": [
            29.08103333,
            46.63641667
        ]
    },
    {
        "city_id": 11055,
        "region_id": 5,
        "name_ar": "الذيبية",
        "name_en": "Adh Dhibiyah",
        "center": [
            28.12041667,
            45.67143333
        ]
    },
    {
        "city_id": 11061,
        "region_id": 5,
        "name_ar": "معرج السوبان",
        "name_en": "Ma’raj Al Suban",
        "center": [
            27.97583333,
            47.02276667
        ]
    },
    {
        "city_id": 11062,
        "region_id": 5,
        "name_ar": "خبيراء",
        "name_en": "Khubaira",
        "center": [
            27.80536667,
            47.1997
        ]
    },
    {
        "city_id": 11075,
        "region_id": 5,
        "name_ar": "ام الحمام",
        "name_en": "Umm Al Hamam",
        "center": [
            26.52359297,
            49.99823735
        ]
    },
    {
        "city_id": 11090,
        "region_id": 5,
        "name_ar": "تناقيب",
        "name_en": "Tanajib",
        "center": [
            27.87366667,
            48.77811667
        ]
    },
    {
        "city_id": 11094,
        "region_id": 5,
        "name_ar": "غزلان",
        "name_en": "Ghazlan",
        "center": [
            26.85058333,
            49.89998333
        ]
    },
    {
        "city_id": 11099,
        "region_id": 5,
        "name_ar": "الثمامة",
        "name_en": "Al Thumamah",
        "center": [
            25.97308333,
            49.55535
        ]
    },
    {
        "city_id": 11113,
        "region_id": 5,
        "name_ar": "الجوية",
        "name_en": "Al Jawiyah",
        "center": [
            25.83166667,
            49.57576667
        ]
    },
    {
        "city_id": 11123,
        "region_id": 5,
        "name_ar": "دميغ",
        "name_en": "Damigh",
        "center": [
            25.97956667,
            49.44031667
        ]
    },
    {
        "city_id": 11124,
        "region_id": 5,
        "name_ar": "الراجحة",
        "name_en": "Al Rajihah",
        "center": [
            25.8958,
            49.57148333
        ]
    },
    {
        "city_id": 11127,
        "region_id": 5,
        "name_ar": "الفردانية",
        "name_en": "Al Fardaniyah",
        "center": [
            26.06963333,
            49.29045
        ]
    },
    {
        "city_id": 11128,
        "region_id": 5,
        "name_ar": "خور الذيابة",
        "name_en": "Khawr Al Dhiyabah",
        "center": [
            26.0296,
            49.45888333
        ]
    },
    {
        "city_id": 11129,
        "region_id": 5,
        "name_ar": "الجيشية",
        "name_en": "Al Jaishiyah",
        "center": [
            26.01301667,
            49.14023333
        ]
    },
    {
        "city_id": 11130,
        "region_id": 5,
        "name_ar": "انقير",
        "name_en": "Annaqeer",
        "center": [
            27.80993333,
            48.3451
        ]
    },
    {
        "city_id": 11151,
        "region_id": 5,
        "name_ar": "مليحة",
        "name_en": "Mulayhah",
        "center": [
            27.13946667,
            48.50163333
        ]
    },
    {
        "city_id": 11192,
        "region_id": 6,
        "name_ar": "المسارة",
        "name_en": "Al Masarah",
        "center": [
            18.26655,
            42.43031667
        ]
    },
    {
        "city_id": 11193,
        "region_id": 6,
        "name_ar": "البادي",
        "name_en": "Al Badi",
        "center": [
            18.26996667,
            42.44161667
        ]
    },
    {
        "city_id": 11194,
        "region_id": 6,
        "name_ar": "السحراء",
        "name_en": "Al Sahraa",
        "center": [
            18.25241667,
            42.44398333
        ]
    },
    {
        "city_id": 11198,
        "region_id": 6,
        "name_ar": "عين بن مصافح",
        "name_en": "'Ayn  Bin Musafih",
        "center": [
            18.31536856,
            42.48936335
        ]
    },
    {
        "city_id": 11215,
        "region_id": 6,
        "name_ar": "خيمة",
        "name_en": "Khaymah",
        "center": [
            18.16991667,
            42.47431667
        ]
    },
    {
        "city_id": 11222,
        "region_id": 6,
        "name_ar": "سر آل سرحي",
        "name_en": "Sir Al Sirhi",
        "center": [
            18.17771667,
            42.4713
        ]
    },
    {
        "city_id": 11223,
        "region_id": 6,
        "name_ar": "الشبارقة",
        "name_en": "Al Shabariqah",
        "center": [
            18.2333,
            42.43916667
        ]
    },
    {
        "city_id": 11224,
        "region_id": 6,
        "name_ar": "ال مجثل",
        "name_en": "Al Mijthil",
        "center": [
            18.23395,
            42.44313333
        ]
    },
    {
        "city_id": 11225,
        "region_id": 6,
        "name_ar": "سر الشبارقة",
        "name_en": "Sir Al Shabariqah",
        "center": [
            18.2374,
            42.43756667
        ]
    },
    {
        "city_id": 11227,
        "region_id": 6,
        "name_ar": "آل العلاء ولجوة وسر البدلة",
        "name_en": "Al Al Aalaa & Lajwah & Sir Al Badlah",
        "center": [
            18.24841667,
            42.43125
        ]
    },
    {
        "city_id": 11228,
        "region_id": 6,
        "name_ar": "ال يزيديين",
        "name_en": "Al Yazidiyyin",
        "center": [
            18.24898333,
            42.43565
        ]
    },
    {
        "city_id": 11229,
        "region_id": 6,
        "name_ar": "المخض",
        "name_en": "Al Makhad",
        "center": [
            18.19225,
            42.44516667
        ]
    },
    {
        "city_id": 11231,
        "region_id": 6,
        "name_ar": "الملحاء",
        "name_en": "Al Malhaa",
        "center": [
            18.18688333,
            42.44966667
        ]
    },
    {
        "city_id": 11232,
        "region_id": 6,
        "name_ar": "الملصة",
        "name_en": "Al Malasah",
        "center": [
            18.18311667,
            42.46026667
        ]
    },
    {
        "city_id": 11238,
        "region_id": 6,
        "name_ar": "العرق (طرف العرق)",
        "name_en": "Al Irq (Taraf Al Irq)",
        "center": [
            18.1811,
            42.45703333
        ]
    },
    {
        "city_id": 11239,
        "region_id": 6,
        "name_ar": "الأقواز",
        "name_en": "Al Aqwaz",
        "center": [
            18.17163333,
            42.4532
        ]
    },
    {
        "city_id": 11240,
        "region_id": 6,
        "name_ar": "الباطنة",
        "name_en": "Al Batinah",
        "center": [
            18.1753,
            42.44646667
        ]
    },
    {
        "city_id": 11241,
        "region_id": 6,
        "name_ar": "آل أم سعيد",
        "name_en": "Al Umm Said",
        "center": [
            18.18488333,
            42.44266667
        ]
    },
    {
        "city_id": 11295,
        "region_id": 6,
        "name_ar": "شرف العوص",
        "name_en": "Sharaf Al Aws",
        "center": [
            18.31223333,
            42.33298333
        ]
    },
    {
        "city_id": 11296,
        "region_id": 6,
        "name_ar": "المشرق وحربة والمعجز",
        "name_en": "Al Mashriq & Harbah & Al Majiz",
        "center": [
            18.26158333,
            42.39073333
        ]
    },
    {
        "city_id": 11297,
        "region_id": 6,
        "name_ar": "عين الجوفاء",
        "name_en": "Ayn Al Jawfaa",
        "center": [
            18.27258333,
            42.3791
        ]
    },
    {
        "city_id": 11298,
        "region_id": 6,
        "name_ar": "محصان والداخلة",
        "name_en": "Mahsan & Al Dakhilah",
        "center": [
            18.26195,
            42.39681667
        ]
    },
    {
        "city_id": 11300,
        "region_id": 6,
        "name_ar": "راس السر والجامة",
        "name_en": "Ras Al Sir & Al Jamah",
        "center": [
            18.25868333,
            42.39215
        ]
    },
    {
        "city_id": 11301,
        "region_id": 6,
        "name_ar": "السوق وبارك الجهارية",
        "name_en": "Al Suq & Barik Al Jahariyyah",
        "center": [
            18.24535,
            42.39845
        ]
    },
    {
        "city_id": 11302,
        "region_id": 6,
        "name_ar": "الروح والصعيد",
        "name_en": "Al Ruh & Al Said",
        "center": [
            18.24268333,
            42.39243333
        ]
    },
    {
        "city_id": 11304,
        "region_id": 6,
        "name_ar": "مقهب السقا",
        "name_en": "Maqhab Al Saqa",
        "center": [
            18.23691667,
            42.39893333
        ]
    },
    {
        "city_id": 11305,
        "region_id": 6,
        "name_ar": "السقا",
        "name_en": "Al Saqa",
        "center": [
            18.2325,
            42.40541667
        ]
    },
    {
        "city_id": 11308,
        "region_id": 6,
        "name_ar": "المسراب والفرع",
        "name_en": "Al Misrab & Al Fara",
        "center": [
            18.22688333,
            42.40508333
        ]
    },
    {
        "city_id": 11309,
        "region_id": 6,
        "name_ar": "قعوه السقا",
        "name_en": "Qawah Al Saqqa",
        "center": [
            18.22961667,
            42.40293333
        ]
    },
    {
        "city_id": 11310,
        "region_id": 6,
        "name_ar": "شط الخضراء",
        "name_en": "Shat Al Khadraa",
        "center": [
            18.23201667,
            42.409
        ]
    },
    {
        "city_id": 11311,
        "region_id": 6,
        "name_ar": "الحبوة",
        "name_en": "Al Habwah",
        "center": [
            18.21843333,
            42.40388333
        ]
    },
    {
        "city_id": 11312,
        "region_id": 6,
        "name_ar": "المقضي وآل اسماعيل",
        "name_en": "Al Maqdi & Al Ismail",
        "center": [
            18.23431667,
            42.4149
        ]
    },
    {
        "city_id": 11314,
        "region_id": 6,
        "name_ar": "قرية شيخة السياحية",
        "name_en": "Qaryat Shaikhah Al Siyahiyyah",
        "center": [
            18.23478333,
            42.42261667
        ]
    },
    {
        "city_id": 11315,
        "region_id": 6,
        "name_ar": "سر البدلة والحبوة",
        "name_en": "Siar Al Badlah & Al Habwah",
        "center": [
            18.23691667,
            42.41703333
        ]
    },
    {
        "city_id": 11318,
        "region_id": 6,
        "name_ar": "الشط الاعلى والاسفل",
        "name_en": "Al Shat Al Aala & Al Asfal",
        "center": [
            18.28708333,
            42.40945
        ]
    },
    {
        "city_id": 11320,
        "region_id": 6,
        "name_ar": "ال مرزن",
        "name_en": "Al Marzan",
        "center": [
            18.21215,
            42.43813333
        ]
    },
    {
        "city_id": 11321,
        "region_id": 6,
        "name_ar": "الحوزة والخارجة",
        "name_en": "Al Hawzah & Al Kharijah",
        "center": [
            18.21938333,
            42.43073333
        ]
    },
    {
        "city_id": 11322,
        "region_id": 6,
        "name_ar": "الضحية (العزيزة)",
        "name_en": "Al Dahiyyah (Al Azizah)",
        "center": [
            18.22086667,
            42.42796667
        ]
    },
    {
        "city_id": 11323,
        "region_id": 6,
        "name_ar": "المقافي",
        "name_en": "Al Maqafi",
        "center": [
            18.22651667,
            42.43295
        ]
    },
    {
        "city_id": 11324,
        "region_id": 6,
        "name_ar": "القدة ( ال تمام)",
        "name_en": "Al Qaddah (Al Tamam)",
        "center": [
            18.2147,
            42.40808333
        ]
    },
    {
        "city_id": 11326,
        "region_id": 6,
        "name_ar": "قدة ال امشيبة",
        "name_en": "Qaddat Al Amshiyah",
        "center": [
            18.211,
            42.42466667
        ]
    },
    {
        "city_id": 11327,
        "region_id": 6,
        "name_ar": "قدة ال ابو فايدة",
        "name_en": "Qaddat Al Abu Faydah",
        "center": [
            18.2105,
            42.41326667
        ]
    },
    {
        "city_id": 11330,
        "region_id": 6,
        "name_ar": "ال سكران",
        "name_en": "Al Sakran",
        "center": [
            18.19065,
            42.4281
        ]
    },
    {
        "city_id": 11331,
        "region_id": 6,
        "name_ar": "راس الفية",
        "name_en": "Ras Al Fiyyah",
        "center": [
            18.19191667,
            42.43058333
        ]
    },
    {
        "city_id": 11332,
        "region_id": 6,
        "name_ar": "ذنب السر",
        "name_en": "Dhanab Al Sar",
        "center": [
            18.1824,
            42.42745
        ]
    },
    {
        "city_id": 11333,
        "region_id": 6,
        "name_ar": "ال يتيم",
        "name_en": "Al Yatim",
        "center": [
            18.19018333,
            42.44005
        ]
    },
    {
        "city_id": 11334,
        "region_id": 6,
        "name_ar": "ذنب القائمة",
        "name_en": "Dhanab Al Qaimah",
        "center": [
            18.17926667,
            42.42795
        ]
    },
    {
        "city_id": 11335,
        "region_id": 6,
        "name_ar": "راعية البيبان",
        "name_en": "Rayat Al Boban",
        "center": [
            18.17233333,
            42.42488333
        ]
    },
    {
        "city_id": 11336,
        "region_id": 6,
        "name_ar": "المجاز",
        "name_en": "Al Majaz",
        "center": [
            18.1811,
            42.42815
        ]
    },
    {
        "city_id": 11337,
        "region_id": 6,
        "name_ar": "رهمه المهلل",
        "name_en": "Rahmah Al Muhalhal",
        "center": [
            18.16273333,
            42.431
        ]
    },
    {
        "city_id": 11338,
        "region_id": 6,
        "name_ar": "النغره والمرازه",
        "name_en": "Al Naghrah & Al Marzah",
        "center": [
            18.16693333,
            42.42666667
        ]
    },
    {
        "city_id": 11339,
        "region_id": 6,
        "name_ar": "البوخه",
        "name_en": "Al Bukhah",
        "center": [
            18.17701667,
            42.42341667
        ]
    },
    {
        "city_id": 11340,
        "region_id": 6,
        "name_ar": "قعوة ال فرحان والعثراء",
        "name_en": "Qaawat Al Farhan & Al Athraa",
        "center": [
            18.18201667,
            42.416
        ]
    },
    {
        "city_id": 11341,
        "region_id": 6,
        "name_ar": "سر آل عبيد والسقايف",
        "name_en": "Sar Al Ubaid & Al Saqayif",
        "center": [
            18.18335,
            42.41586667
        ]
    },
    {
        "city_id": 11342,
        "region_id": 6,
        "name_ar": "الشارقة",
        "name_en": "Al Shariqah",
        "center": [
            18.18918333,
            42.41535
        ]
    },
    {
        "city_id": 11343,
        "region_id": 6,
        "name_ar": "آل محرق",
        "name_en": "Al Mahraq",
        "center": [
            18.18886667,
            42.41571667
        ]
    },
    {
        "city_id": 11344,
        "region_id": 6,
        "name_ar": "جال ال عامر",
        "name_en": "Jal Al Amir",
        "center": [
            18.19633333,
            42.41696667
        ]
    },
    {
        "city_id": 11345,
        "region_id": 6,
        "name_ar": "ال امحاج",
        "name_en": "Al Imhaj",
        "center": [
            18.17368333,
            42.44261667
        ]
    },
    {
        "city_id": 11346,
        "region_id": 6,
        "name_ar": "ال القبيعي",
        "name_en": "Al Al Qabyai",
        "center": [
            18.18591667,
            42.41813333
        ]
    },
    {
        "city_id": 11347,
        "region_id": 6,
        "name_ar": "حقبهة ريدة",
        "name_en": "Haqbat Raidah",
        "center": [
            18.19475,
            42.36891667
        ]
    },
    {
        "city_id": 11348,
        "region_id": 6,
        "name_ar": "جديان",
        "name_en": "Jadyan",
        "center": [
            18.20063333,
            42.36736667
        ]
    },
    {
        "city_id": 11350,
        "region_id": 6,
        "name_ar": "وادي الظهار",
        "name_en": "Wadi Al Dhahar",
        "center": [
            18.21055,
            42.36548333
        ]
    },
    {
        "city_id": 11353,
        "region_id": 6,
        "name_ar": "مسلمة وشط خبيب",
        "name_en": "Maslamah & Shat Khabib",
        "center": [
            18.21651667,
            42.36618333
        ]
    },
    {
        "city_id": 11354,
        "region_id": 6,
        "name_ar": "حبيل ال يسعد",
        "name_en": "Hubail Al Yasad",
        "center": [
            18.22096667,
            42.36566667
        ]
    },
    {
        "city_id": 11355,
        "region_id": 6,
        "name_ar": "عرفة ام رقو",
        "name_en": "Arafah Umm Raqu",
        "center": [
            18.21525,
            42.36495
        ]
    },
    {
        "city_id": 11357,
        "region_id": 6,
        "name_ar": "الفطيحة",
        "name_en": "Al Fatihah",
        "center": [
            18.2218,
            42.36618333
        ]
    },
    {
        "city_id": 11358,
        "region_id": 6,
        "name_ar": "الحدباء",
        "name_en": "Al Hadbaa",
        "center": [
            18.21826667,
            42.36621667
        ]
    },
    {
        "city_id": 11359,
        "region_id": 6,
        "name_ar": "الدوخة",
        "name_en": "Al Dawkhah",
        "center": [
            18.23088333,
            42.36468333
        ]
    },
    {
        "city_id": 11360,
        "region_id": 6,
        "name_ar": "الغمرة",
        "name_en": "Al Ghamrah",
        "center": [
            18.2268,
            42.36606667
        ]
    },
    {
        "city_id": 11361,
        "region_id": 6,
        "name_ar": "الخلفاء",
        "name_en": "Al Khalfaa",
        "center": [
            18.22751667,
            42.36636667
        ]
    },
    {
        "city_id": 11362,
        "region_id": 6,
        "name_ar": "الحاجرة",
        "name_en": "Al Hajirah",
        "center": [
            18.23288333,
            42.36506667
        ]
    },
    {
        "city_id": 11363,
        "region_id": 6,
        "name_ar": "ال مجاهر والجامة",
        "name_en": "Al Mujahid & Al Jamah",
        "center": [
            18.23565,
            42.36523333
        ]
    },
    {
        "city_id": 11365,
        "region_id": 6,
        "name_ar": "قورة",
        "name_en": "Qawrah",
        "center": [
            18.23908333,
            42.36413333
        ]
    },
    {
        "city_id": 11366,
        "region_id": 6,
        "name_ar": "موجمة",
        "name_en": "Mawjamah",
        "center": [
            18.22621667,
            42.36651667
        ]
    },
    {
        "city_id": 11367,
        "region_id": 6,
        "name_ar": "ليتوي",
        "name_en": "Litwi",
        "center": [
            18.17095,
            42.3975
        ]
    },
    {
        "city_id": 11368,
        "region_id": 6,
        "name_ar": "وادي حبو والطرقة",
        "name_en": "Wadi Habu & Al Tarafah",
        "center": [
            18.1645,
            42.40368333
        ]
    },
    {
        "city_id": 11369,
        "region_id": 6,
        "name_ar": "المحرث",
        "name_en": "Al Mahrath",
        "center": [
            18.1395,
            42.41006667
        ]
    },
    {
        "city_id": 11370,
        "region_id": 6,
        "name_ar": "محورو",
        "name_en": "Am Huru",
        "center": [
            18.1413,
            42.42005
        ]
    },
    {
        "city_id": 11372,
        "region_id": 6,
        "name_ar": "الرايه وذنب الراية",
        "name_en": "Al Rayah & Dhanab Al Rayah",
        "center": [
            18.14348333,
            42.37491667
        ]
    },
    {
        "city_id": 11373,
        "region_id": 6,
        "name_ar": "مسقام والنوابي",
        "name_en": "Masqam & Al Nawabi",
        "center": [
            18.1498,
            42.37423333
        ]
    },
    {
        "city_id": 11374,
        "region_id": 6,
        "name_ar": "الغمدة",
        "name_en": "Al Ghamdah",
        "center": [
            18.13968333,
            42.37621667
        ]
    },
    {
        "city_id": 11375,
        "region_id": 6,
        "name_ar": "ذنب احمرين والسرب",
        "name_en": "Dhnab Ahmarain & Al Sarb",
        "center": [
            18.13633333,
            42.37675
        ]
    },
    {
        "city_id": 11376,
        "region_id": 6,
        "name_ar": "القضى",
        "name_en": "Al Qada",
        "center": [
            18.12875,
            42.38058333
        ]
    },
    {
        "city_id": 11377,
        "region_id": 6,
        "name_ar": "الحرملة",
        "name_en": "Al Harmalah",
        "center": [
            18.12446667,
            42.38043333
        ]
    },
    {
        "city_id": 11378,
        "region_id": 6,
        "name_ar": "حبيل ال تمام",
        "name_en": "Hubail Al Tamam",
        "center": [
            18.16943333,
            42.38721667
        ]
    },
    {
        "city_id": 11379,
        "region_id": 6,
        "name_ar": "حبيل محزاة ال تمام",
        "name_en": "Hubail Mahzat Al Tamam",
        "center": [
            18.16383333,
            42.37278333
        ]
    },
    {
        "city_id": 11380,
        "region_id": 6,
        "name_ar": "عنقة ال محاج",
        "name_en": "Anqat Al Mahaj",
        "center": [
            18.16655,
            42.37223333
        ]
    },
    {
        "city_id": 11381,
        "region_id": 6,
        "name_ar": "لثبة",
        "name_en": "Lathbah",
        "center": [
            18.17381667,
            42.38501667
        ]
    },
    {
        "city_id": 11389,
        "region_id": 6,
        "name_ar": "الجهايف (آل مبرة)",
        "name_en": "Al Jahayif (Al Mabarrah)",
        "center": [
            18.27116667,
            42.42376667
        ]
    },
    {
        "city_id": 11565,
        "region_id": 6,
        "name_ar": "مندرمربة",
        "name_en": "Mandir Marabah",
        "center": [
            17.89553333,
            42.3863
        ]
    },
    {
        "city_id": 11641,
        "region_id": 6,
        "name_ar": "مصاولي",
        "name_en": "Masawly",
        "center": [
            18.33156667,
            42.32986667
        ]
    },
    {
        "city_id": 11645,
        "region_id": 6,
        "name_ar": "تيهان",
        "name_en": "Tihan",
        "center": [
            18.32478333,
            42.32848333
        ]
    },
    {
        "city_id": 11899,
        "region_id": 6,
        "name_ar": "صدر وائلة (المجمع)",
        "name_en": "Sadr Wailah (Al Majma)",
        "center": [
            17.87678333,
            42.57181667
        ]
    },
    {
        "city_id": 11900,
        "region_id": 6,
        "name_ar": "رثمة وائلة",
        "name_en": "Rathmat Wailah",
        "center": [
            17.87681667,
            42.57376667
        ]
    },
    {
        "city_id": 12005,
        "region_id": 6,
        "name_ar": "روضة بن نورة",
        "name_en": "Rawdat Bin Nourah",
        "center": [
            18.43526667,
            43.38481667
        ]
    },
    {
        "city_id": 12199,
        "region_id": 6,
        "name_ar": "مخطط ال شبوه",
        "name_en": "Al Shabwah Subdivision",
        "center": [
            20.20378333,
            42.73575
        ]
    },
    {
        "city_id": 12351,
        "region_id": 6,
        "name_ar": "الشقيريه",
        "name_en": "Al Shuqayriyah",
        "center": [
            20.37321667,
            42.12215
        ]
    },
    {
        "city_id": 12700,
        "region_id": 6,
        "name_ar": "آل الشيخين وآل جرار",
        "name_en": "Al Al Shaikhain & Al Jarar",
        "center": [
            19.38233333,
            42.04851667
        ]
    },
    {
        "city_id": 12701,
        "region_id": 6,
        "name_ar": "نمران",
        "name_en": "Namran",
        "center": [
            19.388,
            42.03836667
        ]
    },
    {
        "city_id": 12702,
        "region_id": 6,
        "name_ar": "ال الصناع",
        "name_en": "Al Al Sunnaa",
        "center": [
            19.401,
            42.02436667
        ]
    },
    {
        "city_id": 12703,
        "region_id": 6,
        "name_ar": "الرسلية",
        "name_en": "Al Rasilah",
        "center": [
            19.39373333,
            42.03735
        ]
    },
    {
        "city_id": 12704,
        "region_id": 6,
        "name_ar": "ال غزالة",
        "name_en": "Al Ghazalah",
        "center": [
            19.40273333,
            42.02203333
        ]
    },
    {
        "city_id": 12705,
        "region_id": 6,
        "name_ar": "ال شيبان",
        "name_en": "Al Shiban",
        "center": [
            19.3981,
            42.02533333
        ]
    },
    {
        "city_id": 12706,
        "region_id": 6,
        "name_ar": "فارعة",
        "name_en": "Farah",
        "center": [
            19.40203333,
            42.02573333
        ]
    },
    {
        "city_id": 12707,
        "region_id": 6,
        "name_ar": "مشنية وال بسام",
        "name_en": "Mashniyyah & Al Bassam",
        "center": [
            19.38986667,
            42.02028333
        ]
    },
    {
        "city_id": 12708,
        "region_id": 6,
        "name_ar": "ال السحيم",
        "name_en": "Al Al Sahim",
        "center": [
            19.38785,
            42.01748333
        ]
    },
    {
        "city_id": 12709,
        "region_id": 6,
        "name_ar": "الجعادبة",
        "name_en": "Al Jaadibah",
        "center": [
            19.39993333,
            42.01401667
        ]
    },
    {
        "city_id": 12711,
        "region_id": 6,
        "name_ar": "الصفح الاجرد",
        "name_en": "Al Safh Al Ajrad",
        "center": [
            19.38704787,
            41.9822476
        ]
    },
    {
        "city_id": 12713,
        "region_id": 6,
        "name_ar": "القريضة",
        "name_en": "Al Quraydah",
        "center": [
            19.37072885,
            41.99204911
        ]
    },
    {
        "city_id": 12715,
        "region_id": 6,
        "name_ar": "النقبة",
        "name_en": "Al Naqbah",
        "center": [
            19.37117768,
            41.9885034
        ]
    },
    {
        "city_id": 12716,
        "region_id": 6,
        "name_ar": "الطوف",
        "name_en": "Al Tawf",
        "center": [
            19.35201667,
            42.0382
        ]
    },
    {
        "city_id": 12717,
        "region_id": 6,
        "name_ar": "ال طلحة",
        "name_en": "Al Talhah",
        "center": [
            19.37326667,
            42.04215
        ]
    },
    {
        "city_id": 12718,
        "region_id": 6,
        "name_ar": "ال سملة",
        "name_en": "Al Samalah",
        "center": [
            19.3683,
            42.04841667
        ]
    },
    {
        "city_id": 12719,
        "region_id": 6,
        "name_ar": "ال مفرج",
        "name_en": "Al Mufrih",
        "center": [
            19.36295,
            42.0456
        ]
    },
    {
        "city_id": 12720,
        "region_id": 6,
        "name_ar": "ال روضان",
        "name_en": "Al Rawdan",
        "center": [
            19.37608333,
            42.05008333
        ]
    },
    {
        "city_id": 12721,
        "region_id": 6,
        "name_ar": "ذات العلب",
        "name_en": "Dhat Al Ulab",
        "center": [
            19.374,
            42.05385
        ]
    },
    {
        "city_id": 12722,
        "region_id": 6,
        "name_ar": "ال غثران والخيشة",
        "name_en": "Al Ghathran & Al Al Khishah",
        "center": [
            19.36005,
            42.05946667
        ]
    },
    {
        "city_id": 12723,
        "region_id": 6,
        "name_ar": "الرزة",
        "name_en": "Al Razzah",
        "center": [
            19.38188333,
            42.05161667
        ]
    },
    {
        "city_id": 12724,
        "region_id": 6,
        "name_ar": "حبقة",
        "name_en": "Habqah",
        "center": [
            19.38513333,
            42.05633333
        ]
    },
    {
        "city_id": 12725,
        "region_id": 6,
        "name_ar": "الشعبة والمندي والمنزل (ال حسيكة)",
        "name_en": "Al Shuabah & Al Mandi & Al Manzil (Al Husaykah)",
        "center": [
            19.35478333,
            42.04038333
        ]
    },
    {
        "city_id": 12726,
        "region_id": 6,
        "name_ar": "ال حطام",
        "name_en": "Al Hatam",
        "center": [
            19.35693333,
            42.04103333
        ]
    },
    {
        "city_id": 12728,
        "region_id": 6,
        "name_ar": "ال الشاعر",
        "name_en": "Al Al Shair",
        "center": [
            19.33298333,
            42.0437
        ]
    },
    {
        "city_id": 12729,
        "region_id": 6,
        "name_ar": "ال لهيفة",
        "name_en": "Al Lahifah",
        "center": [
            19.33841667,
            42.03958333
        ]
    },
    {
        "city_id": 12730,
        "region_id": 6,
        "name_ar": "ال عطيفة",
        "name_en": "Al Atifah",
        "center": [
            19.32485,
            42.04765
        ]
    },
    {
        "city_id": 12731,
        "region_id": 6,
        "name_ar": "ال محفوظ",
        "name_en": "Al Mahfudh",
        "center": [
            19.33005,
            42.03881667
        ]
    },
    {
        "city_id": 12732,
        "region_id": 6,
        "name_ar": "ال الاصفاء",
        "name_en": "Al Al Asfaa",
        "center": [
            19.34301667,
            42.06535
        ]
    },
    {
        "city_id": 12733,
        "region_id": 6,
        "name_ar": "ال جعيد",
        "name_en": "Al Juaiddah",
        "center": [
            19.33395,
            42.07631667
        ]
    },
    {
        "city_id": 12734,
        "region_id": 6,
        "name_ar": "ساقين",
        "name_en": "Saqain",
        "center": [
            19.32496667,
            41.99733333
        ]
    },
    {
        "city_id": 12738,
        "region_id": 6,
        "name_ar": "رهو المركب",
        "name_en": "Rahu Al Markib",
        "center": [
            19.34259559,
            42.03357925
        ]
    },
    {
        "city_id": 12739,
        "region_id": 6,
        "name_ar": "المربعة",
        "name_en": "Al Marbaah",
        "center": [
            19.36212819,
            42.02725704
        ]
    },
    {
        "city_id": 12740,
        "region_id": 6,
        "name_ar": "المروة",
        "name_en": "Al Marwah",
        "center": [
            19.33441667,
            42.01536667
        ]
    },
    {
        "city_id": 12741,
        "region_id": 6,
        "name_ar": "رهو الخرق",
        "name_en": "Rahu Al Kharq",
        "center": [
            19.3337,
            42.02163333
        ]
    },
    {
        "city_id": 12743,
        "region_id": 6,
        "name_ar": "المنقلع",
        "name_en": "Al Munqala",
        "center": [
            19.3291,
            42.00455
        ]
    },
    {
        "city_id": 12744,
        "region_id": 6,
        "name_ar": "خارف",
        "name_en": "Kharif",
        "center": [
            19.38724922,
            42.01080771
        ]
    },
    {
        "city_id": 12747,
        "region_id": 6,
        "name_ar": "الحينة",
        "name_en": "Al Hinah",
        "center": [
            19.33796196,
            41.99670953
        ]
    },
    {
        "city_id": 12748,
        "region_id": 6,
        "name_ar": "الاثبات",
        "name_en": "Al Athbat",
        "center": [
            19.31764466,
            42.04975388
        ]
    },
    {
        "city_id": 12749,
        "region_id": 6,
        "name_ar": "المليبات",
        "name_en": "Al Malibat",
        "center": [
            19.33911667,
            42.04228333
        ]
    },
    {
        "city_id": 12753,
        "region_id": 6,
        "name_ar": "المحظر",
        "name_en": "Al Mahdhar",
        "center": [
            19.35353267,
            41.99195919
        ]
    },
    {
        "city_id": 12755,
        "region_id": 6,
        "name_ar": "الامرح",
        "name_en": "Al Amrah",
        "center": [
            19.35231507,
            41.98816904
        ]
    },
    {
        "city_id": 12756,
        "region_id": 6,
        "name_ar": "ال صره",
        "name_en": "Al Surrah",
        "center": [
            19.3522,
            42.05573333
        ]
    },
    {
        "city_id": 12758,
        "region_id": 6,
        "name_ar": "لفت",
        "name_en": "Lafat",
        "center": [
            19.3557,
            42.06341667
        ]
    },
    {
        "city_id": 12759,
        "region_id": 6,
        "name_ar": "ال جاهل ( ال عارف )",
        "name_en": "Al Jahil (Al Arif)",
        "center": [
            19.35003333,
            42.07841667
        ]
    },
    {
        "city_id": 12760,
        "region_id": 6,
        "name_ar": "الجحور",
        "name_en": "Al Juhur",
        "center": [
            19.35713333,
            42.07513333
        ]
    },
    {
        "city_id": 12761,
        "region_id": 6,
        "name_ar": "القرن وال عمار وال شميلة",
        "name_en": "Al Qarn & Al Ammar & Al Shamilah",
        "center": [
            19.35933333,
            42.08395
        ]
    },
    {
        "city_id": 12762,
        "region_id": 6,
        "name_ar": "ذي عتيم",
        "name_en": "Dhi Atim",
        "center": [
            19.36661667,
            42.08276667
        ]
    },
    {
        "city_id": 12763,
        "region_id": 6,
        "name_ar": "ال الطبق",
        "name_en": "Al Al Tabaq",
        "center": [
            19.35091667,
            42.07503333
        ]
    },
    {
        "city_id": 12764,
        "region_id": 6,
        "name_ar": "ال ساحة والنجفة",
        "name_en": "Al Sahah & Al Najfah",
        "center": [
            19.37243333,
            42.06763333
        ]
    },
    {
        "city_id": 12765,
        "region_id": 6,
        "name_ar": "الفرشة",
        "name_en": "Al Farshah",
        "center": [
            19.37975,
            42.08086667
        ]
    },
    {
        "city_id": 12766,
        "region_id": 6,
        "name_ar": "ال حلة (لتيدة)",
        "name_en": "Al Hallah (Al Tidah)",
        "center": [
            19.36316667,
            42.06801667
        ]
    },
    {
        "city_id": 12767,
        "region_id": 6,
        "name_ar": "ال خزيم",
        "name_en": "Al Khuzaym",
        "center": [
            19.40108333,
            42.05881667
        ]
    },
    {
        "city_id": 12768,
        "region_id": 6,
        "name_ar": "وادي العين وال سلطان",
        "name_en": "Wadi Al Ayn & Al Sultan",
        "center": [
            19.38683333,
            42.05858333
        ]
    },
    {
        "city_id": 12769,
        "region_id": 6,
        "name_ar": "ال خريم",
        "name_en": "Al Khuraim",
        "center": [
            19.38521667,
            42.05691667
        ]
    },
    {
        "city_id": 12770,
        "region_id": 6,
        "name_ar": "ال سودان والقرن",
        "name_en": "Al Sudan & Al Qarn",
        "center": [
            19.3795,
            42.05753333
        ]
    },
    {
        "city_id": 12771,
        "region_id": 6,
        "name_ar": "الفرعة",
        "name_en": "Al Faah",
        "center": [
            19.35078333,
            42.0678
        ]
    },
    {
        "city_id": 12772,
        "region_id": 6,
        "name_ar": "حلة الفقير",
        "name_en": "Hallat Al Faqir",
        "center": [
            19.42896667,
            42.09623333
        ]
    },
    {
        "city_id": 12774,
        "region_id": 6,
        "name_ar": "حلة شعبة الجمل",
        "name_en": "Hallat Shuabat Al Jamal",
        "center": [
            19.39002323,
            42.10694825
        ]
    },
    {
        "city_id": 12775,
        "region_id": 6,
        "name_ar": "حلة شعبة السدرة",
        "name_en": "Hallat Shuabat Al Sidrah",
        "center": [
            19.40890735,
            42.10449245
        ]
    },
    {
        "city_id": 12776,
        "region_id": 6,
        "name_ar": "محلة وضاعة",
        "name_en": "Mahallat Wadaah",
        "center": [
            19.4081,
            42.11295
        ]
    },
    {
        "city_id": 12777,
        "region_id": 6,
        "name_ar": "الوفيزة (حلة شرفية)",
        "name_en": "Al Wafizah (Hallat Sharafiyyah)",
        "center": [
            19.36410947,
            42.1131735
        ]
    },
    {
        "city_id": 12778,
        "region_id": 6,
        "name_ar": "الولية (حلة شرفية)",
        "name_en": "Al Waliyyah (Hallat Sharafiyyah)",
        "center": [
            19.3384198,
            42.09741541
        ]
    },
    {
        "city_id": 12779,
        "region_id": 6,
        "name_ar": "عكنان (حلة شرفية)",
        "name_en": "Aknan (Hallat Sharafiyyah)",
        "center": [
            19.4117,
            42.07728333
        ]
    },
    {
        "city_id": 12780,
        "region_id": 6,
        "name_ar": "بومدر (حلة شرفية)",
        "name_en": "Bumadar (Hallat Sharafiyyah)",
        "center": [
            19.40173333,
            42.0855
        ]
    },
    {
        "city_id": 12781,
        "region_id": 6,
        "name_ar": "شبارق (حلة شرفية)",
        "name_en": "Shabariq (Hallat Sharafiyyah)",
        "center": [
            19.41591667,
            42.06655
        ]
    },
    {
        "city_id": 12782,
        "region_id": 6,
        "name_ar": "الهداة (حلة شرفية)",
        "name_en": "Al Hadah (Hallat Sharafiyyah)",
        "center": [
            19.42583333,
            42.06995
        ]
    },
    {
        "city_id": 12783,
        "region_id": 6,
        "name_ar": "الموبل (حلة شرفية)",
        "name_en": "Al Mawbil (Hallat Sharafiyyah)",
        "center": [
            19.43378333,
            42.07723333
        ]
    },
    {
        "city_id": 12784,
        "region_id": 6,
        "name_ar": "جرادة حلة شرفية)",
        "name_en": "Jaradah (Hallat Sharafiyyah)",
        "center": [
            19.43266667,
            42.04083333
        ]
    },
    {
        "city_id": 12785,
        "region_id": 6,
        "name_ar": "حظا (حلة شرفية)",
        "name_en": "Hadha (Hallat Sharafiyyah)",
        "center": [
            19.4535,
            42.0798
        ]
    },
    {
        "city_id": 12834,
        "region_id": 6,
        "name_ar": "شعب اخيم",
        "name_en": "Shiab Akhim",
        "center": [
            19.36606718,
            42.1163651
        ]
    },
    {
        "city_id": 12892,
        "region_id": 6,
        "name_ar": "حبيل الامير",
        "name_en": "Hubail Al Amir",
        "center": [
            18.6591,
            42.09445
        ]
    },
    {
        "city_id": 12914,
        "region_id": 6,
        "name_ar": "القاد الاعلى",
        "name_en": "Al Qad Al Aala",
        "center": [
            18.68961667,
            42.01566667
        ]
    },
    {
        "city_id": 12915,
        "region_id": 6,
        "name_ar": "المصبح",
        "name_en": "Al Musbah",
        "center": [
            18.68986667,
            42.00993333
        ]
    },
    {
        "city_id": 12919,
        "region_id": 6,
        "name_ar": "ترقش",
        "name_en": "Turqesh",
        "center": [
            18.66225,
            42.0161
        ]
    },
    {
        "city_id": 13050,
        "region_id": 6,
        "name_ar": "قرن هادي",
        "name_en": "Qarn Hadi",
        "center": [
            18.70138333,
            41.6561
        ]
    },
    {
        "city_id": 13660,
        "region_id": 6,
        "name_ar": "المليحة",
        "name_en": "Al Milayhah",
        "center": [
            18.70848333,
            41.65678333
        ]
    },
    {
        "city_id": 13867,
        "region_id": 6,
        "name_ar": "زهرة بني بشر",
        "name_en": "Zahrah Bani Bishr",
        "center": [
            17.94603333,
            43.2235
        ]
    },
    {
        "city_id": 13989,
        "region_id": 6,
        "name_ar": "آل قبره والقوزيه",
        "name_en": "Al Qibrah Al Quoziyah",
        "center": [
            19.65901667,
            43.51568333
        ]
    },
    {
        "city_id": 14136,
        "region_id": 6,
        "name_ar": "لقع",
        "name_en": "Laqa",
        "center": [
            18.22606667,
            42.28203333
        ]
    },
    {
        "city_id": 14137,
        "region_id": 6,
        "name_ar": "الاصدار",
        "name_en": "Al Asdar",
        "center": [
            18.22546667,
            42.28461667
        ]
    },
    {
        "city_id": 14138,
        "region_id": 6,
        "name_ar": "ذات مساك",
        "name_en": "Dhat Masak",
        "center": [
            18.23015,
            42.2779
        ]
    },
    {
        "city_id": 14139,
        "region_id": 6,
        "name_ar": "ظهرة ال صالح",
        "name_en": "Dhahrat Al Salih",
        "center": [
            18.23653333,
            42.28233333
        ]
    },
    {
        "city_id": 14141,
        "region_id": 6,
        "name_ar": "ال خيرة",
        "name_en": "Al Khayrah",
        "center": [
            18.217,
            42.30488333
        ]
    },
    {
        "city_id": 14143,
        "region_id": 6,
        "name_ar": "الشقة",
        "name_en": "Al Shaqqah",
        "center": [
            18.21753333,
            42.29043333
        ]
    },
    {
        "city_id": 14147,
        "region_id": 6,
        "name_ar": "وسالع",
        "name_en": "Wasalya",
        "center": [
            18.23213333,
            42.29586667
        ]
    },
    {
        "city_id": 14148,
        "region_id": 6,
        "name_ar": "محجان",
        "name_en": "Mahjan",
        "center": [
            18.22733333,
            42.29653333
        ]
    },
    {
        "city_id": 14150,
        "region_id": 6,
        "name_ar": "مندر العوص",
        "name_en": "Mandar Al Us",
        "center": [
            18.2439,
            42.28005
        ]
    },
    {
        "city_id": 14151,
        "region_id": 6,
        "name_ar": "ضاحية",
        "name_en": "Sahiyah",
        "center": [
            18.24353333,
            42.26626667
        ]
    },
    {
        "city_id": 14152,
        "region_id": 6,
        "name_ar": "حبيل الاحلاج",
        "name_en": "Hubail Al Ahlaj",
        "center": [
            18.24728333,
            42.26761667
        ]
    },
    {
        "city_id": 14153,
        "region_id": 6,
        "name_ar": "ظهرة المصدمة",
        "name_en": "Dhahrat Al Masdamah",
        "center": [
            18.24128333,
            42.27956667
        ]
    },
    {
        "city_id": 14154,
        "region_id": 6,
        "name_ar": "الحقو",
        "name_en": "Al Haqu",
        "center": [
            18.242,
            42.27455
        ]
    },
    {
        "city_id": 14155,
        "region_id": 6,
        "name_ar": "جزعة العوص",
        "name_en": "Jazaat Al Us",
        "center": [
            18.2536,
            42.28705
        ]
    },
    {
        "city_id": 14156,
        "region_id": 6,
        "name_ar": "غنمة",
        "name_en": "Ghanamah",
        "center": [
            18.25591667,
            42.30198333
        ]
    },
    {
        "city_id": 14157,
        "region_id": 6,
        "name_ar": "ال مشابع",
        "name_en": "Al Mashaya",
        "center": [
            18.27431667,
            42.31868333
        ]
    },
    {
        "city_id": 14158,
        "region_id": 6,
        "name_ar": "ال مبيوع",
        "name_en": "Al Mabyu",
        "center": [
            18.27936667,
            42.33195
        ]
    },
    {
        "city_id": 14159,
        "region_id": 6,
        "name_ar": "عثالف",
        "name_en": "Athalif",
        "center": [
            18.2388,
            42.27111667
        ]
    },
    {
        "city_id": 14160,
        "region_id": 6,
        "name_ar": "قوة",
        "name_en": "Quwwah",
        "center": [
            18.22626667,
            42.26701667
        ]
    },
    {
        "city_id": 14163,
        "region_id": 6,
        "name_ar": "العثربة",
        "name_en": "Al Athriyyah",
        "center": [
            18.2549,
            42.26826667
        ]
    },
    {
        "city_id": 14164,
        "region_id": 6,
        "name_ar": "ثعابة",
        "name_en": "Thaabah",
        "center": [
            18.2608,
            42.26128333
        ]
    },
    {
        "city_id": 14165,
        "region_id": 6,
        "name_ar": "ظهر النواشرة",
        "name_en": "Dhahr Al Nawashirah",
        "center": [
            18.2591,
            42.25396667
        ]
    },
    {
        "city_id": 14166,
        "region_id": 6,
        "name_ar": "عمقة (ال علايم)",
        "name_en": "Aqmah (Al Alayim)",
        "center": [
            18.25398333,
            42.25373333
        ]
    },
    {
        "city_id": 14167,
        "region_id": 6,
        "name_ar": "الممر",
        "name_en": "Al Mamar",
        "center": [
            18.25063333,
            42.253
        ]
    },
    {
        "city_id": 14169,
        "region_id": 6,
        "name_ar": "لحج بن زافلة",
        "name_en": "Lahaj Ibn Zafilah",
        "center": [
            18.24813333,
            42.25626667
        ]
    },
    {
        "city_id": 14170,
        "region_id": 6,
        "name_ar": "وادي ظرافة",
        "name_en": "Wadi Dharafah",
        "center": [
            18.2382,
            42.25243333
        ]
    },
    {
        "city_id": 14171,
        "region_id": 6,
        "name_ar": "يدامان",
        "name_en": "Yadaman",
        "center": [
            18.25113333,
            42.24736667
        ]
    },
    {
        "city_id": 14174,
        "region_id": 6,
        "name_ar": "وادي كريم",
        "name_en": "Wadi Karim",
        "center": [
            18.24171667,
            42.2523
        ]
    },
    {
        "city_id": 14175,
        "region_id": 6,
        "name_ar": "وطن الرديف",
        "name_en": "Watan Al Radif",
        "center": [
            18.23931667,
            42.25421667
        ]
    },
    {
        "city_id": 14177,
        "region_id": 6,
        "name_ar": "ثفقي",
        "name_en": "Thaqfi",
        "center": [
            18.26255,
            42.24813333
        ]
    },
    {
        "city_id": 14179,
        "region_id": 6,
        "name_ar": "الذرة",
        "name_en": "Al Dhurah",
        "center": [
            18.2606,
            42.24638333
        ]
    },
    {
        "city_id": 14180,
        "region_id": 6,
        "name_ar": "خلف مجوف",
        "name_en": "Khalaf Majuf",
        "center": [
            18.2588,
            42.24448333
        ]
    },
    {
        "city_id": 14185,
        "region_id": 6,
        "name_ar": "سمنان",
        "name_en": "Samnan",
        "center": [
            18.2675,
            42.24373333
        ]
    },
    {
        "city_id": 14186,
        "region_id": 6,
        "name_ar": "الجوز الاسفل",
        "name_en": "Al Jawz Al Asfal",
        "center": [
            18.27895,
            42.24798333
        ]
    },
    {
        "city_id": 14187,
        "region_id": 6,
        "name_ar": "الجوز الاعلى",
        "name_en": "Al Jawz Al Aala",
        "center": [
            18.28838333,
            42.26216667
        ]
    },
    {
        "city_id": 14188,
        "region_id": 6,
        "name_ar": "وجه العرق",
        "name_en": "Wajh Al Irq",
        "center": [
            18.29006667,
            42.26506667
        ]
    },
    {
        "city_id": 14190,
        "region_id": 6,
        "name_ar": "الصعداي",
        "name_en": "Al Saday",
        "center": [
            18.29078333,
            42.27096667
        ]
    },
    {
        "city_id": 14191,
        "region_id": 6,
        "name_ar": "الشافية",
        "name_en": "Al Shaqibah",
        "center": [
            18.28828333,
            42.26875
        ]
    },
    {
        "city_id": 14192,
        "region_id": 6,
        "name_ar": "الخو",
        "name_en": "Al Khaw",
        "center": [
            18.28873333,
            42.27031667
        ]
    },
    {
        "city_id": 14193,
        "region_id": 6,
        "name_ar": "المعقم",
        "name_en": "Al Maqam",
        "center": [
            18.28605,
            42.26696667
        ]
    },
    {
        "city_id": 14194,
        "region_id": 6,
        "name_ar": "ذات الحلي",
        "name_en": "Dhat Al Hali",
        "center": [
            18.28011667,
            42.25503333
        ]
    },
    {
        "city_id": 14195,
        "region_id": 6,
        "name_ar": "ظهرة ال بريد",
        "name_en": "Dhahrat Al Barid",
        "center": [
            18.2896,
            42.27486667
        ]
    },
    {
        "city_id": 14196,
        "region_id": 6,
        "name_ar": "معينة",
        "name_en": "Mainah",
        "center": [
            18.28776667,
            42.27596667
        ]
    },
    {
        "city_id": 14197,
        "region_id": 6,
        "name_ar": "ملتقى الصدرين",
        "name_en": "Multaqa Al Sadrain",
        "center": [
            18.28736667,
            42.29265
        ]
    },
    {
        "city_id": 14198,
        "region_id": 6,
        "name_ar": "ظهران",
        "name_en": "Dhahran",
        "center": [
            18.29431667,
            42.2775
        ]
    },
    {
        "city_id": 14199,
        "region_id": 6,
        "name_ar": "معتق ال هبة",
        "name_en": "Mataq Al Hibah",
        "center": [
            18.29055,
            42.2796
        ]
    },
    {
        "city_id": 14200,
        "region_id": 6,
        "name_ar": "الجرف القديم",
        "name_en": "Al Jurf Al Qadim",
        "center": [
            18.27715,
            42.23756667
        ]
    },
    {
        "city_id": 14201,
        "region_id": 6,
        "name_ar": "عرضة",
        "name_en": "Ardah",
        "center": [
            18.27695,
            42.23471667
        ]
    },
    {
        "city_id": 14202,
        "region_id": 6,
        "name_ar": "الجرف الجديد (منقش)",
        "name_en": "Al Jurf Al Jadid (Manwash)",
        "center": [
            18.28098333,
            42.24055
        ]
    },
    {
        "city_id": 14203,
        "region_id": 6,
        "name_ar": "ظاهر القماش",
        "name_en": "Dhahir Al Qammash",
        "center": [
            18.28806667,
            42.24135
        ]
    },
    {
        "city_id": 14204,
        "region_id": 6,
        "name_ar": "اسفل فو",
        "name_en": "Asfal Faw",
        "center": [
            18.29346667,
            42.24176667
        ]
    },
    {
        "city_id": 14206,
        "region_id": 6,
        "name_ar": "طوقن",
        "name_en": "Tawqan",
        "center": [
            18.29783333,
            42.25116667
        ]
    },
    {
        "city_id": 14207,
        "region_id": 6,
        "name_ar": "القحام",
        "name_en": "Al Qaham",
        "center": [
            18.29543333,
            42.2395
        ]
    },
    {
        "city_id": 14208,
        "region_id": 6,
        "name_ar": "الرهي",
        "name_en": "Al Raha",
        "center": [
            18.29865,
            42.24128333
        ]
    },
    {
        "city_id": 14210,
        "region_id": 6,
        "name_ar": "المعاملات",
        "name_en": "Al Muamalat",
        "center": [
            18.30575,
            42.25651667
        ]
    },
    {
        "city_id": 14211,
        "region_id": 6,
        "name_ar": "ميمن",
        "name_en": "Mayman",
        "center": [
            18.3076,
            42.2585
        ]
    },
    {
        "city_id": 14213,
        "region_id": 6,
        "name_ar": "ظهرة ال مهدي",
        "name_en": "Dhahrat Al Mahdi",
        "center": [
            18.31096667,
            42.25908333
        ]
    },
    {
        "city_id": 14214,
        "region_id": 6,
        "name_ar": "ظهرة ال حسن",
        "name_en": "Dhahrat Al Hassan",
        "center": [
            18.31318333,
            42.26226667
        ]
    },
    {
        "city_id": 14216,
        "region_id": 6,
        "name_ar": "بتيلة ال مداوي",
        "name_en": "Batilah Al Mudawi",
        "center": [
            18.31275,
            42.26646667
        ]
    },
    {
        "city_id": 14217,
        "region_id": 6,
        "name_ar": "جزعة الرقاق",
        "name_en": "Jazah Al Riqaq",
        "center": [
            18.31395,
            42.26633333
        ]
    },
    {
        "city_id": 14218,
        "region_id": 6,
        "name_ar": "لبخ",
        "name_en": "Labakh",
        "center": [
            18.32186667,
            42.26488333
        ]
    },
    {
        "city_id": 14219,
        "region_id": 6,
        "name_ar": "جزعة المشط",
        "name_en": "Jazat Al Masht",
        "center": [
            18.31943333,
            42.27528333
        ]
    },
    {
        "city_id": 14220,
        "region_id": 6,
        "name_ar": "وطن عانين",
        "name_en": "Watan Anin",
        "center": [
            18.32618333,
            42.27936667
        ]
    },
    {
        "city_id": 14223,
        "region_id": 6,
        "name_ar": "شط المعد",
        "name_en": "Shat Al Maad",
        "center": [
            18.33288333,
            42.28018333
        ]
    },
    {
        "city_id": 14224,
        "region_id": 6,
        "name_ar": "الرقعة",
        "name_en": "Al Raqah",
        "center": [
            18.33908333,
            42.29038333
        ]
    },
    {
        "city_id": 14225,
        "region_id": 6,
        "name_ar": "جابو",
        "name_en": "Jabu",
        "center": [
            18.31953333,
            42.28446667
        ]
    },
    {
        "city_id": 14226,
        "region_id": 6,
        "name_ar": "دريما",
        "name_en": "Darima",
        "center": [
            18.32235,
            42.2818
        ]
    },
    {
        "city_id": 14228,
        "region_id": 6,
        "name_ar": "صران",
        "name_en": "Sarran",
        "center": [
            18.3274,
            42.29475
        ]
    },
    {
        "city_id": 14229,
        "region_id": 6,
        "name_ar": "ظهرة سنومة",
        "name_en": "Dhahrat Sannumah",
        "center": [
            18.29935,
            42.22911667
        ]
    },
    {
        "city_id": 14232,
        "region_id": 6,
        "name_ar": "جرف السلع",
        "name_en": "Jarf Al Salaa",
        "center": [
            18.30165,
            42.2331
        ]
    },
    {
        "city_id": 14233,
        "region_id": 6,
        "name_ar": "الربوع",
        "name_en": "Al Rabua",
        "center": [
            18.30745,
            42.22911667
        ]
    },
    {
        "city_id": 14234,
        "region_id": 6,
        "name_ar": "بئر ملحة",
        "name_en": "Bir Malhah",
        "center": [
            18.31001667,
            42.22941667
        ]
    },
    {
        "city_id": 14235,
        "region_id": 6,
        "name_ar": "ضبيان",
        "name_en": "Dabyan",
        "center": [
            18.31146667,
            42.2311
        ]
    },
    {
        "city_id": 14236,
        "region_id": 6,
        "name_ar": "المنافش",
        "name_en": "Al Manafish",
        "center": [
            18.31298333,
            42.21511667
        ]
    },
    {
        "city_id": 14237,
        "region_id": 6,
        "name_ar": "مقحومة",
        "name_en": "Maqhumah",
        "center": [
            18.31326667,
            42.21326667
        ]
    },
    {
        "city_id": 14238,
        "region_id": 6,
        "name_ar": "ضدحاء",
        "name_en": "Dadhaa",
        "center": [
            18.31508333,
            42.21195
        ]
    },
    {
        "city_id": 14239,
        "region_id": 6,
        "name_ar": "ظهران المشوزة (الخانق)",
        "name_en": "Dhahran Al Mashuzah (Al Khaniq)",
        "center": [
            18.30738333,
            42.21711667
        ]
    },
    {
        "city_id": 14241,
        "region_id": 6,
        "name_ar": "وجه العسف",
        "name_en": "Wajh Al Asaf",
        "center": [
            18.30485,
            42.21626667
        ]
    },
    {
        "city_id": 14242,
        "region_id": 6,
        "name_ar": "الاحقاب",
        "name_en": "Al Ahqab",
        "center": [
            18.30133333,
            42.21645
        ]
    },
    {
        "city_id": 14245,
        "region_id": 6,
        "name_ar": "الشرار",
        "name_en": "Al Sharar",
        "center": [
            18.2966,
            42.21386667
        ]
    },
    {
        "city_id": 14246,
        "region_id": 6,
        "name_ar": "الاذناب",
        "name_en": "Al Adhnab",
        "center": [
            18.29083333,
            42.21473333
        ]
    },
    {
        "city_id": 14247,
        "region_id": 6,
        "name_ar": "الصدعة",
        "name_en": "Al Sadah",
        "center": [
            18.29495,
            42.21506667
        ]
    },
    {
        "city_id": 14248,
        "region_id": 6,
        "name_ar": "الراتخ",
        "name_en": "Al Ratikh",
        "center": [
            18.30211667,
            42.21816667
        ]
    },
    {
        "city_id": 14249,
        "region_id": 6,
        "name_ar": "مدر",
        "name_en": "Madar",
        "center": [
            18.28826667,
            42.18625
        ]
    },
    {
        "city_id": 14250,
        "region_id": 6,
        "name_ar": "الكرى (العشة)",
        "name_en": "Al Kara (Al Ashah)",
        "center": [
            18.29496667,
            42.18843333
        ]
    },
    {
        "city_id": 14251,
        "region_id": 6,
        "name_ar": "ضحيان",
        "name_en": "Dahyan",
        "center": [
            18.2945,
            42.1921
        ]
    },
    {
        "city_id": 14253,
        "region_id": 6,
        "name_ar": "امصلحاء",
        "name_en": "Amsalhaa",
        "center": [
            18.30395,
            42.17296667
        ]
    },
    {
        "city_id": 14254,
        "region_id": 6,
        "name_ar": "معتق محالي",
        "name_en": "Mataq Mahali",
        "center": [
            18.29148333,
            42.1852
        ]
    },
    {
        "city_id": 14256,
        "region_id": 6,
        "name_ar": "سمعي (الجندلة)",
        "name_en": "Sama (Al Jandalah)",
        "center": [
            18.31608333,
            42.2007
        ]
    },
    {
        "city_id": 14257,
        "region_id": 6,
        "name_ar": "الرجوع",
        "name_en": "Al Rajua",
        "center": [
            18.31231667,
            42.20696667
        ]
    },
    {
        "city_id": 14259,
        "region_id": 6,
        "name_ar": "الحرد",
        "name_en": "Al Hardah",
        "center": [
            18.32618333,
            42.19898333
        ]
    },
    {
        "city_id": 14261,
        "region_id": 6,
        "name_ar": "جزعة وسانب",
        "name_en": "Jazat Wasanib",
        "center": [
            18.32106667,
            42.20753333
        ]
    },
    {
        "city_id": 14262,
        "region_id": 6,
        "name_ar": "باحان",
        "name_en": "Bahan",
        "center": [
            18.32821667,
            42.22076667
        ]
    },
    {
        "city_id": 14265,
        "region_id": 6,
        "name_ar": "ظهرة قهدة",
        "name_en": "Dhahart Qahdah",
        "center": [
            18.33265,
            42.22408333
        ]
    },
    {
        "city_id": 14266,
        "region_id": 6,
        "name_ar": "الميمن",
        "name_en": "Al Maymanah",
        "center": [
            18.3323,
            42.2335
        ]
    },
    {
        "city_id": 14267,
        "region_id": 6,
        "name_ar": "وطن وسانب",
        "name_en": "Watan Wasanib",
        "center": [
            18.34478333,
            42.23626667
        ]
    },
    {
        "city_id": 14272,
        "region_id": 6,
        "name_ar": "الحثران",
        "name_en": "Al Hathran",
        "center": [
            18.34425,
            42.25678333
        ]
    },
    {
        "city_id": 14273,
        "region_id": 6,
        "name_ar": "الحصياء",
        "name_en": "Al Hasyaa",
        "center": [
            18.34681667,
            42.26131667
        ]
    },
    {
        "city_id": 14306,
        "region_id": 6,
        "name_ar": "نخر الودن الاعلى",
        "name_en": "Nakhr Al Wadan Al Aala",
        "center": [
            18.33833333,
            42.17433333
        ]
    },
    {
        "city_id": 14378,
        "region_id": 6,
        "name_ar": "ذا الترايم",
        "name_en": "Dha Al Tarayim",
        "center": [
            18.28191667,
            42.15608333
        ]
    },
    {
        "city_id": 14386,
        "region_id": 6,
        "name_ar": "الخطل",
        "name_en": "Al Khatl",
        "center": [
            18.26676667,
            42.17736667
        ]
    },
    {
        "city_id": 14403,
        "region_id": 6,
        "name_ar": "وطن ال مضواح",
        "name_en": "Watan Al Midwah",
        "center": [
            18.26098333,
            42.21821667
        ]
    },
    {
        "city_id": 14404,
        "region_id": 6,
        "name_ar": "ضحى اللواء",
        "name_en": "Duha Al Luwaa",
        "center": [
            18.26018333,
            42.22073333
        ]
    },
    {
        "city_id": 14406,
        "region_id": 6,
        "name_ar": "وطن الذروة",
        "name_en": "Watan Al Dharwah",
        "center": [
            18.26178333,
            42.21916667
        ]
    },
    {
        "city_id": 14407,
        "region_id": 6,
        "name_ar": "الموفا",
        "name_en": "Al Mawfa",
        "center": [
            18.26131667,
            42.21848333
        ]
    },
    {
        "city_id": 14409,
        "region_id": 6,
        "name_ar": "الركس (الجن)",
        "name_en": "Al Riks (Al Jin)",
        "center": [
            18.26296667,
            42.21851667
        ]
    },
    {
        "city_id": 14410,
        "region_id": 6,
        "name_ar": "الضجاجة",
        "name_en": "Al Dajajah",
        "center": [
            18.2756,
            42.21696667
        ]
    },
    {
        "city_id": 14411,
        "region_id": 6,
        "name_ar": "قاعة غمرة",
        "name_en": "Qaat Ghamrah",
        "center": [
            18.26146667,
            42.2055
        ]
    },
    {
        "city_id": 14415,
        "region_id": 6,
        "name_ar": "المواهب",
        "name_en": "Al Mawahib",
        "center": [
            18.26301667,
            42.20481667
        ]
    },
    {
        "city_id": 14419,
        "region_id": 6,
        "name_ar": "قارية ال قديمة",
        "name_en": "Qarya",
        "center": [
            18.26636667,
            42.20093333
        ]
    },
    {
        "city_id": 14420,
        "region_id": 6,
        "name_ar": "البزخ",
        "name_en": "Al Bazakh",
        "center": [
            18.26473333,
            42.19978333
        ]
    },
    {
        "city_id": 14421,
        "region_id": 6,
        "name_ar": "المجزاع",
        "name_en": "Al Majzaa",
        "center": [
            18.26545,
            42.1973
        ]
    },
    {
        "city_id": 14422,
        "region_id": 6,
        "name_ar": "ذي تالق",
        "name_en": "Dhi Taliq",
        "center": [
            18.26753333,
            42.19633333
        ]
    },
    {
        "city_id": 14423,
        "region_id": 6,
        "name_ar": "موياح",
        "name_en": "Muyah",
        "center": [
            18.2688,
            42.19631667
        ]
    },
    {
        "city_id": 14424,
        "region_id": 6,
        "name_ar": "حرمات",
        "name_en": "Haramat",
        "center": [
            18.26983333,
            42.18771667
        ]
    },
    {
        "city_id": 14425,
        "region_id": 6,
        "name_ar": "السحاية",
        "name_en": "Al Sahayah",
        "center": [
            18.27895,
            42.1724
        ]
    },
    {
        "city_id": 14426,
        "region_id": 6,
        "name_ar": "الغزول",
        "name_en": "Al Ghazul",
        "center": [
            18.2792,
            42.17748333
        ]
    },
    {
        "city_id": 14427,
        "region_id": 6,
        "name_ar": "ذم سنون",
        "name_en": "Dham Sanun",
        "center": [
            18.26583333,
            42.20263333
        ]
    },
    {
        "city_id": 14429,
        "region_id": 6,
        "name_ar": "قارية غمرة",
        "name_en": "Qaryat Ghamrah",
        "center": [
            18.26243333,
            42.19755
        ]
    },
    {
        "city_id": 14430,
        "region_id": 6,
        "name_ar": "قارية عوال علي",
        "name_en": "Qaryat Awal Ali",
        "center": [
            18.26223333,
            42.19776667
        ]
    },
    {
        "city_id": 14431,
        "region_id": 6,
        "name_ar": "الجنبة",
        "name_en": "Al Janbah",
        "center": [
            18.26326667,
            42.19665
        ]
    },
    {
        "city_id": 14434,
        "region_id": 6,
        "name_ar": "القفلاء",
        "name_en": "Al Qaflaa",
        "center": [
            18.26955,
            42.19533333
        ]
    },
    {
        "city_id": 14435,
        "region_id": 6,
        "name_ar": "القعاليل",
        "name_en": "Al Qaalil",
        "center": [
            18.27215,
            42.19516667
        ]
    },
    {
        "city_id": 14437,
        "region_id": 6,
        "name_ar": "ال حرمات",
        "name_en": "Al Haramat",
        "center": [
            18.26858333,
            42.1867
        ]
    },
    {
        "city_id": 14438,
        "region_id": 6,
        "name_ar": "الجلل",
        "name_en": "Al Jalal",
        "center": [
            18.27488333,
            42.19346667
        ]
    },
    {
        "city_id": 14440,
        "region_id": 6,
        "name_ar": "جنب نجد",
        "name_en": "Janb Najd",
        "center": [
            18.27945,
            42.18128333
        ]
    },
    {
        "city_id": 14441,
        "region_id": 6,
        "name_ar": "قويد اللحج",
        "name_en": "Quwaid Al Lahaj",
        "center": [
            18.2709,
            42.19796667
        ]
    },
    {
        "city_id": 14443,
        "region_id": 6,
        "name_ar": "اللفج",
        "name_en": "Al Lafj",
        "center": [
            18.27158333,
            42.20205
        ]
    },
    {
        "city_id": 14446,
        "region_id": 6,
        "name_ar": "لحج غلق",
        "name_en": "Lahaj Ghalaq",
        "center": [
            18.2781,
            42.19813333
        ]
    },
    {
        "city_id": 14447,
        "region_id": 6,
        "name_ar": "الكهفين",
        "name_en": "Al Kahfain",
        "center": [
            18.27728333,
            42.20193333
        ]
    },
    {
        "city_id": 14448,
        "region_id": 6,
        "name_ar": "شعاب جوهر",
        "name_en": "Shiab Jawhar",
        "center": [
            18.27825,
            42.20121667
        ]
    },
    {
        "city_id": 14449,
        "region_id": 6,
        "name_ar": "السيالة",
        "name_en": "Al Sayalah",
        "center": [
            18.27923333,
            42.20163333
        ]
    },
    {
        "city_id": 14451,
        "region_id": 6,
        "name_ar": "هجوم",
        "name_en": "Hajum",
        "center": [
            18.27933333,
            42.20368333
        ]
    },
    {
        "city_id": 14452,
        "region_id": 6,
        "name_ar": "العانزة",
        "name_en": "Al Anizah",
        "center": [
            18.27895,
            42.20435
        ]
    },
    {
        "city_id": 14454,
        "region_id": 6,
        "name_ar": "جو غمرة",
        "name_en": "Jaw Ghamrah",
        "center": [
            18.28143333,
            42.21843333
        ]
    },
    {
        "city_id": 14455,
        "region_id": 6,
        "name_ar": "لحج العين",
        "name_en": "Lahaj Al Ayn",
        "center": [
            18.2889,
            42.21631667
        ]
    },
    {
        "city_id": 14456,
        "region_id": 6,
        "name_ar": "شط الصليف",
        "name_en": "Shat Al Salif",
        "center": [
            18.28561667,
            42.21566667
        ]
    },
    {
        "city_id": 14458,
        "region_id": 6,
        "name_ar": "الرفدة",
        "name_en": "Al Rafdah",
        "center": [
            18.27946667,
            42.21868333
        ]
    },
    {
        "city_id": 14459,
        "region_id": 6,
        "name_ar": "هتاين",
        "name_en": "Hatayin",
        "center": [
            18.27498333,
            42.21051667
        ]
    },
    {
        "city_id": 14460,
        "region_id": 6,
        "name_ar": "القاربة",
        "name_en": "Al Qaribah",
        "center": [
            18.24101667,
            42.23918333
        ]
    },
    {
        "city_id": 14461,
        "region_id": 6,
        "name_ar": "سرحة",
        "name_en": "Sarhah",
        "center": [
            18.2405,
            42.22831667
        ]
    },
    {
        "city_id": 14462,
        "region_id": 6,
        "name_ar": "المصلى (شعول)",
        "name_en": "Al Musalla (Shaul)",
        "center": [
            18.23525,
            42.23756667
        ]
    },
    {
        "city_id": 14463,
        "region_id": 6,
        "name_ar": "شفا الغراب",
        "name_en": "Shafa Al Ghurab",
        "center": [
            18.23475,
            42.23498333
        ]
    },
    {
        "city_id": 14464,
        "region_id": 6,
        "name_ar": "محضان",
        "name_en": "Mahdan",
        "center": [
            18.22593333,
            42.23618333
        ]
    },
    {
        "city_id": 14466,
        "region_id": 6,
        "name_ar": "ضحى شوقب",
        "name_en": "Duha Shawqab",
        "center": [
            18.20946667,
            42.23653333
        ]
    },
    {
        "city_id": 14467,
        "region_id": 6,
        "name_ar": "الشاخص",
        "name_en": "Al Shakhis",
        "center": [
            18.21863333,
            42.23146667
        ]
    },
    {
        "city_id": 14468,
        "region_id": 6,
        "name_ar": "البير ال زياد",
        "name_en": "Al Bir Al Ziyad",
        "center": [
            18.25115,
            42.1941
        ]
    },
    {
        "city_id": 14470,
        "region_id": 6,
        "name_ar": "الصرفة",
        "name_en": "Al Sarfah",
        "center": [
            18.24893333,
            42.19083333
        ]
    },
    {
        "city_id": 14474,
        "region_id": 6,
        "name_ar": "الدارة والعانز",
        "name_en": "Al Darah & Al Aniz",
        "center": [
            18.25108333,
            42.18765
        ]
    },
    {
        "city_id": 14476,
        "region_id": 6,
        "name_ar": "الغبة",
        "name_en": "Al Ghubbah",
        "center": [
            18.24628333,
            42.19255
        ]
    },
    {
        "city_id": 14478,
        "region_id": 6,
        "name_ar": "الشرقي",
        "name_en": "Al Sharqi",
        "center": [
            18.2456,
            42.1954
        ]
    },
    {
        "city_id": 14479,
        "region_id": 6,
        "name_ar": "القرعاء",
        "name_en": "Al Qaraa",
        "center": [
            18.2489,
            42.19475
        ]
    },
    {
        "city_id": 14482,
        "region_id": 6,
        "name_ar": "لغبة",
        "name_en": "Laghbah",
        "center": [
            18.23743333,
            42.21521667
        ]
    },
    {
        "city_id": 14486,
        "region_id": 6,
        "name_ar": "بلقة ال مغرم",
        "name_en": "Balqat Al Maghram",
        "center": [
            18.23658333,
            42.21235
        ]
    },
    {
        "city_id": 14490,
        "region_id": 6,
        "name_ar": "بلقة المعملة",
        "name_en": "Balqat Al Maamalah",
        "center": [
            18.22881667,
            42.20146667
        ]
    },
    {
        "city_id": 14494,
        "region_id": 6,
        "name_ar": "غمرة ال مروح",
        "name_en": "Ghamrat Al Mirwih",
        "center": [
            18.22085,
            42.2111
        ]
    },
    {
        "city_id": 14497,
        "region_id": 6,
        "name_ar": "ركس المروة والنصب",
        "name_en": "Rika Al Marwah & Al Nasab",
        "center": [
            18.24093333,
            42.20855
        ]
    },
    {
        "city_id": 14498,
        "region_id": 6,
        "name_ar": "الوجية",
        "name_en": "Al Wajih",
        "center": [
            18.24563333,
            42.20918333
        ]
    },
    {
        "city_id": 14499,
        "region_id": 6,
        "name_ar": "المسور",
        "name_en": "Al Masur",
        "center": [
            18.24666667,
            42.20758333
        ]
    },
    {
        "city_id": 14500,
        "region_id": 6,
        "name_ar": "آل عقيلة",
        "name_en": "Al Aqilah",
        "center": [
            18.2503,
            42.2077
        ]
    },
    {
        "city_id": 14501,
        "region_id": 6,
        "name_ar": "الفالة",
        "name_en": "Al Qalah",
        "center": [
            18.24926667,
            42.20298333
        ]
    },
    {
        "city_id": 14502,
        "region_id": 6,
        "name_ar": "ذم حجم",
        "name_en": "Dham Hajam",
        "center": [
            18.25336667,
            42.20633333
        ]
    },
    {
        "city_id": 14504,
        "region_id": 6,
        "name_ar": "شناكة",
        "name_en": "Shanakah",
        "center": [
            18.19193333,
            42.27846667
        ]
    },
    {
        "city_id": 14505,
        "region_id": 6,
        "name_ar": "ملحج",
        "name_en": "Malhaj",
        "center": [
            18.19521667,
            42.2816
        ]
    },
    {
        "city_id": 14506,
        "region_id": 6,
        "name_ar": "الخورمة",
        "name_en": "Al Khawramah",
        "center": [
            18.20228333,
            42.28028333
        ]
    },
    {
        "city_id": 14507,
        "region_id": 6,
        "name_ar": "خرار",
        "name_en": "Kharar",
        "center": [
            18.2,
            42.28463333
        ]
    },
    {
        "city_id": 14508,
        "region_id": 6,
        "name_ar": "الصليل",
        "name_en": "Al Salil",
        "center": [
            18.18173333,
            42.27606667
        ]
    },
    {
        "city_id": 14510,
        "region_id": 6,
        "name_ar": "عطف المسكتة",
        "name_en": "Atf Al Maskatah",
        "center": [
            18.16896667,
            42.26698333
        ]
    },
    {
        "city_id": 14511,
        "region_id": 6,
        "name_ar": "خميس كسان",
        "name_en": "Khamis Kasan",
        "center": [
            18.18563333,
            42.25528333
        ]
    },
    {
        "city_id": 14512,
        "region_id": 6,
        "name_ar": "عدا لرس",
        "name_en": "Ada Laras",
        "center": [
            18.18575,
            42.25383333
        ]
    },
    {
        "city_id": 14515,
        "region_id": 6,
        "name_ar": "وطن الرجال",
        "name_en": "Watan Al Rijal",
        "center": [
            18.2124,
            42.27291667
        ]
    },
    {
        "city_id": 14518,
        "region_id": 6,
        "name_ar": "مكشف",
        "name_en": "Makshaf",
        "center": [
            18.19693333,
            42.2803
        ]
    },
    {
        "city_id": 14519,
        "region_id": 6,
        "name_ar": "الشفا",
        "name_en": "Al Shafa",
        "center": [
            18.20398333,
            42.19393333
        ]
    },
    {
        "city_id": 14533,
        "region_id": 6,
        "name_ar": "الظهري",
        "name_en": "Al Dhahri",
        "center": [
            18.20693333,
            42.20888333
        ]
    },
    {
        "city_id": 14534,
        "region_id": 6,
        "name_ar": "القتب",
        "name_en": "Al Qatab",
        "center": [
            18.2048,
            42.1948
        ]
    },
    {
        "city_id": 14535,
        "region_id": 6,
        "name_ar": "الاطراف",
        "name_en": "Al Atraf",
        "center": [
            18.1855,
            42.2019
        ]
    },
    {
        "city_id": 14545,
        "region_id": 6,
        "name_ar": "الصفا",
        "name_en": "Al Safa",
        "center": [
            18.27038333,
            42.19521667
        ]
    },
    {
        "city_id": 14546,
        "region_id": 6,
        "name_ar": "امقفيل والمهلل",
        "name_en": "Amaqfil & Al Muhalhal",
        "center": [
            18.22941667,
            42.22413333
        ]
    },
    {
        "city_id": 14547,
        "region_id": 6,
        "name_ar": "حلا",
        "name_en": "Hala",
        "center": [
            18.22445,
            42.2222
        ]
    },
    {
        "city_id": 14548,
        "region_id": 6,
        "name_ar": "امقضى والفصايل",
        "name_en": "Amaqda & Al Fasayil",
        "center": [
            18.23111667,
            42.23333333
        ]
    },
    {
        "city_id": 14549,
        "region_id": 6,
        "name_ar": "هبا",
        "name_en": "Haba",
        "center": [
            18.25106667,
            42.19401667
        ]
    },
    {
        "city_id": 14550,
        "region_id": 6,
        "name_ar": "الركس والمليجة والعارضن",
        "name_en": "Al Riks & Al Malijah & Al Arid",
        "center": [
            18.23181667,
            42.2403
        ]
    },
    {
        "city_id": 14551,
        "region_id": 6,
        "name_ar": "امهذوب",
        "name_en": "Imhadhwab",
        "center": [
            18.19693333,
            42.28028333
        ]
    },
    {
        "city_id": 14552,
        "region_id": 6,
        "name_ar": "لحج الماء",
        "name_en": "Lahaj Al Maa",
        "center": [
            18.19221667,
            42.28791667
        ]
    },
    {
        "city_id": 14554,
        "region_id": 6,
        "name_ar": "البيح",
        "name_en": "Al Bih",
        "center": [
            18.19388333,
            42.26746667
        ]
    },
    {
        "city_id": 14555,
        "region_id": 6,
        "name_ar": "ذنب سنام",
        "name_en": "Dhanab Sanam",
        "center": [
            18.25361667,
            42.22113333
        ]
    },
    {
        "city_id": 14558,
        "region_id": 6,
        "name_ar": "جلة شصعة",
        "name_en": "Jallat Shasah",
        "center": [
            18.1479,
            42.31975
        ]
    },
    {
        "city_id": 14559,
        "region_id": 6,
        "name_ar": "العودة (ال سعيد)",
        "name_en": "Al Awdah (Al Said)",
        "center": [
            18.13623333,
            42.3194
        ]
    },
    {
        "city_id": 14560,
        "region_id": 6,
        "name_ar": "أريمن",
        "name_en": "Aryaman",
        "center": [
            18.14823333,
            42.32116667
        ]
    },
    {
        "city_id": 14561,
        "region_id": 6,
        "name_ar": "النحرة",
        "name_en": "Al Nahrah",
        "center": [
            18.1545,
            42.32321667
        ]
    },
    {
        "city_id": 14567,
        "region_id": 6,
        "name_ar": "العقصة",
        "name_en": "Al Aqsah",
        "center": [
            18.14123333,
            42.31481667
        ]
    },
    {
        "city_id": 14568,
        "region_id": 6,
        "name_ar": "قرية الجرف",
        "name_en": "Qaryat Al Jurf",
        "center": [
            18.13718333,
            42.2973
        ]
    },
    {
        "city_id": 14570,
        "region_id": 6,
        "name_ar": "وطن ال سالم",
        "name_en": "Watan Al Salim",
        "center": [
            18.14281667,
            42.29601667
        ]
    },
    {
        "city_id": 14571,
        "region_id": 6,
        "name_ar": "ذنب الوقيع",
        "name_en": "Dhanab Al Waqya",
        "center": [
            18.14503333,
            42.31226667
        ]
    },
    {
        "city_id": 14572,
        "region_id": 6,
        "name_ar": "المقراء",
        "name_en": "Al Maqraa",
        "center": [
            18.15428333,
            42.28756667
        ]
    },
    {
        "city_id": 14573,
        "region_id": 6,
        "name_ar": "سرال حجيل",
        "name_en": "Saral Hajil",
        "center": [
            18.15438333,
            42.28736667
        ]
    },
    {
        "city_id": 14574,
        "region_id": 6,
        "name_ar": "سلل",
        "name_en": "Salal",
        "center": [
            18.15081667,
            42.29258333
        ]
    },
    {
        "city_id": 14575,
        "region_id": 6,
        "name_ar": "شرف الزعابل",
        "name_en": "Sharaf Al Zaabil",
        "center": [
            18.14566667,
            42.28413333
        ]
    },
    {
        "city_id": 14576,
        "region_id": 6,
        "name_ar": "المكبة",
        "name_en": "Al Makabbah",
        "center": [
            18.16121667,
            42.28143333
        ]
    },
    {
        "city_id": 14577,
        "region_id": 6,
        "name_ar": "الاجوال",
        "name_en": "Al Ajwal",
        "center": [
            18.1634,
            42.28241667
        ]
    },
    {
        "city_id": 14578,
        "region_id": 6,
        "name_ar": "المغردة",
        "name_en": "Al Mugharifah",
        "center": [
            18.16123333,
            42.28183333
        ]
    },
    {
        "city_id": 14580,
        "region_id": 6,
        "name_ar": "قرية ال مشقي",
        "name_en": "Qaryat Al Masgqi",
        "center": [
            18.16013333,
            42.28093333
        ]
    },
    {
        "city_id": 14581,
        "region_id": 6,
        "name_ar": "الحدمة",
        "name_en": "Al Hadmah",
        "center": [
            18.16138333,
            42.2798
        ]
    },
    {
        "city_id": 14582,
        "region_id": 6,
        "name_ar": "المشبله",
        "name_en": "Al Mashbalah",
        "center": [
            18.15713333,
            42.28086667
        ]
    },
    {
        "city_id": 14584,
        "region_id": 6,
        "name_ar": "راجح (قارية بنى جونة)",
        "name_en": "Rajih (Qaryat Bani Junah)",
        "center": [
            18.15691667,
            42.28345
        ]
    },
    {
        "city_id": 14585,
        "region_id": 6,
        "name_ar": "سرال محروس",
        "name_en": "Saral Mahrus",
        "center": [
            18.15916667,
            42.28381667
        ]
    },
    {
        "city_id": 14587,
        "region_id": 6,
        "name_ar": "قرا اسفل الجر",
        "name_en": "Qara Asfal Al Jar",
        "center": [
            18.16328333,
            42.29883333
        ]
    },
    {
        "city_id": 14588,
        "region_id": 6,
        "name_ar": "السعدان",
        "name_en": "Al Saadan",
        "center": [
            18.15146667,
            42.30778333
        ]
    },
    {
        "city_id": 14589,
        "region_id": 6,
        "name_ar": "المخلفة",
        "name_en": "Al Makhlafah",
        "center": [
            18.15748333,
            42.30618333
        ]
    },
    {
        "city_id": 14590,
        "region_id": 6,
        "name_ar": "الحذرور",
        "name_en": "Al Hadhrur",
        "center": [
            18.16441667,
            42.29958333
        ]
    },
    {
        "city_id": 14592,
        "region_id": 6,
        "name_ar": "ال جرو",
        "name_en": "Al Jaru",
        "center": [
            18.16283333,
            42.30021667
        ]
    },
    {
        "city_id": 14593,
        "region_id": 6,
        "name_ar": "حرف ال عائض جابر",
        "name_en": "Harf Al Ayid Jabir",
        "center": [
            18.15801667,
            42.29445
        ]
    },
    {
        "city_id": 14594,
        "region_id": 6,
        "name_ar": "حرف ال مسروي",
        "name_en": "Harf Al Masrawi",
        "center": [
            18.16146667,
            42.29011667
        ]
    },
    {
        "city_id": 14596,
        "region_id": 6,
        "name_ar": "مسكتة الحجلة",
        "name_en": "Maskatat Al Jahlah",
        "center": [
            18.16048333,
            42.2786
        ]
    },
    {
        "city_id": 14597,
        "region_id": 6,
        "name_ar": "نوخان",
        "name_en": "Nukhan",
        "center": [
            18.17163333,
            42.28928333
        ]
    },
    {
        "city_id": 14598,
        "region_id": 6,
        "name_ar": "جمرة",
        "name_en": "Jamrah",
        "center": [
            18.17706667,
            42.29056667
        ]
    },
    {
        "city_id": 14599,
        "region_id": 6,
        "name_ar": "حضن العرة",
        "name_en": "Hudun Al Arrah",
        "center": [
            18.17896667,
            42.29426667
        ]
    },
    {
        "city_id": 14600,
        "region_id": 6,
        "name_ar": "حضن ال فحمان",
        "name_en": "Hudun Al Fahman",
        "center": [
            18.15568333,
            42.31271667
        ]
    },
    {
        "city_id": 14601,
        "region_id": 6,
        "name_ar": "ال جديع",
        "name_en": "Al Jadya",
        "center": [
            18.1739,
            42.29816667
        ]
    },
    {
        "city_id": 14602,
        "region_id": 6,
        "name_ar": "البادية",
        "name_en": "Al Badiyah",
        "center": [
            18.18195,
            42.29631667
        ]
    },
    {
        "city_id": 14603,
        "region_id": 6,
        "name_ar": "ال سعيد",
        "name_en": "Al Said",
        "center": [
            18.16778333,
            42.29335
        ]
    },
    {
        "city_id": 14604,
        "region_id": 6,
        "name_ar": "المسلب والحرف",
        "name_en": "Al Maslab & Al Harf",
        "center": [
            18.15091667,
            42.32448333
        ]
    },
    {
        "city_id": 14605,
        "region_id": 6,
        "name_ar": "ذم سودة",
        "name_en": "Dham Sawdah",
        "center": [
            18.17048333,
            42.32545
        ]
    },
    {
        "city_id": 14606,
        "region_id": 6,
        "name_ar": "لباخ",
        "name_en": "Labakh",
        "center": [
            18.16696667,
            42.31933333
        ]
    },
    {
        "city_id": 14607,
        "region_id": 6,
        "name_ar": "المعشرة",
        "name_en": "Al Masharah",
        "center": [
            18.16791667,
            42.32436667
        ]
    },
    {
        "city_id": 14608,
        "region_id": 6,
        "name_ar": "ام السعي",
        "name_en": "Umm Al Sai",
        "center": [
            18.15568333,
            42.3265
        ]
    },
    {
        "city_id": 14609,
        "region_id": 6,
        "name_ar": "مندر ذهبان",
        "name_en": "Mandar Dhahaban",
        "center": [
            18.16643333,
            42.3245
        ]
    },
    {
        "city_id": 14610,
        "region_id": 6,
        "name_ar": "المسابلة",
        "name_en": "Al Masabilah",
        "center": [
            18.17721667,
            42.31671667
        ]
    },
    {
        "city_id": 14611,
        "region_id": 6,
        "name_ar": "الرديف",
        "name_en": "Al Radif (Al Atfah)",
        "center": [
            18.18,
            42.31996667
        ]
    },
    {
        "city_id": 14612,
        "region_id": 6,
        "name_ar": "الرقي",
        "name_en": "Al Raqi",
        "center": [
            18.18603333,
            42.32053333
        ]
    },
    {
        "city_id": 14613,
        "region_id": 6,
        "name_ar": "حورة",
        "name_en": "Hawrah",
        "center": [
            18.18885,
            42.31911667
        ]
    },
    {
        "city_id": 14615,
        "region_id": 6,
        "name_ar": "الصفيح",
        "name_en": "Al Safih",
        "center": [
            18.19611667,
            42.2996
        ]
    },
    {
        "city_id": 14617,
        "region_id": 6,
        "name_ar": "الغبيرة",
        "name_en": "Al Ghabirah",
        "center": [
            18.1855,
            42.3056
        ]
    },
    {
        "city_id": 14618,
        "region_id": 6,
        "name_ar": "ام لصوب",
        "name_en": "Umm Lasub",
        "center": [
            18.18806667,
            42.30476667
        ]
    },
    {
        "city_id": 14620,
        "region_id": 6,
        "name_ar": "ذنب الغليل",
        "name_en": "Dhanab Al Ghalil",
        "center": [
            18.1947,
            42.31973333
        ]
    },
    {
        "city_id": 14621,
        "region_id": 6,
        "name_ar": "الغيناء",
        "name_en": "Al Ghaynaa",
        "center": [
            18.19801667,
            42.32026667
        ]
    },
    {
        "city_id": 14622,
        "region_id": 6,
        "name_ar": "سرو المرار",
        "name_en": "Saru Al Marar",
        "center": [
            18.19991667,
            42.31461667
        ]
    },
    {
        "city_id": 14623,
        "region_id": 6,
        "name_ar": "الضاجعة",
        "name_en": "Al Dajiah",
        "center": [
            18.20096667,
            42.31355
        ]
    },
    {
        "city_id": 14624,
        "region_id": 6,
        "name_ar": "وجه السرو",
        "name_en": "Wajh Al Saru",
        "center": [
            18.20321667,
            42.31378333
        ]
    },
    {
        "city_id": 14626,
        "region_id": 6,
        "name_ar": "حيد الصدر",
        "name_en": "Hayd Al Sadr",
        "center": [
            18.16116667,
            42.33558333
        ]
    },
    {
        "city_id": 14627,
        "region_id": 6,
        "name_ar": "حيد الحلل",
        "name_en": "Hayd Al Halal",
        "center": [
            18.16461667,
            42.33315
        ]
    },
    {
        "city_id": 14628,
        "region_id": 6,
        "name_ar": "حيد الخلوة",
        "name_en": "Hayd Al Khalwah",
        "center": [
            18.16706667,
            42.33418333
        ]
    },
    {
        "city_id": 14629,
        "region_id": 6,
        "name_ar": "مويركة (ام ويركة)",
        "name_en": "Muwairkah (Umm Wiraikah)",
        "center": [
            18.19828333,
            42.30813333
        ]
    },
    {
        "city_id": 14630,
        "region_id": 6,
        "name_ar": "قرية الصحبة والقارية",
        "name_en": "Qaryat Al Sahbah & Al Qariyyah",
        "center": [
            18.20268333,
            42.3001
        ]
    },
    {
        "city_id": 14631,
        "region_id": 6,
        "name_ar": "الجرين",
        "name_en": "Al Jarain",
        "center": [
            18.2057,
            42.33545
        ]
    },
    {
        "city_id": 14634,
        "region_id": 6,
        "name_ar": "المكبشة",
        "name_en": "Al Makbashah",
        "center": [
            18.20473333,
            42.33208333
        ]
    },
    {
        "city_id": 14635,
        "region_id": 6,
        "name_ar": "ال الرويعي",
        "name_en": "Al Al Ruwayi",
        "center": [
            18.20056667,
            42.32235
        ]
    },
    {
        "city_id": 14639,
        "region_id": 6,
        "name_ar": "السرو الاسفل",
        "name_en": "Al Saru Al Asfal",
        "center": [
            18.20928333,
            42.32551667
        ]
    },
    {
        "city_id": 14640,
        "region_id": 6,
        "name_ar": "سرو المسلمة (الأعلى)",
        "name_en": "Saru Al Maslamah (Al Aala)",
        "center": [
            18.21225,
            42.32715
        ]
    },
    {
        "city_id": 14644,
        "region_id": 6,
        "name_ar": "راس الجبل",
        "name_en": "Ras Al Jabal",
        "center": [
            18.20991667,
            42.35061667
        ]
    },
    {
        "city_id": 14645,
        "region_id": 6,
        "name_ar": "الشرقية",
        "name_en": "Al Sharqiyyah",
        "center": [
            18.19568333,
            42.33505
        ]
    },
    {
        "city_id": 14646,
        "region_id": 6,
        "name_ar": "المقعر",
        "name_en": "Al Maqar",
        "center": [
            18.19596667,
            42.32656667
        ]
    },
    {
        "city_id": 14647,
        "region_id": 6,
        "name_ar": "جلة المشمطة",
        "name_en": "Jallat Al Mashmatah",
        "center": [
            18.2138,
            42.32075
        ]
    },
    {
        "city_id": 14648,
        "region_id": 6,
        "name_ar": "جلة المحرقة",
        "name_en": "Jallat Al Mahraqah",
        "center": [
            18.2203,
            42.31978333
        ]
    },
    {
        "city_id": 14649,
        "region_id": 6,
        "name_ar": "قوعان",
        "name_en": "Qawan",
        "center": [
            18.2281,
            42.32698333
        ]
    },
    {
        "city_id": 14650,
        "region_id": 6,
        "name_ar": "الرحوب",
        "name_en": "Al Rahub",
        "center": [
            18.22555,
            42.32311667
        ]
    },
    {
        "city_id": 14651,
        "region_id": 6,
        "name_ar": "صدر المغلبة بحسوة",
        "name_en": "Sadr Al Maghlabah In Haswah",
        "center": [
            18.24058333,
            42.32916667
        ]
    },
    {
        "city_id": 14652,
        "region_id": 6,
        "name_ar": "شوكان الاعلى والاسفل",
        "name_en": "Shawkan Al Aala & Al Asfal",
        "center": [
            18.25965,
            42.32895
        ]
    },
    {
        "city_id": 14653,
        "region_id": 6,
        "name_ar": "ذهبان (صمع)",
        "name_en": "Dhabah (Sama)",
        "center": [
            18.18603333,
            42.33351667
        ]
    },
    {
        "city_id": 14654,
        "region_id": 6,
        "name_ar": "ال ابو علبة",
        "name_en": "Al Abu Ulbah",
        "center": [
            18.18886667,
            42.3364
        ]
    },
    {
        "city_id": 14655,
        "region_id": 6,
        "name_ar": "نشام (نهامن)",
        "name_en": "Nasham (Nahamin)",
        "center": [
            18.1851,
            42.33555
        ]
    },
    {
        "city_id": 14656,
        "region_id": 6,
        "name_ar": "الفصيلة (العسامة)",
        "name_en": "Al Fasilah (Al Asamah)",
        "center": [
            18.17585,
            42.34088333
        ]
    },
    {
        "city_id": 14657,
        "region_id": 6,
        "name_ar": "الحقبة",
        "name_en": "Al Haqbah",
        "center": [
            18.17633333,
            42.33203333
        ]
    },
    {
        "city_id": 14658,
        "region_id": 6,
        "name_ar": "المصاغة",
        "name_en": "Al Masaghah",
        "center": [
            18.1722,
            42.3325
        ]
    },
    {
        "city_id": 14662,
        "region_id": 6,
        "name_ar": "صرة",
        "name_en": "Surrah",
        "center": [
            18.11441667,
            42.34191667
        ]
    },
    {
        "city_id": 14663,
        "region_id": 6,
        "name_ar": "السرحاني",
        "name_en": "Al Sarhani",
        "center": [
            18.13758333,
            42.34226667
        ]
    },
    {
        "city_id": 14666,
        "region_id": 6,
        "name_ar": "سلعا",
        "name_en": "Salaa",
        "center": [
            18.13588333,
            42.34725
        ]
    },
    {
        "city_id": 14668,
        "region_id": 6,
        "name_ar": "ظلمة",
        "name_en": "Dhalmah",
        "center": [
            18.14495,
            42.34113333
        ]
    },
    {
        "city_id": 14689,
        "region_id": 6,
        "name_ar": "روق",
        "name_en": "Rawq",
        "center": [
            18.12216667,
            42.29951667
        ]
    },
    {
        "city_id": 14690,
        "region_id": 6,
        "name_ar": "معلين",
        "name_en": "Malayn",
        "center": [
            18.1172,
            42.29331667
        ]
    },
    {
        "city_id": 14691,
        "region_id": 6,
        "name_ar": "ال مريع",
        "name_en": "Al Mrayia",
        "center": [
            18.12003333,
            42.28785
        ]
    },
    {
        "city_id": 14693,
        "region_id": 6,
        "name_ar": "ال سالم",
        "name_en": "Al Salim",
        "center": [
            18.1188,
            42.29331667
        ]
    },
    {
        "city_id": 14694,
        "region_id": 6,
        "name_ar": "ال شار",
        "name_en": "Al Shar",
        "center": [
            18.11975,
            42.29388333
        ]
    },
    {
        "city_id": 14695,
        "region_id": 6,
        "name_ar": "ال عواض",
        "name_en": "Al Awadhah",
        "center": [
            18.12226667,
            42.29006667
        ]
    },
    {
        "city_id": 14696,
        "region_id": 6,
        "name_ar": "الحرف الاعلى (اللواء)",
        "name_en": "Al Harf Al Aala (Al Liwaa)",
        "center": [
            18.1257,
            42.2907
        ]
    },
    {
        "city_id": 14697,
        "region_id": 6,
        "name_ar": "الشروة",
        "name_en": "Al Sharwah",
        "center": [
            18.12518333,
            42.28006667
        ]
    },
    {
        "city_id": 14698,
        "region_id": 6,
        "name_ar": "المحدثة",
        "name_en": "Al Mahdathah",
        "center": [
            18.13008333,
            42.29051667
        ]
    },
    {
        "city_id": 14699,
        "region_id": 6,
        "name_ar": "السدرة",
        "name_en": "Al Sidrah",
        "center": [
            18.12421667,
            42.28635
        ]
    },
    {
        "city_id": 14700,
        "region_id": 6,
        "name_ar": "حرف المكثرة",
        "name_en": "Hafr Al Maktharah",
        "center": [
            18.12175,
            42.29391667
        ]
    },
    {
        "city_id": 14701,
        "region_id": 6,
        "name_ar": "باحة روق",
        "name_en": "Bahat Rawq",
        "center": [
            18.12243333,
            42.29658333
        ]
    },
    {
        "city_id": 14703,
        "region_id": 6,
        "name_ar": "شرا روق",
        "name_en": "Shara Rawq",
        "center": [
            18.11918333,
            42.29963333
        ]
    },
    {
        "city_id": 14704,
        "region_id": 6,
        "name_ar": "قرية ال عامر",
        "name_en": "Qaryat Al Amir",
        "center": [
            18.1251,
            42.27728333
        ]
    },
    {
        "city_id": 14705,
        "region_id": 6,
        "name_ar": "حرف المصلحة",
        "name_en": "Harfa Al Maslah",
        "center": [
            18.125,
            42.2832
        ]
    },
    {
        "city_id": 14706,
        "region_id": 6,
        "name_ar": "الصطة",
        "name_en": "Al Sattah",
        "center": [
            18.12246667,
            42.28025
        ]
    },
    {
        "city_id": 14712,
        "region_id": 6,
        "name_ar": "سرو المخارمة (المخارمة)",
        "name_en": "Sau Al Makharimah (Al Makharimah)",
        "center": [
            18.11231667,
            42.28931667
        ]
    },
    {
        "city_id": 14714,
        "region_id": 6,
        "name_ar": "قذيلى",
        "name_en": "Qadhili",
        "center": [
            18.11258333,
            42.2852
        ]
    },
    {
        "city_id": 14715,
        "region_id": 6,
        "name_ar": "ال غرامة",
        "name_en": "Al Gharamah",
        "center": [
            18.11476667,
            42.28836667
        ]
    },
    {
        "city_id": 14716,
        "region_id": 6,
        "name_ar": "قرية ال الشعبي",
        "name_en": "Qaryat Al Al Shiabi",
        "center": [
            18.1103,
            42.27366667
        ]
    },
    {
        "city_id": 14717,
        "region_id": 6,
        "name_ar": "ال عراف",
        "name_en": "Al Arraf",
        "center": [
            18.11538333,
            42.27425
        ]
    },
    {
        "city_id": 14718,
        "region_id": 6,
        "name_ar": "طنف (ال خودة)",
        "name_en": "Tanaf (Al Khawdah)",
        "center": [
            18.11371667,
            42.27723333
        ]
    },
    {
        "city_id": 14719,
        "region_id": 6,
        "name_ar": "العصادة",
        "name_en": "Al Asadah",
        "center": [
            18.16183333,
            42.28908333
        ]
    },
    {
        "city_id": 14720,
        "region_id": 6,
        "name_ar": "مندريرة",
        "name_en": "Mandarirah",
        "center": [
            18.14666667,
            42.31038333
        ]
    },
    {
        "city_id": 14722,
        "region_id": 6,
        "name_ar": "قارية بني جونة",
        "name_en": "Qariyat Bani Junah",
        "center": [
            18.1552,
            42.27658333
        ]
    },
    {
        "city_id": 14723,
        "region_id": 6,
        "name_ar": "صدريرة",
        "name_en": "Sadrirah",
        "center": [
            18.15165,
            42.29963333
        ]
    },
    {
        "city_id": 14725,
        "region_id": 6,
        "name_ar": "قراه",
        "name_en": "Qarah",
        "center": [
            18.19333333,
            42.32186667
        ]
    },
    {
        "city_id": 14726,
        "region_id": 6,
        "name_ar": "الصدر والغليل",
        "name_en": "Al Sadr & Al Ghalil",
        "center": [
            18.20628333,
            42.33803333
        ]
    },
    {
        "city_id": 15001,
        "region_id": 6,
        "name_ar": "ال السواد",
        "name_en": "Al Asawad",
        "center": [
            18.09031667,
            42.9904
        ]
    },
    {
        "city_id": 15400,
        "region_id": 6,
        "name_ar": "طلالا",
        "name_en": "Talala",
        "center": [
            19.58786667,
            42.07351667
        ]
    },
    {
        "city_id": 15498,
        "region_id": 6,
        "name_ar": "عميم ال سلمة",
        "name_en": "Amim Al Salamah",
        "center": [
            19.41511667,
            42.00235
        ]
    },
    {
        "city_id": 15504,
        "region_id": 6,
        "name_ar": "المنتزه",
        "name_en": "Al Muntazah",
        "center": [
            19.41093333,
            42.00091667
        ]
    },
    {
        "city_id": 15505,
        "region_id": 6,
        "name_ar": "ال بيسالم",
        "name_en": "Al Bisalim",
        "center": [
            19.41786667,
            41.99721667
        ]
    },
    {
        "city_id": 15507,
        "region_id": 6,
        "name_ar": "ال رايح",
        "name_en": "Al Rayih",
        "center": [
            19.42006667,
            41.99968333
        ]
    },
    {
        "city_id": 15508,
        "region_id": 6,
        "name_ar": "الشعبان",
        "name_en": "Al Shaaban",
        "center": [
            19.41486667,
            42.00568333
        ]
    },
    {
        "city_id": 15509,
        "region_id": 6,
        "name_ar": "حارة السلام",
        "name_en": "Harat Al Salam",
        "center": [
            19.4133,
            42.00406667
        ]
    },
    {
        "city_id": 15512,
        "region_id": 6,
        "name_ar": "معراة",
        "name_en": "Maarah",
        "center": [
            19.42121667,
            42.01456667
        ]
    },
    {
        "city_id": 15514,
        "region_id": 6,
        "name_ar": "عرق مناع (ال مجمل)",
        "name_en": "Irq Mannaa (Al Majmal)",
        "center": [
            19.40041667,
            42.00893333
        ]
    },
    {
        "city_id": 15516,
        "region_id": 6,
        "name_ar": "المرتفع (ال مجمل)",
        "name_en": "Al Murtafa (Al Majmal)",
        "center": [
            19.39855,
            42.00635
        ]
    },
    {
        "city_id": 15534,
        "region_id": 6,
        "name_ar": "مركز شعف بلقرن",
        "name_en": "Shiaf Balqarin Center",
        "center": [
            19.53548827,
            41.90462148
        ]
    },
    {
        "city_id": 15547,
        "region_id": 6,
        "name_ar": "الاقرع",
        "name_en": "Al Aqra",
        "center": [
            19.5317,
            41.90403333
        ]
    },
    {
        "city_id": 15607,
        "region_id": 6,
        "name_ar": "العقيق",
        "name_en": "Al Aqiq",
        "center": [
            19.47171667,
            41.97353333
        ]
    },
    {
        "city_id": 16197,
        "region_id": 6,
        "name_ar": "خاط",
        "name_en": "Khat",
        "center": [
            19.113,
            42.03151667
        ]
    },
    {
        "city_id": 16303,
        "region_id": 6,
        "name_ar": "آل خجيم",
        "name_en": "Al Khujaim",
        "center": [
            18.72108333,
            43.19168333
        ]
    },
    {
        "city_id": 16787,
        "region_id": 6,
        "name_ar": "غوافل",
        "name_en": "Ghavafil",
        "center": [
            18.83225,
            42.03733333
        ]
    },
    {
        "city_id": 16815,
        "region_id": 6,
        "name_ar": "المقلي",
        "name_en": "Al Maqli",
        "center": [
            18.77873333,
            42.06905
        ]
    },
    {
        "city_id": 16819,
        "region_id": 6,
        "name_ar": "شعب ام سد",
        "name_en": "Shiab Umm Sad",
        "center": [
            18.7797,
            42.07201667
        ]
    },
    {
        "city_id": 17411,
        "region_id": 8,
        "name_ar": "العريدة",
        "name_en": "Al Areedah",
        "center": [
            27.67942806,
            41.63182371
        ]
    },
    {
        "city_id": 17417,
        "region_id": 8,
        "name_ar": "القرينين",
        "name_en": "Alqarinin",
        "center": [
            27.2881,
            41.42985
        ]
    },
    {
        "city_id": 17420,
        "region_id": 8,
        "name_ar": "بدائع  الجرعاء",
        "name_en": "Badai' Al Jara",
        "center": [
            27.26423333,
            41.39455
        ]
    },
    {
        "city_id": 17431,
        "region_id": 8,
        "name_ar": "الضربة",
        "name_en": "Al Darbah",
        "center": [
            26.8512,
            41.7538
        ]
    },
    {
        "city_id": 17444,
        "region_id": 8,
        "name_ar": "رجامة",
        "name_en": "Rijamah",
        "center": [
            27.94675,
            42.05515
        ]
    },
    {
        "city_id": 17456,
        "region_id": 8,
        "name_ar": "الزبيرة",
        "name_en": "Az Zubayrah",
        "center": [
            28.00703333,
            43.68446667
        ]
    },
    {
        "city_id": 17457,
        "region_id": 8,
        "name_ar": "الخوير",
        "name_en": "Al Khuwair",
        "center": [
            27.61088333,
            43.17353333
        ]
    },
    {
        "city_id": 17459,
        "region_id": 8,
        "name_ar": "ام رقتين",
        "name_en": "Umm Raqtain",
        "center": [
            27.9019,
            42.09061667
        ]
    },
    {
        "city_id": 17465,
        "region_id": 8,
        "name_ar": "الحيانية",
        "name_en": "Al Hayaniyah",
        "center": [
            28.70356667,
            42.3142
        ]
    },
    {
        "city_id": 17467,
        "region_id": 8,
        "name_ar": "الجبيلي",
        "name_en": "Al Jabayli",
        "center": [
            29.17913333,
            41.617
        ]
    },
    {
        "city_id": 17475,
        "region_id": 8,
        "name_ar": "ام ساروت",
        "name_en": "Umm Sarut",
        "center": [
            27.45543333,
            43.42701667
        ]
    },
    {
        "city_id": 17476,
        "region_id": 8,
        "name_ar": "الناصرية",
        "name_en": "An Nasiriyah",
        "center": [
            27.68163333,
            42.55235
        ]
    },
    {
        "city_id": 17477,
        "region_id": 8,
        "name_ar": "الفويلق 2",
        "name_en": "Al Fuwayliq 2",
        "center": [
            27.6267,
            42.60985
        ]
    },
    {
        "city_id": 17478,
        "region_id": 8,
        "name_ar": "الفويلق 1",
        "name_en": "Al Fuwayliq 1",
        "center": [
            27.56353333,
            42.60888333
        ]
    },
    {
        "city_id": 17482,
        "region_id": 8,
        "name_ar": "ابو مزحامة",
        "name_en": "Abu Mazahah",
        "center": [
            26.8033,
            41.40086667
        ]
    },
    {
        "city_id": 17488,
        "region_id": 8,
        "name_ar": "السناف",
        "name_en": "Al Sanaf",
        "center": [
            26.492,
            40.90383333
        ]
    },
    {
        "city_id": 17491,
        "region_id": 8,
        "name_ar": "بدائع العليا",
        "name_en": "Badai' Aleulya",
        "center": [
            26.85368333,
            41.46708333
        ]
    },
    {
        "city_id": 17492,
        "region_id": 8,
        "name_ar": "بدائع المحمي",
        "name_en": "Badai' Al Mahmi",
        "center": [
            26.86408333,
            41.4687
        ]
    },
    {
        "city_id": 17493,
        "region_id": 8,
        "name_ar": "ريع المحمي",
        "name_en": "Ri' Al Mahmi",
        "center": [
            26.8556,
            41.42186667
        ]
    },
    {
        "city_id": 17501,
        "region_id": 8,
        "name_ar": "بدائع الصباحة",
        "name_en": "Badaya Al Sabahah",
        "center": [
            26.98478333,
            40.93658333
        ]
    },
    {
        "city_id": 17514,
        "region_id": 8,
        "name_ar": "المنصورية",
        "name_en": "Al Mansuriyah",
        "center": [
            27.31143333,
            42.52935
        ]
    },
    {
        "city_id": 17522,
        "region_id": 8,
        "name_ar": "اللويش",
        "name_en": "Al Luwaish",
        "center": [
            27.3225,
            42.4594
        ]
    },
    {
        "city_id": 17569,
        "region_id": 8,
        "name_ar": "الغفيلية",
        "name_en": "Al Ghafiliyyah",
        "center": [
            27.43545,
            41.1138
        ]
    },
    {
        "city_id": 17573,
        "region_id": 8,
        "name_ar": "الرضفين",
        "name_en": "Al Radhfain",
        "center": [
            27.26418333,
            41.23716667
        ]
    },
    {
        "city_id": 17574,
        "region_id": 8,
        "name_ar": "الشارف",
        "name_en": "Al Shaarif",
        "center": [
            27.27756667,
            41.2679
        ]
    },
    {
        "city_id": 17577,
        "region_id": 8,
        "name_ar": "روض العبد",
        "name_en": "Rawd Al Abd",
        "center": [
            27.4322,
            41.25156667
        ]
    },
    {
        "city_id": 17581,
        "region_id": 8,
        "name_ar": "السعدة",
        "name_en": "Al Saadah",
        "center": [
            27.66961667,
            40.4312
        ]
    },
    {
        "city_id": 17608,
        "region_id": 8,
        "name_ar": "النظيم واللجاوي",
        "name_en": "An Nadhim And Lajawi",
        "center": [
            27.64586667,
            40.37776667
        ]
    },
    {
        "city_id": 17613,
        "region_id": 8,
        "name_ar": "الغانمية",
        "name_en": "Al Ganimiyah",
        "center": [
            26.26683333,
            41.98055
        ]
    },
    {
        "city_id": 17614,
        "region_id": 8,
        "name_ar": "الحمودية",
        "name_en": "Al Hamudiyah",
        "center": [
            26.55875,
            41.9838
        ]
    },
    {
        "city_id": 17638,
        "region_id": 8,
        "name_ar": "الصخيرة الصبان",
        "name_en": "Al Sakhirah Al Sabban",
        "center": [
            25.77258333,
            40.43105
        ]
    },
    {
        "city_id": 17639,
        "region_id": 8,
        "name_ar": "حمه",
        "name_en": "Hama",
        "center": [
            25.88441667,
            40.43548333
        ]
    },
    {
        "city_id": 17647,
        "region_id": 8,
        "name_ar": "ثويليل",
        "name_en": "Thuwayleel",
        "center": [
            25.9583,
            40.55171667
        ]
    },
    {
        "city_id": 17648,
        "region_id": 8,
        "name_ar": "أبو سويسيات",
        "name_en": "Abu Swaisiyat",
        "center": [
            26.07403333,
            40.51051667
        ]
    },
    {
        "city_id": 17652,
        "region_id": 8,
        "name_ar": "القوينية",
        "name_en": "Al Quwainiyah",
        "center": [
            26.05988333,
            40.85325
        ]
    },
    {
        "city_id": 17662,
        "region_id": 8,
        "name_ar": "الدحوه",
        "name_en": "Ad Dihwah",
        "center": [
            26.49798333,
            40.23626667
        ]
    },
    {
        "city_id": 17667,
        "region_id": 8,
        "name_ar": "الشعيلاء",
        "name_en": "Al Shuayla",
        "center": [
            26.40113333,
            40.72118333
        ]
    },
    {
        "city_id": 17679,
        "region_id": 8,
        "name_ar": "هجرة المخروق",
        "name_en": "Hijrat Al Makhruq",
        "center": [
            25.92425,
            40.77145
        ]
    },
    {
        "city_id": 17695,
        "region_id": 8,
        "name_ar": "عدوة اثقب",
        "name_en": "Adwat Athqab",
        "center": [
            26.07401667,
            40.55921667
        ]
    },
    {
        "city_id": 17698,
        "region_id": 8,
        "name_ar": "الشق",
        "name_en": "Al Shaq",
        "center": [
            26.04001518,
            40.53403776
        ]
    },
    {
        "city_id": 17704,
        "region_id": 8,
        "name_ar": "بدائع الشق",
        "name_en": "Badai' Al Shaq",
        "center": [
            26.0543,
            40.55971667
        ]
    },
    {
        "city_id": 17708,
        "region_id": 8,
        "name_ar": "الصفراء",
        "name_en": "As Safra",
        "center": [
            25.89281667,
            40.8562
        ]
    },
    {
        "city_id": 17717,
        "region_id": 8,
        "name_ar": "المزكا",
        "name_en": "Al Mazka",
        "center": [
            26.14533333,
            40.3878
        ]
    },
    {
        "city_id": 17718,
        "region_id": 8,
        "name_ar": "كحلة",
        "name_en": "Kahlah",
        "center": [
            26.11305,
            40.37903333
        ]
    },
    {
        "city_id": 17728,
        "region_id": 8,
        "name_ar": "الملوي",
        "name_en": "Al Malvi",
        "center": [
            25.35030482,
            40.37773546
        ]
    },
    {
        "city_id": 17740,
        "region_id": 8,
        "name_ar": "اللبانه",
        "name_en": "Al Labana",
        "center": [
            26.26521667,
            40.49131667
        ]
    },
    {
        "city_id": 17743,
        "region_id": 8,
        "name_ar": "وسعة الرس",
        "name_en": "Wasat Al Rass",
        "center": [
            26.0828,
            40.62365
        ]
    },
    {
        "city_id": 17744,
        "region_id": 8,
        "name_ar": "الطنيب",
        "name_en": "Al Tuneib",
        "center": [
            26.73131667,
            40.71395
        ]
    },
    {
        "city_id": 17750,
        "region_id": 8,
        "name_ar": "البحره",
        "name_en": "Al Bahra",
        "center": [
            26.2625,
            40.47441667
        ]
    },
    {
        "city_id": 17761,
        "region_id": 8,
        "name_ar": "ام شعاري",
        "name_en": "Umm Sha'arei",
        "center": [
            25.87281667,
            40.23475
        ]
    },
    {
        "city_id": 17762,
        "region_id": 8,
        "name_ar": "اللخين عبيد",
        "name_en": "Al Lakheen Ubaid",
        "center": [
            26.00995,
            40.6068
        ]
    },
    {
        "city_id": 17777,
        "region_id": 8,
        "name_ar": "المناخ",
        "name_en": "Al Manakh",
        "center": [
            26.04343333,
            40.32696667
        ]
    },
    {
        "city_id": 17778,
        "region_id": 8,
        "name_ar": "المجصة",
        "name_en": "Al Majasah",
        "center": [
            25.95373333,
            40.35543333
        ]
    },
    {
        "city_id": 17780,
        "region_id": 8,
        "name_ar": "البوييضة",
        "name_en": "Al Buwaiyidah",
        "center": [
            25.99063333,
            40.3901
        ]
    },
    {
        "city_id": 17781,
        "region_id": 8,
        "name_ar": "ابو دويحات",
        "name_en": "Abu Duyhat",
        "center": [
            26.0358,
            40.34686667
        ]
    },
    {
        "city_id": 17782,
        "region_id": 8,
        "name_ar": "عيال عبيد",
        "name_en": "Eyal Obeid",
        "center": [
            25.94508333,
            40.79071667
        ]
    },
    {
        "city_id": 17788,
        "region_id": 8,
        "name_ar": "الملاح",
        "name_en": "Al Mallah",
        "center": [
            26.11853333,
            40.5203
        ]
    },
    {
        "city_id": 17791,
        "region_id": 8,
        "name_ar": "المغار",
        "name_en": "Al Maghar",
        "center": [
            25.67031667,
            40.73436667
        ]
    },
    {
        "city_id": 17795,
        "region_id": 8,
        "name_ar": "ام عماير",
        "name_en": "Umm Amayir",
        "center": [
            26.18443333,
            41.34288333
        ]
    },
    {
        "city_id": 17802,
        "region_id": 8,
        "name_ar": "مران",
        "name_en": "Marran",
        "center": [
            26.3236,
            41.75755
        ]
    },
    {
        "city_id": 17827,
        "region_id": 8,
        "name_ar": "الناصفة",
        "name_en": "An Nasifah",
        "center": [
            26.30363333,
            40.87411667
        ]
    },
    {
        "city_id": 17841,
        "region_id": 8,
        "name_ar": "فرشة نجب",
        "name_en": "Farshat Najab",
        "center": [
            25.78123333,
            41.04085
        ]
    },
    {
        "city_id": 17849,
        "region_id": 8,
        "name_ar": "الدفينة",
        "name_en": "Al Dufaynah",
        "center": [
            26.35083333,
            40.82181667
        ]
    },
    {
        "city_id": 17853,
        "region_id": 8,
        "name_ar": "فيضة المسعار",
        "name_en": "Faydat Al Masa'r",
        "center": [
            25.61846667,
            41.02258333
        ]
    },
    {
        "city_id": 17861,
        "region_id": 8,
        "name_ar": "الذكري",
        "name_en": "Al Dhikra",
        "center": [
            26.14258333,
            41.12595
        ]
    },
    {
        "city_id": 17862,
        "region_id": 9,
        "name_ar": "الشاظي مناحي بن بكر",
        "name_en": "Al Shadhi Manahi Ibn Bakr",
        "center": [
            31.21193333,
            40.64445
        ]
    },
    {
        "city_id": 17863,
        "region_id": 9,
        "name_ar": "الديدب",
        "name_en": "Al Didab",
        "center": [
            30.83181667,
            41.27306667
        ]
    },
    {
        "city_id": 17879,
        "region_id": 9,
        "name_ar": "زبالا",
        "name_en": "Zabala",
        "center": [
            29.39116667,
            43.5581
        ]
    },
    {
        "city_id": 17880,
        "region_id": 9,
        "name_ar": "العجرمية",
        "name_en": "Al Ajramiyyah",
        "center": [
            29.95593333,
            43.08123333
        ]
    },
    {
        "city_id": 17888,
        "region_id": 9,
        "name_ar": "ابن عائش",
        "name_en": "Ibn Aesh",
        "center": [
            30.30436667,
            42.35193333
        ]
    },
    {
        "city_id": 17924,
        "region_id": 10,
        "name_ar": "النعامية",
        "name_en": "Al Naeamia",
        "center": [
            17.13433333,
            42.63643333
        ]
    },
    {
        "city_id": 17925,
        "region_id": 10,
        "name_ar": "الهجاريه",
        "name_en": "Al Hajariah",
        "center": [
            17.12276667,
            42.64945
        ]
    },
    {
        "city_id": 17926,
        "region_id": 10,
        "name_ar": "الخواجيه",
        "name_en": "Al Khawajih",
        "center": [
            17.12083333,
            42.6412
        ]
    },
    {
        "city_id": 17927,
        "region_id": 10,
        "name_ar": "السوالمه",
        "name_en": "Al Sawalimah",
        "center": [
            17.12143333,
            42.64425
        ]
    },
    {
        "city_id": 17928,
        "region_id": 10,
        "name_ar": "الباطنه",
        "name_en": "Al Batinah",
        "center": [
            17.09901667,
            42.60248333
        ]
    },
    {
        "city_id": 17929,
        "region_id": 10,
        "name_ar": "الشمه",
        "name_en": "Al Shamuh",
        "center": [
            17.09655,
            42.5955
        ]
    },
    {
        "city_id": 17930,
        "region_id": 10,
        "name_ar": "الرافعي",
        "name_en": "Al Rafie",
        "center": [
            17.10198333,
            42.60661667
        ]
    },
    {
        "city_id": 17931,
        "region_id": 10,
        "name_ar": "الطراشه",
        "name_en": "Alt Arashah",
        "center": [
            17.09766667,
            42.59165
        ]
    },
    {
        "city_id": 17932,
        "region_id": 10,
        "name_ar": "الفقرة",
        "name_en": "Al Faqrah",
        "center": [
            17.07718333,
            42.5732
        ]
    },
    {
        "city_id": 17933,
        "region_id": 10,
        "name_ar": "ابو الكرش",
        "name_en": "Abu Alkarsh",
        "center": [
            17.06791667,
            42.56005
        ]
    },
    {
        "city_id": 17934,
        "region_id": 10,
        "name_ar": "العرجين",
        "name_en": "Al Arjeen",
        "center": [
            17.04473333,
            42.58076667
        ]
    },
    {
        "city_id": 17935,
        "region_id": 10,
        "name_ar": "الحواية",
        "name_en": "Al Hiwaya",
        "center": [
            17.03338333,
            42.58938333
        ]
    },
    {
        "city_id": 17936,
        "region_id": 10,
        "name_ar": "العمارده",
        "name_en": "Al Amaridah",
        "center": [
            17.03671667,
            42.59266667
        ]
    },
    {
        "city_id": 17937,
        "region_id": 10,
        "name_ar": "القصاده",
        "name_en": "Al Qasadah",
        "center": [
            17.04246667,
            42.60108333
        ]
    },
    {
        "city_id": 17938,
        "region_id": 10,
        "name_ar": "السروريه",
        "name_en": "Al Saruriyah",
        "center": [
            17.04443333,
            42.62173333
        ]
    },
    {
        "city_id": 17939,
        "region_id": 10,
        "name_ar": "النجابه و الجحاجح",
        "name_en": "Al Nijabah Wal Jahajih",
        "center": [
            17.0384,
            42.60983333
        ]
    },
    {
        "city_id": 17940,
        "region_id": 10,
        "name_ar": "عبدالله العيافي (العيافي)",
        "name_en": "Abdullah Al Eyafi (Al Eyafi)",
        "center": [
            17.08788333,
            42.60925
        ]
    },
    {
        "city_id": 17941,
        "region_id": 10,
        "name_ar": "الجعاونه",
        "name_en": "Al Jaeawunah",
        "center": [
            17.08103333,
            42.60571667
        ]
    },
    {
        "city_id": 17942,
        "region_id": 10,
        "name_ar": "حله محسن  المحاسنة",
        "name_en": "Halah Muhsin Al Muhasana",
        "center": [
            17.07725,
            42.61453333
        ]
    },
    {
        "city_id": 17943,
        "region_id": 10,
        "name_ar": "الدواحشه",
        "name_en": "Al Dawahishah",
        "center": [
            17.10133333,
            42.60846667
        ]
    },
    {
        "city_id": 17944,
        "region_id": 10,
        "name_ar": "تيهان (حلة تيهان)",
        "name_en": "Tyhan (Hulat Tyhan)",
        "center": [
            17.09685,
            42.61328333
        ]
    },
    {
        "city_id": 17945,
        "region_id": 10,
        "name_ar": "الخواره",
        "name_en": "Al Khawarah",
        "center": [
            17.11696667,
            42.6367
        ]
    },
    {
        "city_id": 17946,
        "region_id": 10,
        "name_ar": "الشواهية",
        "name_en": "Al Shawahiyah",
        "center": [
            17.1178,
            42.64028333
        ]
    },
    {
        "city_id": 17947,
        "region_id": 10,
        "name_ar": "الشعاره",
        "name_en": "Al Shiarah",
        "center": [
            17.10648333,
            42.62963333
        ]
    },
    {
        "city_id": 17948,
        "region_id": 10,
        "name_ar": "القواعة",
        "name_en": "Al Qawaea",
        "center": [
            17.10683333,
            42.6241
        ]
    },
    {
        "city_id": 17991,
        "region_id": 10,
        "name_ar": "الشاخر",
        "name_en": "Al Shaakhir",
        "center": [
            17.22111667,
            42.59035
        ]
    },
    {
        "city_id": 17992,
        "region_id": 10,
        "name_ar": "ام الشباقاء",
        "name_en": "Umm Al Shibaqa",
        "center": [
            17.21338333,
            42.5991
        ]
    },
    {
        "city_id": 17993,
        "region_id": 10,
        "name_ar": "اللخبصية",
        "name_en": "Al Lakhabsia",
        "center": [
            17.20696667,
            42.60125
        ]
    },
    {
        "city_id": 17994,
        "region_id": 10,
        "name_ar": "الصامخ",
        "name_en": "Al Samikh",
        "center": [
            17.1968,
            42.56393333
        ]
    },
    {
        "city_id": 17995,
        "region_id": 10,
        "name_ar": "الجاره القديمه",
        "name_en": "Al Jarah Al Qadiumah",
        "center": [
            17.21311667,
            42.54963333
        ]
    },
    {
        "city_id": 17996,
        "region_id": 10,
        "name_ar": "الزينيه",
        "name_en": "Al Ziniyah",
        "center": [
            17.21883333,
            42.55183333
        ]
    },
    {
        "city_id": 17997,
        "region_id": 10,
        "name_ar": "حلة علي بن موسى",
        "name_en": "Hulat Ali Bin Musa",
        "center": [
            17.21098333,
            42.56426667
        ]
    },
    {
        "city_id": 17998,
        "region_id": 10,
        "name_ar": "ام القحفه",
        "name_en": "Umm Al Qahfah",
        "center": [
            17.18616667,
            42.58033333
        ]
    },
    {
        "city_id": 17999,
        "region_id": 10,
        "name_ar": "حلة المكي",
        "name_en": "Hulat Al Makki",
        "center": [
            17.15466667,
            42.56068333
        ]
    },
    {
        "city_id": 18000,
        "region_id": 10,
        "name_ar": "حلة العرشي",
        "name_en": "Hulat Al Earshi",
        "center": [
            17.14361667,
            42.55485
        ]
    },
    {
        "city_id": 18001,
        "region_id": 10,
        "name_ar": "قبه",
        "name_en": "Qibah",
        "center": [
            17.18373333,
            42.54736667
        ]
    },
    {
        "city_id": 18002,
        "region_id": 10,
        "name_ar": "الخضراء",
        "name_en": "Al Khadra",
        "center": [
            17.17703333,
            42.58013333
        ]
    },
    {
        "city_id": 18003,
        "region_id": 10,
        "name_ar": "حله عطيه",
        "name_en": "Halah Attieh",
        "center": [
            17.1688,
            42.57615
        ]
    },
    {
        "city_id": 18004,
        "region_id": 10,
        "name_ar": "حله ابو مرعي",
        "name_en": "Halah Abu Marei",
        "center": [
            17.17015,
            42.57185
        ]
    },
    {
        "city_id": 18005,
        "region_id": 10,
        "name_ar": "الدحيقي",
        "name_en": "Al Daheeqi",
        "center": [
            17.16321667,
            42.60065
        ]
    },
    {
        "city_id": 18006,
        "region_id": 10,
        "name_ar": "الحشيبرية",
        "name_en": "Al Hashibiria",
        "center": [
            17.16998333,
            42.59073333
        ]
    },
    {
        "city_id": 18008,
        "region_id": 10,
        "name_ar": "الرونة",
        "name_en": "Ar Runah",
        "center": [
            17.13128333,
            42.59113333
        ]
    },
    {
        "city_id": 18009,
        "region_id": 10,
        "name_ar": "حله محمد عيسى",
        "name_en": "Halah Muhamad Eisa",
        "center": [
            17.12755,
            42.59001667
        ]
    },
    {
        "city_id": 18010,
        "region_id": 10,
        "name_ar": "حله العقيبي",
        "name_en": "Halah Aleaqibiu",
        "center": [
            17.14106667,
            42.58528333
        ]
    },
    {
        "city_id": 18011,
        "region_id": 10,
        "name_ar": "حله القميري",
        "name_en": "Halah Al Qamiri",
        "center": [
            17.15038333,
            42.5866
        ]
    },
    {
        "city_id": 18012,
        "region_id": 10,
        "name_ar": "حله مشاري",
        "name_en": "Halah Mishary",
        "center": [
            17.14573333,
            42.59933333
        ]
    },
    {
        "city_id": 18013,
        "region_id": 10,
        "name_ar": "حله الصهلولي",
        "name_en": "Halah Al Sahluli",
        "center": [
            17.14128828,
            42.60191351
        ]
    },
    {
        "city_id": 18014,
        "region_id": 10,
        "name_ar": "حله الحو تين",
        "name_en": "Halah Alhawa Tyn",
        "center": [
            17.13691667,
            42.60443333
        ]
    },
    {
        "city_id": 18015,
        "region_id": 10,
        "name_ar": "حله بن علوان",
        "name_en": "Halah Bin Alwaan",
        "center": [
            17.14733333,
            42.5677
        ]
    },
    {
        "city_id": 18016,
        "region_id": 10,
        "name_ar": "حله الحكمى",
        "name_en": "Halah Al Hukmaa",
        "center": [
            17.15833333,
            42.57743333
        ]
    },
    {
        "city_id": 18017,
        "region_id": 10,
        "name_ar": "حله عبدالله قبع",
        "name_en": "Halah Abdullah Qabea",
        "center": [
            17.15816667,
            42.57253333
        ]
    },
    {
        "city_id": 18018,
        "region_id": 10,
        "name_ar": "حله مروعي بن شامي",
        "name_en": "Halah Maruei Bin Shamy",
        "center": [
            17.16338333,
            42.57013333
        ]
    },
    {
        "city_id": 18019,
        "region_id": 10,
        "name_ar": "حله الكلابيه",
        "name_en": "Halah Al Kalabih",
        "center": [
            17.15111667,
            42.5724
        ]
    },
    {
        "city_id": 18020,
        "region_id": 10,
        "name_ar": "ابو دنقور",
        "name_en": "Abu Danqur",
        "center": [
            17.11275,
            42.59356667
        ]
    },
    {
        "city_id": 18021,
        "region_id": 10,
        "name_ar": "الجديين",
        "name_en": "Al Jidiayn",
        "center": [
            17.1169,
            42.57481667
        ]
    },
    {
        "city_id": 18022,
        "region_id": 10,
        "name_ar": "زبارة الجديين",
        "name_en": "Zubarat Al Jidyeen",
        "center": [
            17.1213,
            42.57446667
        ]
    },
    {
        "city_id": 18023,
        "region_id": 10,
        "name_ar": "شيبان",
        "name_en": "Shayban",
        "center": [
            17.1255,
            42.5656
        ]
    },
    {
        "city_id": 18025,
        "region_id": 10,
        "name_ar": "قرية الجوابره",
        "name_en": "Qaryat Al Jawabirih",
        "center": [
            17.16561667,
            42.60243333
        ]
    },
    {
        "city_id": 18026,
        "region_id": 10,
        "name_ar": "الشواجرة والجرابية",
        "name_en": "Al Shawajirat Wal Jarabiyah",
        "center": [
            17.11876667,
            42.64503333
        ]
    },
    {
        "city_id": 18027,
        "region_id": 10,
        "name_ar": "الزيني",
        "name_en": "Al Zayni",
        "center": [
            17.05343333,
            42.57913333
        ]
    },
    {
        "city_id": 18028,
        "region_id": 10,
        "name_ar": "المحاصيه",
        "name_en": "Al Mahasih",
        "center": [
            17.21823333,
            42.53353333
        ]
    },
    {
        "city_id": 18029,
        "region_id": 10,
        "name_ar": "جميما",
        "name_en": "Jameema",
        "center": [
            17.20348333,
            42.51438333
        ]
    },
    {
        "city_id": 18030,
        "region_id": 10,
        "name_ar": "حنقفه",
        "name_en": "Hanaqfah",
        "center": [
            17.1724,
            42.48783333
        ]
    },
    {
        "city_id": 18031,
        "region_id": 10,
        "name_ar": "الحوامضه جحيش",
        "name_en": "Al Hawamidah Jahish",
        "center": [
            17.24246667,
            42.46978333
        ]
    },
    {
        "city_id": 18032,
        "region_id": 10,
        "name_ar": "الزقله",
        "name_en": "Al Zaqlah",
        "center": [
            17.19165,
            42.48708333
        ]
    },
    {
        "city_id": 18038,
        "region_id": 10,
        "name_ar": "الفوارسة",
        "name_en": "Al Fawarisah",
        "center": [
            17.35978333,
            42.49198333
        ]
    },
    {
        "city_id": 18042,
        "region_id": 10,
        "name_ar": "السلامة السفلى",
        "name_en": "Al Salamah Al Sufla",
        "center": [
            17.30321667,
            42.54553333
        ]
    },
    {
        "city_id": 18043,
        "region_id": 10,
        "name_ar": "شهده",
        "name_en": "Shahdah",
        "center": [
            17.21453333,
            42.46378333
        ]
    },
    {
        "city_id": 18044,
        "region_id": 10,
        "name_ar": "الكلبة",
        "name_en": "Al Kalibah",
        "center": [
            17.22955,
            42.4673
        ]
    },
    {
        "city_id": 18045,
        "region_id": 10,
        "name_ar": "الفصاله والدغاريه",
        "name_en": "Al Fisalah Wal Dagharih",
        "center": [
            17.22881667,
            42.45533333
        ]
    },
    {
        "city_id": 18046,
        "region_id": 10,
        "name_ar": "الشقافه والمصاوفة",
        "name_en": "Al Shiqafah Wal Musawafa",
        "center": [
            17.20991667,
            42.48203333
        ]
    },
    {
        "city_id": 18047,
        "region_id": 10,
        "name_ar": "المدرك",
        "name_en": "Al Madrak",
        "center": [
            17.33453333,
            42.52956667
        ]
    },
    {
        "city_id": 18048,
        "region_id": 10,
        "name_ar": "الشعافه",
        "name_en": "Al Shaeafah",
        "center": [
            17.26878333,
            42.4293
        ]
    },
    {
        "city_id": 18049,
        "region_id": 10,
        "name_ar": "ابوالمقره",
        "name_en": "Abu Al Maqrah",
        "center": [
            17.26083333,
            42.45446667
        ]
    },
    {
        "city_id": 18052,
        "region_id": 10,
        "name_ar": "العواجمه",
        "name_en": "Al Awajimah",
        "center": [
            17.16053333,
            42.46036667
        ]
    },
    {
        "city_id": 18053,
        "region_id": 10,
        "name_ar": "وجه الحسن",
        "name_en": "Wajah Alhasan",
        "center": [
            17.13856667,
            42.46358333
        ]
    },
    {
        "city_id": 18054,
        "region_id": 10,
        "name_ar": "العرضه",
        "name_en": "Alearduh",
        "center": [
            17.14275,
            42.48698333
        ]
    },
    {
        "city_id": 18055,
        "region_id": 10,
        "name_ar": "البطيح",
        "name_en": "Albatih",
        "center": [
            17.12535,
            42.48546667
        ]
    },
    {
        "city_id": 18056,
        "region_id": 10,
        "name_ar": "السداده",
        "name_en": "Alsidaduh",
        "center": [
            17.1207,
            42.47558333
        ]
    },
    {
        "city_id": 18057,
        "region_id": 10,
        "name_ar": "النزلة",
        "name_en": "Al Nazlah",
        "center": [
            17.12451667,
            42.4804
        ]
    },
    {
        "city_id": 18058,
        "region_id": 10,
        "name_ar": "عوانه",
        "name_en": "Eawanah",
        "center": [
            17.14553333,
            42.50121667
        ]
    },
    {
        "city_id": 18059,
        "region_id": 10,
        "name_ar": "العبده",
        "name_en": "Aleabduh",
        "center": [
            17.13936667,
            42.50796667
        ]
    },
    {
        "city_id": 18060,
        "region_id": 10,
        "name_ar": "ابو الطيور",
        "name_en": "'Abu Altuyur",
        "center": [
            17.15795,
            42.50003333
        ]
    },
    {
        "city_id": 18061,
        "region_id": 10,
        "name_ar": "ام العرش",
        "name_en": "Umm Alearsh",
        "center": [
            17.10491667,
            42.49781667
        ]
    },
    {
        "city_id": 18062,
        "region_id": 10,
        "name_ar": "منسيه",
        "name_en": "Mansih",
        "center": [
            17.08683333,
            42.50016667
        ]
    },
    {
        "city_id": 18063,
        "region_id": 10,
        "name_ar": "الصنيف",
        "name_en": "Alsanif",
        "center": [
            17.12193333,
            42.50211667
        ]
    },
    {
        "city_id": 18064,
        "region_id": 10,
        "name_ar": "الحمضيه",
        "name_en": "Al Hamdiyah",
        "center": [
            17.115,
            42.49618333
        ]
    },
    {
        "city_id": 18065,
        "region_id": 10,
        "name_ar": "الحرف",
        "name_en": "Al Harf",
        "center": [
            17.09741667,
            42.5329
        ]
    },
    {
        "city_id": 18066,
        "region_id": 10,
        "name_ar": "المجديره",
        "name_en": "Almajdiruh",
        "center": [
            17.09923333,
            42.52553333
        ]
    },
    {
        "city_id": 18067,
        "region_id": 10,
        "name_ar": "حلة ابو حبيبه",
        "name_en": "Hulat 'Abu Habibuh",
        "center": [
            17.09945,
            42.5384
        ]
    },
    {
        "city_id": 18068,
        "region_id": 10,
        "name_ar": "الخوالده",
        "name_en": "Alkhawaliduh",
        "center": [
            17.08663333,
            42.55346667
        ]
    },
    {
        "city_id": 18069,
        "region_id": 10,
        "name_ar": "الزيديه",
        "name_en": "Alzaydiuh",
        "center": [
            17.07773333,
            42.54828333
        ]
    },
    {
        "city_id": 18070,
        "region_id": 10,
        "name_ar": "الحجرين",
        "name_en": "Alhajarayn",
        "center": [
            17.1209,
            42.56046667
        ]
    },
    {
        "city_id": 18071,
        "region_id": 10,
        "name_ar": "جريبه",
        "name_en": "Jaribuh",
        "center": [
            17.11153333,
            42.55591667
        ]
    },
    {
        "city_id": 18072,
        "region_id": 10,
        "name_ar": "زربه",
        "name_en": "Zarabah",
        "center": [
            17.11165,
            42.53858333
        ]
    },
    {
        "city_id": 18073,
        "region_id": 10,
        "name_ar": "الهدوى",
        "name_en": "Alhadwaa",
        "center": [
            17.12228333,
            42.5403
        ]
    },
    {
        "city_id": 18074,
        "region_id": 10,
        "name_ar": "الحقاويه",
        "name_en": "Alhaqawih",
        "center": [
            17.13728333,
            42.52946667
        ]
    },
    {
        "city_id": 18075,
        "region_id": 10,
        "name_ar": "العسيلة",
        "name_en": "Al 'Usaylah",
        "center": [
            17.14461667,
            42.53913333
        ]
    },
    {
        "city_id": 18076,
        "region_id": 10,
        "name_ar": "الرجيع",
        "name_en": "Alrajie",
        "center": [
            17.1475,
            42.51855
        ]
    },
    {
        "city_id": 18077,
        "region_id": 10,
        "name_ar": "حلة ابراهيم عيسى",
        "name_en": "Hulat 'Iibrahim Eisaa",
        "center": [
            17.14755,
            42.51456667
        ]
    },
    {
        "city_id": 18078,
        "region_id": 10,
        "name_ar": "الكومه",
        "name_en": "Alkawmuh",
        "center": [
            17.13058333,
            42.50525
        ]
    },
    {
        "city_id": 18115,
        "region_id": 10,
        "name_ar": "الحسينية",
        "name_en": "Al Husayniyyah",
        "center": [
            17.25393333,
            42.75061667
        ]
    },
    {
        "city_id": 18191,
        "region_id": 10,
        "name_ar": "الخشابية",
        "name_en": "Al Khashabiyah",
        "center": [
            16.94866667,
            42.72271667
        ]
    },
    {
        "city_id": 18202,
        "region_id": 10,
        "name_ar": "المشايخ",
        "name_en": "Al Mashayikh",
        "center": [
            16.90065,
            42.78685
        ]
    },
    {
        "city_id": 18210,
        "region_id": 10,
        "name_ar": "الشابطه",
        "name_en": "Al Shabitah",
        "center": [
            16.91183333,
            42.83056667
        ]
    },
    {
        "city_id": 18217,
        "region_id": 10,
        "name_ar": "الدهالية",
        "name_en": "Al Dahaliyyah",
        "center": [
            16.90536667,
            42.85883333
        ]
    },
    {
        "city_id": 18221,
        "region_id": 10,
        "name_ar": "المعاشية",
        "name_en": "Al Maashiyyah",
        "center": [
            16.90235,
            42.86833333
        ]
    },
    {
        "city_id": 18245,
        "region_id": 10,
        "name_ar": "ابو لهب",
        "name_en": "Abu Lahab",
        "center": [
            16.94393333,
            42.96281667
        ]
    },
    {
        "city_id": 18285,
        "region_id": 10,
        "name_ar": "سلام بني واصل",
        "name_en": "Salam Bani Wasal",
        "center": [
            16.92976667,
            42.90213333
        ]
    },
    {
        "city_id": 18289,
        "region_id": 10,
        "name_ar": "خضيرة عياش",
        "name_en": "Khudayrat Ayash",
        "center": [
            16.90916667,
            42.92283333
        ]
    },
    {
        "city_id": 18298,
        "region_id": 10,
        "name_ar": "المواسة",
        "name_en": "Al Mawasah",
        "center": [
            16.90193333,
            42.8652
        ]
    },
    {
        "city_id": 18305,
        "region_id": 10,
        "name_ar": "الكواملة",
        "name_en": "Al Kawamilah",
        "center": [
            16.96081667,
            42.6753
        ]
    },
    {
        "city_id": 18320,
        "region_id": 10,
        "name_ar": "خضير",
        "name_en": "Khudair",
        "center": [
            16.95881667,
            42.70541667
        ]
    },
    {
        "city_id": 18326,
        "region_id": 10,
        "name_ar": "رديس الشرقية",
        "name_en": "Radis Al Sharqiyyah",
        "center": [
            17.05126667,
            42.78626667
        ]
    },
    {
        "city_id": 18436,
        "region_id": 10,
        "name_ar": "الواسط",
        "name_en": "Al Wasit",
        "center": [
            16.54351667,
            42.85856667
        ]
    },
    {
        "city_id": 18447,
        "region_id": 10,
        "name_ar": "المقدرة",
        "name_en": "Al Maqdarah",
        "center": [
            16.65772813,
            42.79693516
        ]
    },
    {
        "city_id": 18578,
        "region_id": 10,
        "name_ar": "الركبة",
        "name_en": "Al Rukbah",
        "center": [
            16.89161777,
            43.11816684
        ]
    },
    {
        "city_id": 18634,
        "region_id": 10,
        "name_ar": "الكمب رديس",
        "name_en": "Al Kamb Radis",
        "center": [
            17.05100858,
            42.77965729
        ]
    },
    {
        "city_id": 19913,
        "region_id": 10,
        "name_ar": "عذيبه",
        "name_en": "Udhaibah",
        "center": [
            16.8393,
            42.83841667
        ]
    },
    {
        "city_id": 19920,
        "region_id": 10,
        "name_ar": "الجروف",
        "name_en": "Al Joroof",
        "center": [
            16.75476667,
            42.95553333
        ]
    },
    {
        "city_id": 19922,
        "region_id": 10,
        "name_ar": "الحوراني",
        "name_en": "Al Hurani",
        "center": [
            16.77311667,
            42.91098333
        ]
    },
    {
        "city_id": 19924,
        "region_id": 10,
        "name_ar": "الغفقيه",
        "name_en": "Al Ghafqiyah",
        "center": [
            16.76466667,
            42.86235
        ]
    },
    {
        "city_id": 19927,
        "region_id": 10,
        "name_ar": "الشعفوليه",
        "name_en": "Ash Shuafuliyah",
        "center": [
            16.7548,
            42.86226667
        ]
    },
    {
        "city_id": 19931,
        "region_id": 10,
        "name_ar": "الظبرة",
        "name_en": "Al Dhabrah",
        "center": [
            16.81521667,
            42.81475
        ]
    },
    {
        "city_id": 19963,
        "region_id": 10,
        "name_ar": "المحازره",
        "name_en": "Al Mahazirah",
        "center": [
            16.84223333,
            42.84261667
        ]
    },
    {
        "city_id": 19966,
        "region_id": 10,
        "name_ar": "العقدة",
        "name_en": "Al 'Uqdah",
        "center": [
            16.81115,
            42.73536667
        ]
    },
    {
        "city_id": 19983,
        "region_id": 10,
        "name_ar": "الخضراء",
        "name_en": "Al Khadraa",
        "center": [
            16.82325,
            42.77385
        ]
    },
    {
        "city_id": 19989,
        "region_id": 10,
        "name_ar": "المرابي",
        "name_en": "Al Marabi",
        "center": [
            16.65612778,
            42.78550912
        ]
    },
    {
        "city_id": 20463,
        "region_id": 10,
        "name_ar": "حجن",
        "name_en": "Hajan",
        "center": [
            17.40971667,
            42.98658333
        ]
    },
    {
        "city_id": 21068,
        "region_id": 10,
        "name_ar": "سمرة الجد",
        "name_en": "Samrat Al Jed",
        "center": [
            17.53913333,
            42.31235
        ]
    },
    {
        "city_id": 21167,
        "region_id": 10,
        "name_ar": "منشبة",
        "name_en": "Manshabah",
        "center": [
            17.60346667,
            42.32231667
        ]
    },
    {
        "city_id": 21168,
        "region_id": 10,
        "name_ar": "العرق",
        "name_en": "Al Arq",
        "center": [
            17.53388333,
            42.2688
        ]
    },
    {
        "city_id": 21172,
        "region_id": 10,
        "name_ar": "المباركة",
        "name_en": "Al Mubarakah",
        "center": [
            16.53575177,
            42.94269986
        ]
    },
    {
        "city_id": 21175,
        "region_id": 10,
        "name_ar": "العكرة",
        "name_en": "Alekarah",
        "center": [
            16.5574,
            42.94575
        ]
    },
    {
        "city_id": 21176,
        "region_id": 10,
        "name_ar": "الشمهانية العليا",
        "name_en": "Al Shamhaniyyah Al Ulya",
        "center": [
            16.53703333,
            42.92565
        ]
    },
    {
        "city_id": 21177,
        "region_id": 10,
        "name_ar": "الشمهانية السفلى",
        "name_en": "Al Shamhaniyyah Al Sufla",
        "center": [
            16.54,
            42.91285
        ]
    },
    {
        "city_id": 21946,
        "region_id": 12,
        "name_ar": "المي الأحمر",
        "name_en": "Al May Al Ahmar",
        "center": [
            19.95276351,
            41.48442838
        ]
    },
    {
        "city_id": 21948,
        "region_id": 12,
        "name_ar": "الغبر الاسفل",
        "name_en": "Al Ghabr Al Asfal",
        "center": [
            19.94658333,
            41.53626667
        ]
    },
    {
        "city_id": 21978,
        "region_id": 12,
        "name_ar": "المرباة",
        "name_en": "Al Marbah",
        "center": [
            19.84335,
            41.67313333
        ]
    },
    {
        "city_id": 21981,
        "region_id": 12,
        "name_ar": "الفرح",
        "name_en": "Al Farah",
        "center": [
            19.82413333,
            41.7144
        ]
    },
    {
        "city_id": 21982,
        "region_id": 12,
        "name_ar": "القمع",
        "name_en": "Al Qama",
        "center": [
            19.80053333,
            41.7203
        ]
    },
    {
        "city_id": 21984,
        "region_id": 12,
        "name_ar": "قذانه",
        "name_en": "Al Qadhanah",
        "center": [
            19.79268333,
            41.7328
        ]
    },
    {
        "city_id": 22073,
        "region_id": 12,
        "name_ar": "الفصيلة وال مسعود",
        "name_en": "Al Fasilah And Al Masud",
        "center": [
            20.28853333,
            41.21801667
        ]
    },
    {
        "city_id": 22075,
        "region_id": 12,
        "name_ar": "الخاجة",
        "name_en": "Al Khajah",
        "center": [
            20.29125,
            41.22355
        ]
    },
    {
        "city_id": 22076,
        "region_id": 12,
        "name_ar": "الحدبان",
        "name_en": "Al Hadban",
        "center": [
            20.27921667,
            41.22255
        ]
    },
    {
        "city_id": 22181,
        "region_id": 12,
        "name_ar": "القضايا",
        "name_en": "Al Qadaya",
        "center": [
            19.55406667,
            41.27746667
        ]
    },
    {
        "city_id": 22785,
        "region_id": 12,
        "name_ar": "ال سلمان",
        "name_en": "Al Salman",
        "center": [
            20.15586667,
            41.37666667
        ]
    },
    {
        "city_id": 22799,
        "region_id": 12,
        "name_ar": "الضحوات",
        "name_en": "Al-Dahwat",
        "center": [
            20.36519096,
            41.27738294
        ]
    },
    {
        "city_id": 22804,
        "region_id": 12,
        "name_ar": "سبيحة السفلى",
        "name_en": "Sabihah Al Sufla",
        "center": [
            20.3661,
            41.29945
        ]
    },
    {
        "city_id": 22816,
        "region_id": 12,
        "name_ar": "الحبشه",
        "name_en": "Al Habashah",
        "center": [
            20.28016667,
            41.32663333
        ]
    },
    {
        "city_id": 22909,
        "region_id": 12,
        "name_ar": "الفقهاء",
        "name_en": "Al Fuqaha",
        "center": [
            20.1281,
            41.3454
        ]
    },
    {
        "city_id": 22916,
        "region_id": 12,
        "name_ar": "الغرباء والاثمة",
        "name_en": "Al Gharaba Wal Athimmah",
        "center": [
            20.12841667,
            41.35186667
        ]
    },
    {
        "city_id": 22920,
        "region_id": 12,
        "name_ar": "الصدر",
        "name_en": "As Sadr",
        "center": [
            20.11776667,
            41.35101667
        ]
    },
    {
        "city_id": 22921,
        "region_id": 12,
        "name_ar": "الشريق",
        "name_en": "Al Shareeq",
        "center": [
            20.12401667,
            41.34871667
        ]
    },
    {
        "city_id": 23385,
        "region_id": 13,
        "name_ar": "ابورواث",
        "name_en": "Aburawas",
        "center": [
            29.75041667,
            41.21321667
        ]
    },
    {
        "city_id": 23386,
        "region_id": 13,
        "name_ar": "هديب",
        "name_en": "Hedeb",
        "center": [
            30.0551,
            40.39471667
        ]
    },
    {
        "city_id": 23388,
        "region_id": 13,
        "name_ar": "الحرة",
        "name_en": "Al Harrah",
        "center": [
            30.94808333,
            39.53411667
        ]
    },
    {
        "city_id": 23408,
        "region_id": 13,
        "name_ar": "أطناب",
        "name_en": "Athnab",
        "center": [
            29.04625,
            40.32861667
        ]
    },
    {
        "city_id": 23416,
        "region_id": 13,
        "name_ar": "بسيطاء",
        "name_en": "Basithah",
        "center": [
            30.33003333,
            38.04361667
        ]
    },
    {
        "city_id": 23419,
        "region_id": 8,
        "name_ar": "شفا البين",
        "name_en": "Shafa Albayn",
        "center": [
            27.73863654,
            40.59868035
        ]
    },
    {
        "city_id": 23420,
        "region_id": 4,
        "name_ar": "ابرقية",
        "name_en": "Abraqiyah",
        "center": [
            25.28457282,
            42.86535111
        ]
    },
    {
        "city_id": 23633,
        "region_id": 6,
        "name_ar": "بني عمرو",
        "name_en": "Bani Amru",
        "center": [
            19.3804665,
            42.0382399
        ]
    },
    {
        "city_id": 23640,
        "region_id": 2,
        "name_ar": "العرضية الجنوبية",
        "name_en": "Al Ardhiyah Al Janubiyah",
        "center": [
            19.44850079,
            41.82855061
        ]
    },
    {
        "city_id": 23641,
        "region_id": 2,
        "name_ar": "العرضيات",
        "name_en": "Al Ardhiyat",
        "center": [
            19.41604388,
            41.74531637
        ]
    },
    {
        "city_id": 23642,
        "region_id": 2,
        "name_ar": "العرضية الشمالية",
        "name_en": "Al Ardhiyah Al Shimaliyah",
        "center": [
            19.5780927,
            41.6655763
        ]
    },
    {
        "city_id": 23660,
        "region_id": 2,
        "name_ar": "بطاط",
        "name_en": "Batat",
        "center": [
            19.6734506,
            41.5453607
        ]
    },
    {
        "city_id": 23694,
        "region_id": 1,
        "name_ar": "الجوي",
        "name_en": "Al Juwy",
        "center": [
            23.82289015,
            45.04817418
        ]
    },
    {
        "city_id": 23695,
        "region_id": 8,
        "name_ar": "السياييل",
        "name_en": "Al Sayayil",
        "center": [
            25.84130057,
            40.58890654
        ]
    }
];
/** index page*/
const clintBox = document.getElementById('clint-box');
const packageBox = document.getElementById('package-box');
const boxes = [clintBox, packageBox];

const showBox = (boxId) => {
    const box = document.getElementById(`${boxId}`);
    boxes.forEach(b => {
        b.classList.add('d-none');
    })
    box.classList.remove('d-none');
}
/**end indexe page */
/* signup page */
const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const submitForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    const email = document.getElementById('email');
    const street = document.getElementById('street');
    const location = document.getElementById('location');
    if (password1.value == null || password1.value == "", password2.value == null || password2.value == "", name.value == null || name.value == "",
        number.value == null || number.value == "", email.value == null || email.value == "", street.value == null || street.value == "", location.value == null || location.value == "") {
        alert("كل الحقول مطلوبة")
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
        name.style.border = '2px solid red';
        number.style.border = '2px solid red';
        email.style.border = '2px solid red';
        street.style.border = '2px solid red';
        location.style.border = '2px solid red';
        return false
    }
    if (name.value.length < 4) {
        alert('اسم المتجر يجب ان يكون اكبر من 4 حروف')
        name.style.border = '2px solid red';
        return false
    }
    if (!email.value.match(validEmailRegex)) {
        alert('يجب كتابة بريد الكتروني صحيح')
        email.style.border = '2px solid red';
        return false
    }
    if (password1.value != password2.value) {
        alert('كلمة المرور غير مطتابقة!');
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
        return false;
    }
    if (password1.value.length < 8) {
        alert('كلمة المرور قصيرة !');
        password1.style.border = '2px solid red';
        return false
    }
    if (number.value.length != 12) {
        alert('يجب كتابة رقم جوال صحيح');
        number.style.border = '2px solid red';
        return false
    }
    if (street.value.length < 10) {
        alert('العنوان قصير جدا!')
        street.style.border = '2px solid red';
        return false
    }
    if (location.value.length < 10) {
        alert('الموقع قصير جدا!')
        location.style.border = '2px solid red';
        return false
    }
    myForm.submit();
}
const changePasswordVisabality = (id) => {
    const input = document.getElementById(id);
    if (input.type == 'password') {
        return input.type = 'text';
    } else {
        return input.type = 'password';
    }
}
const locationInput = document.getElementById('location');
locationInput.addEventListener('keyup', () => {
    let payload = locationInput.value;
    var condition = new RegExp(payload);
    const resultBox = document.getElementById('cities');
    const liResult = Array.from(document.getElementsByClassName('search-result'));
    if (liResult.length > 0) {
        resultBox.innerHTML = "";
    }
    var result = cities.filter(function (el) {
        return condition.test(el.name_ar);
    });
    if (result.length > 0) {
        resultBox.classList.remove('d-none');
        for (let i = 0; i <= 10; i++) {
            const li = document.createElement('li');
            li.classList = 'list-group-item search-result';
            li.setAttribute('onclick', 'chooseCity(this)')
            li.innerHTML = result[i].name_ar;
            resultBox.appendChild(li)
        }
    }
})
const chooseCity = (city) => {
    locationInput.value = city.innerHTML;
}
/* end signup page */
/* login page */
const submitLoginForm = () => {
    const myForm = document.getElementById('myForm');
    const password1 = document.getElementById('password1').value;
    const email = document.getElementById('email').value;
    if (password1 == null || password1 == "", email == null || email == "") {
        alert("كل الحقول مطلوبة")
        return false
    }
    if (!email.match(validEmailRegex)) {
        alert('يجب كتابة بريد الكتروني صحيح')
        return false
    }
    myForm.submit();
}
/* end login page */
/* client  page */
const removeClient = (id, name) => {
    if (confirm(`سيتم حذف بينات العميل : ${name} نهائيا`)) {
        fetch(`/remove-client/${id}`)
            .then(res => {
                location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
}
const resultBox = document.getElementById('searchResult');
const createSearchResult = (id, title) => {
    const myLi = document.createElement('li');
    myLi.classList.add('list-group-item');
    const content = `${title}<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-primary" data-bs-toggle="modal"data-bs-target="#edit-clint-modal${id}">عرض/تعديل</button><button type="button" class="btn btn-danger"onclick="removeClient('${id}', '${title}')">حذف</button></div>`
    myLi.innerHTML = content
    resultBox.appendChild(myLi)
}
const sendSerch = (e) => {
    if (e.value !== '') {
        fetch('/get-search-client-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: e.value })
        }).then(res => {
            return res.json()
        }).then(data => {
            let payload = data.payload;
            resultBox.innerHTML = ' ';
            payload.forEach(p => {
                createSearchResult(p._id, p.name);
            });
        }).catch(err => {
            console.log(err)
        })
    } else {
        resultBox.innerHTML = ' ';
    }
}
/* end client page */