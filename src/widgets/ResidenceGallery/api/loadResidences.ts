import { residenceData, type Residence } from "#entities/Residence";

export function loadResidences(): Promise<Residence[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(residenceData);
    }, 700);
  });
}
