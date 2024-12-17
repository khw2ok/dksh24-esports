<!--
<header class="p-2 border-b">
  <div class="flex justify-between p-1 mx-auto" style="max-width: 800px;">
    <a href="?">DKSH24 eSports Tournaments Official</a>
    <span>By @khw2ok (10308 김형욱)</span>
  </div>
</header>

<div class="p-2 border-b">
  <div class="flex justify-between mx-auto" style="max-width: 800px;">
    <button>홈</button>
    <button class="">계정</button>
  </div>
</div>

<div class="absolute w-full h-full -z-10 bg-neutral-50"></div>

<div class="mb-4 sm:mb-6"></div> -->

<script>
  function toggleTheme() {
    document.body.classList.toggle("dark")
  }

  // window.onload = function() {
  //   updateData();
  // };
  // function updateData() {
  //   return;
  // }
</script>

<header class="p-4 mx-auto" style="max-width: 800px;">
  <div class="flex justify-between">
    <div class="flex items-center gap-x-1">
      <!-- <img src="favicon.png" alt="" style="height: 25px;"> -->
      <span class="font-light text-neutral-500 dark:text-neutral-300">Managed by <a class="underline hover:text-red-500 dark:hover:text-red-300" href="https://github.com/khw2ok/dksh24-esports">@khw2ok</a> (10308 김형욱)</span>
    </div>
    <button class="p-1 opacity-75" onclick={toggleTheme} aria-label="theme_toggle">
      <svg class="block dark:hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
      <svg class="hidden dark:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
    </button>
  </div>
</header>

<div class="px-4 pb-4 mx-auto text-sm font-light bg-white sm:p-4 dark:text-white dark:bg-neutral-950 sm:text-base" style="max-width: 800px;">
  <div class="grid gap-y-2">
    <h1 class="text-4xl font-bold">DKSH24 eSports Information</h1>
    <span class="text-lg text-neutral-500 dark:text-neutral-300">Last modified on December 17, 2024</span>
  </div>
  <hr class="my-3 border-b dark:border-b-neutral-950">
  <div class="grid gap-y-2">
    <span class="text-lg">이 곳은 단대소고 2024 e스포츠 대회 정보 사이트입니다.</span>
  </div>
  <div class="mb-3"></div>
  <div class="grid justify-center gap-y-1">
    <span class="text-center text-neutral-500 dark:text-neutral-300">리그오브레전드</span>
    <div class="flex w-40 p-3 border rounded-md justify-self-center dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
      <div class="grid items-center basis-1/4">
        <span class="text-xl font-medium">1-5</span>
        <span>0</span>
      </div>
      <div class="grid items-center text-center basis-1/2">
        <span class="text-xl">vs</span>
      </div>
      <div class="grid items-center basis-1/4 text-end">
        <span class="text-xl font-medium">2-4</span>
        <span>0</span>
      </div>
    </div>
    <div class="mb-2"></div>
    <span class="text-center text-neutral-500 dark:text-neutral-300">발로란트</span>
    <div class="flex w-40 p-3 border rounded-md justify-self-center dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
      <div class="grid items-center basis-1/4">
        <span class="text-xl font-medium">2-1</span>
        <span>0</span>
      </div>
      <div class="grid items-center text-center basis-1/2">
        <span class="text-xl">vs</span>
      </div>
      <div class="grid items-center basis-1/4 text-end">
        <span class="text-xl font-medium">1-1</span>
        <span>0</span>
      </div>
    </div>
  </div>
  <div class="mb-4"></div>
  <div>
    <span class="dark:text-neutral-300">리그오브레전드</span>
    <h2 class="text-2xl font-medium">경기 대진표</h2>
  </div>
  <div class="mb-3"></div>
  <div id="bracket1" class="relative flex justify-center text-black border rounded-md dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
    <div class="flex px-4 py-2 overflow-auto scroll-auto">
      <!-- one start -->
      <div class="column">
        <div class="match">
          <div class="team">
            <span class="name">1-3</span>
            <span class="score">24</span>
          </div>
          <div class="team">
            <span class="name">1-4</span>
            <span class="score">21</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">1-1</span>
            <span class="score">0</span>
          </div>
          <div class="team">
            <span class="name">1-2</span>
            <span class="score">기권</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">2-1</span>
            <span class="score">몰수패</span>
          </div>
          <div class="team">
            <span class="name">2-2</span>
            <span class="score">0</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <!-- <div class="line2-up"></div> -->
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">1-5</span>
            <span class="score">37</span>
          </div>
          <div class="team">
            <span class="name">2-3</span>
            <span class="score">11</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match !h-8">
          <div class="team">
            <span class="name">2-4</span>
            <span class="score"></span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- two start -->
      <div class="column" style="padding-top: 35px; padding-bottom: 3px;">
        <div class="match">
          <div class="team">
            <span class="name">1-3</span>
            <span class="score">0</span>
          </div>
          <div class="team">
            <span class="name">1-1</span>
            <span class="score">0</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <!-- <div class="line2-up"></div> -->
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match !h-8">
          <!-- <div class="team">
            <span class="name"></span>
            <span class="score"></span>
          </div> -->
          <div class="absolute w-24 top-1/2 line3"></div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team team-sel1">
            <span class="name">1-5</span>
            <span class="score">0</span>
          </div>
          <div class="team team-sel1">
            <span class="name">2-4</span>
            <span class="score">0</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- three start -->
      <div class="column">
        <div class="match">
          <div class="absolute w-24 top-1/2 line3"></div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">2-2</span>
            <span class="score">0</span>
          </div>
          <div class="team team-sel2">
            <span class="name"></span>
            <span class="score"></span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- four start -->
      <div class="column">
      <div class="match">
        <div class="team">
          <span class="name"></span>
          <span class="score"></span>
        </div>
        <div class="team">
          <span class="name"></span>
          <span class="score"></span>
        </div>
        <div class="match-lines">
          <div class="line1"></div>
          <!-- <div class="line2-down"></div> -->
        </div>
        <div class="match-lines alt">
          <div class="line1"></div>
        </div>
      </div>
      </div>
      <!-- five start -->
      <div class="column">
        <div class="match !h-8">
          <div class="team">
            <span class="name"></span>
            <span class="score"></span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <input type="checkbox" id="bracket-toggle" class="absolute left-0 flex m-2 accent-red-500"> -->
  </div>
  <div class="mb-4"></div>
  <div>
    <span class="dark:text-neutral-300">발로란트</span>
    <h2 class="text-2xl font-medium">경기 대진표</h2>
  </div>
  <div class="mb-3"></div>
  <div id="bracket2" class="relative flex justify-center text-black border rounded-md dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
    <div class="flex px-4 py-2 overflow-auto scroll-auto">
      <!-- one start -->
      <div class="column">
        <div class="match">
          <div class="team">
            <span class="name">2-1</span>
            <span class="score">3</span>
          </div>
          <div class="team">
            <span class="name">2-4</span>
            <span class="score">13</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">1-1</span>
            <span class="score">0</span>
          </div>
          <div class="team">
            <span class="name">1-2</span>
            <span class="score">기권</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">1-3</span>
            <span class="score">9</span>
          </div>
          <div class="team">
            <span class="name">2-5</span>
            <span class="score">13</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">1-5</span>
            <span class="score">6</span>
          </div>
          <div class="team">
            <span class="name">2-2</span>
            <span class="score">13</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- two start -->
      <div class="column">
        <div class="match">
          <div class="team team-sel1">
            <span class="name">2-1</span>
            <span class="score">0</span>
          </div>
          <div class="team team-sel1">
            <span class="name">1-1</span>
            <span class="score">0</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
        <div class="match">
          <div class="team">
            <span class="name">2-5</span>
            <span class="score">0</span>
          </div>
          <div class="team">
            <span class="name">2-2</span>
            <span class="score">0</span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-up"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- three start -->
      <div class="column">
        <div class="match">
          <div class="team team-sel2">
            <span class="name"></span>
            <span class="score"></span>
          </div>
          <div class="team">
            <span class="name"></span>
            <span class="score"></span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <!-- <div class="line2-up"></div> -->
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
      <!-- four start -->
      <div class="column">
        <div class="match !h-8">
          <div class="team">
            <span class="name"></span>
            <span class="score"></span>
          </div>
          <div class="match-lines">
            <div class="line1"></div>
            <div class="line2-down"></div>
          </div>
          <div class="match-lines alt">
            <div class="line1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <input type="checkbox" id="bracket-toggle" class="absolute left-0 flex m-2 accent-red-500"> -->
  </div>
  <div class="mb-4"></div>
  <div>
    <span class="dark:text-neutral-300">전체</span>
    <h2 class="text-2xl font-medium">경기 시간표</h2>
  </div>
  <div class="mb-4"></div>
  <div class="overflow-scroll border rounded-md scroll-auto dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
    <table class="w-full">
      <thead class="border-b bg-neutral-50 dark:bg-neutral-800 dark:border-b-neutral-700">
        <tr>
          <th class="p-2" colspan="2">날짜</th>
          <th>리그오브레전드</th>
          <th>발로란트</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-neutral-900">
        <tr>
          <th rowspan="2">12/16 (월)</th>
          <td>오전</td>
          <td colspan="2">대회 점검</td>
        </tr>
        <tr>
          <td>오후</td>
          <td>
            <span>1-3 vs 1-4</span>
            <br>
            <span class="line-through">1-1 vs 1-2</span>
          </td>
          <td>
            <span>2-1 vs 2-4</span>
            <br>
            <span class="line-through">1-1 vs 1-2</span></td>
        </tr>
        <tr>
          <th rowspan="2">12/17 (화)</th>
          <td>오전</td>
          <td>2-1 vs 2-2</td>
          <td>1-3 vs 2-5</td>
        </tr>
        <tr>
          <td>오후</td>
          <td>1-5 vs 2-3</td>
          <td>1-5 vs 2-2</td>
        </tr>
        <tr>
          <th rowspan="2">12/18 (수)</th>
          <td>오전</td>
          <td>1-5 vs 2-4</td>
          <td>2-4 vs 1-1</td>
        </tr>
        <tr>
          <td>오후</td>
          <td>1-3 vs 1-1</td>
          <td>2-5 vs 2-2</td>
        </tr>
        <tr>
          <th rowspan="2">12/19 (목)</th>
          <td>오전</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>오후</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- <footer class="absolute p-4 mx-auto bg-white border-t" style="max-width: 1000px;"></footer> -->
