import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "firstName";

export const PatientTitle = (record: TPatient): string => {
  return record.firstName?.toString() || String(record.id);
};
