import React from 'react'

function Child({ onclick }: any) {

    console.log('Child component rendered')
    return <button onClick={onclick}>Click Me</button>
}

export default Child



// React Memorize
//1. React.memo komponenti tamamen aynı props ile tekrar render edildiğinde, React’in bu komponenti tekrar render etmesini engellemek için kullanılır.
//2. useMemo komponent içerisindeki hesaplamaları tekrar tekrar yapmamak için kullanılır. Fonksiyon return değerini memorize eder.
//3. useCallback fonksiyonun kendisini memorize eder. Fonksiyon referansını memorize eder.