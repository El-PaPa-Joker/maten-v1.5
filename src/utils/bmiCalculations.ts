export const calculateIdealWeight = (height: number, gender: 'male' | 'female'): number => {
  // Using the Devine formula
  const baseWeight = gender === 'male' ? 50 : 45.5;
  const heightFactor = gender === 'male' ? 2.3 : 2.2;
  const heightInMeters = height;
  const heightOver152cm = (heightInMeters * 100 - 152.4);
  
  return baseWeight + (heightFactor * (heightOver152cm / 2.54));
};