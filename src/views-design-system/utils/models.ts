import { Privilege } from '@/enums/privilege';
import type { GroupRoleDetailedInfo } from '@/views-portal/roles/utils/models';

export type PortalTableModel = {
  name: string;
  taxIN: number;
  curatorName: string;
  debtSum?: number;
  isUserLkpp: boolean;
  lastLogin?: Date;
  lockoutEnabled: boolean;
  isDisabled?: boolean;
};

export const accordionModelData: GroupRoleDetailedInfo[] = [
  {
    groupName: 'Accountant',
    groupDescription: 'Бухгалтер',
    roles: [
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
    ],
  },
  {
    groupName: 'Administrator',
    groupDescription: 'Администратор',
    roles: [
      {
        description: 'Изменение настроек сайта',
        name: Privilege.ChangeSiteSettings,
        group: 'Прочее',
      },
      {
        description: 'Потребление по подключениям',
        name: Privilege.CompanyConnectionFlow,
        group: 'Потребление',
      },
      {
        description: 'Список подключений',
        name: Privilege.Connections,
        group: 'Потребление',
      },
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Оборудование',
        name: Privilege.Equip,
        group: 'Оборудование',
      },
      {
        description: 'Показания приборов учета газа',
        name: Privilege.EquipMeasurements,
        group: 'Показания ПУ',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Контроль заявлений на изменение объемов потребления по подключениям',
        name: Privilege.PlanChangeByConnection,
        group: 'Планирование',
      },
      {
        description: 'Создать новое заявление на изменение объемов потребления по подключениям',
        name: Privilege.PlanChangeByConnectionCreate,
        group: 'Планирование',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
      {
        description: 'Паспорт газа',
        name: Privilege.ScannedPassportGas,
        group: 'Паспорта газа',
      },
      {
        description: 'Статистика потребления по подключениям',
        name: Privilege.StatisticsByConnection,
        group: 'Статистика',
      },
      {
        description: 'Телеметрия',
        name: Privilege.Telemetry,
        group: 'Потребление',
      },
      {
        description: 'Создать новый график неравномерности по подключениям',
        name: Privilege.UnevennessByConnectionCreate,
        group: 'Планирование',
      },
      {
        description: 'Контроль графиков неравномерности по подключениям',
        name: Privilege.UnevennessPlanByConnection,
        group: 'Планирование',
      },
      {
        description: 'Управление пользователями и ролями',
        name: Privilege.UserRoleManagement,
        group: 'Прочее',
      },
    ],
  },
  {
    groupName: 'Curator',
    groupDescription: 'Куратор',
    roles: [
      {
        description: 'Потребление по подключениям',
        name: Privilege.CompanyConnectionFlow,
        group: 'Потребление',
      },
      {
        description: 'Список подключений',
        name: Privilege.Connections,
        group: 'Потребление',
      },
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Файлы в письмах куратору',
        name: Privilege.CuratorFiles,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Оборудование',
        name: Privilege.Equip,
        group: 'Оборудование',
      },
      {
        description: 'Показания приборов учета газа',
        name: Privilege.EquipMeasurements,
        group: 'Показания ПУ',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Контроль заявлений на изменение объемов потребления по подключениям',
        name: Privilege.PlanChangeByConnection,
        group: 'Планирование',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
      {
        description: 'Паспорт газа',
        name: Privilege.ScannedPassportGas,
        group: 'Паспорта газа',
      },
      {
        description: 'Статистика потребления по подключениям',
        name: Privilege.StatisticsByConnection,
        group: 'Статистика',
      },
      {
        description: 'Телеметрия',
        name: Privilege.Telemetry,
        group: 'Потребление',
      },
      {
        description: 'Контроль графиков неравномерности по подключениям',
        name: Privilege.UnevennessPlanByConnection,
        group: 'Планирование',
      },
    ],
  },
  {
    groupName: 'Dispatcher',
    groupDescription: 'Диспетчер',
    roles: [
      {
        description: 'Потребление по подключениям',
        name: Privilege.CompanyConnectionFlow,
        group: 'Потребление',
      },
      {
        description: 'Список подключений',
        name: Privilege.Connections,
        group: 'Потребление',
      },
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Оборудование',
        name: Privilege.Equip,
        group: 'Оборудование',
      },
      {
        description: 'Показания приборов учета газа',
        name: Privilege.EquipMeasurements,
        group: 'Показания ПУ',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Контроль заявлений на изменение объемов потребления по подключениям',
        name: Privilege.PlanChangeByConnection,
        group: 'Планирование',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
      {
        description: 'Паспорт газа',
        name: Privilege.ScannedPassportGas,
        group: 'Паспорта газа',
      },
      {
        description: 'Статистика потребления по подключениям',
        name: Privilege.StatisticsByConnection,
        group: 'Статистика',
      },
      {
        description: 'Телеметрия',
        name: Privilege.Telemetry,
        group: 'Потребление',
      },
      {
        description: 'Контроль графиков неравномерности по подключениям',
        name: Privilege.UnevennessPlanByConnection,
        group: 'Планирование',
      },
    ],
  },
  {
    groupName: 'Lawyer',
    groupDescription: 'Юрист',
    roles: [
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
    ],
  },
  {
    groupName: 'Manager',
    groupDescription: 'Руководитель',
    roles: [
      {
        description: 'Потребление по подключениям',
        name: Privilege.CompanyConnectionFlow,
        group: 'Потребление',
      },
      {
        description: 'Список подключений',
        name: Privilege.Connections,
        group: 'Потребление',
      },
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Оборудование',
        name: Privilege.Equip,
        group: 'Оборудование',
      },
      {
        description: 'Показания приборов учета газа',
        name: Privilege.EquipMeasurements,
        group: 'Показания ПУ',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Контроль заявлений на изменение объемов потребления по подключениям',
        name: Privilege.PlanChangeByConnection,
        group: 'Планирование',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
      {
        description: 'Паспорт газа',
        name: Privilege.ScannedPassportGas,
        group: 'Паспорта газа',
      },
      {
        description: 'Статистика потребления по подключениям',
        name: Privilege.StatisticsByConnection,
        group: 'Статистика',
      },
      {
        description: 'Телеметрия',
        name: Privilege.Telemetry,
        group: 'Потребление',
      },
      {
        description: 'Контроль графиков неравномерности по подключениям',
        name: Privilege.UnevennessPlanByConnection,
        group: 'Планирование',
      },
    ],
  },
  {
    groupName: 'Metrologist',
    groupDescription: 'Метролог',
    roles: [
      {
        description: 'Потребление по подключениям',
        name: Privilege.CompanyConnectionFlow,
        group: 'Потребление',
      },
      {
        description: 'Список подключений',
        name: Privilege.Connections,
        group: 'Потребление',
      },
      {
        description: 'Контакты',
        name: Privilege.Contacts,
        group: 'Контакты',
      },
      {
        description: 'Бухгалтерские документы',
        name: Privilege.ElectronicDocument,
        group: 'Документы',
      },
      {
        description: 'Оборудование',
        name: Privilege.Equip,
        group: 'Оборудование',
      },
      {
        description: 'Взаиморасчеты',
        name: Privilege.Mutual,
        group: 'Взаиморасчеты',
      },
      {
        description: 'Данные по договорам',
        name: Privilege.Order,
        group: 'Прочее',
      },
      {
        description: 'Список контрагентов',
        name: Privilege.PartnerList,
        group: 'Прочее',
      },
      {
        description: 'Договорные документы',
        name: Privilege.ScannedDocument,
        group: 'Документы',
      },
      {
        description: 'Статистика потребления по подключениям',
        name: Privilege.StatisticsByConnection,
        group: 'Статистика',
      },
      {
        description: 'Телеметрия',
        name: Privilege.Telemetry,
        group: 'Потребление',
      },
    ],
  },
];

export const portalTableData: Array<PortalTableModel> = [
  {
    name: 'Авдалян Э.А.',
    taxIN: 602716854890,
    curatorName: 'Красильников Ю.М.',
    debtSum: 18818.21,
    isUserLkpp: true,
    lastLogin: new Date('04.02.2024 10:25'),
    lockoutEnabled: false,
  },
  {
    name: 'Аветисян С.Д.',
    taxIN: 602717424525,
    curatorName: 'Родионов М.В.',
    debtSum: 20816.2,
    isUserLkpp: true,
    lastLogin: new Date('02.02.2024 12:43'),
    lockoutEnabled: true,
  },
  {
    name: 'Аветян А.А.',
    taxIN: 6027001401401,
    curatorName: 'Третьяков В.В.',
    debtSum: 18818.21,
    isUserLkpp: true,
    lastLogin: new Date('02.02.2024 16:36'),
    lockoutEnabled: false,
  },
  {
    name: 'Администрация городского поселения “Полонская волость” ',
    taxIN: 6017011788,
    curatorName: 'Шарафутдинов Т.С.',
    debtSum: 150543.6,
    isUserLkpp: false,
    lockoutEnabled: false,
  },
  {
    name: 'Религиозная организация ДПОО “Центр подготовки церковных специалистов Псковской Епархии Русской Православной Церкви”',
    taxIN: 602716854890,
    curatorName: 'Комиссаров С.Т.',
    isUserLkpp: true,
    lockoutEnabled: false,
    isDisabled: true,
  },
  {
    name: 'АНОО "Ольгинская гимназия"',
    taxIN: 6027189347,
    curatorName: 'Александров К.А.',
    debtSum: 3425.43,
    isUserLkpp: false,
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
  {
    name: 'Муниципальное образовательное учреждение дополнительного образования детей специализированная детско-юношеская спортивная школа олимпийского резерва по боксу',
    taxIN: 6027999013,
    curatorName: 'Волошина М.А.',
    isUserLkpp: false,
    lastLogin: new Date('28.01.2024 14:38'),
    lockoutEnabled: false,
  },
];

export type PortalTableNameColumn = {
  name: string;
  code: number;
};

export type PortalTableInnColumn = {
  name: string;
};
