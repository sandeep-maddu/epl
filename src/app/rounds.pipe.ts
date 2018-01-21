import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'RoundsPipe',
})

export class RoundsPipe implements PipeTransform {
    transform(items: any[], roundssearch: string){
        if (items && items.length){
            return items.filter(item =>{
               
				
				
				if ((roundssearch && item.name.toLowerCase().indexOf(roundssearch.toLowerCase()) === -1) &&  (roundssearch && item.name.toLowerCase().indexOf(roundssearch.toLowerCase()) === -1)){
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