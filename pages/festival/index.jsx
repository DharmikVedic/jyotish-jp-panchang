import React, {useCallback, useEffect, useState} from "react";
import FestivalFormdata from "../../components/festival/festivalFilter";
import {FetchAPI} from "../../components/utils/fetchapi";
import Loader from "../../components/utils/loader";
import FeativalYearCard from "../../components/festival/festivalCard";


const datas = {
    "status": true,
    "festivals": [
        {
            "id": 4788,
            "year": 1910,
            "month": 1,
            "date": 7,
            "festival": "Saphala Ekadashi",
            "festival_key": "SAPHALA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4797,
            "year": 1910,
            "month": 1,
            "date": 14,
            "festival": "Makar Sankranti",
            "festival_key": "MAKAR_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 4798,
            "year": 1910,
            "month": 1,
            "date": 14,
            "festival": "Pongal",
            "festival_key": "PONGAL",
            "region": "Tamil"
        },
        {
            "id": 4805,
            "year": 1910,
            "month": 1,
            "date": 21,
            "festival": "Pausha Putrada Ekadashi",
            "festival_key": "PAUSHA_PUTRADA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4810,
            "year": 1910,
            "month": 1,
            "date": 25,
            "festival": "Paush Purnima",
            "festival_key": "PAUSH_PURNIMA",
            "region": "Common"
        },
        {
            "id": 4815,
            "year": 1910,
            "month": 1,
            "date": 28,
            "festival": "Sakat Chauth",
            "festival_key": "SAKAT_CHAUTH",
            "region": "Common"
        },
        {
            "id": 4819,
            "year": 1910,
            "month": 2,
            "date": 6,
            "festival": "Shattila Ekadashi",
            "festival_key": "SHATTILA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4823,
            "year": 1910,
            "month": 2,
            "date": 9,
            "festival": "Mauni Amavas",
            "festival_key": "MAUNI_AMAVAS",
            "region": "Common"
        },
        {
            "id": 4827,
            "year": 1910,
            "month": 2,
            "date": 12,
            "festival": "Kumbha Sankranti",
            "festival_key": "KUMBHA_SANKRANTI",
            "region": ""
        },
        {
            "id": 4831,
            "year": 1910,
            "month": 2,
            "date": 14,
            "festival": "Vasant Panchami",
            "festival_key": "VASANT_PANCHAMI",
            "region": "Common"
        },
        {
            "id": 4832,
            "year": 1910,
            "month": 2,
            "date": 16,
            "festival": "Bhishma Ashtami",
            "festival_key": "BHISHMA_ASHTAMI",
            "region": "Common"
        },
        {
            "id": 4838,
            "year": 1910,
            "month": 2,
            "date": 20,
            "festival": "Jaya Ekadashi",
            "festival_key": "JAYA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4848,
            "year": 1910,
            "month": 3,
            "date": 4,
            "festival": "Janaki Jayanti",
            "festival_key": "JANAKI_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4851,
            "year": 1910,
            "month": 3,
            "date": 9,
            "festival": "Maha Shivaratri",
            "festival_key": "MAHA_SHIVRATRI",
            "region": "Common"
        },
        {
            "id": 4858,
            "year": 1910,
            "month": 3,
            "date": 14,
            "festival": "Meena Sankranti",
            "festival_key": "MEENA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 4864,
            "year": 1910,
            "month": 3,
            "date": 21,
            "festival": "Amalaki Ekadashi",
            "festival_key": "AMALAKI_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4868,
            "year": 1910,
            "month": 3,
            "date": 25,
            "festival": "Chhoti Holi",
            "festival_key": "CHHOTI_HOLI",
            "region": "Common"
        },
        {
            "id": 4870,
            "year": 1910,
            "month": 3,
            "date": 25,
            "festival": "Holika Dahan",
            "festival_key": "HOLIKA_DAHAN",
            "region": "Common"
        },
        {
            "id": 4875,
            "year": 1910,
            "month": 3,
            "date": 25,
            "festival": "Vasanta Purnima",
            "festival_key": "VASANTA_PURNIMA",
            "region": "Common"
        },
        {
            "id": 4876,
            "year": 1910,
            "month": 3,
            "date": 26,
            "festival": "Holi",
            "festival_key": "HOLI",
            "region": "Common"
        },
        {
            "id": 4877,
            "year": 1910,
            "month": 3,
            "date": 27,
            "festival": "Bhai Dooj",
            "festival_key": "BHAI_DOOJ",
            "region": "Common"
        },
        {
            "id": 4885,
            "year": 1910,
            "month": 4,
            "date": 3,
            "festival": "Basoda",
            "festival_key": "BASODA",
            "region": "Common"
        },
        {
            "id": 4886,
            "year": 1910,
            "month": 4,
            "date": 3,
            "festival": "Sheetala Ashtami",
            "festival_key": "SHEETALA_ASHATAMI",
            "region": "Common"
        },
        {
            "id": 4887,
            "year": 1910,
            "month": 4,
            "date": 6,
            "festival": "Papmochani Ekadashi",
            "festival_key": "PAPMOCHANI_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4891,
            "year": 1910,
            "month": 4,
            "date": 10,
            "festival": "Chaitra Navratri",
            "festival_key": "CHAITRA_NAVRATRI",
            "region": "Common"
        },
        {
            "id": 4892,
            "year": 1910,
            "month": 4,
            "date": 10,
            "festival": "Gudi Padwa",
            "festival_key": "GUDI_PADWA",
            "region": "Marathi"
        },
        {
            "id": 4893,
            "year": 1910,
            "month": 4,
            "date": 10,
            "festival": "Ugadi",
            "festival_key": "UGADI",
            "region": "Telugu"
        },
        {
            "id": 4896,
            "year": 1910,
            "month": 4,
            "date": 12,
            "festival": "Gangaur",
            "festival_key": "GANGAUR",
            "region": "Common"
        },
        {
            "id": 4897,
            "year": 1910,
            "month": 4,
            "date": 12,
            "festival": "Gauri Puja",
            "festival_key": "GAURI_PUJA",
            "region": "Common"
        },
        {
            "id": 4902,
            "year": 1910,
            "month": 4,
            "date": 13,
            "festival": "Mesha Sankranti",
            "festival_key": "MESHA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 4905,
            "year": 1910,
            "month": 4,
            "date": 13,
            "festival": "Solar New Year",
            "festival_key": "SOLAR_NEW_YEAR",
            "region": "Common"
        },
        {
            "id": 4911,
            "year": 1910,
            "month": 4,
            "date": 15,
            "festival": "Yamuna Chhath",
            "festival_key": "YAMUNA_CHHATH",
            "region": ""
        },
        {
            "id": 4913,
            "year": 1910,
            "month": 4,
            "date": 17,
            "festival": "Rama Navami",
            "festival_key": "RAMA_NAVAMI",
            "region": "Common"
        },
        {
            "id": 4914,
            "year": 1910,
            "month": 4,
            "date": 20,
            "festival": "Kamada Ekadashi",
            "festival_key": "KAMADA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4920,
            "year": 1910,
            "month": 4,
            "date": 24,
            "festival": "Hanuman Jayanti",
            "festival_key": "HANUMAN_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4925,
            "year": 1910,
            "month": 5,
            "date": 5,
            "festival": "Varuthini Ekadashi",
            "festival_key": "VARUTHINI_EKADASHI",
            "region": "Tamil"
        },
        {
            "id": 4936,
            "year": 1910,
            "month": 5,
            "date": 11,
            "festival": "Akshaya Tritiya",
            "festival_key": "AKSHAYA_TRITIYA",
            "region": "Common"
        },
        {
            "id": 4937,
            "year": 1910,
            "month": 5,
            "date": 11,
            "festival": "Parashurama Jayanti",
            "festival_key": "PARASHURAMA_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4944,
            "year": 1910,
            "month": 5,
            "date": 14,
            "festival": "Vrishabha Sankranti",
            "festival_key": "VRISHABHA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 4947,
            "year": 1910,
            "month": 5,
            "date": 17,
            "festival": "Sita Navami",
            "festival_key": "SITA_NAVAMI",
            "region": "Common"
        },
        {
            "id": 4948,
            "year": 1910,
            "month": 5,
            "date": 19,
            "festival": "Mohini Ekadashi",
            "festival_key": "MOHINI_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4951,
            "year": 1910,
            "month": 5,
            "date": 22,
            "festival": "Narasimha Jayanti",
            "festival_key": "NARASIMHA_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4955,
            "year": 1910,
            "month": 5,
            "date": 24,
            "festival": "Buddha Purnima",
            "festival_key": "BUDDHA_PURNIMA",
            "region": "Common"
        },
        {
            "id": 4956,
            "year": 1910,
            "month": 5,
            "date": 24,
            "festival": "Chandra Grahan",
            "festival_key": "CHANDRA_GRAHAN",
            "region": "Common"
        },
        {
            "id": 4961,
            "year": 1910,
            "month": 6,
            "date": 3,
            "festival": "Apara Ekadashi",
            "festival_key": "APARA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4970,
            "year": 1910,
            "month": 6,
            "date": 7,
            "festival": "Shani Jayanti",
            "festival_key": "SHANI_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4971,
            "year": 1910,
            "month": 6,
            "date": 7,
            "festival": "Vat Savitri Vrat",
            "festival_key": "VAT_SAVITRI_VRAT",
            "region": "Common"
        },
        {
            "id": 4976,
            "year": 1910,
            "month": 6,
            "date": 14,
            "festival": "Mithuna Sankranti",
            "festival_key": "MITHUNA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 4980,
            "year": 1910,
            "month": 6,
            "date": 18,
            "festival": "Gayatri Jayanti",
            "festival_key": "GAYATRI_JAYANTI",
            "region": "Common"
        },
        {
            "id": 4981,
            "year": 1910,
            "month": 6,
            "date": 18,
            "festival": "Nirjala Ekadashi",
            "festival_key": "NIRJALA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4987,
            "year": 1910,
            "month": 6,
            "date": 22,
            "festival": "Vat Purnima Vrat",
            "festival_key": "VAT_PURNIMA_VRAT",
            "region": "Common"
        },
        {
            "id": 4991,
            "year": 1910,
            "month": 7,
            "date": 3,
            "festival": "Yogini Ekadashi",
            "festival_key": "YOGINI_EKADASHI",
            "region": "Common"
        },
        {
            "id": 4998,
            "year": 1910,
            "month": 7,
            "date": 8,
            "festival": "Jagannath Rathyatra",
            "festival_key": "JAGANNATH_RATHYATRA",
            "region": "Odisha"
        },
        {
            "id": 5002,
            "year": 1910,
            "month": 7,
            "date": 16,
            "festival": "Karka Sankranti",
            "festival_key": "KARKA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5003,
            "year": 1910,
            "month": 7,
            "date": 18,
            "festival": "Devshayani Ekadashi",
            "festival_key": "DEVSHAYANI_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5010,
            "year": 1910,
            "month": 7,
            "date": 22,
            "festival": "Guru Purnima",
            "festival_key": "GURU_PURNIMA",
            "region": "Common"
        },
        {
            "id": 5018,
            "year": 1910,
            "month": 8,
            "date": 1,
            "festival": "Kamika Ekadashi",
            "festival_key": "KAMIKA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5029,
            "year": 1910,
            "month": 8,
            "date": 8,
            "festival": "Hariyali Teej",
            "festival_key": "HARIYALI_TEEJ",
            "region": ""
        },
        {
            "id": 5034,
            "year": 1910,
            "month": 8,
            "date": 10,
            "festival": "Nag Panchami",
            "festival_key": "NAG_PANCHAMI",
            "region": "Common"
        },
        {
            "id": 5041,
            "year": 1910,
            "month": 8,
            "date": 16,
            "festival": "Shravana Putrada Ekadashi",
            "festival_key": "SHRAVANA_PUTRADA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5042,
            "year": 1910,
            "month": 8,
            "date": 16,
            "festival": "Simha Sankranti",
            "festival_key": "SIMHA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5045,
            "year": 1910,
            "month": 8,
            "date": 19,
            "festival": "Onam",
            "festival_key": "ONAM",
            "region": "Malayalam"
        },
        {
            "id": 5047,
            "year": 1910,
            "month": 8,
            "date": 19,
            "festival": "Varalakshmi Vrat",
            "festival_key": "VARALAKSHAMI_VRAT",
            "region": "Common"
        },
        {
            "id": 5048,
            "year": 1910,
            "month": 8,
            "date": 20,
            "festival": "Gayatri Jayanti",
            "festival_key": "GAYATRI_JAYANTI",
            "region": "Common"
        },
        {
            "id": 5050,
            "year": 1910,
            "month": 8,
            "date": 20,
            "festival": "Narali Purnima",
            "festival_key": "NARALI_PURNIMA",
            "region": "Common"
        },
        {
            "id": 5052,
            "year": 1910,
            "month": 8,
            "date": 20,
            "festival": "Rakhi",
            "festival_key": "RAKHI",
            "region": "Common"
        },
        {
            "id": 5053,
            "year": 1910,
            "month": 8,
            "date": 20,
            "festival": "Raksha Bandhan",
            "festival_key": "RAKSHA_BANDHAN",
            "region": "Common"
        },
        {
            "id": 5059,
            "year": 1910,
            "month": 8,
            "date": 23,
            "festival": "Kajari Teej",
            "festival_key": "KAJARI_TEEJ",
            "region": ""
        },
        {
            "id": 5067,
            "year": 1910,
            "month": 8,
            "date": 27,
            "festival": "Janmashtami *Smarta",
            "festival_key": "JANMASHTAMI",
            "region": "Common"
        },
        {
            "id": 5070,
            "year": 1910,
            "month": 8,
            "date": 28,
            "festival": "Janmashtami *ISKCON",
            "festival_key": "JANMASHTAMI",
            "region": "Common"
        },
        {
            "id": 5072,
            "year": 1910,
            "month": 8,
            "date": 30,
            "festival": "Aja Ekadashi",
            "festival_key": "AJA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5078,
            "year": 1910,
            "month": 9,
            "date": 6,
            "festival": "Hartalika Teej",
            "festival_key": "HARTALIKA_TEEJ",
            "region": ""
        },
        {
            "id": 5081,
            "year": 1910,
            "month": 9,
            "date": 7,
            "festival": "Ganesh Chaturthi",
            "festival_key": "GANESH_CHATURTHI",
            "region": "Common"
        },
        {
            "id": 5082,
            "year": 1910,
            "month": 9,
            "date": 8,
            "festival": "Rishi Panchami",
            "festival_key": "RISHI_PANCHAMI",
            "region": "Common"
        },
        {
            "id": 5086,
            "year": 1910,
            "month": 9,
            "date": 11,
            "festival": "Gauri Puja",
            "festival_key": "GAURI_PUJA",
            "region": "Common"
        },
        {
            "id": 5091,
            "year": 1910,
            "month": 9,
            "date": 15,
            "festival": "Parsva Ekadashi",
            "festival_key": "PARSVA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5092,
            "year": 1910,
            "month": 9,
            "date": 16,
            "festival": "Kanya Sankranti",
            "festival_key": "KANYA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5095,
            "year": 1910,
            "month": 9,
            "date": 16,
            "festival": "Vishwakarma Puja",
            "festival_key": "VISHWAKARMA_PUJA",
            "region": ""
        },
        {
            "id": 5096,
            "year": 1910,
            "month": 9,
            "date": 18,
            "festival": "Anant Chaturdashi",
            "festival_key": "ANANT_CHATURDASHI",
            "region": "Common"
        },
        {
            "id": 5097,
            "year": 1910,
            "month": 9,
            "date": 18,
            "festival": "Ganesh Visarjan",
            "festival_key": "GANESH_VISARJAN",
            "region": "Common"
        },
        {
            "id": 5119,
            "year": 1910,
            "month": 9,
            "date": 29,
            "festival": "Indira Ekadashi",
            "festival_key": "INDIRA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5129,
            "year": 1910,
            "month": 10,
            "date": 4,
            "festival": "Ghatasthapana",
            "festival_key": "GHATASTHAPANA",
            "region": ""
        },
        {
            "id": 5130,
            "year": 1910,
            "month": 10,
            "date": 4,
            "festival": "Navratri Begins",
            "festival_key": "NAVRATRI_BEGINS",
            "region": "Common"
        },
        {
            "id": 5138,
            "year": 1910,
            "month": 10,
            "date": 10,
            "festival": "Saraswati Avahan",
            "festival_key": "SARASWATI_AVAHAN",
            "region": "Common"
        },
        {
            "id": 5139,
            "year": 1910,
            "month": 10,
            "date": 11,
            "festival": "Saraswati Puja",
            "festival_key": "SARASWATI_PUJA",
            "region": "Common"
        },
        {
            "id": 5140,
            "year": 1910,
            "month": 10,
            "date": 12,
            "festival": "Durga Ashtami",
            "festival_key": "DURGA_ASHTAMI",
            "region": "Common"
        },
        {
            "id": 5141,
            "year": 1910,
            "month": 10,
            "date": 12,
            "festival": "Maha Navami",
            "festival_key": "MAHA_NAVAMI",
            "region": "Common"
        },
        {
            "id": 5149,
            "year": 1910,
            "month": 10,
            "date": 13,
            "festival": "Dussehra",
            "festival_key": "DUSSEHRA",
            "region": "Common"
        },
        {
            "id": 5151,
            "year": 1910,
            "month": 10,
            "date": 13,
            "festival": "Vijayadashami",
            "festival_key": "VIJAYADASHAMI",
            "region": "Common"
        },
        {
            "id": 5155,
            "year": 1910,
            "month": 10,
            "date": 14,
            "festival": "Papankusha Ekadashi",
            "festival_key": "PAPANKUSHA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5161,
            "year": 1910,
            "month": 10,
            "date": 17,
            "festival": "Sharad Purnima",
            "festival_key": "SHARAD_PURNIMA",
            "region": "Common"
        },
        {
            "id": 5162,
            "year": 1910,
            "month": 10,
            "date": 17,
            "festival": "Tula Sankranti",
            "festival_key": "TULA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5169,
            "year": 1910,
            "month": 10,
            "date": 21,
            "festival": "Karwa Chauth",
            "festival_key": "KARWA_CHAUTH",
            "region": ""
        },
        {
            "id": 5172,
            "year": 1910,
            "month": 10,
            "date": 24,
            "festival": "Ahoi Ashtami",
            "festival_key": "AHOI_ASHTAMI",
            "region": "Common"
        },
        {
            "id": 5175,
            "year": 1910,
            "month": 10,
            "date": 28,
            "festival": "Rama Ekadashi",
            "festival_key": "RAMA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5176,
            "year": 1910,
            "month": 10,
            "date": 29,
            "festival": "Govatsa Dwadashi",
            "festival_key": "GOVATSA_DWADASHI",
            "region": "Common"
        },
        {
            "id": 5177,
            "year": 1910,
            "month": 10,
            "date": 30,
            "festival": "Dhan Teras",
            "festival_key": "DHANTERAS",
            "region": "Common"
        },
        {
            "id": 5181,
            "year": 1910,
            "month": 10,
            "date": 31,
            "festival": "Kali Chaudas",
            "festival_key": "KALI_CHAUDAS",
            "region": "Common"
        },
        {
            "id": 5183,
            "year": 1910,
            "month": 10,
            "date": 31,
            "festival": "Narak Chaturdashi",
            "festival_key": "NARAK_CHATURDASHI",
            "region": "Common"
        },
        {
            "id": 5186,
            "year": 1910,
            "month": 11,
            "date": 1,
            "festival": "Diwali",
            "festival_key": "DIWALI",
            "region": "Common"
        },
        {
            "id": 5190,
            "year": 1910,
            "month": 11,
            "date": 1,
            "festival": "Lakshmi Puja",
            "festival_key": "LAKSHMI_PUJA",
            "region": "Common"
        },
        {
            "id": 5194,
            "year": 1910,
            "month": 11,
            "date": 2,
            "festival": "Gowardhan Puja",
            "festival_key": "GOWARDHAN_PUJA",
            "region": "Common"
        },
        {
            "id": 5196,
            "year": 1910,
            "month": 11,
            "date": 3,
            "festival": "Bhaiya Dooj",
            "festival_key": "BHAIYA_DOOJ",
            "region": "Common"
        },
        {
            "id": 5203,
            "year": 1910,
            "month": 11,
            "date": 8,
            "festival": "Chhath Puja",
            "festival_key": "CHHATH_PUJA",
            "region": ""
        },
        {
            "id": 5208,
            "year": 1910,
            "month": 11,
            "date": 11,
            "festival": "Jagaddhatri Puja",
            "festival_key": "JAGADDHATRI_PUJA",
            "region": "Common"
        },
        {
            "id": 5209,
            "year": 1910,
            "month": 11,
            "date": 12,
            "festival": "Kansa Vadh",
            "festival_key": "KANSA_VADH",
            "region": "Common"
        },
        {
            "id": 5210,
            "year": 1910,
            "month": 11,
            "date": 13,
            "festival": "Devutthana Ekadashi",
            "festival_key": "DEVUTTHANA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5213,
            "year": 1910,
            "month": 11,
            "date": 14,
            "festival": "Tulasi Vivah",
            "festival_key": "TULASI_VIVAH",
            "region": "Common"
        },
        {
            "id": 5215,
            "year": 1910,
            "month": 11,
            "date": 16,
            "festival": "Chandra Grahan",
            "festival_key": "CHANDRA_GRAHAN",
            "region": "Common"
        },
        {
            "id": 5221,
            "year": 1910,
            "month": 11,
            "date": 16,
            "festival": "Vrischika Sankranti",
            "festival_key": "VRISCHIKA_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5225,
            "year": 1910,
            "month": 11,
            "date": 23,
            "festival": "Kalabhairav Jayanti",
            "festival_key": "KALABHAIRAV_JAYANTI",
            "region": "Common"
        },
        {
            "id": 5226,
            "year": 1910,
            "month": 11,
            "date": 27,
            "festival": "Utpanna Ekadashi",
            "festival_key": "UTPANNA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5236,
            "year": 1910,
            "month": 12,
            "date": 12,
            "festival": "Gita Jayanti",
            "festival_key": "GITA_JAYANTI",
            "region": "Common"
        },
        {
            "id": 5237,
            "year": 1910,
            "month": 12,
            "date": 12,
            "festival": "Mokshada Ekadashi",
            "festival_key": "MOKSHADA_EKADASHI",
            "region": "Common"
        },
        {
            "id": 5245,
            "year": 1910,
            "month": 12,
            "date": 15,
            "festival": "Dhanu Sankranti",
            "festival_key": "DHANU_SANKRANTI",
            "region": "Common"
        },
        {
            "id": 5248,
            "year": 1910,
            "month": 12,
            "date": 16,
            "festival": "Dattatreya Jayanti",
            "festival_key": "DATTATREYA_JAYANTI",
            "region": "Common"
        },
        {
            "id": 5256,
            "year": 1910,
            "month": 12,
            "date": 27,
            "festival": "Saphala Ekadashi",
            "festival_key": "SAPHALA_EKADASHI",
            "region": "Common"
        }
    ]
}


export default function Festival(){
    const dateobj = new Date();
    const [loader,setloader] = useState(false);
    const [data,setdata] = useState([]);
    const [year,setyear] = useState(dateobj.getFullYear());

    useEffect(()=>{
        let mouted = true;
        if(mouted) {
            let arr = [];
            const monthFilter = [...Array(12)].map((item, i) => {
                let obj = {};
                let filterArr = datas.festivals.filter(val => val.month == i + 1);
                obj[i + 1] = filterArr
                arr.push(filterArr);
            });
            setdata(arr);
        }
        return()=> {mouted = false};
    },[]);


    const Apicall =async(input)=>{
        setloader(true);
        const panchang = await FetchAPI("",input);
        setdata("");
        setloader(false);
    }



    const getdata = useCallback(async (datestring, res)=>{
        //setinput(prev => ({...prev, ...res }));
        setyear(datestring)
        //Apicall({...input,...res,...tzoneval});
    },[]);




    return(
        <div>
<FestivalFormdata getinput={getdata} />
            {loader ?
                <div className="mt-[100px]">
                    <Loader/>
                </div>
                :
                <div className="bg-zinc-100 pt-10 pb-20 min-h-screen">
                <div className="max-w-4xl flex flex-col gap-5 mx-auto px-5">
                    {data?.map((item,i)=>{
                        return(
                            <FeativalYearCard year={2022} festival={item} monthName={mL[i]} key={i}/>
                        )
                    }
                    )}
                </div>
                </div>
            }
        </div>
    )
}

export const weekDay =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const hindiWeekDay = ['रबिवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार']
export const  mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
