// const Home = () => {
//     const [user, setUser] = useState(null);
//     const [nutriments, setNutriments] = useState(null);

//     useEffect(() => {
//         getUser(1).then(({user, nutriment}) => {
//             setUser(user);
//             setNutriments(nutriment);
//         });
//     }, []);

//     if (!user || !nutriments) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Bonjour {user.fullName}</h1>
//             <h2>Score: {user.getPercentScore}</h2>
//             <ul>
//                 {nutriments.map(nutriment => (
//                     <li key={nutriment.key}>
//                         {nutriment.nutriment}: {nutriment.value} {nutriment.unit}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Home;