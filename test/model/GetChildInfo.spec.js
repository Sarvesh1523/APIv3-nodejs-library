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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.GetChildInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetChildInfo', function() {
    it('should create an instance of GetChildInfo', function() {
      // uncomment below and update the code to test GetChildInfo
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be.a(SibApiV3Sdk.GetChildInfo);
    });

    it('should have the property credits (base name: "credits")', function() {
      // uncomment below and update the code to test the property credits
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be();
    });

    it('should have the property statistics (base name: "statistics")', function() {
      // uncomment below and update the code to test the property statistics
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be();
    });

    it('should have the property ips (base name: "ips")', function() {
      // uncomment below and update the code to test the property ips
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be();
    });

    it('should have the property apiKeys (base name: "apiKeys")', function() {
      // uncomment below and update the code to test the property apiKeys
      //var instane = new SibApiV3Sdk.GetChildInfo();
      //expect(instance).to.be();
    });

  });

}));
