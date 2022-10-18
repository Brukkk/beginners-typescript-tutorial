interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
// 1
export const fetchLukeSkywalker = async () : Promise<LukeSkywalker> => {
  // 2
  const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });
  // const bruk1: LukeSkywalker = {};
  // Type '{}' is missing the following properties from type 'LukeSkywalker': name, height, mass, hair_color, and 4 more.

  const bruk2 = {} as LukeSkywalker;
  // 3
  return data as LukeSkywalker ;
};
