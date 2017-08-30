const lang = {
  REGIONDETAILS: {
    REGION: 'Region',
    DEVICES: 'DEVICES',
    ALARMS: 'Alarms',
    WARNINGS: 'Warnings',
    TOTAL: 'Total',
    ONLINE: 'Online',
    OFFLINE: 'Offline',
    ALLDEVICES: 'All Devices'
  },
  DASHBOARD: {
    DEVICELOCATION: 'Device Location',
    MORE: 'MORE',
    AZUREPROJECTNAME: 'Azure Iot Suite Remote Monitoring',
    DASHBOARD: 'Dashboard',
    CONTOSO: 'Contoso',
    ALARMSTATUS: 'System Alarms',
    ALARMLIST: {
      COLUMNDEFS: {
        RULENAME: 'Rule Name',
        SEVERITY: 'Severity',
        CREATED: 'Created',
        OPENOCCURRENCES: 'Open Occurrences',
        DESCRIPTION: 'Description',
        STATUS: 'Status'
      }
    }
  },
  FILTER: {
    MANAGEFILTER: 'Manage Filters',
    FILTERNAME: 'Filter Name',
    ENTERNAMEFORFILTER: 'Enter name for filter',
    FILTERNAMECANNOTBEEMPTY: 'Filter Name cannot be empty',
    ENTERREPORTED: 'Enter reported or desired property,tag',
    FIELD: 'Field',
    OPERATOR: 'Operator',
    EQUALS: '= Equals',
    VALUE: 'Value',
    ENTERFILTERVALUE: 'Enter filter value',
    VALUECANNOTBEEMPTY: 'Value cannot be empty',
    REMOVECONDITIONS: 'Remove Conditions',
    ADDCONDITIONS: 'Add Conditions',
    CANCEL: 'Cancel',
    CREATEFILTER: 'Create Filter',
    FILTERS: 'Filters',
    ACTIONS: 'Actions',
    GROUPNAMEALREADYEXISTS: 'Group name already exists',
    TYPE: 'Type'
  },
  TELEMETRY: {
    OK: 'ok'
  },
  DEVICES: {
    CAUTION: 'Caution: You are scheduling an action that will effect {0} devices.',
    DEVICEID: 'DeviceId',
    TYPE: 'Type',
    FIRMWAREVERSION: 'Firmware Version',
    MANUFACTURER: 'Manufacturer',
    MODELNUMBER: 'Model Number',
    STATE: 'State',
    SYNC: 'Sync',
    ENABLED: 'Enabled',
    CONNECTED: 'Connected',
    DISCONNECTED: 'Diconnected',
    DEVICEDETAIL: 'Device Detail',
    ACTONDEVICES: 'Act on devices',
    CHOOSEDEVICES: 'Choose devices',
    NEWGROUP: '(new group)',
    ADDDEVICES: '+ Provision',
    PROVISIONDEVICES: 'Provision',
    MANUAL: 'Manual',
    AUTOMATIC: 'Automatic',
    SELECTMETHOD: 'Select your provisioning method',
    CREATEDEVICE: 'Create device',
    DEVICETYPES: 'Device Types',
    SELECTTYPE: 'Select an existing device type',
    AUTHENTICATIONTYPE: 'Authentication type',
    SYMMETRICKEY: 'Symmetric Key',
    X509: 'X.509',
    PRIMARYKEY: 'Primary Key',
    SECONDARYKEY: 'Secondary Key',
    AUTOGENERATEKEYS: 'Auto Generate Keys',
    PRIMARYTHUMBPRINT: 'Primary thumbprint',
    SENCONDARYTHUMBPRINT: 'Secondary thumbprint',
    SIMULATEDDEVICES: 'Simulated devices(s)',
    NUMBEROFDEVICES: 'Number of devices',
    NEWDEVICEID: 'Device ID',
    GENERATEDEVICEID: 'Generate an ID for me',
    DPSTENANT: 'DPS Tenant',
    NEWTENANT: 'New Tenant',
    ENROLLMENT: 'Enrollment',
    INDIVIDUAL: 'Individual',
    GROUP: 'Group',
    GROUPNAME: 'Group Name',
    SECURESTORAGETYPE: 'Secure storage type',
    RELEVANTSTORAGEINFO: 'Relevant storage info',
    DEVICECONFIGURATION: 'Device configuration',
    DEVICEORGANIZATION: 'Device organization',
    DEVICENUMBER: 'Number of devices',
    PROPERTYNAME: 'Name',
    PROPERTYTYPE: 'Type',
    PROPERTYVALUE: 'Value',
    TASKNAME: 'Task Name',
    CONFIGPROPERTIES: 'Config Properties (properties.desired.config.*)',
    CONFIRM: 'Confirm',
    AVAILABLEACTIONS: 'Available actions',
    SELECTTIMELINE: 'Select timeline',
    NOW: 'Now',
    TIMEWINDOW: 'Time window',
    ADD: 'Add',
    DELETE: 'Remove',
    CHANGEDEVICECONFIG: 'Change device configuration',
    ORGANIZEMYDEVICE: 'Organize my devices',
    SCHEDULEANACTION: 'Schedule an action',
    LASTACTIVITYTIME: 'Last activity time',
    LASTSTATUSUPDATEDTIME: 'Last status updated time',
    EFFECTED_DEVICES: 'Effected devices',
    NO_AVAILABLE_COMMON_TAGS: 'No available common tags.',
    PLEASE_CHOOSE_DEVICES_WITH_COMMON_TAGS: 'Please choose devices with common tags'
  },
  RULESACTIONS: {
    SOURCEHELP: 'Edit group of device on rule',
    SEVERITYLEVEL: 'Severity level',
    ALARMEVENT: 'Alarm event text',
    ALARMEVENTHELP: 'System log text',
    DEVICECOUNT: 'devices effected by this rule',
    UPDATE: 'Update',
    CREATE: 'Create',
    TH_FIELD: 'FIELD',
    TH_OPERATOR: 'OPERATOR',
    TH_VALUE: 'VALUE',
    TH_ACTIONS: 'ACTIONS',
    IMGSAVE: 'Save',
    IMGEDIT: 'Edit',
    IMGDELETE: 'Delete',
    CRITICAL: 'Critical',
    WARNING: 'Warning',
    INFO: 'Info',
    RULENAME: 'Rule name',
    DESCRIPTION: 'Description',
    SEVERITY: 'Severity',
    SOURCE: 'Source',
    NOOFDEVICES: 'NO. Devices',
    TRIGGER: 'Trigger',
    LASTTRIGGER: 'Last Trigger',
    ACTIONS: 'Actions',
    MORE: 'More',
    NOTIFICATIONTYPE: 'Notification Type',
    STATUS: 'Status',
    ENABLED: 'Enabled',
    DISABLED: 'Disabled',
    ENABLE: 'Enable',
    DISABLE: 'Disable',
    NEWRULE: 'New rule',
    EDIT: 'Edit',
    DELETE: 'Delete',
    DELETERULES: 'Delete Rules and Actions',
    RULESWILLBEDELETED: 'Caution: {0} Rules will be deleted and cannot be restored, please confirm',
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
    RULEDETAIL: 'Rule Detail',
    EFFECTEDDEVICES: 'devices effected by this rule',
    CHANGESTATUS: 'Change Status',
    COUNT: 'NO. Devices',
    SUMMARY: 'Summary',
    NOTE: 'Note: Any changes made to rules will only apply to future events on the affected devices.'
  },
  FLYOUT: {
    SAVE: 'Save',
    CANCEL: 'Cancel',
    APPLY: 'Apply',
    APPLIED: 'Applied'
  },
  LEFTNAV: {
    DASHBOARD: 'Dashboard',
    DEVICES: 'Devices',
    RULES_ACTIONS: 'Rules & Actions',
    MAINTENANCE: 'Maintenance'
  },
  FORMS: {
    LASTHOUR: 'Last hour',
    LASTDAY: 'Last day',
    LASTWEEK: 'Last week',
    LASTMONTH: 'Last month',
    CHOOSETIMERANGE: 'Choose time range'
  },
  NAVIGATION: {
    SWITCHUSER: 'Switch to another user'
  },
  SEARCHGRID: {
    CLICKTOREFRESH: 'Click to refresh',
    LASTREFRESHED: 'last refreshed',
    LOADING: 'Loading'
  },
  KPI: {
    CURRENTDAY: 'Current day',
    LASTDAY: 'Last day',
    CURRENTWEEK: 'Current week',
    LASTWEEK: 'Last week',
    LASTHOUR: 'Last hour',
    CURRENTMONTH: 'Current month',
    LASTMONTH: 'Last month',
    CRITICAL: 'critical',
    CRITICALALARM: 'Critical Alarm',
    ALARMBYDEVICETYPE: 'Alarm by device type',
    SYSTEMKPI: 'System KPIs',
    TOPRULESTRIGGERED: 'Top rules triggered',
    TIMERANGE: 'TIME RANGE'
  },
  DEVICE_DETAIL: {
    TELEMETRY: 'Telemetry',
    TAGS: 'Tags',
    TAGS_DESCRIPTION: 'Tags applied to device',
    SIMULATED: 'Simulated',
    PHYSICAL: 'Physical',
    CONNECTED: 'Connected',
    DISCONNECTED: 'Diconnected',
    KEY: 'KEY',
    VALUE: 'VALUE',
    METHODS: 'Methods',
    METHODS_DESCRIPTION: 'All methods available for device',
    PROPERTIES: 'Properties',
    PROPERTIES_DESCRIPTION: 'Selected Properties on devices',
    DIAGNOSTICS: 'Diagnostics',
    DIAGNOSTICS_DESCRIPTION: 'Diagnostic information from device',
    COPY: 'COPY',
    COPY_TO_CLIPBOARD: 'Copy all properties to clipboard',
    COPY_TO_CLIPBOARD_DESCRIPTION: 'Copy a list of all properties and methods associated',
    LOCATION: 'Location',
    FIRMWARE: 'Firmware',
    DEVICETYPE: 'Type',
    STATUS: 'Status',
    LAST_MSG: 'Last message',
    MESSAGE: 'Message',
    CLICK_TO_SHOW: 'Click here to see raw message',
    SYNC: 'Syncing',
    TAGS_ON_SELECTED_DEVICES: 'Tags on selected devices',
    TAGS_IN_COMMON_SELECTED_DEVICE: 'Tags in common selected device',
    JOB_NAME: 'Job Name',
    ADJUST_TAGS: 'Adjust Tags',
    ADD_TAG: 'Add tag',
    NAME: 'NAME',
    TYPE: 'TYPE',
    SUMMARY: 'Summary',
    APPLY: 'Apply',
    TAG: 'Tag'
  },
  DEVICE_SCHEDULE: {
    METHODS: 'Methods',
    METHODS_DESCRIPTION: 'All methods available for deivce or group of devices',
    SELECT_ONE: 'Select one',
    SELECT_PLACEHOLDER: 'Select method',
    JOB_NAME: 'Job Name',
    JOB_NAME_INPUT_PLACEHOLDER: 'Enter job name',
    FIRMWARE_URL: 'Firmware URI',
    FIRMWARE_URL_INPUT_PLACEHOLDER: 'Enter firmware URI value',
    METHODS_NOT_AVAILABLE: 'No available common methods.',
    CHOOSE_NEW_DEVICES: 'Please choose devices with common methods',
    FIRMWARE_OPTION: 'UpdateFirmware'
  }
};
export default lang;
