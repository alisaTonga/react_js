// 1. импорт сторонних файлов в компонент
import './App.css';

// 2. сам компонент - функция, возвращающая шаблон верстки
function App() {
  return (
    <main>
    <header >
      <h1 id='My_name'>Alisa Tongaliuk</h1>
      <img id='pct_panda' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a246d927-7c0a-4437-ac34-e2db2a290e87/dglpnjj-3d9bb77f-af7a-4bb2-b834-fe5f92764d13.jpg/v1/fit/w_828,h_1242,q_70,strp/cute_panda_in_pond_by_lehoangkimlong_dglpnjj-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyNDZkOTI3LTdjMGEtNDQzNy1hYzM0LWUyZGIyYTI5MGU4N1wvZGdscG5qai0zZDliYjc3Zi1hZjdhLTRiYjItYjgzNC1mZTVmOTI3NjRkMTMuanBnIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTI0NmQ5MjctN2MwYS00NDM3LWFjMzQtZTJkYjJhMjkwZTg3XC9sZWhvYW5na2ltbG9uZy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ._qnSJ2kXmBz7jjOEtXSe0zD8vg4K0ggtdlBl7HXe9U8"  alt="cute"/>

    </header>
        <div className="App">
      <h1>Hello, React! 🚀</h1> 
    </div>
        <div id='hobbies'>
        <p>My hobbies: </p>
        <ul type="square">
            <li>Watching movies with spanish subtitles</li>
            <li>Learning programming</li>
            <li>Cooking</li>
            <li>Fly yoga</li>
            <li>Listening music</li>
            <li>Learning foreign languages</li> 
        </ul>
        </div>
    </main>

  );
}

// экспорт компонента для связи с другими компонентами
export default App;
