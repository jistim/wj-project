const nationalList = [
  {
    code: 'US',
    path: '/assets/national-img/us.gif'
  },
  {
    code: 'ES',
    path: '/assets/national-img/es.gif'
  },
  {
    code: 'CL',
    path: '/assets/national-img/cl.gif'
  },
  {
    code: 'FR',
    path: '/assets/national-img/fr.gif'
  },
  {
    code: 'IT',
    path: '/assets/national-img/it.gif'
  },
  {
    code: 'DE',
    path: '/assets/national-img/de.gif'
  },
  {
    code: 'AR',
    path: '/assets/national-img/ar.gif'
  },
  {
    code: 'AU',
    path: '/assets/national-img/au.gif'
  },
];

export default {
  //
  getNationalImagePath: (code) => {
    const index = nationalList.findIndex(national => national.code === code);
    return index === -1 ? null : nationalList[index].path;
  }
}
