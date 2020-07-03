import React, { useEffect, useState } from 'react';
import './homepage.styles.css';
import Section from '../../components/section/section.component';
import { db } from '../../firebase/firebase.utils';

const HomePage = () => { 
    const [data, setData] = useState(null);

    useEffect(() => {
        let pageUnsubscribe;
        try {
            const pageRef = db.doc('pages/znNjpMNznVI6cO9D96Ix');
            pageUnsubscribe = pageRef.onSnapshot(snapshot => {
              if(!snapshot.exists) return;
              const { data } = snapshot.data();
              setData(data);
            });
          } catch(err) {
            console.log('Failed to retrieve page data from storage:', err);
          }

          return () => pageUnsubscribe();
        }, []);

    if (data) {
        return (
            <div className='homepage'>
                <Section { ...data.plants}/>
                <Section { ...data.gift}/>
                <Section { ...data.accessories}/> 
            </div>
        );
    } else {
        return <div className='homepage'/>
    }
}

export default HomePage;