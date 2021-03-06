/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<e217572622cb2483c9eb11f6e91b3cc0>>
 *
 * Generated by LanguageCLDRGenScript
 * @codegen-command: flib/intern/scripts/intl/cldr/gencode_all_plurals.sh
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType47 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n % 10 === 0 || n % 100 >= 11 && n % 100 <= 19) {
      return IntlVariations.NUMBER_ZERO;
    } else if (n % 10 === 1 && n % 100 !== 11) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType47;
