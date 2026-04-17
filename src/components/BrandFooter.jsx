import React from 'react'

const BrandFooter = () => {
  return (
    <div>
        <footer className="bg-[#00aeef] text-white py-12 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1. Katalog qismi */}
        <div>
          <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">КАТАЛОГ ТОВАРОВ</h3>
          <ul className="space-y-2 text-xs uppercase opacity-90">
            <li><a href="#" className="hover:underline">Кардио тренажеры</a></li>
            <li><a href="#" className="hover:underline">Composite Strength</a></li>
            <li><a href="#" className="hover:underline">True Stretch</a></li>
            <li><a href="#" className="hover:underline">Сайклинг</a></li>
            <li><a href="#" className="hover:underline">Групповые тренировки</a></li>
            <li><a href="#" className="hover:underline">Силовые тренажеры</a></li>
            <li><a href="#" className="hover:underline">Консоли</a></li>
          </ul>
          <p className="mt-6 text-xs font-bold">© TRUE FITNESS</p>
        </div>

        {/* 2. Ma'lumot qismi */}
        <div>
          <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">ИНФОРМАЦИЯ</h3>
          <ul className="space-y-2 text-xs uppercase opacity-90">
            <li><a href="#" className="hover:underline">О бренде</a></li>
            <li><a href="#" className="hover:underline">Преимущества</a></li>
            <li><a href="#" className="hover:underline">Открыть клуб</a></li>
            <li><a href="#" className="hover:underline">Продукции</a></li>
            <li><a href="#" className="hover:underline">Контакты</a></li>
          </ul>
        </div>

        {/* 3. Kontakt qismi */}
        <div>
          <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">КОНТАКТЫ</h3>
          <ul className="space-y-2 text-xs uppercase opacity-90">
            <li><a href="#" className="hover:underline">Политика конфиденциальности</a></li>
            <li><a href="#" className="hover:underline">Контакты</a></li>
          </ul>
        </div>

        {/* 4. Obuna va Ijtimoiy tarmoqlar */}
        <div>
          <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">
            ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ
          </h3>
          
          <div className="flex gap-3 mb-6">
            <input  className="w-full p-2 text-black bg-white outline-none text-xs"  type="email"   placeholder="E-MAIL"  />
            <button className="bg-[#ffff00] text-black px-4 flex items-center justify-center">
              <span className="text-xl font-bold"></span>
            </button>
          </div>

          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:opacity-80 transition-opacity">
               <i className="fab fa-facebook-f"></i> 
               <span className="sr-only">Facebook</span>
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.218.96.478 1.382.9.422.422.682.82.9 1.382.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.218.562-.478.96-.9 1.382-.422.422-.82.682-1.382.9-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.218-.96-.478-1.382-.9-.422-.422-.682-.82-.9-1.382-.163-.422-.358-1.057-.412-2.227-.058-1.266-.071-1.646-.071-4.85s.013-3.584.071-4.85c.054-1.17.249-1.805.412-2.227.218-.562.478-.96.9-1.382.422-.422.82-.682 1.382-.9.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-4.78 3.102-4.78 4.78 0 1.28.014 1.688.072 4.947.2 4.358 3.102 4.78 4.78 4.78 1.28 0 1.688-.014 4.947-.072 4.358-.2 4.78-3.102 4.78-4.78 0-1.28-.014-1.688-.072-4.947-.2-4.358-3.102-4.78-4.78-4.78-1.28 0-1.688.014-4.947.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
               <svg className="w-6 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default BrandFooter