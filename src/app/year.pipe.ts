import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'YearPipe',
})

export class YearPipe implements PipeTransform {
    transform(items: any[], yearsearch: string){
        if (items && items.length){
            return items.filter(item =>{
               
				
				
				if ((yearsearch && item.name.toLowerCase().indexOf(yearsearch.toLowerCase()) === -1) &&  (yearsearch && item.name.toLowerCase().indexOf(yearsearch.toLowerCase()) === -1)){
                    return false;
                }
                
                
				
                return true;
           })
        }
        else{
            return items;
        }
    }
}