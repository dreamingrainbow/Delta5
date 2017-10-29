function delta5( passPhraseDirty, message, mode='encrypt',level=5)
{
    let passPhraseSplit = [];
    let messageEn = [];
    let messageDe = [];

    passPhraseSplit.push(passPhraseDirty.substr(0,passPhraseDirty.length/2));    
    passPhraseSplit.push(passPhraseDirty.substr(passPhraseDirty.length/2));

    if(message === undefined)
    {
        return false;
    }

    en = function(m, l){
        let e = [];
        for( var i=0; i < m.length; i++)
        {
            e.push( ( String.fromCharCode(m[i].charCodeAt(0) + l) ) );
        }
        return e;
    };
    
    if(mode.substr(0,1) === 'd')
    {
        x = function(ph1,ph2, le)
        {
            i = [];
            let passPhraseDrip = en(ph1, le);
            let passPhraseDrizzle = en(ph2, le);
            i.push(passPhraseDrip);
            i.push(passPhraseDrizzle)
            return i;
        }

        y = function(a,b,l, m)
        {
            /* Start Level 1 */
            l1ph = x(a,b,l); 
            if((l1ph[0].join('')).substr(0,l1ph[0].length) === m.substr(0,l1ph[0].length))
            {
                p1x = m.substr(l1ph[0].length);
                p1x= p1x.substr(0,p1x.length - l1ph[0].length);
            }
            /* go down 1 level */
            let e = [];
            for( var i=0; i < p1x.length; i++)
            {
                e.push( ( String.fromCharCode(p1x[i].charCodeAt(0) - l) ) );
            }
            return e.join('');
        };

        var  word = '';
        function loop (me, i)
        {
            for(i=1;i<=5;i++)
            {
                if (i==5)
                {
                    return y(passPhraseSplit[0],passPhraseSplit[1],i, me);
                }
                else
                {
                    me = y(passPhraseSplit[0],passPhraseSplit[1],i, me);
                }
            }
        }
        return loop(message);
    }


    messageEn = en(message, level);
    let passPhraseDrip = en(passPhraseSplit[0], level);
    let passPhraseDrizzle = en(passPhraseSplit[1], level);
    if(level === 1)
    {
        return passPhraseDrip.join('') + messageEn.join('') + passPhraseDrizzle.join('');
    }
    else if (level > 1)
    {
        l = level -1;
        return delta5(passPhraseDirty,  passPhraseDrip.join('') + messageEn.join('') + passPhraseDrizzle.join(''), 'e', l);
    }
}