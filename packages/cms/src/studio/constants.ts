import { MetricName } from '@corona-dashboard/common';
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from 'react-icons/bs';

// By mapping the metric name to a title we can make the UI a little more user-friendly.
export const titleByMetricName: Partial<Record<MetricName, string>> = {
  behavior_annotations_archived_20230412: 'Gedrag - Annotaties',
  behavior_archived_20230411: 'Gedrag (archief per 19-10-2022)',
  behavior_per_age_group_archived_20230411: 'Gedrag (per leeftijd)',
  booster_coverage_archived_20220904: 'Vaccinatiegraad (booster) (archief per 04-09-2022)',
  booster_shot_administered_archived_20220904: 'Gezette prikken (booster) (archief per 04-09-2022)',
  corona_melder_app_download: 'Coronamelder - Downloads',
  corona_melder_app_warning: 'Coronamelder - Waarschuwingen door de tijd heen',
  deceased_cbs: 'Sterfte (CBS)',
  deceased_rivm_archived_20221231: 'Sterfte (RIVM)',
  deceased_rivm_per_age_group_archived_20221231: 'Sterfte (per leeftijd) (RIVM) (archief per 31-12-2022)',
  difference: 'Verschil',
  disability_care_archived_20230126: 'Gehandicaptenzorg',
  doctor_archived_20210903: 'Huisartsen',
  elderly_at_home_archived_20230126: '70-plussers',
  g_number: 'Ontwikkeling aantal positieve testen',
  hospital_lcps: 'Ziekenhuisopnames (LCPS)',
  hospital_nice_per_age_group: 'Ziekenhuisopnames (per leeftijd) (NICE)',
  hospital_nice: 'Ziekenhuisopnames (NICE)',
  infectious_people: 'Besmettelijke mensen',
  intensive_care_lcps: 'IC-opnames (LCPS)',
  intensive_care_nice_per_age_group: 'IC-opnames (per leeftijd) (NICE)',
  intensive_care_nice: 'IC-opnames (NICE)',
  named_difference: 'Verschil',
  nursing_home_archived_20230126: 'Verpleeghuizen',
  repeating_shot_administered: 'Gezette herhaalprikken',
  reproduction_archived_20230711: 'Reproductiegetal',
  self_test_overall: 'Zelfgerapporteerde positieve coronatestuitslagen',
  sewer_per_installation: 'Virusdeeltjes in rioolwater',
  sewer: 'Rioolwater metingen',
  static_values: 'Statische waarden',
  tested_ggd_archived: "Positief geteste mensen (GGD'en) (archief)",
  tested_ggd: "Positief geteste mensen (GGD'en)",
  tested_overall: 'Positief geteste mensen',
  tested_per_age_group: 'Positief getest (per leeftijd)',
  vaccine_administered_doctors: 'Gezette prikken (huisartsen)',
  vaccine_administered_ggd_ghor: "Gezette prikken (GGD'en)",
  vaccine_administered_ggd: "Gezette prikken (GGD'en)",
  vaccine_administered_hospitals_and_care_institutions: 'Gezette prikken in instellingen (inclusief ziekenhuizen)',
  vaccine_administered_planned: 'Gepland aantal te zetten prikken',
  vaccine_administered_total: 'Totaal aantal gezette prikken',
  vaccine_administered: 'Gezette prikken',
  vaccine_campaigns_archived_20220908: 'Vaccinatie campagnes (archief per 08-09-2022)',
  vaccine_campaigns: 'Vaccinatie campagnes',
  vaccine_coverage_per_age_group_archived_20220908: 'Vaccinatiegraad (per leeftijd) (archief per 08-09-2022)',
  vaccine_coverage_per_age_group_archived: 'Vaccinatiegraad (per leeftijd) (archief)',
  vaccine_coverage_per_age_group_estimated_archived_20220908: 'Vaccinatiegraad berekend (per leeftijd) (archief 08-09-2022)',
  vaccine_coverage_per_age_group_estimated_autumn_2022: 'Vaccinatiegraad herfst 2022 booster berekend (per leeftijd)',
  vaccine_coverage_per_age_group_estimated_fully_vaccinated: 'Vaccinatiegraad basisserie berekend (per leeftijd)',
  vaccine_coverage_per_age_group: 'Vaccinatiegraad (per leeftijd)',
  vaccine_coverage: 'Vaccinatiegraad',
  vaccine_delivery_estimate: 'Vaccinleveringen berekend',
  vaccine_delivery_per_supplier: 'Vaccinleveringen per leverancier',
  vaccine_planned_archived_20220908: 'Geplande prikken (archief per 09-08-2022)',
  vaccine_stock: 'Vaccinvoorraad',
  vaccine_vaccinated_or_support: 'Vaccinatiebereidheid of reeds gevaccineerd',
  variants: 'Varianten van het virus',
  vulnerable_hospital_admissions_archived_20230711: 'Kwetsbare groepen - Ziekenhuisopnames',
  vulnerable_nursing_home_archived_20230711: 'Kwetsbare groepen - Verpleeg- en verzorgingshuizen',
  vulnerable_tested_per_age_group: 'Kwetsbare groepen - Positieve testen (per leeftijd)',
};

// By mapping the element type to a title we can make the UI a little more user-friendly.
export const titleByElementType: Record<string, string> = {
  timeSeries: 'Grafiek',
};

export const SEVERITY_LEVELS_LIST = [1, 2, 3, 4];
export const thermometerLevelPreviewMedia = [Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle];

export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_FORMAT = 'HH:mm';
export const DAYS_OF_THE_WEEK_LIST = [
  {
    title: 'Zondag',
    value: 0,
  },
  {
    title: 'Maandag',
    value: 1,
  },
  {
    title: 'Dinsdag',
    value: 2,
  },
  {
    title: 'Woensdag',
    value: 3,
  },
  {
    title: 'Donderdag',
    value: 4,
  },
  {
    title: 'Vrijdag',
    value: 5,
  },
  {
    title: 'Zaterdag',
    value: 6,
  },
];

export const RELATIVE_SCHEMA_PATH = '../../../app/schema';
