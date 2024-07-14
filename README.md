## Global Locations

** global-locations ** is a comprehensive npm package that provides users with an extensive and structured list of all regions, subregions, countries, states, and cities around the world. This package is designed to be a one-stop solution for developers who need reliable geographical data for various applications, including web development, data analysis, and more.

## Features

- **Comprehensive Data**: Access a complete database of regions, subregions, countries, states, and cities worldwide.
- **Structured Format**: Data is well-organized and easy to navigate, ensuring seamless integration into your projects.
- **Up-to-Date Information**: Regularly updated to reflect the latest geographical changes and new entries.
- **TypeScript Support**: Fully typed definitions for TypeScript users, providing a better development experience and reducing errors.
- **Easy to Use**: Simple and intuitive API that makes fetching and utilizing geographical data straightforward.

# Install

`npm i global-locations`

# Usage

- ES6 Module usage

  ```js
  import { Region, SubRegion, Country, State, City } from "global-locations";
  import {
    IRegion,
    ISubRegion,
    ICountry,
    IState,
    ICity,
  } from "global-locations"; //for intervace
  ```

- AMD Module usage

  ```js
  let { Region, SubRegion, Country, State, City } = require("global-locations");
  ```

# Docs

## Region Request method

Here are all region related methods.

#### Region.getAllRegions()

#### Region.sortedRegions(field)

Here field can be id or name. and sort always will be ascending

#### Region.getFiltedRegions(field, value, sort)

Here field can be id or name. value will be the value you are looking for. and sort always will be ascending

## Sub Region Request method

Here are all sub region related methods.

#### SubRegion.getAllSubRegions()

#### SubRegion.sortedSubRegions(field)

Here field can be id or name. and sort always will be ascending

#### SubRegion.getSubRegionOfRegion(field, value, sort)

Here field can be region or regionId. value will be the value you are looking for by region. and sort always will be ascending

#### SubRegion.getFiltedSubRegions(field, value, sort)

Here field can be id or name. value will be the value you are looking for. and sort always will be ascending

## Country Request method

Here are all country related methods.

#### Country.getAllCountries()

#### Country.sortedCountries(field)

Here field can be id/name/iso3/iso2/numericCode any field of country. and sort always will be ascending

#### Country.getCountriesOfRegion(field, value, sort)

Here field can be region or regionId. value will be the value you are looking for by region. and sort always will be ascending

#### Country.getCountriesOfSubRegion(field, value, sort)

Here field can be subregion or subregionId. value will be the value you are looking for by sub region. and sort always will be ascending

#### Country.getFiltedCountries(field, value, sort)

Here field can be id or name. value will be the value you are looking for. and sort always will be ascending

## State Request method

Here are all country related methods.

#### State.getAllStates()

#### State.sortedStates(field)

Here field can be id/name/stateCode of state. and sort always will be ascending

#### State.getStateOfCountry(field, value, sort)

Here field can be countryId or countryCode(two-letter code) or countryName. value will be the value you are looking for by state. and sort always will be ascending

#### State.getFiltedStates(field, value, sort)

Here field can be id or name or stateCode. value will be the value you are looking for. and sort always will be ascending

## City Request method

Here are all city related methods.

#### City.getAllCities()

#### City.sortedCities(field)

Here field can be id/name of city. and sort always will be ascending

#### City.getCitiesOfCountry(field, value, sort)

Here field can be countryId or countryName, countryCode(two-letter code). value will be the value you are looking for by country. and sort always will be ascending

#### City.getCitiesOfState(field, value, sort)

Here field can be stateId or stateName, stateCode(three-letter code). value will be the value you are looking for by state. and sort always will be ascending

#### City.getFiltedCities(field, value, sort)

Here field can be id or name. value will be the value you are looking for. and sort always will be ascending

# Example structure data

type: **json | IRegion**

```js
[
  {
    "id": 1,
    "name": "Africa",
    "translations": {
      "kr": "아프리카",
      "pt-BR": "África",
      "pt": "África",
      "nl": "Afrika",
      "hr": "Afrika",
      "fa": "آفریقا",
      "de": "Afrika",
      "es": "África",
      "fr": "Afrique",
      "ja": "アフリカ",
      "it": "Africa",
      "cn": "非洲",
      "tr": "Afrika"
    }
  },
  ...
]
```

type: **json | ISubRegion**

```js
[
  {
    "id": 19,
    "name": "Australia and New Zealand",
    "region": "Oceania",
    "regionId": 5,
    "translations": {
      "korean": "오스트랄라시아",
      "portuguese": "Australásia",
      "dutch": "Australazië",
      "croatian": "Australazija",
      "persian": "استرالزی",
      "german": "Australasien",
      "spanish": "Australasia",
      "french": "Australasie",
      "japanese": "オーストララシア",
      "italian": "Australasia",
      "chinese": "澳大拉西亞"
    }
  },
  ...
]
```

type: **json | ICountry**

```js
[
  {
    "id": 1,
    "name": "Afghanistan",
    "iso3": "AFG",
    "iso2": "AF",
    "numericCode": "004",
    "phoneCode": "93",
    "capital": "Kabul",
    "currency": "AFN",
    "currencyName": "Afghan afghani",
    "currencySymbol": "؋",
    "tld": ".af",
    "native": "افغانستان",
    "region": "Asia",
    "regionId": 3,
    "subregion": "Southern Asia",
    "subregionId": 14,
    "nationality": "Afghan",
    "timezones": [
      {
        "zoneName": "Asia/Kabul",
        "gmtOffset": 16200,
        "gmtOffsetName": "UTC+04:30",
        "abbreviation": "AFT",
        "tzName": "Afghanistan Time"
      }
    ],
    "translations": {
      "kr": "아프가니스탄",
      "pt-BR": "Afeganistão",
      "pt": "Afeganistão",
      "nl": "Afghanistan",
      "hr": "Afganistan",
      "fa": "افغانستان",
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "アフガニスタン",
      "it": "Afghanistan",
      "cn": "阿富汗",
      "tr": "Afganistan"
    },
    "latitude": "33.00000000",
    "longitude": "65.00000000",
    "emoji": "🇦🇫",
    "emojiU": "U+1F1E6 U+1F1EB"
  },
  ...
]
```

type: **json | IState**

```js
[
  {
    "id": 3901,
    "name": "Badakhshan",
    "countryId": 1,
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "stateCode": "BDS",
    "type": null,
    "latitude": "36.73477250",
    "longitude": "70.81199530"
  },
  ...
]
```

type: **json | ICity**

```js
[
  {
    "id": 52,
    "name": "Ashkāsham",
    "stateId": 3901,
    "stateCode": "BDS",
    "stateName": "Badakhshan",
    "countryId": 1,
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "latitude": "36.68333000",
    "longitude": "71.53333000"
  },
  ...
]
```

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([bera.ujjwal@hotmail.com](mailto:bera.ujjwal@hotmail.com "bera.ujjwal@hotmail.com")) or on my skype `ujjwalbera`.

## Buy me a Coffee

Hi! I'm Ujjwal Bera, I'm an open source enthusiast and devote my free time to building projects in this field.

I'm the creator and maintainer of [MNodeJs](https://github.com/beraujjwal/mnodejs/blob/main/README.md) and [SNodeJs](https://github.com/beraujjwal/snode/blob/main/README.md).

I'm doing my best to provide you a good experience when using my apps, so if you like what I'm doing and wish to say "thanks!", You can appreciate me or my hard work and time spent to create this helpful structure with buying me a coffee.

<a href="https://www.buymeacoffee.com/beraujjwalu" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Improvements requests are always welcome.

## Who do I talk to?

- [Ujjwal Bera](https://github.com/beraujjwal)

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

Thanks to the open-source community for inspiring and contributing to the tools used in this project.
