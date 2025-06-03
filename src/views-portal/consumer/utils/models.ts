export enum BooleanFilter {
  Yes = 'true',
  No = 'false',
}

export const availabilityTelemetryOptions = {
  [BooleanFilter.Yes]: 'Есть',
  [BooleanFilter.No]: 'Нет',
};
