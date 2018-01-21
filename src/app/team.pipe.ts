import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'TeamPipe',
})

export class TeamPipe implements PipeTransform {
    transform(items: any[], teamsearch: string){
        if (items && items.length){
            return items.filter(item =>{
               
				
				
				if (teamsearch && item.toLowerCase().indexOf(teamsearch.toLowerCase()) === -1) {
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