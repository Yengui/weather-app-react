function Card({ result }) {
  return (
    <div className="card">
      <section className="section1">
        <div className="card-section-div-1">
          <img
            src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <div>
            <p>{result.weather[0].main}</p>
            <h1>{Math.floor(result.main.temp) + "°"}</h1>
          </div>
        </div>
        <h3 className="country-name">{result.name}</h3>
      </section>
      <section className="section2">
        <div>
          <div>Wind</div>
          <div>{result.wind.speed}</div>
        </div>
        <div>
          <div>Humidity</div>
          <div>{result.main.humidity}%</div>
        </div>
        <div>
          <div>Pressure</div>
          <div>{result.main.pressure}</div>
        </div>
      </section>
    </div>
  );
}

export default Card;
