document.write("<table>");
for(let i=1;i<=10;i++)
{
    if(i%2!=0)
    {
        document.write("<tr>")
        for(let j=1;j<=10;j++)
        {
            let mul=i*j
            document.write(`<td>${j} * ${i} = ${mul}</td>`)
        }
        document.write("</tr>")
    }

    else{
        document.write("<tr id='black'>")
          for(let j=1;j<=10;j++)
           {
                let mul=i*j
                 document.write(`<td>${j} * ${i} = ${mul}</td>`)
           }
        document.write("</tr>")
    }
}
document.write("</table>");
