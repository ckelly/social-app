const {withEntitlementsPlist} = require('@expo/config-plugins')

const withAppEntitlements = config => {
  // eslint-disable-next-line no-shadow
  return withEntitlementsPlist(config, async config => {
    config.modResults['com.apple.security.application-groups'] = [
      `group.${config.ios.bundleIdentifier}`,
    ]
    return config
  })
}

module.exports = {withAppEntitlements}
