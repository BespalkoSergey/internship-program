export const VACANCY = {
    "id": 9065556,
    "name": "Front-end developer",
    "logo": "8347986_20220120103527.png",
    "designBannerUrl": "",
    "designBannerFullUrl": "",
    "publicationType": 1,
    "date": "2022-01-24T10:01:00.66",
    "dateTxt": "1 день назад",
    "hot": true,
    "salary": 0,
    "salaryFrom": 10000,
    "salaryTo": 15000,
    "salaryComment": "Ставка + бонусы",
    "cityName": "Киев",
    "cityId": 1,
    "metroName": "Олимпийская",
    "metroId": 20,
    "districtName": "",
    "districtId": 0,
    "notebookId": 8347986,
    "companyName": "Volta Tech",
    "formApplyCustomUrl": "",
    "isLiked": false,
    "isApply": false,
    "applyDate": null,
    "lastViewDate": null,
    "distanceText": "",
    "latitude": 50.4306531,
    "longitude": 30.5162022,
    "shortDescription": "«Volta Tech» — international IT company. Product company. We do more than only provide a CRM platform. Telephony, processing, branding and training as well as technical support or security issues. You will never hear «NO!» from us. Необходимые навыки…",
    "badges": [
      {
        "id": 1361456,
        "name": "Бонусы / премии"
      },
      {
        "id": 1361457,
        "name": "Корпоративные мероприятия"
      },
      {
        "id": 1361458,
        "name": "Офис возле метро"
      },
      {
        "id": 1361459,
        "name": "Офис в центре"
      }
    ]
  }
  export type VacancyType = typeof VACANCY & { badges: Array<{ id: number, name: string }> } 