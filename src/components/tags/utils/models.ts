import { PlanState, SendNotifyStatuses } from '@/api';

export enum TagType {
  Success,
  Warning,
  Info,
  Error,
}

export const SendNotifyStatusesNamesMap: Record<SendNotifyStatuses, string> = {
  [SendNotifyStatuses.NotSend]: 'Показания не передавались',
  [SendNotifyStatuses.Sending]: 'В процессе',
  [SendNotifyStatuses.Sent]: 'Успешно',
  [SendNotifyStatuses.Error]: 'Ошибка',
};

export const ApprovementStatusesNamesMap: Record<PlanState, string> = {
  [PlanState.Agreed]: 'Согласован',
  [PlanState.Review]: 'На рассмотрении',
  [PlanState.Registration]: 'На регистрации',
  [PlanState.Denied]: 'Отказ в согласовании',
};

export const ApprovementStatusesColorMap: Record<PlanState, TagType> = {
  [PlanState.Agreed]: TagType.Success,
  [PlanState.Review]: TagType.Info,
  [PlanState.Registration]: TagType.Warning,
  [PlanState.Denied]: TagType.Error,
};

export const SendNotifyStatusesColorMap: Record<SendNotifyStatuses, TagType | undefined> = {
  [SendNotifyStatuses.Sending]: TagType.Warning,
  [SendNotifyStatuses.Sent]: TagType.Success,
  [SendNotifyStatuses.NotSend]: TagType.Info,
  [SendNotifyStatuses.Error]: TagType.Error,
};

export interface IBaseTagProps {
  text: string;
  type: TagType | undefined;
}
