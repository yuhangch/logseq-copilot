module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      "@semantic-release/exec",
      {
        "prepareCmd": "VERSION=${nextRelease.version} npm run build"
      }
    ],
    // [
    //   "semantic-release-chrome",
    //   {
    //     "extensionId": "hihgfcgbmnbomabfdbajlbpnacndeihl",
    //     "distFolder": "build/chrome",
    //     "asset": "build/chrome-${nextRelease.version}.zip"
    //   }
    // ],
    [
      '@semantic-release/github',
      {
        assets: [
          {path:'build/chrome-*.zip', label: "Chrome version"}, 
          {path:'build/edge-*.zip', label: "Edge version"},
          {path:'build/firefox-*.zip', label: "Firefox version"}
      ],
      },
    ],
  ],
  branches: ['main'],
};
