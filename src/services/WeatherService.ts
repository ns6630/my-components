export default async function getWeather(city: string): Promise<any | null> {
  let appid = "d1cd3f0fa040283ac3a9d1e2021000d9";
  console.log("где блядь вызов, алло?!")
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${appid}`
  );
  console.log("вот он")

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log(
      `При обращении к api.openweathermap.org возникла ошибка HTTP: ${response.status}.`
    );
    return null;
  }
}
