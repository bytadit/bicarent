'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cars', [
      {"id":"6e2bc663-5197-441a-957b-bc75e4a2da7c","plate":"DBH-3491","manufacture":"Ford","model":"F150","image":"./images/car01.min.jpg","rentPerDay":200000,"capacity":2,"description":" Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":true,"type":"Sedan","year":2022,},
      {"id":"9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77","plate":"WXB-3984","manufacture":"BMW","model":"X5","image":"./images/car02.min.jpg","rentPerDay":800000,"capacity":6,"description":" Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Convertible","year":2019,},
      {"id":"bf6b5c43-1377-4ae0-8908-310c64266f81","plate":"OSL-4224","manufacture":"Lincoln","model":"MKZ","image":"./images/car03.min.jpg","rentPerDay":900000,"capacity":6,"description":" Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":true,"type":"Sedan","year":2021,},
      {"id":"5b67f1d7-92d4-41c7-8577-4435740aadf1","plate":"VPT-9753","manufacture":"BMW","model":"M5","image":"./images/car04.min.jpg","rentPerDay":900000,"capacity":6,"description":" 6.1L SRT V8 \"Hemi\" engine.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Manual","available":true,"type":"Hatchback","year":2018,},
      {"id":"23574b8f-3e89-4685-a348-67c1f7e5b3c4","plate":"BHD-3923","manufacture":"Lincoln","model":"Navigator","image":"./images/car05.min.jpg","rentPerDay":200000,"capacity":2,"description":" Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Minivan","year":2020,},
      {"id":"3eead6db-c536-406b-9bc5-85d4c6e38a76","plate":"JPM-5482","manufacture":"Ford","model":"Fiesta","image":"./images/car06.min.jpg","rentPerDay":900000,"capacity":4,"description":" Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":true,"type":"Hatchback","year":2016,},
      {"id":"d97e0af5-2728-4ce3-ba7f-9d83a0837db6","plate":"YHD-4104","manufacture":"Lincoln","model":"Navigator","image":"./images/car08.min.jpg","rentPerDay":300000,"capacity":2,"description":" XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Manual","available":true,"type":"Regular Cab Pickup","year":2014,},
      {"id":"0d5de078-a5fc-456b-9487-47eb450a01c6","plate":"STL-7347","manufacture":"Buick","model":"LaCrosse","image":"./images/car09.min.jpg","rentPerDay":1000000,"capacity":6,"description":" Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Extended Cab Pickup","year":2012,},
      {"id":"6dfa349e-631c-46c0-a037-5c73902ff738","plate":"TJW-7622","manufacture":"BMW","model":"X5","image":"./images/car10.min.jpg","rentPerDay":300000,"capacity":6,"description":" Cargo compartment lamp. Body color fascias w/bright insert. Front/rear stabilizer bars.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Manual","available":true,"type":"Hatchback","year":2019,},
      {"id":"803593fb-b857-4a01-adc4-651538217a04","plate":"YND-1892","manufacture":"Chevy","model":"Malibu","image":"./images/car11.min.jpg","rentPerDay":700000,"capacity":2,"description":" Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Coupe","year":2019,},
      {"id":"e0a96736-a2d5-40ca-87de-64b59cac85d8","plate":"FZQ-1989","manufacture":"BMW","model":"X3","image":"./images/car12.min.jpg","rentPerDay":800000,"capacity":4,"description":" Multi-reflector halogen headlamps. Speed control.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":true,"type":"Passenger Van","year":2018,},
      {"id":"e39f2965-57da-4d8f-afdb-74f6c54e69f0","plate":"GAG-1943","manufacture":"Chevy","model":"Malibu","image":"./images/car13.min.jpg","rentPerDay":900000,"capacity":6,"description":" Leather-wrapped shift knob. Dual front illuminated visor vanity mirrors. Battery saver. Driver & front passenger map pockets.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"CVT","available":true,"type":"SUV","year":2017,},
      {"id":"72530cba-051d-49d8-822b-deaf2e5330ca","plate":"JWU-8459","manufacture":"Lincoln","model":"MKS","image":"./images/car15.min.jpg","rentPerDay":900000,"capacity":4,"description":" Remote fuel lid release. Electronic parking brake. Daytime running lights (DRL). Silver finish interior door handles. Back-up camera.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":true,"type":"Regular Cab Pickup","year":2017,},
      {"id":"79cc327b-2b0f-4042-acdf-78386b2f8ebd","plate":"VOS-8183","manufacture":"Chevy","model":"Silverado","image":"./images/car16.min.jpg","rentPerDay":200000,"capacity":6,"description":" Rear window defroster. High performance suspension. 1.8L DOHC 16-valve I4 engine -inc: engine cover.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":true,"type":"Convertible","year":2021,},
      {"id":"22c969a7-04ce-4efb-a479-7ab3bc094cb9","plate":"ENW-7713","manufacture":"Lincoln","model":"MKS","image":"./images/car17.min.jpg","rentPerDay":1000000,"capacity":2,"description":" Energy absorbing steering column. 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automanual","available":false,"type":"Regular Cab Pickup","year":2015,},
      {"id":"1bfda124-5175-4b90-bee7-d66affdbcc66","plate":"TPM-8174","manufacture":"Dodge","model":"Ram","image":"./images/car18.min.jpg","rentPerDay":700000,"capacity":6,"description":" 3-point ELR/ALR front passenger seat belt w/pretensioner & load limiter. Rear passenger map pockets. Black roof molding.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"CVT","available":false,"type":"Sedan","year":2014,},
      {"id":"08cbd537-497f-4305-b7b4-e7493c703a2c","plate":"ZAG-8112","manufacture":"Ford","model":"F150","image":"./images/car19.min.jpg","rentPerDay":600000,"capacity":6,"description":"","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Convertible","year":2021,},
      {"id":"950575d6-958c-422e-a46b-c3ed2e1315ed","plate":"MRQ-2982","manufacture":"Audi","model":"A4","image":"./images/car20.min.jpg","rentPerDay":700000,"capacity":6,"description":" Pwr accessory delay. Tire pressure monitoring system (TPMS). Tilt/telescoping steering column.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Crew Cab Pickup","year":2012,},
      {"id":"b89117fc-69e1-4366-ba21-9d6a0b2bfb04","plate":"ACT-6027","manufacture":"Dodge","model":"Durango","image":"./images/car21.min.jpg","rentPerDay":400000,"capacity":6,"description":" Floor carpeting. Electric speed-sensitive variable-assist pwr steering. Dana 44/226mm rear axle. Roof mounted antenna.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Manual","available":false,"type":"SUV","year":2013,},
      {"id":"432d9ed1-e330-4953-ac33-f51a60a5799b","plate":"OAI-9575","manufacture":"Toyota","model":"Camry","image":"./images/car23.min.jpg","rentPerDay":200000,"capacity":6,"description":" Intermittent rear wiper w/washer. Energy absorbing front/rear bumpers. Engine mounts -inc: (2) solid, (1) liquid-filled.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Extended Cab Pickup","year":2022,},
      {"id":"32e7e56f-1a00-455f-bf4b-dbd2c8c4daaf","plate":"NHI-3883","manufacture":"Nissan","model":"Pathfiner","image":"./images/car24.min.jpg","rentPerDay":600000,"capacity":6,"description":" 200mm front axle. Roof mounted antenna. Cargo compartment cover. Rear bench seat -inc: (3) adjustable headrests.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"Automatic","available":false,"type":"Sedan","year":2022,},
      {"id":"e76e884b-8f3e-4b90-a717-9239676d0191","plate":"IDN-5442","manufacture":"Honda","model":"Civic","image":"./images/car25.min.jpg","rentPerDay":1000000,"capacity":2,"description":" Electric speed-sensitive variable-assist pwr steering. Steel side-door impact beams. Dual bright exhaust tips.","availableAt":"2022-03-23T15:49:05.563Z","transmission":"CVT","available":false,"type":"Wagon","year":2015,}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
