import {Component} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent{
  
    roomcount: number = 1;
    adultcount: number = 1;
    childcount: number = 0;
    totalcount: number = 0;

    isDisabled: boolean = false;
  

    //Increment
    RoomIncrement(){

      this.roomcount++;
      this.DisableCount();
    }
    AdultIncrement(){
        this.adultcount++;
        this.DisableCount1();
    }
    ChildIncrement(){
       this.childcount++;
       this.DisableCount1();
    }

    //Decrement
    RoomDecrement(){
        this.roomcount--; 
      
    }
    AdultDecrement(){
        this.adultcount--; 
    }
    ChildDecrement(){
        this.childcount--; 
    }

    DisableCount(){
        
        ((this.roomcount > 5) ? (this.isDisabled = true,this.roomcount = 1, this.adultcount = 1) : (this.roomcount, this.adultcount++) );
  
    }

    // DisableCount1(){
    //     ((this.roomcount) && (this.adultcount >  this.roomcount * 4) ? this.isDisabled = true : this.adultcount));
    // }



    DisableCount1(){
      this.totalcount = this.adultcount + this.childcount;
      
      (((this.roomcount) && (this.totalcount >  this.roomcount * 4)) ? this.isDisabled = true : '');

    }


}