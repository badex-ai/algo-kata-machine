export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let h = haystack.length;
    do{
        let m ;
      
        let v;

        m= Math.floor(l + ((h-l)/2))

         v = haystack[m];

         if( v === needle){
            return true
         }else if ( v > needle){
            h = m
         }else{
            l = m + 1
         }

    }while (l < h)

    return false
}