
const Render10Countries = ({ countries, filterSetter }) => {

    return (
        <div>
            <table>
                <tbody>
                    {countries.map((country) => {
                        return (
                            <tr key={country.name.common}>
                                <td key={country.name.common + 'td'}>{country.name.common}</td>
                                <td key={country.name.common + 'tdBtn'}>
                                    <button key={country.name.common + 'show'} onClick={() => filterSetter(country.name.common)}>Show</button>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

const LanguageLine = ({ languageValue }) => {
    console.log('language is: ', languageValue)
    return (
        <li key={languageValue}>{languageValue}</li>
    )
}

const Render1Country = ({ country }) => {
    const con = country[0]
    console.log('Language keys are:', Object.keys(con.languages))
    // const languageKeys = con.languages.keys()

    return (
        <div>
            <h1>
                {con.flag + ' ' + con.name.common}
            </h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Capital:
                        </td>
                        <td>
                            {con.capital[0]}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Population:
                        </td>
                        <td>
                            {con.population.toLocaleString('da-DK')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Area:
                        </td>
                        <td>
                            {con.area.toLocaleString('da-DK')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Official Languages:</p>
                        </td>
                        <td>
                            <ul>
                                {Object.keys(con.languages).map(key => <LanguageLine languageValue={con.languages[key]} />)}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Official Flag:
                        </td>
                        <td>
                            <img height="100px" src={con.flags.svg} />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )

}

const BeMoreSpecific = ({ countries }) => {
    return (
        <div>
            <b>🔎 {countries.length} countries found. Please be a bit more specific</b>
        </div>
    )
}

const CountryData = ({ countries, filterSetter }) => {

    const amtCountries = countries.length

    return (
        <>
            {
                amtCountries === 0
                    ? console.log('Search for a country to start')
                    : amtCountries === 1
                        ? <Render1Country country={countries} />
                        : amtCountries >= 1 && amtCountries <= 10
                            ? <Render10Countries countries={countries} filterSetter={filterSetter} />
                            : amtCountries > 10
                                ? <BeMoreSpecific countries={countries} />
                                : console('no conditions matched...')
            }
        </>
    )
}

export default CountryData