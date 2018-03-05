/*!
 * Copyright 2015 mifort.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

angular.module('mifortTimesheet.company').factory('companyService',
  ['$http', function ($http) {
    return {
      createCompany: function (company) {
        return $http.put('api/v1/company', company)
      },
      getCompany: function (companyId) {
        return $http.get('api/v1/company/' + companyId)
      },
      getCompanyEmployees: function (companyId) {
        return $http.get('api/v1/user/company/' + companyId)
      },
      changeRole: function (employee) {
        return $http.post('api/v1/user/update-role/', employee)
      },
      removeEmployee: function (employeeId) {
        return $http.delete('api/v1/user/' + employeeId)
      },
      saveCompany: function (company) {
        return $http.post('api/v1/company', company)
      },
      deleteCompany: function (companyId) {
        return $http.delete('api/v1/company/' + companyId)
      }
    }
  }
  ])
