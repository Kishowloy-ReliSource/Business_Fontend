import React from 'react'

export default function admin(props) {
  return (
    <div>
        
        <h1> admins</h1>

        {
            props.admins.map((ad)=> {
                return <div>
                    <h2>
                        {ad.email}
                    </h2>

                    <h2>
                        {ad.pass}
                    </h2>

                </div>
            })
        }

    </div>
  )
}

