class Component {

    static list = [];

    static init(cars) {
        this.list = cars.map((car) => new this(car));
    }

    constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
        return `<div class='col-lg-4 p-2'>
        <div class="card rounded-3 overflow-hidden">
            <img src="${this.image}" alt="" height="200">
            <div class="card-body shadow">
                <h3 class="fs-6">Nama/Tipe Mobil</h3>
                <h3 class="fs-5 fw-bold">Rp. ${this.rentPerDay} / hari</h3>${this.description}</p>
                <div style="list-style: none; margin-top: -15px;">
                    <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                        <img src="./assets/images/fi_users.png" width="22">
                        <p style="margin-top: 12px;">${this.capacity} Orang</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                        <img src="./assets/images/fi_settings.png" width="22">
                        <p style="margin-top: 12px;">${this.transmission}</p>
                    </div>
                    <div class="d-flex gap-2 align-items-center" style="margin-bottom: -15px;">
                        <img src="./assets/images/fi_calendar.png" width="22">
                        <p style="margin-top: 12px;">Tahun ${this.year}</p>
                    </div>
                </div>
                <button class="col-lg-12 mt-4 btn-register border-0 text-white fw-bold">Pilih Mobil</button>
            </div>
        </div>
        </div>`;
    }
}