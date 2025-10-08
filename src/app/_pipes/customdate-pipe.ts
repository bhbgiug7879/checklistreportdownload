import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { ITABLE_MODAL } from "../interface/table-interface";

@Pipe({
    name: 'customDataPipe'
})

export class CustomDataPipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {
    }

    transform(data: any, model: ITABLE_MODAL): string {

        const string = this.getData(data, model);

        if (string && model.type) {
            switch (model.type) {
                case 'date':
                    return this.datePipe.transform(string, 'yyyy-MM-dd') || string;

                case 'dateTime':
                    return this.datePipe.transform(string, 'yyyy-MM-dd - h:mm a') || string;

                case 'boolean':
                    let booleanValue
                    if (model && model.modal && model.modal.length == 2) {
                        booleanValue = string.toString() == 'true' ? model.modal[1] : model.modal[0];
                    } else {
                        booleanValue = string.toString() == 'true' ? 'Active' : 'Deactive';
                    }
                    return booleanValue;

                case 'percentage':
                    return string + '%';

                case 'discount':
                    return data.discount_type == 'percentage' ? (string + '%') : ('Rs.' + string);

                case 'enum':
                    let value;
                    if (model && model.modal && model.modal[Number(string)]) {
                        value = model.modal[Number(string)];
                    } else {
                        value = 'NA';
                    }
                    return value;

                default:
                    return string
            }
        }

        return string
    }


    getData(data: any, model: ITABLE_MODAL): string {
        if (Array.isArray(data)) {
            let string = '';
            data.map((x: any) => {
                string = string + this.getPropertyValue(x, model.propertyPath) + ', '
            });
            if (string) {
                if (string.endsWith(', ')) {
                    return string.slice(0, -2); // Remove the last character (comma)
                } else {
                    return string
                }
            }
        } else if (typeof data === 'object') {

            return this.getPropertyValue(data, model.propertyPath);

        } else {
            return data;
        }

        return 'NA'
    }

    getPropertyValue(obj: any, propertyPath?: string): any {
        const properties = propertyPath ? propertyPath.split('.') : '';
        let value = obj;

        for (const prop of properties) {
            if (value?.hasOwnProperty(prop)) {
                value = value[prop];
            } else {
                return undefined; // Property not found, handle as per your requirement.
            }
        }

        return value;
    }
}