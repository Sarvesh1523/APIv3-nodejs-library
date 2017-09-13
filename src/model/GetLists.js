/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetListsLists'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetListsLists'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetLists = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetListsLists);
  }
}(this, function(ApiClient, GetListsLists) {
  'use strict';




  /**
   * The GetLists model module.
   * @module model/GetLists
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>GetLists</code>.
   * @alias module:model/GetLists
   * @class
   * @param count {Number} Number of lists in your account
   * @param lists {Array.<module:model/GetListsLists>} Listing of all the lists available in your account
   */
  var exports = function(count, lists) {
    var _this = this;

    _this['count'] = count;
    _this['lists'] = lists;
  };

  /**
   * Constructs a <code>GetLists</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLists} obj Optional instance to populate.
   * @return {module:model/GetLists} The populated <code>GetLists</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], [GetListsLists]);
      }
    }
    return obj;
  }

  /**
   * Number of lists in your account
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Listing of all the lists available in your account
   * @member {Array.<module:model/GetListsLists>} lists
   */
  exports.prototype['lists'] = undefined;



  return exports;
}));


