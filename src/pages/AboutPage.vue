<template>
  <CardComponent label="Translation.Gallery - Адрес для корреспонденции">
    <table>
      <tr>
        <td>Tel./ Fax:	</td>
        <td>+50767996877</td>
      </tr>
      <tr>
        <td>E-mail:	</td>
        <td>
          <a href="mailto:public@translation.gallery">public@translation.gallery</a>
        </td>
      </tr>
      <tr>
        <td>Mailing address:	</td>
        <td>
          Ideas Networks Solutions S.A.<br>
          PH Grand Tower, Torre B, local 13i, Punta Pacifica, San Francisco, Panama City, Panama
        </td>
      </tr>
    </table>
    <div style="margin-top: 24px">
      <p class="bold">Translation.Gallery</p>
      <p class="bold">Делает мир ближе!</p>
    </div>
  </CardComponent>
</template>

<script>
import CardComponent from "@/components/CardComponent";
export default {
  name: "AboutPage",
  components: {CardComponent}
}
</script>

<style scoped>
a:hover {
  color: #979797;
}
</style>
