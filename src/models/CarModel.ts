import { DateType, Model} from './../models/Model';

export type CarType = {
    id: number;
    name: string;
    size: string;
    rent_per_day: number;
    img_id: string;
    img_url: string;
};

export class CarModel extends Model {
    static tableName = 'cars';
    public static async create<Payload>(data: Payload): Promise<CarType & DateType> {
        return super.insert<Payload, CarType>({
            ...data,
        });
    }

    public static findBySize(size: string): Promise<CarType> {
        return this.findBy<
            {
                size: string;
            },
            CarType
        >({ size });
    }
}