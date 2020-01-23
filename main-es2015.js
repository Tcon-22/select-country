(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/tcon-22/select-country/fesm2015/tcon-22-select-country.js":
/*!************************************************************************!*\
  !*** ./dist/tcon-22/select-country/fesm2015/tcon-22-select-country.js ***!
  \************************************************************************/
/*! exports provided: MatSelectCountryComponent, MatSelectCountryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectCountryComponent", function() { return MatSelectCountryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectCountryModule", function() { return MatSelectCountryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/db.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COUNTRIES_DB = [
    {
        name: 'Afghanistan',
        alpha2Code: 'AF',
        alpha3Code: 'AFG',
        numericCode: '004'
    },
    {
        name: 'Albania',
        alpha2Code: 'AL',
        alpha3Code: 'ALB',
        numericCode: '008'
    },
    {
        name: 'Algeria',
        alpha2Code: 'DZ',
        alpha3Code: 'DZA',
        numericCode: '012'
    },
    {
        name: 'American Samoa',
        alpha2Code: 'AS',
        alpha3Code: 'ASM',
        numericCode: '016'
    },
    {
        name: 'Andorra',
        alpha2Code: 'AD',
        alpha3Code: 'AND',
        numericCode: '020'
    },
    {
        name: 'Angola',
        alpha2Code: 'AO',
        alpha3Code: 'AGO',
        numericCode: '024'
    },
    {
        name: 'Argentina',
        alpha2Code: 'AR',
        alpha3Code: 'ARG',
        numericCode: '032'
    },
    {
        name: 'Australia',
        alpha2Code: 'AU',
        alpha3Code: 'AUS',
        numericCode: '036'
    },
    {
        name: 'Austria',
        alpha2Code: 'AT',
        alpha3Code: 'AUT',
        numericCode: '040'
    },
    {
        name: 'Azerbaijan',
        alpha2Code: 'AZ',
        alpha3Code: 'AZE',
        numericCode: '031'
    },
    {
        name: 'Bahamas',
        alpha2Code: 'BS',
        alpha3Code: 'BHS',
        numericCode: '044'
    },
    {
        name: 'Bahrain',
        alpha2Code: 'BH',
        alpha3Code: 'BHR',
        numericCode: '048'
    },
    {
        name: 'Bangladesh',
        alpha2Code: 'BD',
        alpha3Code: 'BGD',
        numericCode: '050'
    },
    {
        name: 'Barbados',
        alpha2Code: 'BB',
        alpha3Code: 'BRB',
        numericCode: '052'
    },
    {
        name: 'Belarus',
        alpha2Code: 'BY',
        alpha3Code: 'BLR',
        numericCode: '112'
    },
    {
        name: 'Belgium',
        alpha2Code: 'BE',
        alpha3Code: 'BEL',
        numericCode: '056'
    },
    {
        name: 'Belize',
        alpha2Code: 'BZ',
        alpha3Code: 'BLZ',
        numericCode: '084'
    },
    {
        name: 'Benin',
        alpha2Code: 'BJ',
        alpha3Code: 'BEN',
        numericCode: '204'
    },
    {
        name: 'Bermuda',
        alpha2Code: 'BM',
        alpha3Code: 'BMU',
        numericCode: '060'
    },
    {
        name: 'Bhutan',
        alpha2Code: 'BT',
        alpha3Code: 'BTN',
        numericCode: '064'
    },
    {
        name: 'Bolivia',
        alpha2Code: 'BO',
        alpha3Code: 'BOL',
        numericCode: '068'
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        alpha2Code: 'BQ',
        alpha3Code: 'BES',
        numericCode: '535'
    },
    {
        name: 'Bosnia and Herzegovina',
        alpha2Code: 'BA',
        alpha3Code: 'BIH',
        numericCode: '070'
    },
    {
        name: 'Botswana',
        alpha2Code: 'BW',
        alpha3Code: 'BWA',
        numericCode: '072'
    },
    {
        name: 'Bouvet Island',
        alpha2Code: 'BV',
        alpha3Code: 'BVT',
        numericCode: '074'
    },
    {
        name: 'Brazil',
        alpha2Code: 'BR',
        alpha3Code: 'BRA',
        numericCode: '076'
    },
    {
        name: 'Bulgaria',
        alpha2Code: 'BG',
        alpha3Code: 'BGR',
        numericCode: '100'
    },
    {
        name: 'Cabo Verde',
        alpha2Code: 'CV',
        alpha3Code: 'CPV',
        numericCode: '132'
    },
    {
        name: 'Cambodia',
        alpha2Code: 'KH',
        alpha3Code: 'KHM',
        numericCode: '116'
    },
    {
        name: 'Cameroon',
        alpha2Code: 'CM',
        alpha3Code: 'CMR',
        numericCode: '120'
    },
    {
        name: 'Canada',
        alpha2Code: 'CA',
        alpha3Code: 'CAN',
        numericCode: '124'
    },
    {
        name: 'Central African Republic',
        alpha2Code: 'CF',
        alpha3Code: 'CAF',
        numericCode: '140'
    },
    {
        name: 'Chile',
        alpha2Code: 'CL',
        alpha3Code: 'CHL',
        numericCode: '152'
    },
    {
        name: 'China',
        alpha2Code: 'CN',
        alpha3Code: 'CHN',
        numericCode: '156'
    },
    {
        name: 'Colombia',
        alpha2Code: 'CO',
        alpha3Code: 'COL',
        numericCode: '170'
    },
    {
        name: 'Congo',
        alpha2Code: 'CD',
        alpha3Code: 'COD',
        numericCode: '180'
    },
    {
        name: 'Costa Rica',
        alpha2Code: 'CR',
        alpha3Code: 'CRI',
        numericCode: '188'
    },
    {
        name: 'Croatia',
        alpha2Code: 'HR',
        alpha3Code: 'HRV',
        numericCode: '191'
    },
    {
        name: 'Cuba',
        alpha2Code: 'CU',
        alpha3Code: 'CUB',
        numericCode: '192'
    },
    {
        name: 'Cyprus',
        alpha2Code: 'CY',
        alpha3Code: 'CYP',
        numericCode: '196'
    },
    {
        name: 'Czechia',
        alpha2Code: 'CZ',
        alpha3Code: 'CZE',
        numericCode: '203'
    },
    {
        name: 'Côte d\'Ivoire',
        alpha2Code: 'CI',
        alpha3Code: 'CIV',
        numericCode: '384'
    },
    {
        name: 'Denmark',
        alpha2Code: 'DK',
        alpha3Code: 'DNK',
        numericCode: '208'
    },
    {
        name: 'Dominica',
        alpha2Code: 'DM',
        alpha3Code: 'DMA',
        numericCode: '212'
    },
    {
        name: 'Dominican Republic',
        alpha2Code: 'DO',
        alpha3Code: 'DOM',
        numericCode: '214'
    },
    {
        name: 'Ecuador',
        alpha2Code: 'EC',
        alpha3Code: 'ECU',
        numericCode: '218'
    },
    {
        name: 'Egypt',
        alpha2Code: 'EG',
        alpha3Code: 'EGY',
        numericCode: '818'
    },
    {
        name: 'El Salvador',
        alpha2Code: 'SV',
        alpha3Code: 'SLV',
        numericCode: '222'
    },
    {
        name: 'Equatorial Guinea',
        alpha2Code: 'GQ',
        alpha3Code: 'GNQ',
        numericCode: '226'
    },
    {
        name: 'Estonia',
        alpha2Code: 'EE',
        alpha3Code: 'EST',
        numericCode: '233'
    },
    {
        name: 'Ethiopia',
        alpha2Code: 'ET',
        alpha3Code: 'ETH',
        numericCode: '231'
    },
    {
        name: 'Finland',
        alpha2Code: 'FI',
        alpha3Code: 'FIN',
        numericCode: '246'
    },
    {
        name: 'France',
        alpha2Code: 'FR',
        alpha3Code: 'FRA',
        numericCode: '250'
    },
    {
        name: 'Georgia',
        alpha2Code: 'GE',
        alpha3Code: 'GEO',
        numericCode: '268'
    },
    {
        name: 'Germany',
        alpha2Code: 'DE',
        alpha3Code: 'DEU',
        numericCode: '276'
    },
    {
        name: 'Ghana',
        alpha2Code: 'GH',
        alpha3Code: 'GHA',
        numericCode: '288'
    },
    {
        name: 'Greece',
        alpha2Code: 'GR',
        alpha3Code: 'GRC',
        numericCode: '300'
    },
    {
        name: 'Greenland',
        alpha2Code: 'GL',
        alpha3Code: 'GRL',
        numericCode: '304'
    },
    {
        name: 'Guadeloupe',
        alpha2Code: 'GP',
        alpha3Code: 'GLP',
        numericCode: '312'
    },
    {
        name: 'Guatemala',
        alpha2Code: 'GT',
        alpha3Code: 'GTM',
        numericCode: '320'
    },
    {
        name: 'Guyana',
        alpha2Code: 'GY',
        alpha3Code: 'GUY',
        numericCode: '328'
    },
    {
        name: 'Haiti',
        alpha2Code: 'HT',
        alpha3Code: 'HTI',
        numericCode: '332'
    },
    {
        name: 'Hong Kong',
        alpha2Code: 'HK',
        alpha3Code: 'HKG',
        numericCode: ''
    },
    {
        name: 'Hungary',
        alpha2Code: 'HU',
        alpha3Code: 'HUN',
        numericCode: '348'
    },
    {
        name: 'Iceland',
        alpha2Code: 'IS',
        alpha3Code: 'ISL',
        numericCode: '352'
    },
    {
        name: 'India',
        alpha2Code: 'IN',
        alpha3Code: 'IND',
        numericCode: '356'
    },
    {
        name: 'Indonesia',
        alpha2Code: 'ID',
        alpha3Code: 'IDN',
        numericCode: '360'
    },
    {
        name: 'Iran',
        alpha2Code: 'IR',
        alpha3Code: 'IRN',
        numericCode: '364'
    },
    {
        name: 'Iraq',
        alpha2Code: 'IQ',
        alpha3Code: 'IRQ',
        numericCode: '368'
    },
    {
        name: 'Ireland',
        alpha2Code: 'IE',
        alpha3Code: 'IRL',
        numericCode: '372'
    },
    {
        name: 'Israel',
        alpha2Code: 'IL',
        alpha3Code: 'ISR',
        numericCode: '376'
    },
    {
        name: 'Italy',
        alpha2Code: 'IT',
        alpha3Code: 'ITA',
        numericCode: '380'
    },
    {
        name: 'Jamaica',
        alpha2Code: 'JM',
        alpha3Code: 'JAM',
        numericCode: '388'
    },
    {
        name: 'Japan',
        alpha2Code: 'JP',
        alpha3Code: 'JPN',
        numericCode: '392'
    },
    {
        name: 'Jersey',
        alpha2Code: 'JE',
        alpha3Code: 'JEY',
        numericCode: '832'
    },
    {
        name: 'Jordan',
        alpha2Code: 'JO',
        alpha3Code: 'JOR',
        numericCode: '400'
    },
    {
        name: 'Kazakhstan',
        alpha2Code: 'KZ',
        alpha3Code: 'KAZ',
        numericCode: '398'
    },
    {
        name: 'Kenya',
        alpha2Code: 'KE',
        alpha3Code: 'KEN',
        numericCode: '404'
    },
    {
        name: 'Korea (the Democratic People\'s Republic of)',
        alpha2Code: 'KP',
        alpha3Code: 'PRK',
        numericCode: '408'
    },
    {
        name: 'Korea (the Republic of)\t',
        alpha2Code: 'KR',
        alpha3Code: 'KOR',
        numericCode: '410'
    },
    {
        name: 'Kuwait',
        alpha2Code: 'KW',
        alpha3Code: 'KWT',
        numericCode: '414'
    },
    {
        name: 'Kyrgyzstan',
        alpha2Code: 'KG',
        alpha3Code: 'KGZ',
        numericCode: '417'
    },
    {
        name: 'Latvia',
        alpha2Code: 'LV',
        alpha3Code: 'LVA',
        numericCode: '428'
    },
    {
        name: 'Lebanon',
        alpha2Code: 'LB',
        alpha3Code: 'LBN',
        numericCode: '422'
    },
    {
        name: 'Liberia',
        alpha2Code: 'LR',
        alpha3Code: 'LBR',
        numericCode: '430'
    },
    {
        name: 'Libya',
        alpha2Code: 'LY',
        alpha3Code: 'LBY',
        numericCode: '434'
    },
    {
        name: 'Liechtenstein',
        alpha2Code: 'LI',
        alpha3Code: 'LIE',
        numericCode: '438'
    },
    {
        name: 'Lithuania',
        alpha2Code: 'LT',
        alpha3Code: 'LTU',
        numericCode: '440'
    },
    {
        name: 'Luxembourg',
        alpha2Code: 'LU',
        alpha3Code: 'LUX',
        numericCode: '442'
    },
    {
        name: 'Macao',
        alpha2Code: 'MO',
        alpha3Code: 'MAC',
        numericCode: '446'
    },
    {
        name: 'Madagascar',
        alpha2Code: 'MG',
        alpha3Code: 'MDG',
        numericCode: '450'
    },
    {
        name: 'Malaysia',
        alpha2Code: 'MY',
        alpha3Code: 'MYS',
        numericCode: ''
    },
    {
        name: 'Maldives',
        alpha2Code: 'MV',
        alpha3Code: 'MDV',
        numericCode: '462'
    },
    {
        name: 'Mali',
        alpha2Code: 'ML',
        alpha3Code: 'MLI',
        numericCode: '466'
    },
    {
        name: 'Malta',
        alpha2Code: 'MT',
        alpha3Code: 'MLT',
        numericCode: '470'
    },
    {
        name: 'Mexico',
        alpha2Code: 'MX',
        alpha3Code: 'MEX',
        numericCode: '484'
    },
    {
        name: 'Monaco',
        alpha2Code: 'MC',
        alpha3Code: 'MCO',
        numericCode: '492'
    },
    {
        name: 'Mongolia',
        alpha2Code: 'MN',
        alpha3Code: 'MNG',
        numericCode: '496'
    },
    {
        name: 'Montenegro',
        alpha2Code: 'ME',
        alpha3Code: 'MNE',
        numericCode: '499'
    },
    {
        name: 'Morocco',
        alpha2Code: 'MA',
        alpha3Code: 'MAR',
        numericCode: '504'
    },
    {
        name: 'Namibia',
        alpha2Code: 'NA',
        alpha3Code: 'NAM',
        numericCode: '516'
    },
    {
        name: 'Nepal',
        alpha2Code: 'NP',
        alpha3Code: 'NPL',
        numericCode: '524'
    },
    {
        name: 'Netherlands',
        alpha2Code: 'NL',
        alpha3Code: 'NLD',
        numericCode: '528'
    },
    {
        name: 'New Caledonia',
        alpha2Code: 'NC',
        alpha3Code: 'NCL',
        numericCode: '540'
    },
    {
        name: 'New Zealand',
        alpha2Code: 'NZ',
        alpha3Code: 'NZL',
        numericCode: '554'
    },
    {
        name: 'Nigeria',
        alpha2Code: 'NG',
        alpha3Code: 'NGA',
        numericCode: '556'
    },
    {
        name: 'Norway',
        alpha2Code: 'NO',
        alpha3Code: 'NOR',
        numericCode: '578'
    },
    {
        name: 'Oman',
        alpha2Code: 'OM',
        alpha3Code: 'OMN',
        numericCode: '512'
    },
    {
        name: 'Pakistan',
        alpha2Code: 'PK',
        alpha3Code: 'PAK',
        numericCode: '586'
    },
    {
        name: 'Palestine',
        alpha2Code: 'PS',
        alpha3Code: 'PSE',
        numericCode: '275'
    },
    {
        name: 'Paraguay',
        alpha2Code: 'PY',
        alpha3Code: 'PRY',
        numericCode: '600'
    },
    {
        name: 'Peru',
        alpha2Code: 'PE',
        alpha3Code: 'PER',
        numericCode: '604'
    },
    {
        name: 'Philippines',
        alpha2Code: 'PH',
        alpha3Code: 'PHL',
        numericCode: '608'
    },
    {
        name: 'Poland',
        alpha2Code: 'PL',
        alpha3Code: 'POL',
        numericCode: '616'
    },
    {
        name: 'Portugal',
        alpha2Code: 'PT',
        alpha3Code: 'PRT',
        numericCode: '620'
    },
    {
        name: 'Puerto Rico',
        alpha2Code: 'PR',
        alpha3Code: 'PRI',
        numericCode: '630'
    },
    {
        name: 'Qatar',
        alpha2Code: 'QA',
        alpha3Code: 'QAT',
        numericCode: '634'
    },
    {
        name: 'Republic of North Macedonia',
        alpha2Code: 'MK',
        alpha3Code: 'MKD',
        numericCode: '807'
    },
    {
        name: 'Romania',
        alpha2Code: 'RO',
        alpha3Code: 'ROU',
        numericCode: '642'
    },
    {
        name: 'Russian Federation (the)',
        alpha2Code: 'RU',
        alpha3Code: 'RUS',
        numericCode: '643'
    },
    {
        name: 'San Marino',
        alpha2Code: 'SM',
        alpha3Code: 'SMR',
        numericCode: '674'
    },
    {
        name: 'Saudi Arabia',
        alpha2Code: 'SA',
        alpha3Code: 'SAU',
        numericCode: '682'
    },
    {
        name: 'Senegal',
        alpha2Code: 'SN',
        alpha3Code: 'SEN',
        numericCode: '686'
    },
    {
        name: 'Serbia',
        alpha2Code: 'RS',
        alpha3Code: 'SRB',
        numericCode: '688'
    },
    {
        name: 'Singapore',
        alpha2Code: 'SG',
        alpha3Code: 'SGP',
        numericCode: '702'
    },
    {
        name: 'Slovakia',
        alpha2Code: 'SK',
        alpha3Code: 'SVK',
        numericCode: '703'
    },
    {
        name: 'Slovenia',
        alpha2Code: 'SI',
        alpha3Code: 'SVN',
        numericCode: '705'
    },
    {
        name: 'Somalia',
        alpha2Code: 'SO',
        alpha3Code: 'SOM',
        numericCode: '706'
    },
    {
        name: 'South Africa',
        alpha2Code: 'ZA',
        alpha3Code: 'ZAF',
        numericCode: '710'
    },
    {
        name: 'Spain',
        alpha2Code: 'ES',
        alpha3Code: 'ESP',
        numericCode: '724'
    },
    {
        name: 'Sri Lanka',
        alpha2Code: 'LK',
        alpha3Code: 'LKA',
        numericCode: '144'
    },
    {
        name: 'Sudan',
        alpha2Code: 'SD',
        alpha3Code: 'SDN',
        numericCode: '729'
    },
    {
        name: 'Sweden',
        alpha2Code: 'SE',
        alpha3Code: 'SWE',
        numericCode: '752'
    },
    {
        name: 'Switzerland',
        alpha2Code: 'CH',
        alpha3Code: 'CHE',
        numericCode: '756'
    },
    {
        name: 'Syrian Arab Republic',
        alpha2Code: 'SY',
        alpha3Code: 'SYR',
        numericCode: '760'
    },
    {
        name: 'Taiwan',
        alpha2Code: 'TW',
        alpha3Code: 'TWN',
        numericCode: '158'
    },
    {
        name: 'Thailand',
        alpha2Code: 'TH',
        alpha3Code: 'THA',
        numericCode: '764'
    },
    {
        name: 'Tunisia',
        alpha2Code: 'TN',
        alpha3Code: 'TUN',
        numericCode: '788'
    },
    {
        name: 'Turkey',
        alpha2Code: 'TR',
        alpha3Code: 'TUR',
        numericCode: '792'
    },
    {
        name: 'Ukraine',
        alpha2Code: 'UA',
        alpha3Code: 'UKR',
        numericCode: '804'
    },
    {
        name: 'United Arab Emirates',
        alpha2Code: 'AE',
        alpha3Code: 'ARE',
        numericCode: '784'
    },
    {
        name: 'United Kingdom',
        alpha2Code: 'GB',
        alpha3Code: 'GBR',
        numericCode: '826'
    },
    {
        name: 'United States of America',
        alpha2Code: 'US',
        alpha3Code: 'USA',
        numericCode: '840'
    },
    {
        name: 'Uruguay',
        alpha2Code: 'UY',
        alpha3Code: 'URY',
        numericCode: '858'
    },
    {
        name: 'Venezuela',
        alpha2Code: 'VE',
        alpha3Code: 'VEN',
        numericCode: '862'
    },
    {
        name: 'Vietnam',
        alpha2Code: 'VN',
        alpha3Code: 'VNM',
        numericCode: '704'
    },
    {
        name: 'Yemen',
        alpha2Code: 'YE',
        alpha3Code: 'YEM',
        numericCode: '887'
    },
    {
        name: 'Zimbabwe',
        alpha2Code: 'ZW',
        alpha3Code: 'ZWE',
        numericCode: '716'
    },
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/mat-select-country.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Country interface ISO 3166
 * @record
 */
function Country() { }
if (false) {}
/**
 * @author Anthony Nahas
 * \@since 11.19
 * @version 1.0
 */
class MatSelectCountryComponent {
    constructor() {
        this.placeHolder = 'Select Country';
        this.defaultValue = '';
        this.onCountrySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.countries = COUNTRIES_DB;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions = this.countryFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        this.selectedCountry = this.countries.find((/**
         * @param {?} country
         * @return {?}
         */
        country => country.alpha2Code.toLowerCase() === this.defaultValue.toLowerCase()));
        this.countryFormControl.setValue(this.selectedCountry.name);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.countries.filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => option.name.toLowerCase().includes(filterValue)
            || option.alpha2Code.toLowerCase().includes(filterValue)
            || option.alpha3Code.toLowerCase().includes(filterValue)));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onOptionsSelected($event) {
        this.selectedCountry = this.countries.find((/**
         * @param {?} country
         * @return {?}
         */
        country => country.name === $event.option.value));
        this.onCountrySelected.emit(this.selectedCountry);
    }
}
MatSelectCountryComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mat-select-country',
                template: "<form>\n  <mat-form-field [appearance]=\"appearance\">\n    <mat-label *ngIf=\"label\">{{label}}</mat-label>\n    <mat-icon class=\"mr-12 s-20 secondary-text\" matSuffix\n              [svgIcon]=\"selectedCountry?.alpha2Code.toLowerCase()\"></mat-icon>\n    <input type=\"text\" [placeholder]=\"placeHolder\" aria-label=\"country\"\n           matInput [formControl]=\"countryFormControl\"\n           [matAutocomplete]=\"auto\" [readonly]=\"readonly\" [disabled]=\"disabled\">\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onOptionsSelected($event)\">\n      <mat-option *ngFor=\"let country of filteredOptions | async\" [value]=\"country?.name\" >\n        <mat-icon [svgIcon]=\"country?.alpha2Code.toLowerCase()\"></mat-icon>\n        <small>{{country?.name}} - {{country?.alpha3Code}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [""]
            }] }
];
MatSelectCountryComponent.propDecorators = {
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onCountrySelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/mat-select-country.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @author Anthony Nahas
 * \@since 06.11.19
 */
class MatSelectCountryModule {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registerCountries();
    }
    /**
     * @return {?}
     */
    registerCountries() {
        for (const country of COUNTRIES_DB) {
            /** @type {?} */
            const countryAlpha2Code = country.alpha2Code.toLowerCase();
            this.iconRegistry
                .addSvgIcon(countryAlpha2Code, this.sanitizer
                .bypassSecurityTrustResourceUrl(`assets/svg-country-flags/svg/${countryAlpha2Code}.svg`));
        }
    }
}
MatSelectCountryModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [MatSelectCountryComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                    // FlexLayoutModule
                ],
                exports: [MatSelectCountryComponent]
            },] }
];
/** @nocollapse */
MatSelectCountryModule.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tcon-22-select-country.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=tcon-22-select-country.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 100%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link),\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>@tcon-22/select-country</span>\n  <div class=\"spacer\"></div>\n  <a aria-label=\"Github repository\" target=\"_blank\" rel=\"noopener\"\n     href=\"https://github.com/tcon-22\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n      <path\n        d=\"M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z\"/>\n    </svg>\n  </a>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/ngAnthonyy\"\n     title=\"Twitter\">\n\n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\"\n         viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\"/>\n      <path class=\"cls-2\"\n            d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n\n  </a>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <!-- Highlight Card -->\n  <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\"\n         viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\"\n                fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\"\n                d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\"\n                transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\"\n                d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\"\n                transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} demo app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\"\n         viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\"\n            d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\"\n            transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div>\n\n  <!-- Resources -->\n  <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://github.com/tcon-22/select-country\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z\"/>\n      </svg>\n\n      <span>Github repository</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"doc/index.html\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M12,8C13.66,8 15,6.66 15,5C15,3.34 13.66,2 12,2C10.34,2 9,3.34 9,5C9,6.66 10.34,8 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z\"/>\n      </svg>\n\n      <span>Library Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\"\n       href=\"https://www.npmjs.com/package/@tcon-22/select-country\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M3,3V21H21V3H3M6,6H18V18H15V9H12V18H6V6Z\"/>\n      </svg>\n\n      <span>npm</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n      </svg>\n    </a>\n\n  </div>\n\n  <div class=\"content\">\n\n    <!-- Install -->\n    <h2>Install</h2>\n    <p>run the following command in your favorite terminal to install the library</p>\n\n    <!-- Terminal -->\n    <div class=\"terminal\">\n      <pre>ng add @tcon-22/select-country</pre>\n    </div>\n\n  </div>\n\n  <!--  <div class=\"text-center\">-->\n\n  <!-- Usage -->\n  <h2>Usage</h2>\n\n  <div fxLayoutAlign=\"center\">\n    <mat-select-country [defaultValue]=\"'AF'\" appearance=\"outline\"\n                        label=\"Country\"\n                        (onCountrySelected)=\"onCountrySelected($event)\">\n    </mat-select-country>\n  </div>\n\n  <markdown src=\"assets/md/e1.md\"></markdown>\n\n  <p>For more info, please read the official readme - see the links above GITHUB - DOCS - NPM</p>\n\n  <!--  </div>-->\n\n  <!-- Next Steps -->\n  <h2 style=\"margin-top: 4rem\">Next Steps</h2>\n  <p>What do you want to do next with your app? Here are some awesome suggested libraries for you!</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>\n      </svg>\n\n      <span>ngx-auth-firebaseui</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>\n      </svg>\n\n      <span>password-strength</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>\n      </svg>\n\n      <span>google-maps-autocomplete</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>\n      </svg>\n\n      <span>pages</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/>\n      </svg>\n\n      <span>links-preview</span>\n    </div>\n  </div>\n\n  <!-- Terminal -->\n  <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n    <pre *ngSwitchDefault>ng add ngx-auth-firebaseui</pre>\n    <pre *ngSwitchCase=\"'material'\">ng add @tcon-22/password-strength</pre>\n    <pre *ngSwitchCase=\"'dependency'\">ng add @tcon-22/google-maps-autocomplete </pre>\n    <pre *ngSwitchCase=\"'test'\">ng add @tcon-22/pages</pre>\n    <pre *ngSwitchCase=\"'build'\">ng add @tcon-22/links-preview </pre>\n  </div>\n\n  <!-- Links -->\n  <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Other awesome libraries\" href=\"https://github.com/tcon-22\"\n       target=\"_blank\"\n       rel=\"noopener\">\n      <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path fill=\"rgb(40,53,147)\"\n              d=\"M12,2.5L20.84,5.65L19.5,17.35L12,21.5L4.5,17.35L3.16,5.65L12,2.5M12,4.6L6.47,17H8.53L9.64,14.22H14.34L15.45,17H17.5L12,4.6M13.62,12.5H10.39L12,8.63L13.62,12.5Z\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Anthony Nahas on Twitter\" href=\"https://twitter.com/ngAnthonyy\"\n       target=\"_blank\" rel=\"noopener\">\n      <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path fill=\"#1DA1F2\"\n              d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Anthony Nahas on Xing\" href=\"https://www.xing.com/profile/Anthony_Nahas2\"\n       target=\"_blank\" rel=\"noopener\">\n      <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path fill=\"#026466\"\n              d=\"M17.67,2C17.24,2 17.05,2.27 16.9,2.55C16.9,2.55 10.68,13.57 10.5,13.93L14.58,21.45C14.72,21.71 14.94,22 15.38,22H18.26C18.44,22 18.57,21.93 18.64,21.82C18.72,21.69 18.72,21.53 18.64,21.37L14.57,13.92L20.96,2.63C21.04,2.47 21.04,2.31 20.97,2.18C20.89,2.07 20.76,2 20.58,2M5.55,5.95C5.38,5.95 5.23,6 5.16,6.13C5.08,6.26 5.09,6.41 5.18,6.57L7.12,9.97L4.06,15.37C4,15.53 4,15.69 4.06,15.82C4.13,15.94 4.26,16 4.43,16H7.32C7.75,16 7.96,15.72 8.11,15.45C8.11,15.45 11.1,10.16 11.22,9.95L9.24,6.5C9.1,6.24 8.88,5.95 8.43,5.95\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Anthony Nahas on Reddit\" href=\"https://www.reddit.com/user/anthonynahas\"\n       target=\"_blank\" rel=\"noopener\">\n      <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path fill=\"#ff4500\"\n              d=\"M22,12.14C22,10.92 21,9.96 19.81,9.96C19.22,9.96 18.68,10.19 18.29,10.57C16.79,9.5 14.72,8.79 12.43,8.7L13.43,4L16.7,4.71C16.73,5.53 17.41,6.19 18.25,6.19C19.11,6.19 19.81,5.5 19.81,4.63C19.81,3.77 19.11,3.08 18.25,3.08C17.65,3.08 17.11,3.43 16.86,3.95L13.22,3.18C13.11,3.16 13,3.18 12.93,3.24C12.84,3.29 12.79,3.38 12.77,3.5L11.66,8.72C9.33,8.79 7.23,9.5 5.71,10.58C5.32,10.21 4.78,10 4.19,10C2.97,10 2,10.96 2,12.16C2,13.06 2.54,13.81 3.29,14.15C3.25,14.37 3.24,14.58 3.24,14.81C3.24,18.18 7.16,20.93 12,20.93C16.84,20.93 20.76,18.2 20.76,14.81C20.76,14.6 20.75,14.37 20.71,14.15C21.46,13.81 22,13.04 22,12.14M7,13.7C7,12.84 7.68,12.14 8.54,12.14C9.4,12.14 10.1,12.84 10.1,13.7A1.56,1.56 0 0,1 8.54,15.26C7.68,15.28 7,14.56 7,13.7M15.71,17.84C14.63,18.92 12.59,19 12,19C11.39,19 9.35,18.9 8.29,17.84C8.13,17.68 8.13,17.43 8.29,17.27C8.45,17.11 8.7,17.11 8.86,17.27C9.54,17.95 11,18.18 12,18.18C13,18.18 14.47,17.95 15.14,17.27C15.3,17.11 15.55,17.11 15.71,17.27C15.85,17.43 15.85,17.68 15.71,17.84M15.42,15.28C14.56,15.28 13.86,14.58 13.86,13.72A1.56,1.56 0 0,1 15.42,12.16C16.28,12.16 17,12.86 17,13.72C17,14.56 16.28,15.28 15.42,15.28Z\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"LinkedIn\" href=\"https://www.linkedin.com/in/anthony-nahas-926245119/\" target=\"_blank\"\n       rel=\"noopener\">\n      <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n        <path fill=\"#2867B2\"\n              d=\"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"See Author Github Profile\" href=\"https://github.com/AnthonyNahas\"\n       target=\"_blank\" rel=\"noopener\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\"\n       href=\"https://gitter.im/tcon-22/Lobby\"\n       target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\"\n           viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\"\n                transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\"\n                    transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\"\n                    transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\"\n                    transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\"\n                    fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n\n  <!-- Footer -->\n  <footer>\n    Love this library?&nbsp;\n    <a href=\"https://github.com/tcon-22/select-country\" target=\"_blank\" rel=\"noopener\"> Give our\n      repo a star.\n      <div class=\"github-star-badge\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n          <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/>\n        </svg>\n        Star\n      </div>\n    </a>\n    <a href=\"https://github.com/tcon-22/select-country\" target=\"_blank\" rel=\"noopener\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      </svg>\n    </a>\n  </footer>\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\"\n       viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\"\n          d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\"\n          transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div>\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm2015/angulartics2-ga.js");



let AppComponent = class AppComponent {
    constructor(angulartics2GoogleAnalytics) {
        this.title = 'select-county';
        angulartics2GoogleAnalytics.startTracking();
    }
    onCountrySelected($event) {
        console.log($event);
    }
};
AppComponent.ctorParameters = () => [
    { type: angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _tcon_22_select_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tcon-22/select-country */ "./dist/tcon-22/select-country/fesm2015/tcon-22-select-country.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm2015/angulartics2.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            angulartics2__WEBPACK_IMPORTED_MODULE_10__["Angulartics2Module"].forRoot(),
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot(),
            _tcon_22_select_country__WEBPACK_IMPORTED_MODULE_5__["MatSelectCountryModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Angular\Custom Components\select-country\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map