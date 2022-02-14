export default async function getWeather(city: string): Promise<any | null> {
  const appid = "d1cd3f0fa040283ac3a9d1e2021000d9";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${appid}`
  );

  if (response.ok) {
    return await response.json();
  } else {
    console.log(
      `При обращении к api.openweathermap.org возникла ошибка HTTP: ${response.status}.`
    );
    return null;
  }
}
