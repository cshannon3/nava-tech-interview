interface FamilyMember {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  favFruit: string;
}
let FamilyMember1: FamilyMember = {
  id: '0c0348e-1b2e-36d2-781e-cd351e02f46',
  firstName: 'Bud',
  lastName: 'Baxter',
  description: 'Household Contact',
  favFruit: 'Apple',
};
let FamilyMember2: FamilyMember = {
  id: '61b105f-7f67-4533-4612-f51e77dccd80',
  firstName: 'Andy',
  lastName: 'Baxter',
  description: 'Household Contact',
  favFruit: 'Apple',
};

export const initialFam: Array<FamilyMember> = [FamilyMember1, FamilyMember2];

export default FamilyMember;
